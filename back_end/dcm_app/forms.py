from django.forms import ModelForm
from .models import Observation


class ObservationForm(ModelForm):
    class Meta:
        model = Observation
        fields = '__all__'
