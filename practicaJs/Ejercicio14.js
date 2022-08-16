// 14. Crear una función que reciba un arreglo de números enteros positivos desordenados y
// devuelva otro arreglo con los números ordenados.
 
const array14 = [1,6,4,7,4,23,4,6,32,2,4,6,3];
function order(arr){
    const orderArray = [...arr];
    orderArray.sort(comparar);
    
    return orderArray;
}
function comparar ( a, b ){ return a - b; }
// console.log(order(array14));
// console.log(array14);