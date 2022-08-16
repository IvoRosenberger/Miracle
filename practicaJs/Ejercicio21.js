// 21. Crea una función que devuelva la hipotenusa de un triángulo a partir de sus catetos
// (Teorema de Pitágoras).
function hipotenusa(c1, c2) {
    let h = Math.sqrt((c1 * c1) + (c2 * c2));
    return h;
}
console.assert(hipotenusa(1, 2) === 2.23606797749979);