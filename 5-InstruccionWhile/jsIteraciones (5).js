function mostrar()
{

var sexo;



prompt("Ingrese Sexo f ó m");

while(!(sexo == 'f' || sexo == 'm')) {
    sexo = prompt("Error. ingrese f ó m .");
}



document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN