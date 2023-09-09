from rest_framework import exceptions
from rest_framework.filters import BaseFilterBackend, OrderingFilter, SearchFilter


class BaseSearchFilter(SearchFilter):
    def filter_queryset(self, request, queryset, view):
        if queryset.model == view.model:
            return queryset
        return super().filter_queryset(request, queryset, view)

class BaseOrderingFilter(OrderingFilter):
    def get_schema_operation_parameters(self, view):
        ordering_fields = getattr(view, "ordering_fields", self.ordering_fields)
        return (
            [
                {
                    "name": self.ordering_param,
                    "required": False,
                    "in": "query",
                    "description": "Which field to use when ordering the results."
                    f"Orderable fields: {', '.join(ordering_fields)}."
                    + " Use '-' before the field to get results in descending order",
                    "schema": {
                        "type": "string",
                    },
                },
            ]
            if ordering_fields
            else []
        )


class ActionOrderingFilter(OrderingFilter):
    def get_default_ordering(self, view):
        return view.actions_ordering.get(view.action)

    def get_valid_fields(self, queryset, view, context={}):
        return [
            (item, item) if isinstance(item, str) else item for item in view.actions_ordering_fields.get(view.action)
        ]

    def filter_queryset(self, request, queryset, view):
        if queryset.model == view.model:
            return queryset
        return super().filter_queryset(request, queryset, view)

class ActionSearchFilter(SearchFilter):
    def filter_queryset(self, request, queryset, view):
        if queryset.model == view.model:
            return queryset
        return super().filter_queryset(request, queryset, view)



class BaseForeignKeyFilter(BaseFilterBackend):
    """
    To Filter by foreign key / M2M fields
    """

    def filter_queryset(self, request, queryset, view):
        ids = request.query_params.getlist(self.param)

        if ids:
            try:
                ids = list(map(int, ids))
            except ValueError:
                raise exceptions.ValidationError({self.param: "Please enter valid choices"})

            return queryset.filter(**{self.param_field_filter: ids}).distinct()

        return queryset