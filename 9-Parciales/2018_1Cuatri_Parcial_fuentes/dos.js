function mostrar()
{
    var elNombre = document.getElementById("elNombre").value;
    var laLocalidad = document.getElementById("laLocalidad").value;

    while (!isNaN(elNombre)) {
        elNombre = prompt("Error : Ingrese un nombre valido");
    }
  if (!isNaN(laLocalidad)) {
      laLocalidad = ("Indefinida");
  }
  alert("Usted es " + elNombre + " y vive en la localidad de " + laLocalidad);
}
