function Mostrar()
{
var cont = 0;
var importe;
var max;
var min;
var bandera=true;

while(cont < 24)
{
    cont++; //contador para dias
    importe = prompt("Ingrese monto de venta");
    while(importe < 0) // Loop para validar
    {
        importe = prompt("Monto incorrecto, reingrese");
    }
    if(bandera)
    {
        bandera = false; //es para que solo ingrese una vez sola, le cambia el valor a bandera a false asi no sigue ntrando
        max = importe;
        min = importe;
    }
    else
    {
        if(importe > max)
        {
            max = importe;
        }
        if(importe < min)
        {
            min = importe;
        }
    }
}
alert("El importe mayor es " + max);
alert("El importe menor es " + min);
}

/*



*/
