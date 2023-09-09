from rest_access_policy import AccessPolicy


class UserAccessPolicy(AccessPolicy):
    statements = [
        {
            "action": "list",
            "principal": "authenticated",
            "effect": "allow",
        },
    ]

    @classmethod
    def scope_queryset(cls, request, qs):
        return qs.filter(is_active=True)
