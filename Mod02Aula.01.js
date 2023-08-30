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
//         console.log(`O Valor da taxa para MG é R$ ${valor*0.07}, sendo o valor total: R$ ${valor + (valor*0.07)}`);
//         break;
//     case 'SP':
//         console.log(`O Valor da taxa para SP é R$ ${valor*0.012}, sendo o valor toral: R$ ${valor + (valor*0.12)}`);
//         break;
//     case 'RJ':
//         console.log(`O Valor da taxa para RJ é R$ ${valor*0.15}, sendo o valor total: R$ ${valor + (valor*0.15)}`);
//         break;
//     case 'MS':
//         console.log(`O Valor da taxa para MS é R$ ${valor*0.08}, sendo o valor total: R$ ${valor + (valor*0.08)}`);
//         break;
//     default:
//         console.log("Digite apenas uma das opções acima (MG, SP, RJ, MS).")
// }

// --- EXERCÍCIO 4 ---
//MOSTRAR A SOMA DOS 50 PRIMEIROS NÚMEROS PARES

//FOR
// let soma = 0;
// let cont = 0;
// for (let x = 0; x <= 1000 ; x++){
//     if (x % 2 === 0){
//         soma += x;
//         cont++;
//     }
//     if (cont > 50){
//         break;
//     }
// }
// console.log(soma);

//WHILE
// let soma = 0;
// let cont = 0;
// while(num % 2 = 0 && cont < 50){
//     soma += x;
//     cont++;
//     console.log(soma);
// }

//DO-WHILE
// do {

//}while();



//--- EXERCÍCIO 5 ---
//IMPRIMIR OS N PRIMEIROS NÚMEROS NATURAIS ÍMPARES
const readline = require('readline-sync');
const n = readline.questionInt('Escolha um número: ');

let cont = 0;
if (n % 2 !== 0){
    while (cont < n){
        cont ++n
        console.log(`${cont}...`);
    }
}else{
    console.log('O número não é ímpar')
}