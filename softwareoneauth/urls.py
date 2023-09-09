from django.urls import path
from rest_framework import routers
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView

from softwareoneauth.views import (
    CheckResetPasswordKeyAPIView,
    ForgetPasswordAPIView,
    LoginTokenObtainPairView,
    ResetPasswordAPIView,
    UserProfileAPIView,
    UserViewSet,
)

app_name = "softwareoneauth"  # pylint: disable=invalid-name

router = routers.SimpleRouter(trailing_slash=False)
router.register(r"users", UserViewSet, basename="users")

urlpatterns = [
    path("token", LoginTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh", TokenRefreshView.as_view(), name="token_refresh"),
    path("token/verify", TokenVerifyView.as_view(), name="token_verify"),
    path("profile", UserProfileAPIView.as_view(), name="user_profile"),
    path("password/forget", ForgetPasswordAPIView.as_view(), name="forget_password"),
    path(
        "password/reset-key/verify",
        CheckResetPasswordKeyAPIView.as_view(),
    ),
    path(
        "password/reset",
        ResetPasswordAPIView.as_view(),
    ),
] + router.urls
