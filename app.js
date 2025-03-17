const nombresAmigos = [];
const nombreSorteado=[];

function agregarAmigo() {

    let nombre = document.getElementById('amigos').value;
    
    if(nombre) {
        nombresAmigos.push (nombre);
        document.getElementById('amigos').value = '';
        actualizarLista();
        console.log(nombresAmigos);
    } else {
        alert('Por favor, escribe un nombre');
    }
    
}

function actualizarLista(){
      
    let lista = document.getElementById('listaAmigos');
        
     lista.innerHTML = '';
    
     nombresAmigos.forEach(nombre => {
     lista.innerHTML += `<li>${nombre}</li>`;
        });
}   

function sortearAmigo() {
    if (nombresAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    let nombreSorteado = nombresAmigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `Amigo sorteado: <strong>${nombreSorteado}</strong>`;

    console.log(`Nombre sorteado: ${nombreSorteado}`);
}