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