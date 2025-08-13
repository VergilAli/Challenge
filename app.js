let amigos = [];

function capturaAmigo(){
    const nombre = document.getElementById("amigo").value,trim();
    
    if (nombre === ""){
        alert("Introduce un nombre valido.");
        return;
    }

    if (amigos.include(nombre)){
        alert("Este nombre ya existe");
        return;
}

amigos.push(nombre);
document.getElementById("amigo").value = "";
}