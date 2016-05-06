
$(document).ready(function () {
    var counter = 0;

    var rows = document.getElementsByTagName('tr');
    for (i = 0; i < rows.length; i++) {
        rows[i].onclick = function() {
            var seleccionado = this.rowIndex;
            var codigo = rows[seleccionado].cells[0].innerHTML;
            alert("Se Selecciono: "+codigo);
        };
    }

    $("#btnAgregar").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        var cod = $("#txtCodigo").val();
        var nom = $("#txtNombre").val();
        var can = $("#txtCantidad").val();

        if(!cod || !nom || !can){
            alert('Campos Vacios');
        }
        else{
            // Nota: Esta Funcion ajax esta ubicada en:
            // /catalogo/static/js/guardar.js
            Catalogo.Guardar(cod, nom, can);

            cols += '<td>'+cod+'</td>';
            cols += '<td>'+nom+'</td>';
            cols += '<td>'+can+'</td>';
            cols += '<td align="center"><button id="btnAgregar" class="btn btn-default">Editar</button></td>';

            //var newRow = $('<tr id="'+cod+'">');
            newRow.append(cols);

            $("table.order-list").append(newRow);
            counter++;

            $("#txtCodigo").val('');
            $("#txtNombre").val('');
            $("#txtCantidad").val('');
        }
    });



    $("table.order-list").on("click", ".btn", function (event) {
        alert(cod);
        //$(this).closest("tr").remove();
        //counter -= 1
    });

});
