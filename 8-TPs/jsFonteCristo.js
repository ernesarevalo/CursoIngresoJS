/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
}

function NumerosPares()
    {
    var num = document.getElementById("numero").value;
    var contpares = 0;
      if(num<1)
             {
                alert("Ingrese Positivo");
             }
      else
      {
      }
      for(i=1; i<=num; i++)
      {
          if(i%2==0)
          {
              contpares++;
              alert(i);
             
          }
     }
      alert(contpares);
     }
function NumerosImpares()
    {
        var num = document.getElementById("numero").value;
        var contimp = 0;
        if(num<1)
        {
            alert("Ingrese positivo");
        }
        else
        {
            for(i=1; i<=num; i++)
            {
                if(i%2!=0)
                {
                    contimp++;
                    alert(i);
                }
            }
        }
        alert(contimp);
    }
function NumerosDivisibles()
{
    var num = document.getSelection("numero").value;
    var divi = 0
}