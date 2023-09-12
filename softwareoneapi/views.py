from rest_framework import exceptions, status
import io
from rest_framework.response import Response
from rest_framework.views import APIView
from botocore.exceptions import NoCredentialsError
from softwareoneapi.viewsets import (
    ActionSerializerMixin,
    BaseModelViewset,
    BaseViewset,
    ListRetrieveViewset,
    ListViewset,
    RetrieveViewset,
)
from rest_framework.decorators import action
from softwareoneapi.models import Customer
from softwareoneapi.serializers import CustomerSerializer, ListCustomerSerializer
from softwareoneapi.access_policy import CustomerAccessPolicy
from softwareoneapi.utils import get_s3_connection, get_ec2_connection, create_vpc_and_subnets

class BaseCreateAPIView(APIView):
    """
    Base class for post endpoint.
    """

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class CustomerViewSet(ActionSerializerMixin,BaseModelViewset):
    access_policy = CustomerAccessPolicy
    queryset = Customer.objects.values()
    model=Customer
    serializer_class = CustomerSerializer
    search_fields = ["username"]
    ordering = ["username"]
    actions_serializer_class = {
        "list": ListCustomerSerializer,
        "retrieve":CustomerSerializer
    }
    def get_queryset(self):
        actions = {
            "list": self.queryset.values(
                "id",
                "username"
            ),
        }
        return self.access_policy.scope_queryset(self.request, actions.get(self.action, self.queryset))

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


    @action(detail=True, methods=["get"], url_path="get-files")
    def get_files(self, request, pk=None):
        """
        Used to fetch files
        """
        customer = self.get_object()
        s3_client = get_s3_connection(customer)
        bucket_name = request.query_params.get("bucket_name")
        key = request.query_params.get("key")
        if key:
            url = s3_client.generate_presigned_url(
                'get_object',
                Params={'Bucket': bucket_name, 'Key': key},
                ExpiresIn=3600,
            )
            return Response({"url":url})
        response_data = []
        paginator = s3_client.get_paginator('list_objects_v2')
        page_iterator = paginator.paginate(Bucket=bucket_name)
        count=1
        for page in page_iterator:
            for obj in page.get('Contents', []):
                    if not obj['Key'].endswith('/'):
                        response_data.append({"id":count,"file_name":obj['Key']})
                        count+=1
        search = request.query_params.get("search")
        if search:
            response_data = [item for item in response_data if search in item["file_name"].split("/")[-1]] 
        page=self.paginate_queryset(response_data)
        return self.get_paginated_response(page)
    
    @action(detail=True, methods=["get"], url_path="get-buckets")
    def get_buckets(self, request, pk=None):
        """
        Used to fetch buckets list
        """
        customer = self.get_object()
        s3_client = get_s3_connection(customer)
        response = s3_client.list_buckets()
        search = request.query_params.get("search")
        count = 1
        bucket_names =[]
        for bucket in response['Buckets']:
            bucket_names.append({"id":count,"name":bucket['Name']})
            count+=1
        if search:
            bucket_names = [bucket for bucket in bucket_names if search in bucket["name"]]
        page=self.paginate_queryset(bucket_names)
        return self.get_paginated_response(page)
    
    @action(detail=True, methods=["get"], url_path="create-bucket")
    def create_bucket(self, request, pk=None):
        """
        Used to create a bucket
        """
        customer = self.get_object()
        bucket_name = request.query_params.get("bucket_name")
        if not bucket_name:
            raise exceptions.ValidationError({"detail": "Bucket name is required"})
        s3_client = get_s3_connection(customer)
        existing_buckets = s3_client.list_buckets()
        existing_bucket_names = [bucket['Name'] for bucket in existing_buckets['Buckets']]
        if bucket_name in existing_bucket_names:
            raise exceptions.ValidationError({"detail": f"Bucket '{bucket_name}' already exists."})
        try:
        # Create the bucket
            s3_client.create_bucket(Bucket=bucket_name)
            return Response({"detail": f"Bucket '{bucket_name}' created successfully."})
        except NoCredentialsError:
            raise exceptions.ValidationError({'detail': 'AWS credentials are not provided or are invalid'})
        except Exception as error:
            raise exceptions.ValidationError({"detail": str(error)})
    
    @action(detail=True, methods=["post"], url_path="upload-file")
    def upload_file(self, request, pk=None):
        """
        Used to upload a file to bucket
        """
        customer = self.get_object()
        uploaded_file = request.FILES.get('file')
        if not uploaded_file:
            raise exceptions.ValidationError({"detail": "No file uploaded"})
        bucket_name = request.data.get('bucket_name')
        if not bucket_name:
            raise exceptions.ValidationError({"detail": "bucket_name is required"})
        path = request.data.get('path')
        s3_client = get_s3_connection(customer)
        object_key =  path + uploaded_file.name if path else uploaded_file.name

        try:
            file_stream = io.BytesIO(uploaded_file.read())
            s3_client.upload_fileobj(file_stream, bucket_name, object_key)
            return Response({"detail": "File uploaded successfully"})
        except Exception as error:
                raise exceptions.ValidationError({"detail": str(error)})

    @action(detail=True, methods=["get"], url_path="get-regions")
    def get_regions(self, request, pk=None):
        """
        Used to fetch regions list
        """
        customer = self.get_object()
        ec2_client = get_ec2_connection(customer)
        response = ec2_client.describe_regions()
        # regions = regions = [{'id': index + 1, 'name': region['RegionName']} for index, region in enumerate(response['Regions'])]
        regions = regions = [{'id': region['RegionName'], 'name': region['RegionName']} for region in response['Regions']]
        search = request.query_params.get("search")
        if search:
            regions = [region for region in regions if search in region["name"]]
        page=self.paginate_queryset(regions)
        return self.get_paginated_response(page)
    
    @action(detail=True, methods=["post"], url_path="create-vpc")
    def create_vpc(self, request, pk=None):
        """
        Used to create vpc and subnets
        """
        customer = self.get_object()
        data=request.data
        region = data.get("region")
        ec2_client = get_ec2_connection(customer,region=region)
        vpc_id, public_subnet_ids, private_subnet_ids = create_vpc_and_subnets(data, ec2_client)

        return Response({"VPCId": vpc_id, "PublicSubnetIds": public_subnet_ids, "PrivateSubnetIds": private_subnet_ids})