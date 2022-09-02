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
    let acum = '';
    let tamaño = palabra.length;
    let n = 0;
    if(tamaño <= 3){
        acum = encerrar(tamaño,emoji, palabra,n);
    }else if(tamaño === 4||tamaño === 5){
        n = 1;
        acum = encerrar(tamaño,emoji, palabra,n);
    }else if(tamaño ===6 || tamaño === 7){
        n = 2;
        acum = encerrar(tamaño,emoji, palabra,n);
    }else if(tamaño ===8 || tamaño == 9){
        n = 3
        acum = encerrar(tamaño,emoji, palabra,n);
    }else if(tamaño >=10){
        n = 4;
        acum = encerrar(tamaño,emoji, palabra,n);
    }
    
    return acum;
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

function encerrar(tamaño, emoji, palabra, n){
    let acum = '';
    for(i = tamaño-n; i>0; i--){
        acum+=emoji;
    }
    acum += "\n" + emoji + palabra + emoji + "\n";
    for(i = tamaño-n; i>0; i--){
        acum+=emoji;
    }
    return acum;
}