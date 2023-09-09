import uuid
from typing import List

from django.contrib.auth.password_validation import validate_password
from django.core import exceptions
from django.utils import timezone
from rest_framework import serializers

from softwareoneauth.models import OneappUser
from softwareoneapi.serializers import BaseSuccessMessageSerializer


class UserProfileSerializer(serializers.ModelSerializer):
    groups = serializers.SerializerMethodField()

    class Meta:
        model = OneappUser
        fields = [
            "id",
            "email",
            "first_name",
            "last_name",
            "is_staff",
            "is_superuser",
            "groups",
        ]

    def get_groups(self, user):
        return user.groups.values_list("name", flat=True)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = OneappUser
        fields = ["id", "email", "first_name", "last_name"]


class ForgetPasswordSerializer(BaseSuccessMessageSerializer):
    email = serializers.EmailField(write_only=True)
    success_message = "An email with password reset link has been sent to the provided email"

    def validate(self, attrs):
        attrs = super().validate(attrs)
        try:
            user = OneappUser.objects.get(email=attrs["email"].lower())
        except OneappUser.DoesNotExist as exc:
            raise serializers.ValidationError({"email": "No active user account found with provided email"}) from exc

        if user.is_reset_key_used_or_expired():
            user.is_password_reset = False
            user.password_reset_requested_at = timezone.now()
            user.password_reset_key = uuid.uuid4()
            user.save()

        # send_reset_password_link(str(user), user.email, user.password_reset_key)

        return attrs


class BaseResetPasswordSerializer(BaseSuccessMessageSerializer):
    password_reset_key = serializers.UUIDField(write_only=True)

    def validate(self, attrs):
        attrs = super().validate(attrs)

        try:
            self.user = OneappUser.objects.get(is_active=True, password_reset_key=attrs["password_reset_key"])
        except OneappUser.DoesNotExist as exc:
            raise serializers.ValidationError("No active user account found with provided password reset key") from exc

        if self.user.is_reset_key_used_or_expired():
            raise serializers.ValidationError("Invalid password reset key")

        return attrs


class CheckResetPasswordKeySerializer(BaseResetPasswordSerializer):
    success_message = "Reset Password Key is correct"


class ResetPasswordSerializer(BaseResetPasswordSerializer):
    new_password = serializers.CharField(write_only=True)
    success_message = "Your password has been reset successfully"

    def validate(self, attrs):
        attrs = super().validate(attrs)

        try:
            # validate the password and catch the exception
            validate_password(password=attrs["new_password"], user=self.user)
        # the exception raised here is different than serializers.ValidationError
        except exceptions.ValidationError as exc:
            raise serializers.ValidationError({"new_password": list(exc.messages)})

        # changing the key so user cannot use same key again
        self.user.password_reset_key = uuid.uuid4()
        self.user.password_reset_done_at = timezone.now()
        self.user.is_password_reset = True
        self.user.set_password(attrs["new_password"])
        self.user.save(update_fields=["password", "password_reset_key", "password_reset_done_at", "is_password_reset"])
        return attrs
