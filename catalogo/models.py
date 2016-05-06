from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Catalogo(models.Model):
	codigo = models.CharField(max_length=3)
	nombre = models.CharField(max_length=100)
	cantidad = models.IntegerField()

