let content = document.getElementById('content');
let pantalla = document.getElementById('imput');
let contenido = '';

function capture(e) {
    console.log('entro a capturar')
    contenido += e.innerHTML;
    contenido.length < 20 ? mostrar(contenido) : mostrar(contenido.slice(0, 19));
    mostrar(contenido)
}

function captureSign(e) {
    const regexSigns = /[+-/*]/;
    if (!regexSigns.test(pantalla.innerText[pantalla.innerText.length - 1])) {
        if (content.innerText != '') {
            console.log('guardo contenido dede signo')
            contenido = pantalla.innerText;
            contenido += e.innerHTML;
            contenido.length < 20 ? mostrar(contenido) : mostrar(contenido.slice(0, 19));
            mostrar(contenido)
        } else {
            console.log('guardo contenido')
            contenido += e.innerHTML;
            contenido.length < 20 ? mostrar(contenido) : mostrar(contenido.slice(0, 19));
            mostrar(contenido)
        }
    
    }

}
function controlLongitudNumber() {
    let aun = pantalla.innerText;
    aun.toString().length > 2 ? pantalla.innerHTML = parseInt(aun.toString().slice(0, aun.length)) : pantalla.innerHTML = aun;
}

function mostrar(cont) {
    // cont.toString().length > 2 ?  pantalla.innerHTML = parseInt(cont.toString().slice(0, cont.length)) : pantalla.innerHTML = cont;
    controlLongitudNumber()
    pantalla.innerHTML = cont;
}

function calcular() {
    let result;
    let co = pantalla.innerText;
    const regexRoot = /√{1}\d/;
    //const regexRoot = /^\W{1}\d/;
    const regexPi = /π/;
    //const regexExponent = /^/ ; 
    if (regexRoot.test(co)) {
        console.log('regex Ok')
        console.log(Math.sqrt(eval(co.split('√')[1])));
        result = Math.sqrt(eval(co.split('√')[1]));
        console.log('jjj: ' + result.toString().split('').length)
        result.toString().split('').length < 20
            ? pantalla.innerText = result
            : pantalla.innerText = parseInt(result.toString().slice(19, result.length));
        contenido.innerText = co;
        // pantalla.innerText = result;

    } else if (regexPi.test(co)) {
        console.log('entro a Pi')
        let res = eval(co.replace(regexPi, '3.14159'));
        console.log(res)
        pantalla.innerText = res;
        contenido.innerText = co;
    } else if (co.toString().split('').length > 20) {
        pantalla.innerText = parseInt(co.toString().slice(19, co.length))
        console.log('co: ' + co.toString())
        content.innerText = co.toString();
    } else {
        console.log('co: ' + co.toString())
        content.innerText = co.toString() + '=';
        pantalla.innerText = eval(co);
        contenido = co;
    }

}

function rootSquare() {
    let co = pantalla.innerText;
    let regex = /√[1-9]/i;
    if (co.replace(regex)) {
        console.log('dffsafsdfasdfd')

    }

}

function borrar() {
    console.log('entro a borrar')

    contenido = ' ';
    content.innerText = '';
    mostrar(' ')

}


/*
document.getElementById('one').addEventListener(mostrar(this));
document.getElementById('two').addEventListener('click',  mostrar(2), false);
document.getElementById('calc').addEventListener('click',  mostrar(2), false);
document.getElementById('multiplied').addEventListener('click',  mostrar('*'), false);
*/
// Capture Keyboard 


 /*
        if (pantalla.innerText[pantalla.innerText.length - 1] === '+' ||
            pantalla.innerText[pantalla.innerText.length - 1] === '-' ||
            pantalla.innerText[pantalla.innerText.length - 1] === '*' ||
            pantalla.innerText[pantalla.innerText.length - 1] === '/') {
    
        } else if (content.innerText != '') {
            console.log('guardo contenido dede signo')
            contenido = pantalla.innerText;
            contenido += e.innerHTML;
            contenido.length < 20 ? mostrar(contenido) : mostrar(contenido.slice(0, 19));
            mostrar(contenido)
        } else {
            console.log('guardo contenido')
            contenido += e.innerHTML;
            contenido.length < 20 ? mostrar(contenido) : mostrar(contenido.slice(0, 19));
            mostrar(contenido)
        }
    */