function mostrar()
{
//tomo la edad  
var edad;
edad = parseInt(document.getElementById("edad").value);
if ( !(edad >=13 && edad <=17) ) {
    alert("no es adolescente");
}
/* es lo mismo que= 
var edad;
edad = parseInt(document.getElementById("edad").value);
if ( edad < 13 || > 17 ) {
    alert("no es adolescente");
}
}//FIN DE LA FUNCIÓN