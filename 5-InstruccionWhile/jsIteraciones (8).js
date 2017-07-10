function Mostrar()
{
	var cont=0;
	var pos=0;
	var neg=1;
	var resp="si";
	var num=0;
while(resp.toLowerCase=="si")
{
	num=prompt("Ingrese el número");
	num=parseInt(num);
	//validar si se quiere.
	if(num>=0)
	{
		pos+=num;
	}
	else
	{
		neg*=num;
	}
	resp=prompt("Desea continuar?");
}

document.getElementById('suma').value=pos;
document.getElementById('producto').value=neg;

}//FIN DE LA FUNCIÓN