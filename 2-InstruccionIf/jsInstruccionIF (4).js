function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;
edad = parseInt(edad);
if (edad >=13 && edad <=17){
    alert("es adolescente");
}
/* es lo mismo asi=
if ( !(edad < 13 || edad > 17) ) {
    alert("Es adolescente");
}

}//FIN DE LA FUNCIÓN