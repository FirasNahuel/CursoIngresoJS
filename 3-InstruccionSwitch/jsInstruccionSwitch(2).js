function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch (mes){
    case"Enero":
    case"Febrero":
    case"Marzo":
    case"Abril":
    case"Mayo":
    case"Junio": 
        
     alert("Falta para el invierno");
       break;

    case"Julio":
    case"Agosto":

    alert("Abrigrate que hace frio");
    break;
    default: alert("Ya paso el frio, Ahora calor!!!");


}






}//FIN DE LA FUNCIÓN