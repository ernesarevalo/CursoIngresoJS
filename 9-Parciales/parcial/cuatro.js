function Mostrar()
{

var num1 = prompt("Ingrese un numero");
var num2 = prompt("Ingrese otro numero");
var suma = parseInt(num1) + parseInt(num2);
if(num1 == num2)
    {
        document.write(num1 * num2);        
    }
if(num1 > num2)
    {
        document.write(num1 - num2);
    }
if(num1 < num2)
    {
        document.write(suma);
    }
}
