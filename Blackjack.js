//DESAFIO 1: JOGADOR
const readline = require('readline-sync');

let carta1 = readline.questionInt('Escolha a primeira carta de 1 a 10: ');
let carta2 = readline.questionInt('Escolha a segunda carta de 1 a 10: ');

let soma = carta1 + carta2

while (soma < 21) {
    console.log(`Você fez ${soma} pontos. Abaixo de 21. Deseja continuar? `);
    let decid = readline.question('Escolha [S] ou [N]: ');
        switch(decid){
            case 'S':
                let cartas = readline.questionInt('Escolha mais uma carta (1 a 10): ');
                soma = soma + cartas
                break;
            case 'N':
                console.log(`Com ${soma} pontos adquiridos, você pode vencer!`)
                //FAZER COM QUE O WHILE SE ENCERRE AO OPTAR POR 'N'
                break;
            default:
                console.log("Escolha apenas S ou N");
                break;
        }
}
if (soma === 21){
    console.log(`Você fez ${soma}! Você ganhou!!!`);
}else {
    console.log(`Total de pontos: ${soma}. Estourou! Você Perdeu.`);
}

//DESAFIO 2: COM A BANCA ADVERSÁRIA

//let carta1 = 10
// let carta2 = 11
// let soma = carta1 + carta2

// let cartab1 = 2
// let cartab2 = 2
// let cartab3 = 2
// let cartab4 = 2
// let somaBanco = cartab1 + cartab2 + cartab3 + cartab4

// if (somaBanco > 21) {
//     console.log('O Banco Perdeu');
// }else if (soma>somaBanco && soma <= 21){
//     console.log("Você ganhou para o banco");
// }else {
//     console.log ("O Banco ganhou");
// }