from rest_framework import exceptions, status
from rest_framework.response import Response
from rest_framework.views import APIView
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
from softwareoneapi.utils import get_s3_connection

class BaseCreateAPIView(APIView):
    """
    Base class for post endpoint.
    """

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class CustomerViewSet(ActionSerializerMixin,ListRetrieveViewset):
    access_policy = CustomerAccessPolicy
    queryset = Customer.objects.values()
    model=Customer
    serializer_class = ListCustomerSerializer
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

    @action(detail=True, methods=["get"], url_path="get-files")
    def get_files(self, request, pk=None):
        """
        Used to fetch files
        """
        customer = self.get_object()
        s3_client = get_s3_connection(customer)
        # bucket_name = request.query_params.get("bucket_name")
        bucket_name="gokul3"
        print("bucket_name",bucket_name)
        key = request.query_params.get("key")
        if key:
            url = s3_client.generate_presigned_url(
                'get_object',
                Params={'Bucket': bucket_name, 'Key': key},
                ExpiresIn=3600,
            )
            print("url",url)
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
        Used to create bucket
        """
        customer = self.get_object()
        bucket_name = request.query_params.get("bucket_name")
        if not bucket_name:
            raise exceptions.ValidationError({"detail": "Bucket name is required"})
        s3_client = get_s3_connection(customer)
        try:
            s3_client.head_bucket(Bucket=bucket_name)
            raise exceptions.ValidationError({"detail": f"Bucket '{bucket_name}' already exists."})
        except s3_client.exceptions.NoSuchBucket:
            try:
                s3_client.create_bucket(Bucket=bucket_name)
                return Response({"detail": f"Bucket '{bucket_name}' created successfully."})
            except Exception as error:
                raise exceptions.ValidationError({"detail": str(error)})
            
    @action(detail=True, methods=["get"], url_path="upload-file")
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
        object_key = path + uploaded_file.name
        try:
            with open(uploaded_file, "rb") as file_:
                s3_client.upload_fileobj(file_, bucket_name, object_key)
            return Response({"detail": "File uploaded successfully"})
        except Exception as error:
                raise exceptions.ValidationError({"detail": str(error)})

