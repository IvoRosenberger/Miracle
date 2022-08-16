// 22. Escribe una función que simule el lanzamiento de una moneda al aire y devuelva si ha
// salido cara o cruz. Podemos utilizar el objeto Math
function azarMoneda() {
    
    let coin = Math.floor(Math.random()*2);
    
    return coin;
    
}
 
 
var n = 1000;
var sumaCruz =0;
var sumaCara = 0;
var fugas=0;
function testingDistribution(){
    while(n>0){
        let azar = azarMoneda();
        if(azar===0){
            sumaCara ++;
        }else if(azar===1){
            sumaCruz ++;
        }else{
            fugas++;
        }
   
        n --;
    }
    console.log("fugas = " + fugas);
    console.log("cantidad de caras = " + sumaCara);
    console.log("Cantidad de cruz =  "+ sumaCruz );
}
//testingDistribution();