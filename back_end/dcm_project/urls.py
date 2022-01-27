from django.contrib import admin
from django.urls import path, include

# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework import routers

from dcm_app import views
# from dcm_app.views import MetaverseAvatarBookViewSet, CharacterViewSet


router = routers.DefaultRouter(trailing_slash=False)
router.register('metaverseavatar', views.MetaverseAvatarBookViewSet)
# router.register('metaverseavatar', MetaverseAvatarBookViewSet)
router.register('character', views.CharacterViewSet)
# router.register('character', CharacterViewSet)

urlpatterns = [
    path('', include('dcm_accounts.urls')),
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    # path('api/token/', TokenObtainPairView.as_view()),
    # path('api/token/refresh', TokenRefreshView.as_view()),
]
