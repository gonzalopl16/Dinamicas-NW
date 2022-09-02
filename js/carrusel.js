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
    let acum = palabra + "\n";
    let letras = palabra.split('');
    let contador = 0;
    while (contador < letras.length) {
        let last = letras[letras.length - 1];
        for (let i = palabra.length - 2; i >= 0; i--) {
            letras[i + 1] = letras[i];
        }
        letras[0] = last;

        for (let i = 0; i < letras.length; i++) {
            acum += letras[i];
        }
        acum += "\n";
        contador++;
    }
    return acum;
}

function mostrar(mensaje){
    const error = document.createElement('pre');
    error.classList.add('alert');
    let condicion = false;
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