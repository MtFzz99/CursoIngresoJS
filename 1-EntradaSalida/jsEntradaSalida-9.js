/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var resultado;
    var total;
    var total2;

    sueldo = document.getElementById("sueldo").value;

    sueldo = parseInt(sueldo);
    
    total = (sueldo * 10 / 100);

    resultado = document.getElementById("resultado").value = total;

}
