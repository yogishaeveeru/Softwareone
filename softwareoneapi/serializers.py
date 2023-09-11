from rest_framework import serializers
from softwareoneapi.models import Customer

class SerializerSuccessMessageMixin(metaclass=serializers.SerializerMetaclass):
    message = serializers.CharField(read_only=True)

    def get_success_message(self):
        return getattr(self, "success_message", "")

    def validate(self, attrs):
        attrs = super().validate(attrs)
        attrs["message"] = self.get_success_message()
        return attrs


class BaseSuccessMessageSerializer(SerializerSuccessMessageMixin, serializers.Serializer):
    """
    BaseSuccessMessageSerializer
    comes with SerializerSuccessMessageMixin
    """

class ScopedPrimaryKeyRelatedField(serializers.PrimaryKeyRelatedField):
    def __init__(self, **kwargs):
        self.access_policy = kwargs.pop("access_policy", None)
        if self.access_policy is None:
            raise Exception("Set access policy for all related fields in the serializer")
        super().__init__(**kwargs)

    def get_queryset(self):
        return self.access_policy.scope_queryset(self.context["request"], self.queryset)


class ScopedModelSerializer(serializers.ModelSerializer):
    serializer_related_field = ScopedPrimaryKeyRelatedField

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ["id", "account_number", "username", "access_key", "secret_key"]

class ListCustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ["id", "username"]
