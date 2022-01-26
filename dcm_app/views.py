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
    permissions_classes = [permissions.IsAuthenticatedOrReadOnly]


class CharacterViewSet(viewsets.ModelViewSet):
    queryset = Character
    serializer_class = CharacterSerializer
    permissions_classes = [permissions.IsAuthenticatedOrReadOnly]
