from django.contrib.auth.decorators import login_required

class LoginRequiredMixin:
    """
    A mixin that enforces login required for views.
    """
    login_url = '/'  # Customize the login URL if needed

    @classmethod
    def as_view(cls, **kwargs):
        view = super().as_view(**kwargs)
        return login_required(view, login_url=cls.login_url)
