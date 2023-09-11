from django.conf import settings

def config(request):
    return {
        "S_ONE_BASE_URL": settings.S_ONE_BASE_URL,
    }
