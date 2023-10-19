// AULA 28/09

//CRIAR UMA VARIÁVEL COM TIPO DE DADOS:
// let valor: number = 50;
// let nada: null;
// let nome: string = "Orquidea";
// let decisao: boolean = true;
// let bichos: Array<string> = ["Gato", "Cachorro", "Papagaio"];
// let objeto: object = {Aluna: "Orquídea"};

//import { createSemanticDiagnosticsBuilderProgram } from "typescript";

// console.log(bichos);

//-------------------------------------------------------
//let num: number = 10.5;
// let valor: string = num.toFixed(2);
// console.log(`O valor é um ${typeof valor}`);

// let valor2: number = parseFloat(valor);
// console.log(`O valor atual é um ${typeof valor2}`);

// console.log(`R$ ${num} reais`);

//--------------------------------------------------------

//let pets: Array<string | number | boolean> = ["Cão", "Galo", "Jabuti", 3, true];
// let pets: Array<any> = ["Cão", "Galo", "Jabuti", 3, true];
// let alimento: Array<String> = ["Arroz", "Feijão", "Macarrão", "Farinha"];

// pets.push("Gato");
// //pets.pop();
// pets.unshift("30");
// //pets.shift();
// //console.log(pets.concat(alimento.concat(pets)));

// //let numeros: string = pets.join(", ");
// //console.log(numeros);

// console.log(alimento.slice(2, 3));

//------------------------------------------------------

// const diaDaSemana = {
//     Domingo: 1,
//     Segunda: 2,

// }

// enum DiaDaSemana = {
//     Domingo,
//     Segunda,

// }

// console.log("Com ENUM", DiaDaSemana)

//--------------------------------------------------------

// enum TipoDeUsuario {
//     Administrador,
//     Usuario,
//     Convidado,
// }

// function verificarPermissao(usuario: TipoDeUsuario): void {
//     if (usuario === TipoDeUsuario.Administrador){
//         //
//     } else {
//         //
//     }
// }

//------------------------------------------------------------

// AULA 03/10

// //FUNÇÕES TYPESCRIPT - (: void) SEM RETORNO E SEM PARÂMETRO
// function nomeFuncao(): void {
//     console.log("Minha primeira função.");
// }
// nomeFuncao();

// //FUNÇÃO COM RETORNO E SEM PARÂMETROS
// function nomefuncao02(): number | string {
//     //return "Minha segunda função";
//     return 10
// }

// //FUNÇÃO SEM RETORNO E COM PARÂMETROS
// function funcao03(nome: string): void {
//     console.log("Bom dia " + nome + "!");
// }
// funcao03("Orquídea");

// //FUNÇÃO COM RETORNO E COM PARÂMETROS
// function funcao04(num1: number, num2: number): number {
//     return num1 + num2;
// }
// console.log(funcao04(10.1, 7.3));

//REFAZER OS EXERCÍCIOS DO SLIDE 5 LP EM TYPESCRIPT

//SLIDE 24
// --QUESTÃO 01--
function saudacao(): void{
    console.log("Olá Mundo!");
}
saudacao();

// -- QUESTÃO 02 --
function dobro(num: number): number{
    return num * 2
}
dobro(50);

// -- QUESTÃO 03 --
function mostrarNumeros(numi: number, numf: number): void{
    while (numi <= numf){
        console.log(numi);
        numi++
    }
}
mostrarNumeros(10, 30);

// -- QUESTÃO 04 --
function verificarPar(numero: number){
    if (numero % 2 === 0){
        console.log(`O número ${numero} é par!`);
    } else {
        console.log(`O número ${numero} é ímpar!`);
    }
}
verificarPar(25);

// -- QUESTÃO 05 --
// function imprimirLista(lista){
//     for (let valor = 0; valor < lista.length; valor++){
//         console.log(lista[valor]);
//     }
// }
// let pets = ["Cachorro", "Gato", "Papagaio"]
// imprimirLista(pets);

// let array: Array<string> = ["Cachorro", "Gato", "Jabuti"];

// function imprimirListas(lista: Array<string>): void{
//     console.log(lista);
// }
// imprimirListas(array);

//SLIDE 25
//-- QUESTÃO 01 --
// let media: Array<number> = [10, 8.5, 7];

// function calcularMedias(array: Array<number>): number{
//     let soma = 0;
//     for (let i = 0; i < array.length; i++){
//         soma += array[i]
//     }
//     const media = soma / array.length;
//     return media;
// }
// console.log(calcularMedias(media));

// -- QUESTÃO 02 --
// const numMaiorNumero: Array<number> = [10, 8.5, 7]

// function maiorNumero(array : Array<number>){
//     console.log(Math.max(...array));
// }
// maiorNumero(numMaiorNumero);

//SLIDE 30
// -- QUESTÃO 01 --
// function contarVogais(palavra: string){
//     let totalVogal = 0;
//     let vogais = ['a', 'e', 'i', 'o', 'u'];
//     let i;
//     for (i = 0; i < palavra.length; i++ ) {
//         if(vogais.indexOf(palavra[i]) != -1) {
//             totalVogal++;
//         }
//     }
//     console.log(`O total de vogais da ${palavra} é ${totalVogal}.`);
// }

// contarVogais("Matheus");

//SLIDE 31
// -- QUESTÃO 01
// function imprimirTabuada(numero: number){
//     let num = readline.questionInt("Insira um número: ");
//     let tabuada = " ";
//     for (var count=1; count<=10 ; count++){
//         tabuada += `\n ${num} x ${count} = ${num*count}`;
//     }
//     console.log(tabuada);
// }

// imprimirTabuada(5);
