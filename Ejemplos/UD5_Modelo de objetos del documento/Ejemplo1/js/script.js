window.onload = init;

function init(){
    alert("Cambiar párrafo");

    var parrafo = document.createElement("p") ;
    var contenido = document.createTextNode("Contenido del parrafo");
    
    parrafo.appendChild(contenido);
    document.body.appendChild(parrafo);
    
   
}

