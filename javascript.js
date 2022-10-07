let pantalla =  document.getElementById('screen_content');
let delet  = document.getElementById('delete');
let clear = document.getElementById('clear');
let contenido = '';

function capture(e){
    contenido += e.innerHTML;
    mostrar(contenido)
    

}

function mostrar(cont){
    pantalla.innerHTML = cont;

    console.log( 9*9)
}
function calcular(){
    console.log(pantalla.innerText)
    let co = pantalla.innerText;
    pantalla.innerText = 
    
}

/*
function clear(){
    pantalla.innerText = '';
}
*/

/*
document.getElementById('one').addEventListener(mostrar(this));
document.getElementById('two').addEventListener('click',  mostrar(2), false);
document.getElementById('calc').addEventListener('click',  mostrar(2), false);
document.getElementById('multiplied').addEventListener('click',  mostrar('*'), false);
*/
// Capture Keyboard 


