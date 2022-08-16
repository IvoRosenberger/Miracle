// 7. Escribe una estructura if/else if para cumplir con las siguientes condiciones
// • num < 5 - return "Tiny"
// • num < 10 - return "Small"
// • num < 15 - return "Medium"
// • num < 20 - return "Large"
// • num >= 20 - return "Huge"
 
function testSize(num) {
 
    let size="";
    if(num<5){
        size="Tiny";
    }else if(num<10){
        size="Small";
    }else if(num<15){
        size="Medium";
    }else if(num<20){
        size="Large";
    }else if(num>=20){
        size="Huge";
    }
 
 
 
 
    return size;
}
 
console.log(testSize(4));