// --- AULA 05/09 ---

const readline = require('readline-sync');

const aluno1 = {
    nome: "Maria",
    notas: [8, 7, 6],
};
const aluno2 = {
    nome: "José",
    notas: [10, 6, 7],
};
// ADICIONA OS DADOS ACIMA PARA UMA LISTA:
const alunos = [];
alunos.push(aluno1);
alunos.push(aluno2);
// CRIANDO UM MENU PARA LISTAR TODOS OS ALUNOS
console.log("===== CADASTRO DE ALUNO ====");
console.log("============ MENU ==========");
console.log("0 - Sair do Sistema");
console.log("1 - Listar todos os alunos");
console.log("2 - Adicionar novo aluno");
console.log("3 - Buscar aluno");
console.log("4 - Editar dados do aluno");
console.log("5 - Remover do cadastro");
console.log("============================");
let loop = true;

while (loop) {
    let opcao = readline.questionInt("Escolha uma opcao: ");
    switch (opcao) {
        case 1:
            console.log("Listando todos os alunos...");
            console.log("... ... ... ... ... ... ...");
            let soma = 0;
            for (const a of alunos) {
                console.log(`Nome: ${a.nome}`);
                for (let i = 0; i < a.notas.length; i++) {
                    console.log(`\t- Nota ${i + 1} : ${a.notas[i]}`); // \t TEM FUNÇÃO DE "TAB"
                    soma += a.notas[i];
                }
            
                let media = soma / a.notas.length;
                console.log(`\t- Media: ${media.toFixed(2)}`); // .toFixed() QUANTOS DIGITOS DEPOIS DA VÍRGULA
            }
            break;
        case 2:
            //CADASTRANDO MAIS ALUNOS
            let nomeAluno = readline.question("Qual o nome do aluno: ");
            let notasAluno = [];
            for (let i = 0; i < 3; i++) {
                notasAluno[i] = readline.questionFloat(`Digite a nota ${i + 1}: `);
            }
            const aluno = {
                nome: nomeAluno,
                notas: notasAluno,
            }
            alunos.push(aluno);
            console.log("Aluno cadastrado com sucesso!")
            break;
        case 3:
            //BUSCANDO ALUNOS NO SISTEMA (CRIAR UMA VARIÁVEL DE MATRÍCULA)

            console.log("Buscando aluno...");
            break;
        case 4:
            //ALTERANDO DADOS DO ALUNO

            break;
        case 5:
            //REMOVENDO O ALUNO

            break;
        case 0:
            console.log("Saindo do sistema...");
            loop = false;
            break;
        default:
            console.log("Opçao inválida...");
            break;
    }
}