function mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 10.");
while (numero < 1 || numero > 10 || isNaN(numero)) {
	numero = prompt("Numero erroneo, ingrese el numero valido.");

	numero = parseInt(numero);

}
alert("Numero Ingresado Correctamente.")
document.getElementById("Numero").value = numero
}//FIN DE LA FUNCIÓN