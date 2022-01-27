from rest_framework import serializers
from .models import MetaverseAvatar, Character


class MetaverseAvatarSerializer(serializers.ModelSerializer):
    # characters = serializers.StringRelatedField(many=True)

    class Meta:
        model = MetaverseAvatar
        fields = '__all__'


class CharacterSerializer(serializers.ModelSerializer):
    # avatars = serializers.HyperlinkedIdentityField(view_name='avatar-detail', read_only=True)

    class Meta:
        model = Character
        fields = '__all__'
