from django.urls import path, include
from . import views
from rest_framework_simplejwt import views as jwt_views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('plug-in', TokenObtainPairView.as_view()),
    path('refresh-token', TokenRefreshView.as_view()),
]
