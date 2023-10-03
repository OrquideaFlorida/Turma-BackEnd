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
function saudacao() {
    console.log("Olá Mundo!");
}
saudacao();
// -- QUESTÃO 02 --
function dobro(num) {
    return num * 2;
}
console.log(dobro(50));
// -- QUESTÃO 03 --
function mostrarNumeros(numi, numf) {
    while (numi <= numf) {
        console.log(numi);
        numi++;
    }
}
console.log(mostrarNumeros(10, 30));
// -- QUESTÃO 04 --
function verificarPar(numero) {
    if (numero % 2 === 0) {
        console.log("O n\u00FAmero ".concat(numero, " \u00E9 par!"));
    }
    else {
        console.log("O n\u00FAmero ".concat(numero, " \u00E9 \u00EDmpar!"));
    }
}
console.log(verificarPar(25));
// -- QUESTÃO 05 --
// function imprimirLista(lista){
//     for (let valor = 0; valor < lista.length; valor++){
//         console.log(lista[valor]);
//     }
// }
// let pets = ["Cachorro", "Gato", "Papagaio"]
// imprimirLista(pets);
var array = ["Cachorro", "Gato", "Jabuti"];
function imprimirLista(lista) {
    console.log(lista);
}
imprimirLista(array);
//SLIDE 25
//-- QUESTÃO 01 --
var media = [10, 8.5, 7];
function calcularMedia(array) {
    var soma = 0;
    for (var i = 0; i < array.length; i++) {
        soma += array[i];
    }
    var media = soma / array.length;
    return media;
}
console.log(calcularMedia(media));
// -- QUESTÃO 02 --
// let maior: Array<number> = [5, 10, 15];
// function maiorNumero(ordem: Array<number>): void{
//     console.log(ordem);
// }
// maiorNumero(maior);
//SLIDE 30
// -- QUESTÃO 01 --
//SLIDE 31
// -- QUESTÃO 01
