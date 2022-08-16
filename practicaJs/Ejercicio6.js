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