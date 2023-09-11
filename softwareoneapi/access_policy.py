from rest_access_policy import AccessPolicy

class CustomerAccessPolicy(AccessPolicy):
    statements = [
        {
            "action": ["list", "retrieve", "get_buckets", "get_files", "create_bucket", "upload_file", "create", "get_regions","create_vpc"],
            "principal": "*",
            "effect": "allow",
        },
    ]

    @classmethod
    def scope_queryset(cls, request, qs):
        return qs.filter(user=request.user)
