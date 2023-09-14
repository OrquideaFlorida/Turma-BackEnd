import readline from "readline-sync"
//const readline = require('readline-sync');

let votoX = 0
let votoY = 0
let votoZ = 0
let nulo = 0

let loop = true

while (loop){
    console.log('=== AGORA É HORA DE VOTAR! ===');
    console.log('Candidato_X => 889');
    console.log('Candidato_Y => 847');
    console.log('Candidato_Z => 515');
    console.log('Branco => 0');

    let candidato = readline.questionInt('Digite o número do candidato: ');

        switch (candidato){
            case 889:
                votoX += 1
                console.log('Você votou no Candidato_X.');
                break;
            case 847:
                votoY += 1
                console.log('Você votou no Candidato_Y.');
                break;
            case 515:
                votoZ += 1
                console.log('Você votou no Candidato_Z.');
                break;
            case 0:
                nulo += 1
                console.log('Você votou em Branco.');
                break;
            default:
                if (typeof candidato != Infinity){
                    console.log('Digite somente números!');
                } else {
                    nulo += 1
                    console.log('O seu voto será anulado.');
                    break;
                }      
        }
   
   let cont = readline.question("Deseja finalizar? [S/N]: ");
   if (cont = 'N'){
        loop = true;
    }
    if (cont = 'S'){
        loop = false;
    } else {
        console.log("Digite apenas uma opção: [S ou N]");
    }
      
}
console.log(`Total de votos para o Candidato_X: ${votoX}, ${votoY}, ${votoZ}`);