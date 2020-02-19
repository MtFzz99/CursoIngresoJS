function mostrar()
{
	//declarar contadores y variables 
	var respuesta=true;
	var sumaPositivos= 0;
	var sumaNegativos= 0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
    var contadorPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;

	while(respuesta){
		var numero = prompt("Ingrese un numero.");
		numero = parseInt(numero);
	while (isNaN(numero)) {
		numero=prompt("Error: Ingrese un numero valido.");
		numero = parseInt(numero);
	}
    if (numero > 0) {
		//punto 2
	sumaPositivos += numero;
	   // punto 3
	   contadorPositivos++;
}else if (numero < 0) {
	// punto 1
	sumaNegativos += numero;
	//punto 4
	contadorNegativos++;
} else {
	//punto 5
	contadorCeros++;
} 
if (numero % 2==0) {
	contadorPares++;
}

respuesta = confirm("¿Desea continuar?.");
	} //fin while 

//punto 7
promedioPositivos = sumaPositivos / contadorPositivos;
//punto 8
promedioNegativos =  sumaNegativos / contadorNegativos;

//punto 9

diferenciaPositivosNegativos = sumaPositivos - sumaNegativos;

document.write("Promedio de positivos: " + promedioPositivos + "<br>");
document.write("Promedio de negativos: " + promedioNegativos + "<br>");
document.write("Suma de positivos: " + sumaPositivos + "<br>"); 
document.write("Suma de negativos: " + sumaNegativos + "<br>"); 
document.write("Contador de positivos: " + contadorPositivos + "<br>");
document.write("Contador de negativos: " + contadorNegativos + "<br>"); 
document.write("Cantidad de ceros: " + contadorCeros + "<br>"); 
document.write("Cantidad de numeros pares: " + contadorPares + "<br>"); 
document.write("Diferencia entre positivos y negativos: " + diferenciaPositivosNegativos + "<br>")

}//FIN DE LA FUNCIÓN