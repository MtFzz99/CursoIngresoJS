/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var max;
var min;
var numeroIngresado;

function comenzar()
{
min = 1;
max = 101;

numeroSecreto = Math.floor(Math.random() * (max - min))+ min;
numeroIngresado = document.getElementById("numero").value;
document.getElementById("intentos").value = contadorIntentos;


}

function verificar()
{
  if(numeroSecreto == numeroIngresado){
  alert("Usted es un ganador en "+ contadorIntentos);
  }else if(numeroIngresado < numeroSecreto){
    alert("Falta...")
  }	else {
    alert("Se paso...");
  }
}