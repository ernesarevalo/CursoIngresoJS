function Mostrar()
{
var num = prompt("Ingrese un número");
var cont = 0
for(i=1; i <= num ; i++)        //valor ; condicion ; 
{
    if(i%2==0)    //%2==0 para saber si es para
    {
        cont++;
        alert(i);
    }
}
alert(cont);
}//FIN DE LA FUNCIÓN