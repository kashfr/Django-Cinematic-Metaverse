from django.shortcuts import render, redirect
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from rest_framework import mixins
from .serializers import AvatarSerializer, NFTSerializer
from .models import Avatar, NFT

# Create your views here.


class AvatarBookViewSet(viewsets.ModelViewSet):
    queryset = Avatar.objects.all()
    serializer_class = AvatarSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, ]
    # permissions_classes = [permissions.AllowAny]  # testing


class NFTViewSet(viewsets.ModelViewSet):
    queryset = NFT.objects.all()
    serializer_class = NFTSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, ]
    # permissions_classes = [permissions.AllowAny]  # testing
