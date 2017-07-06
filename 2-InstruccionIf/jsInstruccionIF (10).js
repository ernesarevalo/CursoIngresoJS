function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num;
	num = Math.round(Math.random()*(10 - 1) + 1);
	if (num > 8){
		alert("Excelente");
	}if (num < 4){
		alert("Vamos, la proxima se puede");
	}if (num >= 4 && num <=8){
			alert("Aprobó");
		}
}//FIN DE LA FUNCIÓN