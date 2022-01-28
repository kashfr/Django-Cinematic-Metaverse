from django.contrib import admin
from .models import Avatar, NFT, Observation

# Register your models here.
admin.site.register(Avatar)
admin.site.register(NFT)
admin.site.register(Observation)
# admin.site.register([Avatar, NFT])
