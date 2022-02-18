window.addEventListener("load", cargaPagina);

function cargaPagina(){
    cargaManejadores();
}

// DECLARACION DE EVENTOS
function cargaManejadores(){

    document.getElementById("agregar").addEventListener("click", agregarLi); 
    document.getElementById("quitar").addEventListener("click", quitarLi);
}

// MANEJADORES DE EVENTOS
function agregarLi(){
    var puntosListado = document.createElement("li"); // creamos una variable para guardar el item del contador
    var contenido = document.createTextNode(puntosListado);
    // console.log("\nEstamos en agregar li probando el contenido : " + contenido);
    puntosListado.appendChild(contenido);
    console.log("\nEstamos en agregar li AGREGAR probando el contenido : " + puntosListado);
}

function quitarLi(){
    console.log("\nEstamos en agregar li QUITAR probando el contenido : " );
}


// MANEJADORES DE EVENTOS


