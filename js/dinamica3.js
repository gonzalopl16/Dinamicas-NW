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
        mostrar('');
    }else{
        let a = intercalar(emoji, palabra);
        mostrar(a);
    }
})

function leer(evento){
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}

function intercalar(emoji, palabra){
    let acum="";
    let tamaño = palabra.length;
    for(i = 0; i<= tamaño-1 ; i++){
        if(i%2===0){
            acum += emoji + emoji + palabra[i] + palabra[i] + emoji + emoji + "\n";
        }else{
            acum += palabra[i] + palabra[i] + emoji + emoji +palabra[i] + palabra[i] + "\n";
        }
    };
    return acum
}

function mostrar(mensaje){
    const error = document.createElement('pre');
    error.classList.add('alert');
    if(mensaje === ''){
        error.classList.add('alert-danger');
        error.textContent ='!Debes llenar los campos!';
    }else{
        error.classList.add('alert-warning');
        error.textContent = mensaje;
    }
    formulario.appendChild(error);
    //Set Timeout
    setTimeout(() => {
        error.remove();
    }, 10000);
}