/* 9. Deduce la salida 
Primero llama f4 y muestra por consola 'f4'
Luego resuelve las promesas y muestra el mensaje de 'Sonic' 
y el mensaje de 'Albert' 
Muestra por consola 'f1' ​
Muestra por consola 'f2' 
y por ultimo muestra por consola 'f3'
*/

const f1 = () => {
    console.log('f1');
    f2();
    }
    const f2 = () => console.log('f2');
    const f3 = () => console.log('f3');
    const f4 = () => console.log('f4');
    f4();
    setTimeout(f1, 0);
    new Promise((resolve, reject) => {
    resolve('Sonic');
    }).then(result => console.log(result));
    setTimeout(f3, 0);
    new Promise((resolve, reject) => {
    resolve('Albert');
    }).then(result => console.log(result));