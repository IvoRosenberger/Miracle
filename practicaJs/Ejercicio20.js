// 20. Crea una función que devuelva el area de un círculo a partir de su radio:
function areaCirculo(r) {
    area = r *r * Math.PI;
    return area;
}
console.assert(areaCirculo(2) === 12.566370614359172);
console.assert(areaCirculo(8) === 201.06192982974676);