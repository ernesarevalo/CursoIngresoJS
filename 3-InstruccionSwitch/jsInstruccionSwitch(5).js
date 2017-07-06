function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

switch (laHora) {
    case laHora >= 7:
    case laHora <= 11:
        alert("Es de mañana");        
        break;
    default:
        break;
}
	
	



}//FIN DE LA FUNCIÓN