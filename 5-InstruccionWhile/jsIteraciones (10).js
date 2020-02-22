function mostrar()
{
	var contador;
	var respuesta;
	var numeroIngresado;
	var acumulador;

	acumulador=0;
	contador=0;//inicializar para ingresar
	respuesta="si"
	while (respuesta=="si") {//defino la logica
		contador=contador+1;//cambio la variable de la logica
		numeroIngresado = prompt("Ingrese el " + contador + " numero :");
		numeroIngresado = parseInt(numeroIngresado);
		//while (numeroIngresado>0 && numeroIngresado<9)//mal 	
		//while (!(numeroIngresado>0 && numeroIngresado<9))//casi bien
		while (numeroIngresado<0 || numeroIngresado>9) {
			
		
			numeroIngresado = prompt("Ingrese el " + contador + " numero :");
			numeroIngresado = parseInt(numeroIngresado);
		}
		acumulador = acumulador + numeroIngresado;
		respuesta = prompt("si para seguir");
	}
	console.log("contador" +contador);
	console.log("acumulador" +acumulador);
}//FIN DE LA FUNCIÓN