// 25. Crea una función que reciba una frase como cadena y devuelva la palabra más larga:
function palabraMasLarga(str) {
    let word="";
    let wordSize =0;
    let largest="";
    let max=0;
    for(let i =0; i<str.length; i++){
 
        let indice= str.substring(i,i+1);
        if( indice != ' ' ){
            word += indice;
            wordSize++;
        }else{
            if(wordSize>max){
                max = wordSize;
                largest = word;
            }
            word="";
            wordSize=0;
        }
 
 
    }
 
    return largest;
}
 
console.assert(palabraMasLarga('Erase una vez que se era') === 'Erase');