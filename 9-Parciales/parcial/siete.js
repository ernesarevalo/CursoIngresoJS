function Mostrar()
{
var cont = 0;
var nota;
var bandera = true;
var acum = 0;

while(cont < 3)
{
    cont++
    notas = prompt("Ingrese la nota");
    if(bandera)
    {
        bandera = false;
        min = notas;
        
        
    }
    else
    {
        if(notas < min)
        {
            min = notas;
        }
    }
}

alert("La nota mas baja es " + min);
alert("El promedio de las notas es " + acum/cont);

}
