import readline from "readline-sync"
//const readline = require('readline-sync');

console.log('=== AGORA É HORA DE VOTAR! ===');
console.log('Candidato_X => 889');
console.log('Candidato_Y => 847');
console.log('Candidato_Z => 515');
console.log('Branco => 0');

let candidato = readline.questionInt('Digite o número do candidato: ');
let votoX = 0
let votoY = 0
let votoZ = 0
let nulo = 0

switch (candidato){
    case 889:
        votoX += 1
        console.log('Você votou no Candidato_X. Deseja finalizar? [S/N]');
        break;
    case 847:
        votoY += 1
        console.log('Você votou no Candidato_Y. Deseja finalizar? [S/N]');
        break;
    case 515:
        votoZ += 1
        console.log('Você votou no Candidato_Z. Deseja finalizar? [S/N');
        break;
    case 0:
        nulo += 1
        console.log('Você votou em Branco. Deseja finalizar? [S/N]');
        break;
    default:
        console.log('Digite as opções acima corretamente.')

}

console.log(`Total de votos para o Candidato_X: ${votoX}, ${votoY}, ${votoZ}`);