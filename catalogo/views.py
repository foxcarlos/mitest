from django.shortcuts import render

# Create your views here.
def catalogo_listar(request):
    return render(request, 'catalogo/catalogo_listar.html', {})
