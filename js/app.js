// Variables
const email = document.getElementById('email')
const asunto = document.getElementById('asunto')
const mensaje = document.getElementById('mensaje')
const btnEnvia = document.getElementById('enviar')
const formulario = document.getElementById('enviar-mail')
const resetBtn = document.getElementById('resetBtn')


// Event Listener
eventListeners()
function eventListeners(){
    // Inicio de la aplicacion y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp)

    // eventos cuando se salen del input
    email.addEventListener('blur', validarCampo)
    asunto.addEventListener('blur', validarCampo)
    mensaje.addEventListener('blur', validarCampo)

    // Boton de enviar en el submit
    btnEnvia.addEventListener('click', enviarEmail)

    // Botton de reset
    resetBtn.addEventListener('click', formularioReset )
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

// Funcion para validad longitud de los campos
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

// funcion para validad el email
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

// Cuando se envia el correo
function enviarEmail(e) {
    e.preventDefault();
    console.log('Mail Enviado')
    const spinnerGif = document.querySelector('#spinner')
    spinnerGif.style.display = 'block';
    // Gif que envia email
    const enviado = document.createElement('img')
    enviado.src = './img/mail.gif'
    enviado.style.display = 'block';
    // Ocultar spinner y mostrar gif de enviado
    setTimeout(function(){
        spinnerGif.style.display = "none"
        document.querySelector('#loaders').appendChild(enviado)
        setTimeout(function(){
            enviado.remove();
            formulario.reset();
        },5000) // despues de 5 segundos
    }, 1000) // despues de un segundo
}

// Limpiamos el formulario
function formularioReset(e) {
    e.preventDefault()
    formulario.reset()
}