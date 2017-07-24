function Mostrar()
{
var num = prompt("Ingrese un número");
var cont = 0
for(i=2 ; i<=num; i++)
{
    if(num%i==0)
    {
        cont++
    }
}
if(cont>2)
{
    alert("No es primo");
}
else
{
    alert("Es primo");
}
}//FIN DE LA FUNCIÓN