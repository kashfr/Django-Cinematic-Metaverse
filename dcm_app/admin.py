from django.contrib import admin
from .models import MetaverseAvatar, Character

# Register your models here.
admin.site.register(MetaverseAvatar)
admin.site.register(Character)
# admin.site.register([MetaverseAvatar, Character])
