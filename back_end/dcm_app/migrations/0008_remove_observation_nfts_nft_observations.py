# Generated by Django 4.0.1 on 2022-01-30 01:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dcm_app', '0007_observation_nfts_alter_nft_image_url'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='observation',
            name='nfts',
        ),
        migrations.AddField(
            model_name='nft',
            name='observations',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='avatar', to='dcm_app.observation'),
        ),
    ]