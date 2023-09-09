from rest_access_policy import AccessViewSetMixin, FieldAccessMixin
from rest_framework.request import Request


class BaseAccessViewSetMixin(AccessViewSetMixin):
    def get_queryset(self):
        return self.access_policy.scope_queryset(self.request, self.queryset)


class BaseFieldAccessMixin(FieldAccessMixin):
    @property
    def request(self) -> Request:
        return self.serializer_context.get("request")

    def _apply_deprecated_field_permissions(self):
        if self.request and (
            self.request.method
            in [
                "POST",
                "PUT",
                "PATCH",
            ]
            and self.field_permissions.get("read_only")
        ):
            self._set_read_only_fields()
