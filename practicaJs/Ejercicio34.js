// 34. Escriba una función llamada combineTwoArrays que tome dos arreglos como argumentos
// y devuelva un solo arreglo que combine ambos (usando el operador ...)
 
function combineTwoArrays(arr1,arr2){
    const newArray = [...arr1, ...arr2];
    
    return newArray;
}
 
// console.log(combineTwoArrays([1,2] , ["ki", '0']));