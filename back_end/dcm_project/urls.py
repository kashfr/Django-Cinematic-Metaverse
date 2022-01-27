from django.contrib import admin
from django.urls import path, include

from rest_framework import routers

from dcm_app import views

router = routers.DefaultRouter(trailing_slash=False)
router.register('metaverseavatar', views.MetaverseAvatarBookViewSet)
router.register('character', views.CharacterViewSet)

urlpatterns = [
    path('', include('dcm_accounts.urls')),
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
]
