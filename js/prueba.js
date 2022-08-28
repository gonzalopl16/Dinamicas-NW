datos={
    emoji: ''
}
let emoji = document.querySelector('#emoji');
let prueba1 = document.querySelector('.prueba');

emoji.addEventListener('input',leer);

prueba1.addEventListener('submit', function(evento){
    evento.preventDefault();

    const {emoji} = datos;
    if(emoji === ''){
        alert('llena el campo');
    }else{
        let resultado = '';
        for(i = 5; i>0; i--){
            resultado += emoji + "\n";
        }
        alert(resultado);
    }
})

function leer(evento){
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}

