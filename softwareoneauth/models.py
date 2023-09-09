import uuid
from datetime import timedelta

from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django_extensions.db.models import TimeStampedModel
from simple_history.models import HistoricalRecords


class OneappUserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """
        Create and save a user with the given email, and password.
        """
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.password = make_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        """
        Registers the user
        :param str email: email
        :param str password: Password
        :param extra_fields:
        :return user:
        """
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self._create_user(email, password, **extra_fields)

    @classmethod
    def normalize_email(cls, email):
        """
        To store emails in lowercase only
        """
        return super().normalize_email(email).lower()


class OneappUser(AbstractUser, TimeStampedModel):
    """User Model of Softwareone."""
    history = HistoricalRecords()
    email = models.EmailField(_("email address"), unique=True)
    password_reset_requested_at = models.DateTimeField(default=timezone.now, editable=False)
    password_reset_key = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    password_reset_done_at = models.DateTimeField(default=timezone.now, editable=False)
    is_password_reset = models.BooleanField(editable=False, default=True)
    username = None  # removing username field
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    objects = OneappUserManager()

    def __str__(self):
        """Return string representation of the user"""
        return f"{self.first_name or ''} {self.last_name or ''}".strip()

    def is_reset_key_used_or_expired(self):
        return self.password_reset_requested_at > timezone.now() + timedelta(days=1) or self.is_password_reset
