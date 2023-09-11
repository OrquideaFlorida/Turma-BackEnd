//Atividade Módulo 1 Unidade 2
const readline = require('readline-sync');
let nome = readline.question("Digite o seu nome: ");

let loop = true
while (loop){
    let ano = readline.questionInt("Digite o ano de nascimento: ");
    if (ano < 1922 || ano >2021){
        console.log("[Erro] Digite o ano de nascimento entre 1922 e 2021");
    } else {
        let idade = 2022 - ano;
        console.log(`Em 2022 ${nome}, completou ${idade} anos!`);
        loop = false
    }
}
