function Mostrar()
{
var dia = prompt("Que dia es hoy?");

switch (dia)
{
    case "Sabado":
    case "Domingo":
        alert("Es fin de semana");
        break;
    default:
        alert("A trabajar!!!!!");
        break;
}
}
