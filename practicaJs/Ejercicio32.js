// 32. Escriba una función llamada addOnlyNums que pueda aceptar cualquier cantidad de argumentos
// (incluidos números o cadenas) y devuelva la suma de solo los números
 
function addOnlyNums(...arg){
    let suma=0;  // let suma =""; y devolverá una cadena
    for(let i=0;i<arg.length;i++){
 
        if(typeof arg[i] !== 'string')
        suma += arg[i];
    }
    return suma;
}
 
//console.log(addOnlyNums(1,2,3,54,6,7,4,"sdbkjbfjs"));