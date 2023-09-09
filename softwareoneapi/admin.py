from django.db.models import ForeignKey, ManyToManyField, ManyToManyRel, ManyToOneRel
from simple_history.admin import SimpleHistoryAdmin
from django.contrib import admin
from softwareoneapi.models import Customer

from django.utils.translation import gettext_lazy

class OneappAdmin(admin.AdminSite):
    # Text to put at the end of each page's <title>.
    site_title = gettext_lazy("Software one Admin")

    # Text to put in each page's <h1>.
    site_header = gettext_lazy("Software one Client Apis Admin")

    # Text to put at the top of the admin index page.
    index_title = gettext_lazy("Software one Api Administration")

    # URL for the "View site" link at the top of each admin page.
    site_url = None

class ReadOnlyRawIdFieldsMixin:
    """
    A Mixin for ModelAdmin to automatically add raw_id_fields and readonly_fields
    """

    def __init__(self, model, admin_site, *args, **kwargs):
        self.raw_id_fields, self.readonly_fields = self.setup_fields(model)
        super().__init__(model, admin_site, *args, **kwargs)

    def setup_fields(self, model):
        raw_id_fields = []
        readonly_fields = []
        for field in model._meta.get_fields():
            if (isinstance(field, (ForeignKey, ManyToManyField))) and field.name not in self.filter_horizontal:
                raw_id_fields.append(field.name)
            elif not field.editable and not isinstance(field, (ManyToManyRel, ManyToOneRel)):
                readonly_fields.append(field.name)
        return raw_id_fields, readonly_fields


class OptionalFieldsMixin:
    """
    A Mixin for ModelAdmin to define optional fields in the
    Auto Generated ModelAdmin form
    """

    optional_fields = tuple()

    def get_form(self, request, obj=None, change=False, **kwargs):
        form = super().get_form(request, obj, change, **kwargs)
        for field in self.optional_fields:
            form.base_fields[field].required = False
        return form


class BaseSimpleHistoryAdmin(ReadOnlyRawIdFieldsMixin, OptionalFieldsMixin, SimpleHistoryAdmin):
    list_per_page = 10

@admin.register(Customer)
class CustomerAdmin(BaseSimpleHistoryAdmin):
    search_fields = ("username",)
    list_display = ("id", "username", "account_number")