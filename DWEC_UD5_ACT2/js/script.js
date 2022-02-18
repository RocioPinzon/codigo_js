window.addEventListener("load", cargaPagina);

var animales = ['cerdo', 'gato', 'perro', 'vaca', 'zorro', 'burro', 'rana', 'leon'];
var efecto = ['rota', 'grande', 'pequenio', 'baja', 'def'];

function cargaPagina(){

    var contenedor = document.createElement('div');

    contenedor.setAttribute('id','animales');
    document.body.appendChild(contenedor);

    for(var i=0; i<animales.length;i++){
        var animal = document.createElement('div');
        animal.setAttribute('id', animales[i]);
        animal.classList.add('animal');
        animal.style.backgroundImage = 'url(images/'+ animales[i] + '.png)';
        //animal.addEventListener('click', manejador);
        contenedor.appendChild(animal);
    }

    var audio = document.createElement('audio');
    audio.setAttribute('id', 'audio');
    audio.setAttribute('preload', 'auto');
    document.body.appendChild(audio);

    
    var source = document.createElement('source');
    source.setAttribute('id', 'source');
    source.setAttribute('type', 'audio/wav');
    audio.appendChild(source);

    document.querySelectorAll('.animal').forEach(element => {  element.addEventListener('click', manejadora)
        
    });

    
}

function manejadora(){


    document.querySelector('#source').setAttribute('src', 'sounds/')

    document.getElementById(event.target.id).className = 'animal' + (efecto[Math.floor[Math.random] ]);

}