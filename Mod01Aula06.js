//-------EXCESSÕES EM JAVASCRIPT Aula 17/08----------
// try {
//     criticalCode();

// }catch(erro){
//     console.log("[Erro]");
//     console.log("Tive um erro");
// }

//---------------------------------------------
// Com a sintaxe corrigida
// try {
//     JSON.parse(`{ "altura": 1.72 }`);
//     } catch (e) {
//     console.log("[Erro]");
//     console.log(e.message)
    
//     } finally {
//     console.log("aqui sempre será executado...")
//     }

//--------------------------------------------------------

//Divisor por zero

// try {
//     const divisor = 0;
//     const resultado = 10 / divisor;
//     console.log("O resultado é:", resultado);
//     } catch (error) {
    
//     console.error("Erro:", error.message);
//     }

    //Resultado mostrará Infinity e não vai apontar o erro

    //-----------------------------------------------------

//     const numeros = [345435, 1, 744, 78899, 3e500];

// let menor = Infinity;
// for (let i of numeros) {
// if (i < menor) {
// menor = i;
// }

// }
// console.log(menor);

//----------------------------------------------------

//Apontando o erro na divisão por zero:

// try {
//     console.log("Iniciando calculadora...");
//     let input = 0;
//     if (input === 0) {
    
//     throw "Valor negado";
//     }
    
//     let result = 5 / input;
//     } catch (erro) {
//     console.log("[Erro:] Divisão por zero não permitida");
    
//     } finally {
    
//     console.log("Finalizando calculador...\n");
//     }

//-------------------------------------------------------------------

//EXERCÍCIO 1

// try {
//     console.log("Calculos");
//     let input = 0;
//     if (input === 0) {

//         throw "Valor negado";
//     }
//     let result = 15 / input
// } catch (erro) {
//     console.log("[Erro] Divisão por zero não permitida");
// }finally {
//     console.log("Finalizando");
// }


//----------------------------------------------------------

//22/08

//EXERCICIO 1

// const numeros = [3, 7, 2, 9, 5]
  
// // for (let indice in numeros){   //Usando for in
// //     console.log(numeros[indice]);
// //     }

// for (let indice of numeros){  //Usando For Of
// //     console.log(indice)
// }

//EXERCICIO 2

// const lista = {A: 10, B: 20, C: 30, D: 40}
// let soma = 0
// for (let index in lista){
//     soma += lista[index]
// }
//     console.log(soma)

//-------------------------------------------------------

//EXERCICIO 3

// const lista = [12, 5, 8, 21, 16, 7]
// const resultado = []
// for (let par of lista){
//     if (par % 2 == 0){
//         resultado.push(par)
//     }
// }
// console.log(resultado)

//---------------------------------------------------------------

//EXERCICIO 4

// const estudantes = { alice: 18, bob: 20, carol: 19, david: 21 };

// for (let index in estudantes){
//     if (estudantes[index] == 19){
//         console.log(`Nome: ${index} Idade: ${estudantes[index]}`)
//     }
// }

//----------------------------------------------------------------------

//EXERCICIO 5

// const pontos = [ [2, 5, 8], [3, 9, 12], [4, 6, 10] ]
// let soma = 0
// for (let linha in pontos){
//     for (let coluna in pontos[linha]){
//         soma += pontos[linha][coluna]
//         // console.log(pontos[1][1])
//     }
// }

//Quando tiver um vetor dentro de outro vetor, indicar a posição da linha e da coluna.

//---Criando um objeto---
 
const cliente = {
    nome: "Abc",
    idade: 18,
    endereco: "rua s/n"
 }

 const pessoas = new Object();
 pessoas.nome = "Abc"
 
//----------------------------------------------
