from django.shortcuts import render,redirect
# from .forms import CreateUserForm
from django.contrib import messages
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from softwareoneapi.utils import otp_send
from softwareoneauth.models import OneappUser
from django.views.decorators.csrf import csrf_exempt
from softwareoneui.mixins import LoginRequiredMixin
from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from django.views.generic import TemplateView

# Create your views here.

class LoginView(TemplateView):
    template_name = "login.html"

    @method_decorator(never_cache)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

class profileView(TemplateView):
    template_name = "profile.html"

# @csrf_exempt
# def base(request):
#     return render(request,'base.html')

# @login_required(login_url='login')

# def profile(request):
#     return render(request,'profile.html',{"user":request.user})

def log_out(request):
    logout(request)
    return redirect('login')
    
# firstname=''
# lastname=''
# email=''
# otp=''

def registration(request):
    return render(request,'registration.html',{})

# def verifyotp(request):
#     global firstname,lastname,email,otp
#     if request.method=='POST':
#         firstname=request.POST.get('first_name')
#         lastname=request.POST.get('last_name')
#         email=request.POST.get('email')
#         otp=otp_send(email)
#         return render(request,'next.html',{'email':email})
#     else:
#         return redirect('regdisp')


# def password(request):
#     userotp=request.POST.get('otpverif')
#     if int(userotp)==otp:
#         return render(request,'password.html',{})
#     else:
#         messages.info(request,'Invalid otp')
#         return render(request,'next.html',{})

# def userRegister(request):
#     if request.method=='POST':
#         password1=request.POST.get('password1')
#         password2=request.POST.get('password2')
#         if password1==password2:
#             user=OneappUser(first_name=firstname,last_name=lastname,email=email,password=password1,username=email,is_staff=True)
#             user.save()
#             messages.success(request,'Registration successful')
#             return redirect('login')
#         else:
#             messages.info(request,'Password didnot match')
#             return render(request,'password.html',{})


# Dummy Rendering 
# def profile_main(request):
#     return render(request,'profile.html')    

def aws(request):
    return render(request,'aws.html')

def vpc(request):
    return render(request,'vpc.html')

def ec2(request):
    return render(request,'ec2.html')


class S3View(TemplateView):
    template_name = "s3.html"
    
def report(request):
    return render(request,'report.html')