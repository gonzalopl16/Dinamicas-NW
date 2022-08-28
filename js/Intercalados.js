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
        alert('llena los campo');
    }else{
        let a = intercalar(emoji, palabra);
        alert(a);
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