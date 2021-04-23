var contador = false;
/**
* funcion demo del evento onclick en la tabla
*/
function envia() {
    if (contador == false)
        document.forms[0].submit();
}
function envia2() {
    document.forms[0].submit();
    setTimeout("contador=false", 500);
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