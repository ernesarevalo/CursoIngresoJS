function Mostrar()
{
//tomo la edad  
var edad;
edad = parseInt(document.getElementById("edad").value);
if(edad < 13){
    alert("Eres un niño");
}if(edad > 17){
    alert("Eres mayor de edad");
}if(edad >=13){
    if(edad <= 17){
        alert("Eres un adolescente");
    }
}
}//FIN DE LA FUNCIÓN