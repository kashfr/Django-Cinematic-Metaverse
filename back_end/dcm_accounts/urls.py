from django.urls import path, include
from . import views
from rest_framework_simplejwt import views as jwt_views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
# from rest_framework import routers
# from .api import UserViewSet

# router = routers.DefaultRouter()
# router.register('api/users', UserViewSet, 'users')


urlpatterns = [
    path('plug-in', TokenObtainPairView.as_view()),
    path('refresh-token', TokenRefreshView.as_view()),
]
