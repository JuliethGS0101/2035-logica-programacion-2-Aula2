let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;

}
function verificarUsuario(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').Value);
    console.log(typeof(numeroUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroUsuario);
    console.log(numeroUsuario === numeroSecreto);
    return;
}


function generarNumeroSecreto() {
     return Math.floor(Math.random()*10)+1;
}

asignarTexto('h1', 'Juego del numero secreto');
asignarTexto('p', 'Indica un numero del 1 al 10');
 