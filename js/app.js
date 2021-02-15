document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });

  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    var clave = document.getElementById('contraseña').value;
    if (clave.length == 0) {
      alert('No has escrito nada en la contraseña');
      return;
    } else if (clave.length < 6) {
        alert('La contraseña no es válida debe tener mas de 6 digitos')
        return;
    }
    this.submit();
  }