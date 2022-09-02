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
    error.textContent = mensaje;
    error.classList.add('alert');
    error.classList.add('alert-warning');
    formulario.appendChild(error);
    //Set Timeout
    setTimeout(() => {
        error.remove();
    }, 10000);
}