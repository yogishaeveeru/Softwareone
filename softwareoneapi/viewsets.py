from rest_framework.decorators import action
from rest_framework.mixins import (
    CreateModelMixin,
    DestroyModelMixin,
    ListModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
)
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet, ModelViewSet

from softwareoneapi.mixins import BaseAccessViewSetMixin


class ActionSerializerMixin:
    """
    Get serializer class based on actions
    i.e. list | create | retrieve | update etc...
    """

    def get_serializer_class(self):
        return self.actions_serializer_class.get(self.action, self.serializer_class)


class SelectActionMixin:
    """
    Add select action in the viewset
    """

    @action(detail=False, methods=["get"])
    def select(self, request):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class BaseViewset(BaseAccessViewSetMixin, GenericViewSet):
    http_method_names = ["get"]


class ListViewset(BaseAccessViewSetMixin, ListModelMixin, GenericViewSet):
    http_method_names = ["get"]


class RetrieveViewset(BaseAccessViewSetMixin, RetrieveModelMixin, GenericViewSet):
    http_method_names = ["get"]


class CreateViewset(BaseAccessViewSetMixin, CreateModelMixin, GenericViewSet):
    http_method_names = ["post"]


class UpdateViewset(BaseAccessViewSetMixin, UpdateModelMixin, GenericViewSet):
    http_method_names = ["put", "patch"]


class DeleteViewset(BaseAccessViewSetMixin, DestroyModelMixin, GenericViewSet):
    http_method_names = ["delete"]


class CreateUpdateViewset(BaseAccessViewSetMixin, CreateModelMixin, UpdateModelMixin, GenericViewSet):
    http_method_names = ["post", "put", "patch"]


class ListCreateViewset(BaseAccessViewSetMixin, ListModelMixin, CreateModelMixin, GenericViewSet):
    http_method_names = ["get", "post"]


class ListRetrieveViewset(BaseAccessViewSetMixin, ListModelMixin, RetrieveModelMixin, GenericViewSet):
    http_method_names = ["get"]


class ListUpdateViewset(BaseAccessViewSetMixin, ListModelMixin, UpdateModelMixin, GenericViewSet):
    http_method_names = ["get", "put", "patch"]


class ListRetrieveCreateUpdateViewset(
    BaseAccessViewSetMixin,
    CreateModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
    ListModelMixin,
    GenericViewSet,
):
    http_method_names = ["get", "post", "put", "patch"]


class RetrieveCreateUpdateViewset(
    BaseAccessViewSetMixin,
    CreateModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
    GenericViewSet,
):
    http_method_names = ["get", "post", "put", "patch"]


class ListRetrieveUpdateViewset(
    BaseAccessViewSetMixin,
    ListModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
    GenericViewSet,
):
    http_method_names = ["get", "put", "patch"]


class BaseModelViewset(BaseAccessViewSetMixin, ModelViewSet):
    http_method_names = ["get", "post", "put", "patch", "delete"]
