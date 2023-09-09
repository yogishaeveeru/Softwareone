from typing import OrderedDict

from rest_framework import pagination
from rest_framework.response import Response
from rest_framework.utils.urls import replace_query_param


class PageNumberPagination(pagination.PageNumberPagination):
    max_page_size = 10000
    page_size_query_param = "page_size"

    def get_page_size(self, request):
        if request.query_params.get(self.page_size_query_param) == "max":
            return self.max_page_size
        return super().get_page_size(request)


class DataOnlyPagination(pagination.LimitOffsetPagination):
    def paginate_queryset(self, queryset, request, view=None):
        self.limit = self.get_limit(request)
        if self.limit is None:
            return None
        return list(queryset[: self.limit])

    def get_paginated_response(self, data):
        return Response({"results": data})

    def get_paginated_response_schema(self, schema):
        return {
            "type": "object",
            "properties": {
                "results": schema,
            },
        }
