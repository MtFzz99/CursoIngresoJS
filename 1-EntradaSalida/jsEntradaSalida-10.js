/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var sueldo;
    var resultado;
    var total;
    var total2;

    sueldo = document.getElementById("importe").value;

    sueldo = parseInt(sueldo);
    
    total = (sueldo * 25 / 100);

    resultado = document.getElementById("resultado").value = total;
}
