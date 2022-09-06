// Ejercicio 1: Analiza cual es la salida del siguiente código:

/*Saldra primero por "main", luego saldrá por F2 por consola, y despues la primera y segunda promesas ya resultas ('I am a Promise, right after f1 and f3! Really?' y 'I am a Promise after Promise!)
Por otra parte saldra F3 y como ultimo aparecera F1. */

function f1() {
    console.log('f1');
}
function f2() {
    console.log('f2');
}
function f3() {
    console.log('f3');
}
function main() {
    console.log('main');
    setTimeout(f1, 50);
    setTimeout(f3, 30);
    new Promise((resolve, reject) =>
        resolve('I am a Promise, right after f1 and f3! Really?')
    ).then(resolve => console.log(resolve));
    new Promise((resolve, reject) =>
        resolve('I am a Promise after Promise!')
    ).then(resolve => console.log(resolve));
    f2();
}
main();