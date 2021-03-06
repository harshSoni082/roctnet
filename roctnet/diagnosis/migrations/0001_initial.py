# Generated by Django 3.0.10 on 2020-12-20 17:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import model_utils.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Diagnosis',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('is_active', models.BooleanField(blank=True, default=True, null=True, verbose_name='active')),
                ('is_deleted', models.BooleanField(blank=True, default=False, null=True, verbose_name='deleted')),
                ('result', models.CharField(blank=True, max_length=10000, null=True, verbose_name='Result')),
                ('name', models.CharField(blank=True, max_length=500, null=True, verbose_name='Name')),
                ('diagnostic', models.CharField(blank=True, max_length=500, null=True, verbose_name='Diagnostic')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
