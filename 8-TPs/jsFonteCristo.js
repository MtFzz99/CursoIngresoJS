/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
var numero;
function ComenzarIngreso () 
{
 	
}
function NumerosPares()
{
var contadorPares=0;
    numero = document.getElementById("numero").value;
    numero = parseInt(numero);
    while (isNaN(numero) || numero<1) {
        numero = prompt("Error : Ingrese un numero valido");
        numero = parseInt(numero)
    }
    while (contadorPares <numero) {
       contadorPares++;
       if (contadorPares %2 ==0) {
           alert("Los numeros pares son " + contadorPares);
           console.log(contadorPares);
       } 
    }
}
function NumerosImpares()
{

}
function NumerosDivisibles()
{

}
function VerificarPrimo()
{

}
function NumerosPrimos()
{

}