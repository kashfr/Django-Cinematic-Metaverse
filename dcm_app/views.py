from django.shortcuts import render, redirect
from rest_framework import viewsets, permissions, generics
from .serializers import MetaverseAvatarSerializer, CharacterSerializer
from .models import MetaverseAvatar, Character

# Create your views here.
