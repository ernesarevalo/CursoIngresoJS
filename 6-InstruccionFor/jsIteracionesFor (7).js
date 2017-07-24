function Mostrar()
{
var num = prompt("Ingrese un número");
var cont = 0;
for(i=1; i<=num; i++)
{
    if(num%i==0)
    {
        cont++;
        alert(i);
    }
}
alert(cont);

}//FIN DE LA FUNCIÓN