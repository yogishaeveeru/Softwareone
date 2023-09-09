from rest_framework import routers

from softwareoneapi.views import CustomerViewSet

app_name = "softwareoneapi"

router = routers.SimpleRouter(trailing_slash=False)
router.register(r"customers", CustomerViewSet, basename="customers")
urlpatterns = router.urls