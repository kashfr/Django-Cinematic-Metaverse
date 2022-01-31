# Generated by Django 4.0.1 on 2022-01-30 19:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dcm_app', '0019_remove_nft_observations'),
    ]

    operations = [
        migrations.AddField(
            model_name='observation',
            name='nft',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='observations', to='dcm_app.nft'),
            preserve_default=False,
        ),
    ]
