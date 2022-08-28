datos={
    emojiFav: '',
    emoji1:'',
    emoji2:''
}
let emojiFav = document.querySelector('#emojiFav');
let emoji1 = document.querySelector('#emoji1');
let emoji2 = document.querySelector('#emoji2');
let form = document.querySelector('.form');

emojiFav.addEventListener('input',leer);
emoji1.addEventListener('input',leer);
emoji2.addEventListener('input',leer);

form.addEventListener('submit', function(evento){
    evento.preventDefault();

    const {emojiFav, emoji1, emoji2} = datos;
    console.log(datos);
    if(emojiFav === '' || emoji1 === '' || emoji2 === ''){
        alert('llena los campo');
    }else{
        let a = funcion(emojiFav, emoji1, emoji2);
        mostrar(a);
    }
})

function leer(evento){
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}


function funcion(emojiFav, emoji1, emoji2){
    let acum = '';
    for(i = 0; i < 8; i++){
        acum += emojiFav;
    }
    acum += "\n"+emojiFav;
    for(i=0;i<5;i++){
        acum += emoji1;
    }
    acum += emoji2 + emojiFav + "\n"+emojiFav+emoji1;
    
    for(i = 0; i<3; i++){
        acum+= emoji2;
    }
    acum += emoji1 + emoji2 + emojiFav + "\n"+
    emojiFav+emoji1 + emoji2 + emoji1 + emoji2 + 
    emoji1 + emoji2 + emojiFav + "\n" +
    emojiFav+emoji1+emoji2;
    for(i = 0; i<3;i++){
        acum += emoji1;
    }
    acum+= emoji2 +emojiFav + "\n" +
    emojiFav + emoji1;
    for(i=0;i<5;i++){
        acum += emoji2;
    }
    acum += emojiFav + "\n";
    for(i = 0; i < 8; i++){
        acum += emojiFav;
    }
    return acum
}

function mostrar(mensaje){
    const error = document.createElement('pre');
    error.textContent = mensaje;
    
    error.classList.add('error');
    formulario.appendChild(error);

    //Set Timeout
    setTimeout(() => {
        error.remove();
    }, 10000);
}