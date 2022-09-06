/* Ejercicio 4: ¿Cuál es el resultado del siguiente código?
Primero se ejecuta por consola: Let's do it!
Luego muestra 'f4'
luego muestra 'f1'
Luego muestra 'f3'
y por ultimo muestra 'f2' */

function f1() {
    console.log('f1');
    }
    
    function f2() {
    console.log('f2');
    }
    
    function f3() {
    console.log('f3');
    }
    
    function f4() {
    console.log('f4');
    }
    
    console.log("Let's do it!");
    setTimeout(function() {f1();}, 0);
    f4();
    setTimeout(function() {f2();}, 5000);
    setTimeout(function() {f3();}, 3000);