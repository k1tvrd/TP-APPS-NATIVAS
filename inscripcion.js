let boton = document.getElementById('botonInscripcion');
let mensaje = document.getElementById('mensaje');


boton.addEventListener('click', function() { 

    event.preventDefault(); //Previene el comportamiento por defecto del enlace
    mensaje.classList.remove('msj');

}
)
// el boton aun no es funcional, ya que se puede ingresar cualquier cosa en el input y 
// es registrado como valido.
