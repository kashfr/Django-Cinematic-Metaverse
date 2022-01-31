from rest_framework import serializers
from .models import Avatar, NFT, Observation
from django.contrib.auth.models import User


class AvatarSerializer(serializers.ModelSerializer):
    # characters = serializers.StringRelatedField(many=True)

    class Meta:
        model = Avatar
        fields = '__all__'


class ObservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Observation
        fields = '__all__'


class NFTSerializer(serializers.ModelSerializer):
    # avatars = serializers.PrimaryKeyRelatedField(
    #     many=True, queryset=Avatar.objects.all())
    # avatars = serializers.HyperlinkedIdentityField(view_name='avatar-detail', read_only=True)
    observations = ObservationSerializer(many=True)

    class Meta:
        model = NFT
        fields = '__all__'

    def create(self, validated_data):
        observation_data = validated_data.pop('observations')
        nft = NFT.objects.create(**validated_data)
        for observation_data in observation_data:
            Observation.objects.create(nft=nft, **observation_data)
        return nft

    def update(self, instance, validated_data):
        observations_data = validated_data.pop('observations')
        observations = (instance.observations).all()
        observations = list(observations)
        instance.name = validated_data.get('name', instance.name)
        instance.image_url = validated_data.get(
            'image_url', instance.image_url)
        instance.current_bid = validated_data.get(
            'current_bid', instance.current_bid)
        instance.start_date = validated_data.get(
            'start_date', instance.start_date)
        instance.save()
        for observation_data in observations_data:
            observation = observations.pop(0)
            observation.name = observation_data.get('name', observation.name)
            observation.text = observation_data.get(
                'text', observation.text)
            observation.save()
        return instance

  # def update(self, instance, validated_data):
  #   machines_data = validated_data.pop('machines')
  #   machines = (instance.machines).all()
  #   machines = list(machines)
  #   instance.name = validated_data.get('name', instance.name)
  #   instance.address = validated_data.get('address', instance.address)
  #   instance.city = validated_data.get('city', instance.city)
  #   instance.state = validated_data.get('state', instance.state)
  #   instance.save()
  #   for machine_data in machines_data:
  #       machine = machines.pop(0)
  #       machine.name = machine_data.get('name', machine.name)
  #       machine.price = machine_data.get('price', machine.price)
  #       machine.comments = machine_data.get('comments', machine.comments)
  #       machine.save()
  #   return instance
