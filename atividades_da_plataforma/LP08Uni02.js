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

    if (candidato != Infinity){
        console.log("Digite somente números!");
    }
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
                    nulo += 1
                    console.log('O seu voto será anulado.');
                    break;      
        }
   
   let cont = readline.question("Deseja finalizar? [S/N]: ");
   switch (cont){
        case 'S':
            console.log("Contando votos...");
            console.log("... ... ... ... ...");
            loop = false;
            break;
        case 'N':
            loop = true;
            break;
        default:
            console.log("Digite apenas uma opção [S/N]");
            break;
   } 
   
}
//Math.max() ==> RETORNA O MAIOR DE UM OU MAIS NÚMEROS
console.log(`O vencedor é o ${vencedor}, com ${Math.max(votoX, votoY, votoZ)} de votos`);
console.log(`Foram apurados ${nulo} votos nulos.`);

console.log(`Total de votos para cada Candidato: Candidato_X: ${votoX}, Candidato_Y: ${votoY}, Candidato_Z: ${votoZ}`);