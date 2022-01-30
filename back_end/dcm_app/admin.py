from django.contrib import admin
from .models import Avatar, NFT, Observation

# Register your models here.
admin.site.register(Avatar)
admin.site.register(NFT)
admin.site.register(Observation)


class ObservationAdmin(admin.ModelAdmin):
    list_display = ('name', 'body', 'post', 'created_on', 'active')
    list_filter = ('active', 'created_on')
    search_fields = ('name', 'email', 'body')
    actions = ['approve_comments']

    def approve_comments(self, request, queryset):
        queryset.update(active=True)
