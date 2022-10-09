let pantalla = document.getElementById('screen_content');
let contenido = '';
let salida = '';

function capture(e) {
    contenido += e.innerHTML;
    contenido.length < 20 ? mostrar(contenido) : mostrar(contenido.slice(0, 19));

    mostrar(contenido)

}

function controlLongitudNumber(){
    let aun = pantalla.innerText;
    aun.toString().length > 2 ?  pantalla.innerHTML = parseInt(aun.toString().slice(0, aun.length)) : pantalla.innerHTML = aun;
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
        // pantalla.innerText = result;

    } else if (regexPi.test(co)) {
        console.log('entro a Pi')
        let res = eval(co.replace(regexPi, '3.14159'));
        console.log(res)
        pantalla.innerText = res;
    } else if (co.toString().split('').length > 20) {
        pantalla.innerText = parseInt(co.toString().slice(19, co.length))
    } else {
        pantalla.innerText = eval(co);
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

    contenido = ' '
    mostrar(' ')

}


/*
document.getElementById('one').addEventListener(mostrar(this));
document.getElementById('two').addEventListener('click',  mostrar(2), false);
document.getElementById('calc').addEventListener('click',  mostrar(2), false);
document.getElementById('multiplied').addEventListener('click',  mostrar('*'), false);
*/
// Capture Keyboard 


