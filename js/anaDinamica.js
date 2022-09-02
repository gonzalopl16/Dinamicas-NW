datos={
    palabra:''
}
let palabra = document.querySelector('#palabra');
let reducio = document.querySelector('.reducio');

palabra.addEventListener('input', leer);

reducio.addEventListener('submit', function(evento){
    evento.preventDefault();

    const {palabra} = datos;
    if(palabra === ''){
        mostrar('')
    }else{
        let a = intercalar(palabra);
        mostrar(a);
    }
})

function leer(evento){
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}

function intercalar(palabra){
    let sustituto = palabra.toLowerCase();
    let acum = sustituto + "\n";
    for (let i = 0; i <= sustituto.length - 1; i++) {
        for (let j = 0; j <= i; j++) {
            acum += sustituto.charAt(j).toUpperCase();
        }
        for (let k = i + 1; k <= sustituto.length- 1; k++) {
            acum += sustituto.charAt(k);
        }
        acum += "\n";
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