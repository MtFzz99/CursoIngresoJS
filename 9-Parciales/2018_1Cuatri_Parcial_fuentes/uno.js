
function mostrar()
{

var ancho;
var largo;
var perimetro;

ancho = prompt("Ingrese el ancho del rectangulo");
ancho = parseInt(ancho);

    while (isNaN(ancho) || ancho <1) {
        ancho = prompt("Ingrese el ancho correcto del rectangulo");
        ancho = parseInt(ancho);
    }
    largo = prompt("Ingrese el largo del rectangulo");
    largo = parseInt(largo);
    while (isNaN(largo) || largo <3) {
        largo = prompt("Ingrese el largo correcto del rectangulo.");
        largo = parseInt(largo);
    }

perimetro = 2*(largo + ancho);
alert("El perimetro es " + perimetro);

}
