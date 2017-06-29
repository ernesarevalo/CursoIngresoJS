function Mostrar()
{
//tomo la edad  
    var edad, estado;
    edad = parseInt(document.getElementById("edad").value);
    estado = document.getElementById("estadoCivil").value;
    if (edad > 17) {
        if(estado == "Soltero"){
            alert("Es soltero y no es menor");
        }
        }
}//FIN DE LA FUNCIÓN