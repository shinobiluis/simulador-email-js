// Variables
const email = document.getElementById('email')
const asunto = document.getElementById('asunto')
const mensaje = document.getElementById('mensaje')
const btnEnvia = document.getElementById('enviar')

// Event Listener
eventListeners()
function eventListeners(){
    // Inicio de la aplicacion y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp)

    email.addEventListener('blur', validarCampo)
    asunto.addEventListener('blur', validarCampo)
    mensaje.addEventListener('blur', validarCampo)
}



// Funciones
function inicioApp(){
    btnEnvia.disabled = true;
}

function validarCampo() {
    console.log("Validamos el input")
    // Se valida la longitud del texto y que no este vacio
    validarLongitud(this);

    // valida unicamente el email
    console.log(this.type)
    if (this.type === 'email') {
        validarEmail(this)
    }
    // Si encontramos un elemento con una clase error
    let errores = document.querySelectorAll('.error')
    console.log(errores)
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if (errores.length === 0) {
            btnEnvia.disabled = false;
        }
    }
}

function validarLongitud(campo) {
    console.log(campo.value)
    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green'
        campo.classList.remove('error')
    }else{
        campo.style.borderBottomColor = 'red'
        campo.classList.add('error')
    }
}

function validarEmail(campo){
    const mensaje = campo.value;
    if ( mensaje.indexOf('@') !== -1 ) {
        campo.style.borderBottomColor = 'green'
        campo.classList.remove('error')
    }else{
        campo.style.borderBottomColor = 'red'
        campo.classList.add('error')
    }
}