// 1. Escribe una sentencia switch que pruebe val y establezca answer con las siguientes condiciones:
// • ”a” - ”apple”
// • ”b” - ”bird”
// • ”c” - ”cat”
// • default - ”stuff”

function caseInSwitch(val) {
 let answer = "";
 
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

console.log(caseInSwitch("b"));