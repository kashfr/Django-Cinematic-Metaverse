from rest_framework import serializers
from .models import Avatar, NFT, Observation


class AvatarSerializer(serializers.ModelSerializer):
    # characters = serializers.StringRelatedField(many=True)

    class Meta:
        model = Avatar
        fields = '__all__'


class NFTSerializer(serializers.ModelSerializer):
    snippets = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Avatar.objects.all())
    # avatars = serializers.HyperlinkedIdentityField(view_name='avatar-detail', read_only=True)

    class Meta:
        model = NFT
        fields = '__all__'


class ObservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Observation
        fields = '__all__'
