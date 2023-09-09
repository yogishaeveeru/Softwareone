from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('',include('softwareoneui.urls')),
    path('admin/', admin.site.urls),
    path("auth/", include("softwareoneauth.urls", namespace="auth")),
    path('api/',include('softwareoneapi.urls', namespace="api")),
]