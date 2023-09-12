from django.core.mail import send_mail
import random
from django.conf import settings
import boto3
import ipaddress
from rest_framework.response import Response

def otp_send(email):
    subject="Email verification"
    otp=random.randint(100000,999999)
    message=f'Otp for verification is {otp}'
    email_from=settings.EMAIL_HOST
    send_mail(subject,message,email_from,[email])
    return otp

def get_s3_connection(customer):
    s3_client = boto3.client(
        "s3",
        aws_access_key_id=customer["access_key"],
        aws_secret_access_key=customer["secret_key"],
    )
    return s3_client

def get_ec2_connection(customer, region="ap-south-1"):
    ec2_client = boto3.client(
        "ec2",
        aws_access_key_id=customer["access_key"],
        aws_secret_access_key=customer["secret_key"],
        region_name=region
    )
    return ec2_client

def create_vpc_and_subnets(data, ec2_client):
    vpc_name = data.get('vpc')
    cidr_block = data.get('cidr')
    availability_zones = data.getlist('zone[]')
    public_subnet_cidrs = [ data.get('public')] if data.get('public') else []
    private_subnet_cidrs = data.getlist('private[]')
    vpc_id = None
    public_subnet_ids = []
    private_subnet_ids = []
    if cidr_block and vpc_name:
        # Create the VPC
        try:
            vpc_response = ec2_client.create_vpc(
                CidrBlock=cidr_block,
                InstanceTenancy=data.get('tenancy'),
                TagSpecifications=[
                    {
                        'ResourceType': 'vpc',
                        'Tags': [
                            {'Key': 'Name', 'Value': vpc_name},
                        ],
                    },
                ]
            )
            vpc_id = vpc_response['Vpc']['VpcId']

            # Create public subnets
            if public_subnet_cidrs:
                for i, public_subnet_cidr in enumerate(public_subnet_cidrs):
                    try:
                        subnet_response = ec2_client.create_subnet(
                            VpcId=vpc_id,
                            CidrBlock=public_subnet_cidr,
                            AvailabilityZone=availability_zones[i % len(availability_zones)],
                            TagSpecifications=[
                                {
                                    'ResourceType': 'subnet',
                                    'Tags': [
                                        {'Key': 'Name', 'Value': f'{vpc_name}-public-subnet-{i}'},
                                    ],
                                },
                            ]
                        )
                        public_subnet_id = subnet_response['Subnet']['SubnetId']
                        public_subnet_ids.append(public_subnet_id)
                    except Exception as error:
                        public_subnet_ids.append(str(error))
                        continue

            if private_subnet_cidrs:
                # Create private subnets
                for i, private_subnet_cidr in enumerate(private_subnet_cidrs):
                    try:
                        subnet_response = ec2_client.create_subnet(
                            VpcId=vpc_id,
                            CidrBlock=private_subnet_cidr,
                            AvailabilityZone=availability_zones[i % len(availability_zones)],  
                            TagSpecifications=[
                                {
                                    'ResourceType': 'subnet',
                                    'Tags': [
                                        {'Key': 'Name', 'Value': f'{vpc_name}-private-subnet-{i}'},
                                    ],
                                },
                            ]
                        )
                        private_subnet_id = subnet_response['Subnet']['SubnetId']
                        private_subnet_ids.append(private_subnet_id)
                    except Exception as error:
                        private_subnet_ids.append(str(error))
                        continue
            return vpc_id, public_subnet_ids, private_subnet_ids
        except Exception as error:
            vpc_id = str(error)
            return vpc_id, public_subnet_ids, private_subnet_ids

