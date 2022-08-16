// 31. Escriba una función que pueda tomar cualquier número de argumentos y devuelva la suma
// de todos los argumentos
 
function addition(...arg){
    let suma=0;  // let suma =""; y devolverá una cadena
    for(let i=0;i<arg.length;i++){
        suma += arg[i];
    }
    return suma;
}
 
// console.log(addition(1,2,3,54,6,7,4,"sdbkjbfjs"));