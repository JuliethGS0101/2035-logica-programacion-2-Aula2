let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;

}
function intentoUsuario(){
    alert('Click desde el boton');
    return;
}


function generarNumeroSecreto() {
     return Math.floor(Math.random()*10)+1;
}

asignarTexto('h1', 'Juego del numero secreto');
asignarTexto('p', 'Indica un numero del 1 al 10');
