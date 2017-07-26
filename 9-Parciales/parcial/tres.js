function Mostrar()
{
var largo = document.getElementById("alrgo").value;
var ancho = document.getElementById("ancho").value;
var superf = largo * 2 + ancho * 2;
var hiloTot = superf * 3;

alert(hiloTot);
}
