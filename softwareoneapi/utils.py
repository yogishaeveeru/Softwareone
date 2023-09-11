from django.core.mail import send_mail
import random
from django.conf import settings
import boto3

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

def get_ec2_connection(customer):
    ec2_client = boto3.client(
        "ec2",
        aws_access_key_id=customer["access_key"],
        aws_secret_access_key=customer["secret_key"],
        region_name="ap-south-1"
    )
    return ec2_client