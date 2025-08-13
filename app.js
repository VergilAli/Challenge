//Declaracion de arreglo, donde se guardaran los nombres.
let amigos = [];

//Declaracion de funcion donde se capturara los datos y se ejecutara cuando el usuario de click en agregar.
function capturaAmigo(){
//Obtiene el valor que el usuario asigne
//.trim() elimina espacios en blanco
    const nombre = document.getElementById("amigo").value.trim();
//Verifica si esta vacia la caja de texto, si lo esta muestra el alert y termina la funcion utilizando el return.
    if (nombre === ""){
        alert("Introduce un nombre valido.");
        return;
    }
//Analiza si el nombre ya existe en el arreglo utilizando .includes(), si esta repetido mostrara el alert y se detiene la funcion.
    if (amigos.include(nombre)){
        alert("Este nombre ya existe");
        return;
}
//Agrega el nombre en el final del arreglo
amigos.push(nombre);
//Limpia el campo de texto para que el usuario agregue otro nombre.
document.getElementById("amigo").value = "";
//Llama a la funcion para actualizar la lista ya asignada por el usuario.
mostrarLista();
}

//Declaracion de funcion que mostrara visualmente la lista que asigno el usuario.
function mostrarLista(){
//Guarda en la variable lista la referencia al elemento, donde se listaran los nombres.
    const lista = document.getElementById("lsitaAmigos");
//Borra todo el contenido html que tenga la lista para evitar duplicados cuando se actualice.
    lista.innerHTML = "";
//Inicia un bucle que recorre todos los elementos del arreglo.
    for(let posicion = 0; posicion < amigos.length; posicion++){
        //Crea un elemento nuevo 'li'
        const elemento = document.createElement("li");
        //Asigna como texto del 'li' el nombre que esta en la posicion posicion del arreglo 'amigos'
        elemento.textContent = amigos[posicion];
        //Insertar ese 'li' dentro del 'ul' para que aparezca en pantalla.
        lista.appendChild(elemento);

    }
}