function Mostrar()
{
	var num;
	var cont=0;
	var acum=0;
	var resp="si";

while(resp=="si") // -- while(!isNaN(num)) prompt arriba de todo.
{
	cont++; // contador
	num=prompt("Ingrese un numero");
	num=parseInt(num);
	acum+=num; //es la operacion puede ser acum +=, -=, *=, /=
	resp=prompt("Desea continuar?");
}

document.getElementById('suma').value=acum;
document.getElementById('promedio').value=acum/cont;

}//FIN DE LA FUNCIÓN
/*
*/