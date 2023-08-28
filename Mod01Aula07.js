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
