//Haz tú validación en javascript acá

const nombreEmailAsunto = document.querySelectorAll('.formcontato__input');
const mensaje = document.querySelector('.formcontato__textarea');
const botonSubmit = document.querySelector('.formcontato__botao');

function ValidacionInputs() {
    for (let i = 0; i < nombreEmailAsunto.length; i++) {
        nombreEmailAsunto[i].setAttribute("required", "");
        nombreEmailAsunto[i].setAttribute("maxlength", "50");
    }

    mensaje.setAttribute("required", "");
    mensaje.setAttribute("max-length", "300");

    debugger
}


botonSubmit.onclick = ValidacionInputs;





