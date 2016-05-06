from django.shortcuts import render
from .models import Catalogo

# Create your views here.
def catalogo_listar(request):
    productos = Catalogo.objects.all()

    for f in productos:
        f.codigo, f.nombre, f.cantidad
    return render(request, 'catalogo/catalogo_listar.html', {'productos': productos})
