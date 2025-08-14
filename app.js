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
    if (amigos.includes(nombre)){
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
    const lista = document.getElementById("listaAmigos");
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
//Se declara la funcion que se ejecuta cuando el usuario hace clic sortear amigo.
function sortearAmigo(){
//Compruba que esten por lo menos 2 nombres en la lista, si no se cumple muestra una alerta y detiene la funcion.
    if(amigos.length < 2){
        alert("Necesitas por lo menos 2 amigos para poder hacer el sorteo");
        return;
    }
    //Genera un numero entero aleatorio entre 0 y la condicion amigos,legth, ese numero representa la pocision del amigo sorteado.
    const aleatorio = Math.floor(Math.random() * amigos.length);
    //Guarda en la variable amigos Sleccionado el nombre que esta en la posicion aleatorio.
    const amigoSeleccionado = amigos[aleatorio];
    //Muestra en el elemento con id 'resultado' el nombre del amigo sorteado, con la parte del nombre en negritas
    document.getElementById("resultado").innerHTML = "Amigo sorteado: <strong>" + amigoSeleccionado + "</strong>";
}