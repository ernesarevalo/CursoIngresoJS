function Mostrar()
{
	var num;
	var cont=0;
	var acum=0;

while(cont<5)
{
cont++;
num=prompt("Ingrese");
num=parseInt(num);
while(isNaN(num))
	{
		num=prompt("Invalido, reingrese");
		num=parseInt(num);
	}
console.log(num);
acum=acum+num;
acum+=num;
}

document.getElementById('suma').value=acum;
document.getElementById('promedio').value=acum/cont;

}//FIN DE LA FUNCIÓN