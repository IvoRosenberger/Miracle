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