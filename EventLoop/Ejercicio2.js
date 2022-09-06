// Ejercicio 2: ¿Cuál es la salida de este código?
/* Se ejecuta por consola "Lets do it". Luego invoca f1 cuatro veces mostrando por consola 'f1' y por ultimo resuelve el settimeout y muestra por consola Let's do it!"*/

function f1() {
    console.log('f1');
 }
 
 console.log("Let's do it!");
 
 setTimeout(function() { console.log('in settimeout'); }, 0);
 f1();
 f1();
 f1();
 f1(); 