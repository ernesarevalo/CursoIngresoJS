/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo, resu, aum;
    sueldo = parseInt(document.getElementById("sueldo").value);
    aum = sueldo * 1.10;
    document.getElementById("resultado").value = aum;	
}
