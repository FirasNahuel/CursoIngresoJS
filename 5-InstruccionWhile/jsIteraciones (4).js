function mostrar()
{
	var numero;
	
	while (!(numero >= 0 || numero >= 10)){
		numero = prompt("ingrese un número entre 0 y 10.");
		
	}
	 document.getElementById("numero").value = numero;


}//FIN DE LA FUNCIÓN