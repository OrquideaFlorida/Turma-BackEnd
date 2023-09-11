// --- AULA 05/09 ---

const readline = require('readline-sync');
const clear = require("clear");

let gerador_matricula = 2;

const aluno1 = {
    matricula: 1,
    nome: "Maria José",
    notas: [8, 7, 6],
};
const aluno2 = {
    matricula: 2,
    nome: "José",
    notas: [10, 6, 7],
};
// ADICIONA OS DADOS ACIMA PARA UMA LISTA:

// const alunos = [];
// alunos.push(aluno1);
// alunos.push(aluno2);
const alunos = [aluno1, aluno2];
let loop = true;
let matriculaBusca;

while (loop) {
    console.clear();
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

    let opcao = readline.questionInt("Escolha uma opcao: ");
    switch (opcao) {
        case 1:
            //EXIBIR A LISTA DE TODOS OS ALUNOS CADASTRADOS
            console.log("Listando todos os alunos...");
            console.log("... ... ... ... ... ... ...");
            
            for (const a of alunos) {
                let soma = 0;
                console.log(`Matrícula: ${a.matricula}`)
                console.log(`Nome: ${a.nome}`);
                for (let i = 0; i < a.notas.length; i++) {
                    console.log(`\t- Nota ${i + 1} : ${a.notas[i]}`); // \t TEM FUNÇÃO DE "TAB"
                    soma += a.notas[i];
                }
                let media = soma / a.notas.length;
                console.log(`\t- Media: ${media.toFixed(2)}`); // .toFixed() QUANTOS DIGITOS DEPOIS DA VÍRGULA
            }
            console.log("==================================");
            readline.keyInPause(); //
            break;
        case 2:
            //CADASTRANDO MAIS ALUNOS
            let nomeAluno = readline.question("Qual o nome do aluno: ");
            let notasAluno = [];
            for (let i = 0; i < 3; i++) {
                notasAluno[i] = readline.questionFloat(`Digite a nota ${i + 1}: `);
            }
            gerador_matricula++;
            const aluno = {
                matricula: gerador_matricula,
                nome: nomeAluno,
                notas: notasAluno,
            }
            alunos.push(aluno);
            console.log("Aluno cadastrado com sucesso!");
            console.log("=============================");
            readline.keyInPause();
            break;
        case 3:
            //BUSCANDO ALUNOS NO SISTEMA (CRIAR UMA VARIÁVEL DE MATRÍCULA)
            matriculaBusca = readline.questionInt("Digite a matricula do aluno: ");
            for (const a of alunos){
                if (a.matricula === matriculaBusca){
                    console.log("Localizando aluno...");
                    console.log(`Matricula: ${a.matricula}`);
                    console.log(`Nome: ${a.nome}`);
                    for (let i = 0; i < a.notas.length; i ++){
                        console.log(`\t- Nota ${i + 1}: ${a.notas[i]}`);
                    }
                }
            }
            readline.keyInPause();
            break;
        case 4:
            //ALTERANDO DADOS DO ALUNO
            matriculaBusca = readline.questionInt("Matrículado aluno que deseja editar: ");
            for (const a of alunos){
                if (a.matricula === matriculaBusca){ //VAI LOCALIZAR O N° DA MATRICULA CONSTANTE NA LISTA
                    console.log(a.nome); //MOSTRAR O ALUNO DA BUSCA
                    a.nome = readline.question("Digite o Nome do Aluno: ");
                    for (let i = 0; i < a.notas.length; i ++){
                        a.notas[i] = readline.questionFloat(`Digite a nota ${i + 1}: `); //NOVA NOTA SERÁ INSERIDA
                    }
                }
            }
            console.log("Dados do aluno atualizados com sucesso!");
            console.log("=======================================");
            readline.keyInPause();
            break;
        case 5:
            //REMOVENDO O ALUNO
            matriculaBusca = readline.questionInt("Digite a matricula para localizar o aluno: ");
            for (const a of alunos){
                if (a.matricula === matriculaBusca){
                    console.log(a.nome);
                    console.log(`Excluindo o aluno ${a.nome} do sistema...`);
                    alunos.splice(a, 1);
                }
            }
            console.log("Aluno excluído com sucesso!");
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