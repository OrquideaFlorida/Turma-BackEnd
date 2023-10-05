// Aula 05/10
// Casses Typescript
//EXEMPLO:
var Carro = /** @class */ (function () {
    // Método construtor
    function Carro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    // Método
    Carro.prototype.acelerar = function () {
        console.log("Acelerando o carro...");
    };
    return Carro;
}());
//Aqui, meuCarro é um objeto da classe Carro.
var meuCarro = new Carro("Toyota", "Corolla", 2022);
//Aqui está um exemplo de como você pode usar a classe Carro:
//const meuCarro = new Carro("Toyota", "Corolla", 2022);
console.log("Meu carro \u00E9 um ".concat(meuCarro.marca, " ").concat(meuCarro.modelo, " fabricado em ").concat(meuCarro.ano, "."));
meuCarro.acelerar(); // Chamando o método acelerar
//-- Exercício 1 --
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, e_mail) {
        this.nome = nome;
        this.idade = idade;
        this.e_mail = e_mail;
    }
    return Pessoa;
}());
var aPessoa = new Pessoa("Orquídea", 30, "orquidea@yahoo.com.br");
console.log("Meu nome \u00E9 ".concat(aPessoa.nome, ", tenho ").concat(aPessoa.idade, ", anos e meu e-mail \u00E9 ").concat(aPessoa.e_mail));
//-- Exercício 2--
//-- Exercício 3 --
//-- Exercício 4 --
//-- Exercício 5 --
