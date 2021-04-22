/**
  * funcion demo del evento onclick en la tabla
  */
function envia() {
    document.forms[0].submit();
}
/**
* funcion de captura de pulsación de tecla en Internet Explorer
*/
var tecla;
function capturaTecla(e) {
    if (document.all)
        tecla = event.keyCode;
    else {
        tecla = e.which;
    }
    if (tecla == 13) {
        document.forms[0].submit();
    }
}
document.onkeydown = capturaTecla;