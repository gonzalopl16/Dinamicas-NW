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
        mostrar("Debe llenar los campos")
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
    error.textContent = mensaje;
    error.classList.add('alert');
    error.classList.add('alert-warning');
    formulario.appendChild(error);
    //Set Timeout
    setTimeout(() => {
        error.remove();
    }, 10000);
}