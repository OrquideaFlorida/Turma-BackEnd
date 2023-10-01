import readline from "readline-sync"

console.log('---SIMPLE CALC---');
let num1 = readline.questionFloat('Digite o primeito número: ');
let num2 = readline.questionFloat('Digite o segundo número: ');
let op = readline.question('Qual operação deseja realizar? ');

switch (op) {
    case '+':
        console.log(num1 + num2);
        break;
    case '-':
        console.log(num1 - num2);
        break;
    case '*':
        console.log(num1 * num2);
        break;
    case '/':
        console.log(num1 / num2);
        if (num1 % num2 > 0){
            let res = num1 % num2;
            console.log(`O resto da divisão é: ${res}`);
        }
        break;
    default:
        console.log("Digite somente os operadores matemáticos acima.");
        break;
}
console.log('Encerrando calculadora...');