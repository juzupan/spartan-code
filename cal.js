const numeros = document.getElementsByName('data-number');
const boperaciones = document.getElementsByName('opera');
const igualacion = document.getElementsByName('igual')[0];
const borrador = document.getElementsByName('borra')[0];
var resultado = document.getElementById('resultado');
var opeactual = '';
var opeanterior = '';
var ope = undefined;


numeros.forEach(function (boton) {
    boton.addEventListener('click', function () {
        agregarnumero(boton.innerText);
    })
})

boperaciones.forEach(function (boton) {
    boton.addEventListener('click', function () {
        selectOperacion(boton.innerText);

    })
})

igualacion.addEventListener('click', function () {
    calcular();
    actualizardisplay();
})

borrador.addEventListener('click', function () {
    limpia();
    actualizardisplay();
})

function agregarnumero(num) {
    opeactual = opeactual.toString() + num.toString();
    actualizardisplay();
}

function actualizardisplay() {
    resultado.value = opeactual;
}

function limpia() {
    opeactual = '';
    opeanterior = '';
    ope = undefined;
}

function selectOperacion(op) {
    if (opeactual == '') return;
    if (opeanterior !== '') {
        calcular()
    }
    ope = op.toString();
    opeanterior = opeactual;
    opeactual = '';
}

function calcular() {
    var calculo;
    const anterior = parseFloat(opeanterior);
    const actual = parseFloat(opeactual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (ope) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'X':
            calculo = anterior * actual;
            break;
        case '/':
            if (actual == '0') {


                alert('No es posible dividir entre 0, intenta con otros valores');
                limpia();
            }
            else {
                calculo = anterior / actual;
                break;
            }

        default:
            return;
    }
    opeactual = calculo;
    ope = undefined;
    opeanterior = '';
}

limpia();