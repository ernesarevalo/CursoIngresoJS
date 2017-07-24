function Mostrar()
{
num=prompt("Ingrese un número");
for(i=1 ; i < 1000000 ; i++)
{
    alert(i);
    if(i>=parseInt(num))
    {
        break;
    }
}



}//FIN DE LA FUNCIÓN