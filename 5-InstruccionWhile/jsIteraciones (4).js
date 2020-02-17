function mostrar()
{
	var numero;

	numero =parseInt(prompt("Ingrese un numero entre 0 y 9"));
	
	
	while (numero < 0 || numero > 9 || isNaN(numero)){
		numero = parseInt(prompt("Error. El numero debe estar entre 0 y 9"));
		 
		
	}
	 
	 document.getElementById("Numero").value = numero;


}//FIN DE LA FUNCIÓN