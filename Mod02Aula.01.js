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

// --- EXERCÍCIO 4 --- PARA RESOLVER
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
// console.log(`A soma dos 50 primeiros números é ${soma}`);

//WHILE
// let soma = 0;
// let cont = 0;
// let num = 0;
// while (num <= 1000){
//     if (num % 2 === 0){
//         num++;
//         soma += num;
//         cont++;
//     }
//     if (cont > 50){
//         break
//     }
// }
// console.log(soma);


//DO-WHILE
// do {

//}while();



//--- EXERCÍCIO 5 ---
//IMPRIMIR OS N PRIMEIROS NÚMEROS NATURAIS ÍMPARES
// const readline = require('readline-sync');
// const n = readline.questionInt('Escolha um número: ');
// console.log('Contando...');

// let cont = 1;
// if (n % 2 !== 0){
//     while (cont <= n){
//         console.log(`${cont}...`);
//         cont += 2
//     }
// }else{
//     console.log('O número não é ímpar');
// }

//--- EXERCICIO 6 ---
//QUANTO O ENCANADOR VAI RECEBER?
// const readline = require('readline-sync');
// const dias = readline.questionInt('Quantos dias foram trabalhados? ');

// let taxa = (30 * dias) * 0.08
// let valor = (30 * dias) - taxa

// console.log(`O valor que o encanador vai receber por ${dias} dias, será R$ ${valor}`);

//--- EXERCICIO 7 --- PARA RESOLVER
//HORÁRIO DE INÍCIO E DURAÇÃO EM SEGUNDOS DE UMA EXPERIÊNCIA BIOLÓGICA



//--- EXERCICIO 8 --- PARA RESOLVER
//CALCULAR O TOTAL DE HORAS TRABALHADAS E O SALÁRIO EM 12 MESES
// const readline = require('readline-sync');
// const normal = readline.questionInt('Quantas horas trabalhadas? ');
// const extra = readline.questionInt('Quantas horas extras? ');




//--- EXERCICIO 9 ---
//LER TRÊS NÚMEROS E MOSTRÁ-LOS EM ORDEM CRESCENTE
// const readline = require('readline-sync');
// const n1 = readline.questionInt('Digite o primeiro número: ');
// const n2 = readline.questionInt('Digite o segundo número: ');
// const n3 = readline.questionInt('Digite o terceiro número: ');

// console.log([n1, n2, n3].sort());


//--- EXERCICIO 10 ---
//CONVERSÃO DE TEMPERATURAS
