// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let listaPosicionesSorteadas = [];
let listView = []
let resultadoHTML ="";

//Mostramos el amigo sorteado en la pagina
function asignarTextoResultado(texto) {
    resultadoHTML = document.querySelector('#resultado');
    resultadoHTML.innerHTML = texto;
    return;
}

//Actualizamos la lista de amigos que se muestra en la pagina
function actualizarListaAmigos(){
    listView = document.querySelector('#listaAmigos');
    listView.innerHTML ="";

    for(i=0;i<listaAmigos.length;i++){
        listView.innerHTML += `<li>${listaAmigos[i]}</li>`;
    }
}

//Limpiamos la caja donde se ingresan los nombres de los amigos
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

//Una vez sorteados todos los amigos reiniciamos todo
function reiniciarJuego()
{
    listView.innerHTML ="";
    resultadoHTML.innerHTML = "";
    listaAmigos.length = 0;
    listaPosicionesSorteadas.length = 0;
}

//Generamos una posicion aleatoria
function generarPosicion(cantidadAmigos){
    let posicion = Math.floor(Math.random()*cantidadAmigos);

    if(listaPosicionesSorteadas.length == cantidadAmigos){
        alert("YA SE SORTEARON TODOS LOS AMIGOS");
 
    }else{
        //Si la posicion generada está incluida en el arreglo listaPosicionesSortedas
        if(listaPosicionesSorteadas.includes(posicion)){
            return generarPosicion(cantidadAmigos);
        }else{
            listaPosicionesSorteadas.push(posicion);
            return posicion;
        }
    }
}

//Agregamos un amigo al arrelgo
function agregarAmigo(){
    let amigo = document.getElementById('amigo').value.trim();
    
    //validamos que ingresen un nombre
    if(amigo != ""){
        listaAmigos.push(amigo);
        limpiarCaja();
    }else{
        alert("POR FAVOR, INSERTE UN NOMBRE");
    }
    actualizarListaAmigos();
}

//Sorteamos al amigo
function sortearAmigo(){
    let cantidadAmigos = listaAmigos.length;
    let p = generarPosicion(cantidadAmigos);
    let amigoSecreto = listaAmigos[p];

    //Si todavia quedan amigos sin sortear
    if(p!=null){
        listView.innerHTML ="";
        asignarTextoResultado(`TU AMIGO SECRETO ES: ${amigoSecreto}`);
    }
    //Si ya se sortearon todos los amigos reiniciamos
    else{
        reiniciarJuego();
    }
}