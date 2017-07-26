function Mostrar()
{
var numero = prompt("ingrese un número entre 0 y 10.");
while (numero > 0) {
	document.getElementById("Numero") = numero;
	if(numero >10)
	{
		prompt("Error, reingrese");
	}
}

}//FIN DE LA FUNCIÓN