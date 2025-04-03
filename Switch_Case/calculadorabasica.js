let operação = '+'
let num1 = 24;
let num2 = 2;
switch(operação){
    case '+':
        console.log(num1+num2)
        break;
    case '-':
        console.log(num1-num2)
        break;
    case '/':
        console.log(num1/num2)
        break;
    case '*':
        console.log(num1*num2)
        break;
    default:
        console.log("Operação inválida")                
}