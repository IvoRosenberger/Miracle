// 23. Escribe una función que simule cien tiradas de dos dados y devuelva las veces que entre
// los dos suman 10
function azarDados() {
    let dado1 = Math.floor(Math.random()*6 + 1);
    let dado2 = Math.floor(Math.random()*6 + 1);
    return dado1 + dado2;
    
}
 
function testingDices(){
    let n =100;
    let suma =0;
 
    while(n>0){
        let result = azarDados();
        
        if(result==10){
            suma++;
        }
        n--;
    }
        
    
    return suma;
}
//console.log(testingDices());