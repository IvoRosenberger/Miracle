// 26. Crea una función que reciba una cadena y lo devuelva con todas las palabras con su
// primera letra mayúscula
function primeraMayuscula(str) {
 
 
    let newString = str.substring(0,1).toUpperCase();    
    for(let i =1; i<str.length; i++){
 
           
        let space= str.substring(i-1,i);
        if( space == ' '){
            newString += str.substring(i,i+1).toUpperCase();           
        }else{
            newString += str.substring(i,i+1);
        }
 
 
    }
 
    return newString;
 
}
 
//console.log(primeraMayuscula("augusto de prinzio"))
 