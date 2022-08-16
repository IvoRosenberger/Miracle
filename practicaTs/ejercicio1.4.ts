/*Ejercicio 1.4
Dado el siguiente codigo:
1 Añadir anotaciones de tipo (lo más explícitas posible)
2 Solucionar errores (si corresponde)*/
var entero = 6;
var decimal = 6.66;
var hexadecimal = 0xf00d;
var binario = 666;
var octal = 484;
var ceroNegativo = -0;
var enRealiadadNumero = NaN;
var mayorNumero = Number.MAX_VALUE;
var elNumeroMasGrande = Infinity;
var miembros = [
    entero,
    decimal,
    hexadecimal,
    binario,
    octal,
    ceroNegativo,
    enRealiadadNumero,
    mayorNumero,
    elNumeroMasGrande
];
miembros[0] = '12345';
//console.log('[Ejercicio 1.4]', miembros); 