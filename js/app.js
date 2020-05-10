// Variables
const email = document.getElementById('email')
const asunto = document.getElementById('asunto')
const mensaje = document.getElementById('mensaje')
const btnEnvia = document.getElementById('enviar')

// Event Listener
function eventListeners(){
    // Inicio de la aplicacion y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp)
}



// Funciones
function inicioApp(){
    btnEnvia.disabled = true;
}