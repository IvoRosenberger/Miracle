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
  