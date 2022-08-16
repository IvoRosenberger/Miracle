//Ejercicio 1.6
//Queremos representar un elemento de inventario como una estructura donde la primera entrada
//es el nombre del artículo y la segunda es la cantidad.
//Dado el siguiente codigo:
//2 Solucionar errores (si corresponde)*/
var elementoInventario = ['tuerca', 11];
// despues lo desestructuramos
var nombre = elementoInventario[0];
var cantidad = elementoInventario[1];
var mensaje = agregarInventario(nombre, cantidad);
console.log('[Ejercicio 1.6]', mensaje);
function agregarInventario(nombre, cantidad) {
    return "Se agregaron ".concat(cantidad, " ").concat(nombre, "s al inventario.");
}