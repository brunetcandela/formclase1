$(document).ready(function () {
    $("form").fadeIn(2000);
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('userName').value;
    if(usuario.length == 0) {
        document.getElementById('errorNombre').innerHTML='No ingresaste tu nombre'
      return;
    }
    var email = document.getElementById('userMail').value;
    if (email.length == 0) {
        document.getElementById('errorMail').innerHTML='No ingresaste tu mail'
      return;
    }
    this.submit();
  }