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
    error.textContent = mensaje;
    error.classList.add('alert');
    error.classList.add('alert-warning');
    formulario.appendChild(error);
    //Set Timeout
    setTimeout(() => {
        error.remove();
    }, 10000);
}