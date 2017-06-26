/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1, num2, suma;
    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
    suma = num1 + num2;
    alert("El resultado de la suma es " + suma);
}

function restar()
{
	var num1, num2, resta;
    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
    resta = num1 - num2;
    alert("El resultado de la resta es " + resta);	
}

function multiplicar()
{ 
	var num1, num2, mult;
    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
    mult = num1 * num2;
    alert("El resultado de la multiplicación es " + mult);	
}

function dividir()
{
	var num1, num2, divi;
    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
    divi = num1 / num2;
    alert("El resultado de la división es " + divi);
}

