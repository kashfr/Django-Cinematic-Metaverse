from django.urls import path, include
from . import views
from rest_framework_simplejwt import views as jwt_views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('ascend', TokenObtainPairView.as_view()),
    path('plug-in', TokenObtainPairView.as_view()),
    # path('unplug', BlacklistTokenUpdateView.as_view())
    path('refresh-token', TokenRefreshView.as_view()),
    path('change-password', auth_views.PasswordChangeView.as_view()),
    # path('verify', TokenVerifyView.as_view(), name='token_verify'),
]
