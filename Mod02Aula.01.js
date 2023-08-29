// ---- AULA 29/08 ---

// const readline = require('readline-sync');
// const nome = readline.question('Qual é o seu nome? ');
// console.log(`Olá, ${nome}!`);


// --- EXERCICIO 1 ---
//NOTA E MÉDIA DO ALUNO
// const readline = require('readline-sync');
// const nome = readline.question('Qual o nome do aluno? ');
                //Usar readline.questionInt para números
// const nota1 = readline.questionInt('Qual a primeira nota do aluno? ');
// const nota2 = readline.questionInt('Qual a segunda nota do aluno? ');
// const nota3 = readline.questionInt('Qual a terceira nota do aluno? ');

// let media = (nota1 + nota2 + nota3) / 3;

// console.log(`O(A) aluno(a) ${nome}, obteve a média ${media}`);

//--- EXERCÍCIO 2 ---
// VERIFICAR SE UM DETERMINADO ANO É BISEXTO
// const readline = require('readline-sync');
// const ano = readline.questionInt('Qual ano deseja verificar? ');

// if (ano % 400 === 0){
//     console.log(`O ano ${ano} é Bissexto`)
// }else if (ano % 4 === 0 && ano % 100 != 0){
//     console.log(`O ano ${ano} não é Bissexto`);
// }else {
//     console.log(`O ano ${ano} não é Bissexto`);
// }

// --- EXERCÍCIO 3 ---
//CALCULAR O VALOR DO IMPOSTO
// const readline = require('readline-sync');
// const valor = readline.questionInt('Qual o valor do produto? ');
// const estado = readline.question('Qual o destino? (MG, SP, RJ, MS) ');

// switch (estado) {
//     case 'MG':
//         console.log(`O Valor total do produto para MG é R$ ${valor + (valor*0.07)}`);
//         break;
//     case 'SP':
//         console.log(`O Valor toal do produto para SP é R$ ${valor + (valor*0.12)}`);
//         break;
//     case 'RJ':
//         console.log(`O Valor total do produto para RJ é R$ ${valor + (valor*0.15)}`);
//         break;
//     default:
//         console.log("Digite uma opção válida.")
// }

// --- EXERCÍCIO 4 ---
//MOSTRAR A SOMA DOS 50 PRIMEIROS NÚMEROS PARES

//FOR
let soma = 0;
let cont = 0;
for (let x = 0; x <= 1000 ; x++){
    if (x % 2 === 0){
        soma += x;
        cont++;
    }
    if (cont > 50){
        break;
    }
}
console.log(soma);

//WHILE
// let num = 10
// let cont = 1
// while(num % 2 = 0 && cont <= 50){
//     cont = cont += 1
//     console.log(cont);
// }

//DO-WHILE
// do {

//}while();



//--- EXERCÍCIO 5 ---
//IMPRIMIR OS N PRIMEIROS NÚMEROS NATURAIS ÍMPARES