// 27. Crea una función que reciba una cadena y la devuelva en camelCase
function camelize(str) {
 
    let newString = str.substring(0,1).toLowerCase();  
      
    for(let i =1; i<str.length; i++){
 
        
        let space= str.substring(i,i+1);
        if( space == ' '){
            newString += str.substring(i+1,i+2).toUpperCase();
            i++;           
        }else{
            newString += str.substring(i,i+1);
        }
 
 
    }
 
    return newString;
 
}
console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal');