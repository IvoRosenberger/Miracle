// 10. Escribe una función recursiva sum(arr, n) que retorne la suma de los primeros n elementos
// del arreglo arr
var suma =0;
function sum(arr, n) {
    
    if(n>0){
        
        suma += arr[n-1];
        
        n-=1;
   
        return sum(arr,n);
        
 
    }else{
        return suma;
    }
 
}
 
 
const recursive = [1,2,3,4,5,6,7,8,9,10];
/* console.log(sum(recursive,2)); */