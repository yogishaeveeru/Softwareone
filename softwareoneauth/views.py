from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView

from softwareoneauth.access_policy import UserAccessPolicy
from softwareoneauth.models import OneappUser
from softwareoneauth.serializers import (
    CheckResetPasswordKeySerializer,
    ForgetPasswordSerializer,
    ResetPasswordSerializer,
    UserProfileSerializer,
    UserSerializer,
)
from softwareoneapi.views import BaseCreateAPIView
from softwareoneapi.viewsets import ListViewset


class LoginTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        # Convert email to lowercase
        request.data["email"] = request.data["email"].lower()
        return super().post(request, *args, **kwargs)

        # mutable_data = request.data.copy()
        # # Convert email to lowercase
        # mutable_data["email"] = mutable_data["email"].lower()

        # # Update the request data with the modified mutable copy
        # request._data = mutable_data

        # return super().post(request, *args, **kwargs)


class UserProfileAPIView(RetrieveAPIView):
    """
    Gets the profile with permission details: groups and scopes
    of the logged in user
    """

    serializer_class = UserProfileSerializer

    def get_object(self):
        return self.request.user


class UserViewSet(ListViewset):
    """
    lists other users with the same active company session
    """

    access_policy = UserAccessPolicy
    queryset = OneappUser.objects.all()
    serializer_class = UserSerializer
    ordering = ["first_name"]
    search_fields = ["first_name"]


class ForgetPasswordAPIView(BaseCreateAPIView):
    """
    To get password reset link in email of users
    Generates password reset key using UUID and sends
    endpoint with that key to email so they can set
    a new password for their account

    :param str email: Email address
    :task send_reset_password_link
    """

    serializer_class = ForgetPasswordSerializer
    permission_classes = (AllowAny,)


class CheckResetPasswordKeyAPIView(BaseCreateAPIView):
    """
    To verify if user has correct password reset key

    :param UUID password_reset_key: Password reset token
    """

    serializer_class = CheckResetPasswordKeySerializer
    permission_classes = (AllowAny,)


class ResetPasswordAPIView(BaseCreateAPIView):
    """
    To Reset password using password reset key

    :param UUID password_reset_key: Password reset token
    :param str new_password: New password to be set
    """

    serializer_class = ResetPasswordSerializer
    permission_classes = (AllowAny,)
