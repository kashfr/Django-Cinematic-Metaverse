from rest_framework import serializers

from .models import MetaverseAvatar, Character


class MetaverseAvatarSerializer(serializers.ModelSerializer):

    class Meta:
        model = MetaverseAvatar
        fields = '__all__'


class CharacterSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Character
        fields = '__all__'
