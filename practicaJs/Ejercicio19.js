// 19. Crea una función que devuelva el perímetro de un círculo a partir de su radio:
function perimetroCirculo(r) {
    peri = 2*  r * Math.PI;
    return peri;
}
console.assert(perimetroCirculo(3) === 18.84955592153876);
console.assert(perimetroCirculo(6) === 37.69911184307752);