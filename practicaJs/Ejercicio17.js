// 17. Crear una función que reciba un divisor y un limite y devuelva el mayor número divisible
// por divisor menor que limite. Ambos valores serán siempre enteros positivos.
function maximoDivisible (divisor, limite) {
 
    for(let i=limite-1;i>0;i--){
        let divisible = i;
        if(divisible%divisor ==0){
            return divisible;
        }
    }
}
 
//console.log(maximoDivisible(17,233));