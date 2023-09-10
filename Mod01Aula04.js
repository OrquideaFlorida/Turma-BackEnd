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

//--------DESAFIO BLACKJACK-----------

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
