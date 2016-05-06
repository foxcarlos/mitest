from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^$', views.catalogo_listar),
    url(r'^catalogo_guardar$', views.catalogo_guardar),
]