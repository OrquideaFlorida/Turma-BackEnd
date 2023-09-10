//ESTRUTURA DE DECISÃO -IF - ELSE-
//1) VERIFIQUE SE O NÚMERO É POSITIVO
/*
let numero = (-5);
if (numero >= 0){
    console.log(`O número ${numero} é positivo!`);
//CASO CONTRÁRIO, EXIBA UMA MENSAGEM DE ERRO
} else {
    console.log(`O número ${numero} é Negativo!`);
}
*/
/*
//2) VERIFIQUE SE O NÚMERO É PAR
let num = (7);
if (num % 2 == 0){
    console.log(`O número ${num} é par!`);
//CASO CONTRÁRIO, EXIBA UMA MENSAGEM INDICANDO QUE É ÍMPAR
} else {
    console.log(`O número ${num} é impar!`);
}
*/
/*
//3) VERIFIQUE SE UMA STRING É VAZIA
let texto = ""
if(!texto){
    console.log('String vazia!');
//CASO CONTRÁRIO, EXIBA O SEU RESULTADO
} else {
    console.log(texto);
}
*/
/*
//4) VERIFIQUE SE UM NÚMERO É MAIOR QUE 10
let n = (20);
if (n > 10){
    console.log(`O número ${n} é maior do que 10!`);
//CASO NÃO SEJA, MULTIPLIQUE-O POR 2
} else {
    console.log(n * 2);
}
*/
/*
//5) VERIFIQUE SE UMA VARIÁVEL É DO TIPO BOOLEANO
let verif = 5 > 10
console.log(verif)
console.log(typeof verif)

//EXEMPLO DA INTERNET
// const a = true
// const b = "verificar"
// if(typeof a === "boolean"){
//     console.log(`A variável é Booleana!`);
// }
// if(typeof b === "boolean"){
//     console.log(`A variável é Booleana!`)
// }
*/
/*
//ESTRUTURA DE DECISÃO -ELSE IF-
//1)CLASSIFIQUE UM NÚMERO EM TRÊS CATEGORIAS: NEGATIVO, ZERO OU POSITIVO
let nu = (30);
if (nu > 0){
    console.log(`O número ${nu} é positivo!`);
} else if (nu === 0){
    console.log(`O número é zero!`);
} else if (nu < 0) {
    console.log(`O número ${nu} é negativo!`);
//4) CLASSIFIQUE SE É PAR OU ÍMPAR
} else if (nu % 2 === 0){
    console.log(`O número ${nu} é Par!`)
} else {
    console.log(`O número ${nu} é Ímpar!`)
}
*/
/*
//2) VEFIQUE SE O NÚMERO É DIVISÍVEL POR 2, 3 OU 5
let nu1 = (10);
if (nu1 % 2 === 0){
    console.log(`O número ${nu1} é divisível por 2!`);
} else if (nu1 % 3 === 0){
    console.log(`O número ${nu1} é divisível por 3!`);
//HÁ NÚMEROS QUE SÃO DIVISÍVEIS POR 2 E POR 5. REVISAR ESTA QUESTÃO DEPOIS PARA APARECER AS DUAS OPÇOES
} else if (nu1 % 5 === 0 || nu1 % 5 === 0 && nu1 % 2 === 0){
    console.log(`O número ${nu1} é divisível por 5!`);
} else {
    console.log(`O número ${nu1} não é divisível por 2, 3 ou 5!`);
}
*/
/*
//3) CLASSIFIQUE UMA VARIÁVEL EM BOOLEANA, NUMÉRICA, STRING OU INDEFINIDA
let categ = false;
if (typeof categ === "boolean"){
    console.log(`A váriável ${categ} é Booleana!`);
} else if (typeof categ === "number"){
    console.log(`A variável ${categ} é Numérica!`);
} else if (typeof categ === "string"){
    console.log(`A variável ${categ} é String!`);
} else {
    console.log(`A variável ${categ} é Indefinida!`);
}
*/

// ESTRUTURA DE DECISÃO -SWITCH-
//1) VERIFIQUE O DIA DA SEMANA COM BASE EM UM NÚMERO DE 1 A 7
// let dia = '1'
// switch (dia) {
//     case '1':
//         console.log("O dia escolhido é Domingo!");
//         break;
//     case '2':
//         console.log("O dia escolhido é Segunda-feira!");
//         break;
//     case '3':
//         console.log("O dia escolhido é Terça-feira!");
//         break;
//     case '4':
//         console.log("O dia escolhido é Quarta-feira!");
//         break;
//     case '5':
//         console.log("O dia escolhido é Quinta-feira!");
//         break;
//     case '6':
//         console.log("O dia escolhido é Sexta-feira!");
//         break;
//     case '7':
//         console.log("O dia escolhido é Sábado!");
//         break;
//     default:
//         console.log("Escolha um número apenas de 1 a 7");
//         break;
// }

//2) CONVERTA UM NÚMERO DE MÊS AO SEU NOME CORRESPONDENTE

// let mes = '6'
// switch (mes) {
//     case '1':
//         console.log("Você escolheu Janeiro!");
//         break;
//     case '2':
//         console.log("Você escolheu Fevereiro!");
//         break;
//     case '3':
//         console.log("Você escolheu Março!");
//         break;
//     case '4':
//         console.log("Você escolheu Abril!");
//         break;
//     case '5':
//         console.log("Você escolheu Maio!");
//         break;
//     case '6':
//         console.log("Você escolheu Junho!");
//         break;
//     case '7':
//         console.log("Você escolheu Julho!");
//         break;
//     case '8':
//         console.log("Você escolheu Agosto!");
//         break;
//     case '9':
//         console.log("Você escolheu Setembro!");
//         break;
//     case '10':
//         console.log("Você escolheu Outubro!");
//         break;
//     case '11':
//         console.log("Você escolheu Novembro!");
//         break;
//     case '12':
//         console.log("Você escolheu Dezembro!");
//         break;
//     default:
//         console.log("Escolha um número apenas entre 1 e 12");
//         break;
// }

//3) EXIBA UMA MENSAGEM DE ACORDO COM O ESTADO CIVIL: "SOLTEIRO", "CASADO", "DIVORCIADO" OU "OUTRO"
// let eCivil = 'a'
// switch (eCivil) {
//     case 'a':
//         console.log("Você é Solteiro(a)!");
//         break;
//     case 'b':
//         console.log("Você é Casado(a)!");
//         break;
//     case 'c':
//         console.log("Você é Divorciado(a)!");
//         break;
//     case 'd':
//         console.log("Outros");
//         break;
//     default:
//         console.log("Escolha entre: a, b, c ou d");
//         break;
// }

//4) EXIBA UMA MENSAGEM DEPENDENDO DO TIPO DE ANIMAL: "CACHORRO", "GATO", "PÁSSARO" OU "OUTRO"
// let pet = 'z'
// switch (pet){
//     case 'w':
//         console.log("O CACHORRO faz 'Au, Au!'");
//         break;
//     case 'x':
//         console.log("O GATO faz 'Miau!'");
//         break;
//     case 'y':
//         console.log("O PÁSSARO faz 'fiu, fiu!'");
//         break;
//     case 'z':
//         console.log("'OUTRO'??? Que bicho é esse???");
//         break;
//     default:
//         console.log("Escolha somente uma das opções: w, x, y ou z");
// }

//5) Calcule o valor de uma operação matemática com base em um operador: soma, subtração, multiplicação ou divisão
let n1 = 10
let n2 = 2
let op = 'x'

switch (op){
    case '+':
        console.log(`O resultado da SOMA é: ${n1 + n2}`);
        break;
    case '-':
        console.log(`O resultado da SUBTRAÇÃO é: ${n1 - n2}`);
        break;
    case 'x':
        console.log(`O resultado da MULTIPLICAÇÃO é: ${n1 * n2}`);
        break;
    case '/':
        console.log(`O resultado da DIVISÃO é: ${n1 / n2}`);
        break;
    default:
        console.log("Escolha apenas entre +, -, x ou /");
        break;
}

//--------DESAFIO BLACKJACK-----------
//APRIMORAR NO BLACKJACK.JS

/*
let carta1 = 10
let carta2 = 11
let soma = carta1 + carta2

let cartab1 = 2
let cartab2 = 2
let cartab3 = 2
let cartab4 = 2
let somaBanco = cartab1 + cartab2 + cartab3 + cartab4

if (somaBanco>21) {
    console.log('O Banco Perdeu')
}else if (soma>somaBanco && soma<=21){
    console.log("Você ganhou para o banco")
}else {
    console.log ("O Banco ganhou")
}
*/
