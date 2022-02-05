window.addEventListener("load", cargaPagina);
var myStorage = window.localStorage;

function cargaPagina(){
    cargaManejadores();
}

// DECLARACION DE EVENTOS
function cargaManejadores(){

    compruebaCompatibilidad();
    document.getElementById("incrementar").addEventListener("click", incrementar); 
    document.getElementById("decrementar").addEventListener("click", decrementar);
    document.getElementById("logout").addEventListener("click", logout);
}

// MANEJADORES DE EVENTOS

function incrementar(){

    let contadorActual = sessionStorage.getItem("contador"); // creamos una variable para guardar el item del contador
    sessionStorage.setItem("contador", Number(contadorActual)+1); // inlcuimos en la session(coockie) el contador mas uno
    document.getElementById("contador").innerHTML = "Contador" + contadorActual ; // mostramos el contador
}

function decrementar(){

    let contadorActual = sessionStorage.getItem("contador"); // creamos una variable para guardar el item del contador
    sessionStorage.setItem("contador", Number(contadorActual)-1); // inlcuimos en la session(coockie) el contador mas uno
    document.getElementById("contador").innerHTML = "Contador" + contadorActual ; // mostramos el contador 

}

function logout(){

    alert("Se ha cerrado la sesion de " + localStorage.getItem("usuario"));
    sessionStorage.setItem("contador","0");
    localStorage.removeItem("usuario");
    document.getElementById("saludo").innerHTML = "";
}

function compruebaCompatibilidad(){
    if(typeof(Storage)!=="undefined"){
        alert("Tu navegador acepta almacenamiento local");

        if(localStorage.usuario!=null){

            document.getElementById("saludo").innerHTML = "¡Bienvenido/a de nuevo " + localStorage.usuario + "!";

        }else{

            localStorage.usuario = prompt("¿Como te llamas?");
            document.getElementById("saludo").innerHTML = "Es tu primera visita, " + localStorage.usuario;
        }


        if(!sessionStorage.getItem("contador")){
            sessionStorage.setItem("contador","0");
            
        }

    }else{
        alert("Tu navegador NO acepta almacenamiento local");
    }


}