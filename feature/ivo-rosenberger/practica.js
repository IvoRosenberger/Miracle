// 1. Escribe una sentencia switch que pruebe val y establezca answer con las siguientes condiciones:
// • ”a” - ”apple”
// • ”b” - ”bird”
// • ”c” - ”cat”
// • default - ”stuff”

// function caseInSwitch(val) {
/* let answer = "";
 
switch(val){
    case 'a': answer = 'apple'
        break;
    case 'b': answer = "bird"
        break;
    case 'c': answer = "cat"
        break;
    default:  answer='stuff'
        break;
 
}
return answer;
}
//console.log(caseInSwitch("j"));
 
// 2. Añade los números del 0 al 5 incluido, en orden ascendente en array usando una estructura
// de repeticion for.
const array = [];
 
for(let i=0;i<=5;i++){
    array.push(i);
}
//console.log(array);
 
 
// 3. Añade los número impares del 1 al 9 en array usando la estructura de repeticion for
const array3 = [];
 
for(let i =1; i<=9;i+=2){
    array3.push(i);
}
//console.log(array3);
 
//4. Añade los número pares del 1 al 9 en orden descendente en array usando la estructura de
//repeticion for
const array4 = [];
 
for(let i=8; i>1; i-=2){
    array4.push(i);
}
//console.log(array4);
 
// 5. En el juego de golf, cada hoyo tiene un par, cuyo significado es el número promedio de
// golpes que se espera que haga un golfista para meter la bola en un hoyo y así completar
// el juego. 
//par = promedio de golpes
//Dependiendo de qué tan por encima o por debajo del par estén tus golpes, existe
// un apodo diferente.
// Escribe una función que reciba los argumentos par y strokes y devuelve la cadena correcta
// de acuerdo a la siguiente tabla que enumera los golpes en orden de prioridad; de arriba
// (más alto) a abajo (más bajo):
// Strokes Return
// 1 "Hole-in-one!"
// <= par - 2 "Eagle"
// par - 1 "Birdie"
// par "Par"
// par + 1 "Bogey"
// par + 2 "Double Bogey"
// >= par + 3 "Go Home!"
const names = [
"Hole-in-one!",
"Eagle",
"Birdie",
"Par",
"Bogey",
"Double Bogey",
"Go Home!",
];
function golfScore(par, strokes) {
 
    var score ="";
    switch(strokes){
        case 1 : score = names[0];
            break;
        case (par-2): score = names[1];
            break; 
        case  (par-1): score = names[2];
            break;
        case (par): score = names[3];
            break;
        case (par+1) : score = names[4];
            break;
        case (par+2): score = names[5];
            break; 
        case (par+3) : score = names[6];
            break; 
    }  
    
    return score;
 
    }

 
//console.log(golfScore(3, 4));
 
// 6. Escribe una sentencia switch que pruebe val y establezca answer con las siguientes condiciones:
// • 1-3 - ”Low”
// • 4-6 - ”Mid”
// • 7-9 - ”High”
function sequentialSizes(val) {
let answer = "";
 
    switch(true){
        case val>=1 && val<=3:
            answer = "Low";
            break;
        case val >=4 && val<=6:
            answer = "Mid";
            break;
        case val>=7 && val<=9:
            answer = "High";
            break;
        default: 
            answer = "Te number is over 9 or under 1";
            break;
        
    }
return answer;
}
sequentialSizes(7);
 
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
 
testSize(24);
 
// 8. Cambie el orden logico en la función de manera que retorne de forma correcta en todos
// los casos
 
function orderMyLogic(val) {
   
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
 
orderMyLogic(11);
 
// 9. Convierte la lógica de la siguiente función para usar sentencias else if
 
function testElseIf(val) {
    if (val > 10) {
    return "Greater than 10";
    }else if (val < 5) {
    return "Smaller than 5";
    }
    return "Between 5 and 10";
}
 
testElseIf(11);
 
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
//console.log(sum(recursive,6));
 
// 11. Susituye la cadena de if/else por un estamento switch
function chainToSwitch(val) {
    let answer = "";
 
    switch(val){
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7: 
            answer = "At nine";
            break;
    }
 
    return answer;
 
}
chainToSwitch(7);
 
// 12. Escribe un sentencia switch que pruebe val y establezca answer con las siguientes condiciones
// (a) - ”alpha”
// (b) - ”beta”
// (c) - ”gamma”
// (d) - ”delta”
function caseInSwitch(val) {
    let answer = "";
 
    switch(val){
        case 'a': 
            answer = "alpha";
            break;
        case 'b': 
            answer = "beta";
            break;
        case 'c': 
            answer = "gamma";
            break;
        case 'd': 
            answer = "delta";
            break;
        default: 
            answer = "Not found";
    }
 
 
    return answer;
}
caseInSwitch(1);
 
// 13. Añade los números del 5 al 0 incluido, en orden descendente en array usando un la
// estructura de repeticion while.
const array13 = [];
n=5;
while(n>0){
    array13.push(n);
    n-=1;
}
//console.log(array13);
 
// 14. Crear una función que reciba un arreglo de números enteros positivos desordenados y
// devuelva otro arreglo con los números ordenados.
 
const array14 = [1,6,4,7,4,23,4,6,32,2,4,6,3];
function order(arr){
    const orderArray = [...arr];
    orderArray.sort(comparar);
    
    return orderArray;
}
function comparar ( a, b ){ return a - b; }
// console.log(order(array14));
// console.log(array14);
 
// 15. Crear una función que reciba un número entero positivo y devuelva true si dicho número
// es par o false en caso contrario.
function esPar (numero) {
    if(numero%2 == 0 ){
        return true;
    }else{
        return false;
    }
}
 
// 16. Crear una función que reciba como argumentos dos números y una operación (su nombre
//     como cadena) y que devuelva el resultado de aplicar dicha operación a los dos números
//     proporcionados
function calculadora(num1, num2, operador) {
   switch(operador){
        case "suma" : return num1+num2;
            break;
        case "resta" : return num1-num2;
            break;
        case "division" : return num1/num2;
            break;
        case "multiplicacion" : return num1*num2;
            break;
        default: return "Enter a valid operation";
   }
}
 
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
 
// 18. Cada día una planta crece en metros según su velocidadCrecimiento. Cada noche, dicha
// planta decrece en metros en base a su velocidadDecrecimiento debido a la falta de sol.
// Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una planta
// en alcanzar cierta alturaDeseada. Crear una función que reciba velocidadCrecimiento,
// velocidadDecrecimiento y alturaDeseada como números enteros positivos y devuelva el
// número de días que tardará la planta en medir la alturaDeseada.
function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
 
    if(velocidadCrecimiento<velocidadDecrecimiento){
        return "La planta nunca crecerá"
    }else{
        let numerator = (alturaDeseada + velocidadDecrecimiento);
        let denominator = (velocidadCrecimiento - velocidadDecrecimiento);
        let d = Math.floor(numerator/denominator);
 
        return d;
    }
}
 
//console.log(calcularDiasCrecimiento(3,1,10));
 
// 19. Crea una función que devuelva el perímetro de un círculo a partir de su radio:
function perimetroCirculo(r) {
    peri = 2*  r * Math.PI;
    return peri;
}
console.assert(perimetroCirculo(3) === 18.84955592153876);
console.assert(perimetroCirculo(6) === 37.69911184307752);
 
// 20. Crea una función que devuelva el area de un círculo a partir de su radio:
function areaCirculo(r) {
    area = r *r * Math.PI;
    return area;
}
console.assert(areaCirculo(2) === 12.566370614359172);
console.assert(areaCirculo(8) === 201.06192982974676);
 
// 21. Crea una función que devuelva la hipotenusa de un triángulo a partir de sus catetos
// (Teorema de Pitágoras).
function hipotenusa(c1, c2) {
    let h = Math.sqrt((c1 * c1) + (c2 * c2));
    return h;
}
console.assert(hipotenusa(1, 2) === 2.23606797749979);
 
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
 
// 24. Crea una función que reciba una cadena y un número n y devuelva la cadena repetida n
// veces:
function repite(str, n) {
    var repeated = "";
    for(let i =0;i<n;i++){
        repeated += str;
    }
    return repeated;
}
console.assert(repite('Batman ', 3) === 'Batman Batman Batman ');
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
 
// 29. Vamos a calcular el precio de un carrito de compra. Un carrito de compra tiene una
// propiedad productos que es una lista de los productos. Cada producto tiene las siguientes
// propiedades:
// • nombre: Nombre del producto (Papel higiénico, leche, ...)
// • unidades: Número de elementos que se van a comprar de dicho producto
// • precio: Precio unitario del producto
// Además, tiene una propiedad precioTotal donde se va actualizando automáticamente el
// precio del producto. Crear el código necesario para soportar esta funcionalidad.
// Datos de prueba:
const carrito = {
    productos: [{
        nombre: 'papel higienico',
        unidades: 4,
        precio: 5
        },
        {
        nombre: 'chocolate',
        unidades: 2,
        precio: 1.5
    }],
    get precioTotal() {
        let suma =0;
        for(let i=0; this.productos.length;i++){
            suma += this.productos[i].precio;
        }
        return suma;
    }
}
 
// 30. En el juego de casino Blackjack, un jugador puede obtener una ventaja sobre la casa si
// lleva un registro del número relativo de cartas altas y bajas que quedan en la baraja. Esto
// se llama conteo de cartas.
// Tener más cartas altas en el mazo favorece al jugador. A cada carta se le asigna un valor
// de acuerdo con la tabla siguiente. Cuando la cuenta es positiva, el jugador debe apostar
// alto. Cuando la cuenta es cero o negativa, el jugador debe apostar poco.
// Escribe una función de conteo de cartas. Tendrá un parámetro card, que puede ser un
// número o una cadena, y aumentará o disminuirá la variable de conteo global de acuerdo
// con el valor de card. La función devolverá una cadena con el recuento actual y la cadena
// Bet si el recuento es positivo, o Hold si el recuento es cero o negativo. El recuento actual
// y la decisión del jugador (Bet o Hold) deben estar separados por un solo espacio
// Count Cards
// +1 2, 3, 4, 5, 6
// 0 7, 8, 9
// -1 10, J, Q, K, A
// Ejemplo:
// -3 Hold
// 5 Bet
var count = 0;
function cc(card) {
    
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            count ++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A': 
            count --;
    }
    if(count>0){
        var suggestion = " Bet"
    }else{
        suggestion = " Hold"
    }
    return count + suggestion;
}
cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
 
// 31. Escriba una función que pueda tomar cualquier número de argumentos y devuelva la suma
// de todos los argumentos
 
function addition(...arg){
    let suma=0;  // let suma =""; y devolverá una cadena
    for(let i=0;i<arg.length;i++){
        suma += arg[i];
    }
    return suma;
}
 
// console.log(addition(1,2,3,54,6,7,4,"sdbkjbfjs"));
 
// 32. Escriba una función llamada addOnlyNums que pueda aceptar cualquier cantidad de argumentos
// (incluidos números o cadenas) y devuelva la suma de solo los números
 
function addOnlyNums(...arg){
    let suma=0;  // let suma =""; y devolverá una cadena
    for(let i=0;i<arg.length;i++){
 
        if(typeof arg[i] !== 'string')
        suma += arg[i];
    }
    return suma;
}
 
//console.log(addOnlyNums(1,2,3,54,6,7,4,"sdbkjbfjs"));
 
// 33. Escriba una función llamada countTheArgs que pueda tomar cualquier cantidad de argumentos
// y devuelva la cantidad de argumentos que se pasan
 
function countTheArgs(...arg){
    return arg.length;
}
 
// 34. Escriba una función llamada combineTwoArrays que tome dos arreglos como argumentos
// y devuelva un solo arreglo que combine ambos (usando el operador ...)
 
function combineTwoArrays(arr1,arr2){
    const newArray = [...arr1, ...arr2];
    
    return newArray;
}
 
// console.log(combineTwoArrays([1,2] , ["ki", '0']));
 
// 35. Escriba una función llamada onlyUniques que pueda tomar cualquier cantidad de argumentos
// y devuelva un arreglo de solo los argumentos únicos
 
function onlyUniques(...arg){
 
    // solution with set object
    const mySet = new Set();
 
    for(let i =0 ; i < arg.length ; i++){
        mySet.add(arg[i]);
    }
    let r = Array.from(mySet); // pasar de set a array
    return r;
 
 
}
console.log(onlyUniques(1,1,1,1,1,1,"ejenj", 'l ,' , 34 , 6456)); */

nearestValue([4, 7, 10, 11, 12, 17], 9) == 10
nearestValue([4, 7, 10, 11, 12, 17], 8) == 7
nearestValue([4, 8, 10, 11, 12, 17], 9) == 8
nearestValue([4, 9, 10, 11, 12, 17], 9) == 9
nearestValue([4, 7, 10, 11, 12, 17], 0) == 4