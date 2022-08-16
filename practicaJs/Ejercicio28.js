// 28. Crea una función que reciba un número y devuelva una cadena con formato ordinal inglés.
// Esto es:
// • termina en 1 –> ‘301st‘
// • termina en 2 –> ‘302nd‘
// • termina en 3 –> ‘303rd‘
// • cualquier otra cosa –> ‘300th‘
function formaToIngles(num) {
    Math.round(num);
 
    let rest = num%10;
 
    switch(rest){
        case 1: return num + 'st';
            break;
        case 2: return num + 'nd';
            break;
        case 3: return num + 'rd';
           break;
        default: return num + 'th';
 
    }
}
 
//console.log(formaToIngles(327));
 