
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

// Criando um objeto
//  const cliente = {
//     nome: "Abc",
//     idade: 18,
//     endereco: "rua s/n"
//  }

//  const pessoas = new Object();
//  pessoas.nome = "Abc"
 
//----------------------------------------------

//--------OBJETO LIVRO AULA 24/08

// const livro = {
//     titulo: "1984",
//     autor: "George Orwell",
//     isDisponivel: false,
//     checkin: function () {
//     this.isDisponivel = true;
//     },
//     checkout: function () {
//     this.isDisponivel = false;
//     },
//     };

//-----------------------------------------


//EXERCICIO OBJETO

// EXERCICIO 1 Criando um objeto vazio
// const qualquer = {}; 
// const qualquer = new Object(); //Outra forma, utilizando o "new Object"

//EXERCICIO 2 e 3 Acessando o nome e a idade do objeto
// const pessoa = {
//     nome: "João",
//     idade: 15
// }
// //console.log(pessoa["nome"])
// console.log(pessoa["idade"])

//EXERCICIO 4
// const produto = {
//     preco: 50
// }
// produto.preco = 75 //Atribuindo um novo valor ao produto
// console.log(produto.preco)

//EXERCICIO 5
// const contato = {
//     nome: "Joaquina",
//     telefone: "819999-9999",
//     Email: "orquidea@yahoo.com.br",
// }

// delete contato.Email
// console.log(contato)

//EXERCICIO 6
// const cliente = {
//     nome: "Alguém",
// }
// let endereco = new Object();
// cliente.endereco = "Rua A, 123";
// console.log(cliente)

//EXERCICIO 7 ==> REVISAR PARA FAZER DEPOIS
// let empresa = [departamento: 1, departamento: 2, departamento: 3];

// console.log(Object.keys(empresa)[0]);

//FALTAM EXERCICIOS 8,9 E 10


//ENUMERATES

//EXERCICIO 1

//let dia = 2;

const diasDaSemana = {
    DOMINGO: 'Domingo',
    SEGUNDA: 'Segunda',
    TERÇA: 'Terça',
    QUARTA: 'Quarta',
    QUINTA: 'Quinta',
    SEXTA: 'Sexta',
    SABADO: 'Sábado'
}
console.log(diasDaSemana.SEXTA);
// ou console.log(diasDaSemana.[dia]);

//EXERCICIO 2

