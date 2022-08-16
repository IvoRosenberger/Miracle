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