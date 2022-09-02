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
    let acum = "\n";
    for (let i = 0; i < palabra.length; i++) {
        if (i == 0) {
            for (let j = 0; j < palabra.length; j++) {
                acum += palabra.charAt(i) + " ";
            }
        } else {
            for (let k = 0; k < i; k++) {
                acum += palabra.charAt(k) + " ";
            }
            for (let l = i; l < palabra.length; l++) {
                acum += palabra.charAt(i) + " ";
            }
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