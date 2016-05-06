Catalogo = {

    Guardar: function(codigo, nombre, cantidad){
        var catCodigo = codigo
        var catNombre = nombre
        var catCantidad = cantidad
        
        var request = $.ajax({
            url: "guardar",
            method: "POST",
            data: JSON.stringify({ codigo : catCodigo, nombre: catNombre, catCantidad }),
            contentType:"application/json; charset=utf-8",
            dataType: "json"
        });

        request.done(function( msg ) {
            alert( msg.mensaje );
        });

        request.fail(function( jqXHR, textStatus ) {
            alert( "Peticion AJAX fallo: " + textStatus );
        });
    },

    Prueba: function(){
       alert('esto es una prueba');
    }
}
