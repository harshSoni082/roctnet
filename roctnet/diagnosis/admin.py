from django.contrib import admin

from roctnet.diagnosis.models import Diagnosis


# Register your models here.
@admin.register(Diagnosis)
class Diagnosis(admin.ModelAdmin):
    model = Diagnosis
