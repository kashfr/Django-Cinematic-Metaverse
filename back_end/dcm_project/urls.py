from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from dcm_app import views

router = routers.DefaultRouter(trailing_slash=False)
router.register('avatars', views.AvatarBookViewSet)
router.register('nfts', views.NFTViewSet)
router.register('observations', views.ObservationViewSet)
router.register('ascend', views.UserViewSet)

urlpatterns = [
    path('', include('dcm_accounts.urls')),
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
]

# https://docs.djangoproject.com/en/4.0/howto/static-files/

# urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# if settings.DEBUG: #add this
#     urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
