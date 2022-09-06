/* Ejercicio 6: Deduce la salida
Primero se ejecuta la funcion cartoon y lo muestra por consola 'Cartoon'. Por otro lado llama al settimeout y la promesa y espera
Por otro lado invica la funcion jerry y lo muestra por consola 'Jerry'
resuleve la promesa y muestra el mesanje 'should it be right after Tom, before Jerry?'
por ultimo el settimeout y muestra 'Tom'
*/

const tom = () => console.log('Tom');
const jerry = () => console.log('Jerry');

const cartoon = () => {
console.log('Cartoon');
setTimeout(tom, 5000);
new Promise((resolve, reject) =>
resolve('should it be right after Tom, before Jerry?')
).then(resolve => console.log(resolve))
jerry();
}

cartoon();