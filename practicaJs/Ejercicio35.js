// 35. Escriba una función llamada onlyUniques que pueda tomar cualquier cantidad de argumentos
// y devuelva un arreglo de solo los argumentos únicos
 
function onlyUniques(...arg){
 
    const mySet = new Set();
 
    for(let i =0 ; i < arg.length ; i++){
        mySet.add(arg[i]);
    }
    let r = Array.from(mySet); 
    return r;
 
 
}
console.log(onlyUniques(1,1,1,1,1,1,"ejenj", 'l ,' , 34 , 6456)); */

/* nearestValue([4, 7, 10, 11, 12, 17], 9) == 10
nearestValue([4, 7, 10, 11, 12, 17], 8) == 7
nearestValue([4, 8, 10, 11, 12, 17], 9) == 8
nearestValue([4, 9, 10, 11, 12, 17], 9) == 9
nearestValue([4, 7, 10, 11, 12, 17], 0) == 4 */