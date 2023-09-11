from softwareoneui import views
from django.urls import path

urlpatterns = [
    # path('base/',views.base,name='base'),
    path("", views.LoginView.as_view(), name="login"),
    path('myaccount/',views.profileView.as_view(),name='profile'),
    # path('',views.log_in,name='login'),
    path('registration/',views.registration,name='registration'),
    # path('registration/verifyotp/',views.verifyotp,name='verifyotp'),
    # path('registration/verifyotp/password/',views.password,name='password'),
    # path('registration/verifyotp/password/Error/',views.userRegister,name='userRegister'),
    path('logout/',views.log_out,name='logout'),
    path('myaccount/aws/',views.aws,name='aws'),
    path('myaccount/vpc/',views.VPCView.as_view(),name='vpc'),
    path('myaccount/ec2/',views.ec2,name='ec2'),
    path('myaccount/s3/',views.S3View.as_view(),name='s3'),
    path('myaccount/report/',views.report,name='report')
]