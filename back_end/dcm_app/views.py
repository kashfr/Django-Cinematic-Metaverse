from django.shortcuts import render, redirect
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from rest_framework import mixins
from .serializers import MetaverseAvatarSerializer, CharacterSerializer
from .models import MetaverseAvatar, Character

# Create your views here.


class MetaverseAvatarBookViewSet(viewsets.ModelViewSet):
    queryset = MetaverseAvatar.objects.all()
    serializer_class = MetaverseAvatarSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly, ]
    permissions_classes = [permissions.AllowAny]  # testing


class CharacterViewSet(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly, ]
    permissions_classes = [permissions.AllowAny]  # testing
