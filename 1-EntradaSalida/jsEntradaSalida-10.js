/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe, resu;
    importe = parseInt(document.getElementById("importe").value);
    resu = importe * 0.75;
    document.getElementById("resultado").value = resu;
}
