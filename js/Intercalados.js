datos={
    emoji: '',
    palabra:''
}
let emoji = document.querySelector('#emoji');
let palabra = document.querySelector('#palabra');
let reducio = document.querySelector('.reducio');

emoji.addEventListener('input',leer);
palabra.addEventListener('input', leer);

reducio.addEventListener('submit', function(evento){
    evento.preventDefault();

    const {emoji, palabra} = datos;
    if(emoji === '' || palabra === ''){
        mostrarError('llena los campo');
    }else{
        let a = intercalar(emoji, palabra);
        mostrarError(a);
    }
})

function leer(evento){
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}

function intercalar(emoji, palabra){
    let acum = '';
    let tamaño = palabra.length;
    let n = 0;
    for(i = 0; i< tamaño; i++){
        acum += emoji;
        acum += palabra[n];
        n++;
    }
    acum += emoji;
    return acum;
}

function mostrarError(mensaje){
    const error = document.createElement('pre');
    error.textContent = mensaje;
    
    error.classList.add('error');
    formulario.appendChild(error);

    //Set Timeout
    setTimeout(() => {
        error.remove();
    }, 10000);
}