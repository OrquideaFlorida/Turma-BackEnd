// Aula 05/10
// Casses Typescript

//EXEMPLO:
class Carro {
    // Atributos
    marca: string;
    modelo: string;
    ano: number;
    
    // Método construtor
    constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    }
    
    // Método
    acelerar() {
    console.log("Acelerando o carro...");
    }
}
//Aqui, meuCarro é um objeto da classe Carro.
const meuCarro = new Carro("Toyota", "Corolla", 2022);

//Aqui está um exemplo de como você pode usar a classe Carro:
//const meuCarro = new Carro("Toyota", "Corolla", 2022);
console.log(`Meu carro é um ${meuCarro.marca} ${meuCarro.modelo} fabricado em ${meuCarro.ano}.`);

meuCarro.acelerar(); // Chamando o método acelerar

//-- Exercício 1 --
//CRIE UMA CLASSE PESSOA, COM OS ATRIBUTOS NOME, IDADE E E-MAIL
class Pessoa {
    nome: string;
    idade: number;
    e_mail: string;

    constructor(nome: string, idade: number, e_mail: string){
        this.nome = nome;
        this.idade = idade;
        this.e_mail = e_mail;
    }
}
const aPessoa = new Pessoa("Orquídea", 30, "orquidea@yahoo.com.br");
console.log(`Meu nome é ${aPessoa.nome}, tenho ${aPessoa.idade}, anos e meu e-mail é ${aPessoa.e_mail}`);

//-- Exercício 2--
//CRIAR UMA CLASSE ALUNO QUE HERDA DA CLASSE PESSOA E TENHA UM ATRIBUTO ADICIONAL: MATRÍCULA
class Aluno extends Pessoa{
    matricula: number;

    constructor(nome: string, idade: number, e_mail: string, matricula: number){
       super(nome, idade, e_mail);
       this.matricula = matricula;
    }
    
}
let aAluno = new Aluno("Orquídea", 30, "orquidea@yahoo.com.br", 123.4);
console.log(`Meu nome é ${aPessoa.nome}, tenho ${aPessoa.idade}, anos e meu e-mail é ${aPessoa.e_mail} e Matrícula: ${aAluno.matricula}`)

//-- Exercício 3 --
//CRIE UMA CLASSE RETÂNGULO COM OS ATRIBUTOS ALTURA E LARGURA E MÉTODOS PARA
//CALCULAR A ÁREA E OPERÍMETRO:


//-- Exercício 4 --
//CRIE UMA CLASSE CÍRCULO COM O ATRIBUTO RAIO E MÉTODOS PARA CALCULAR A ÁREA E
//A CIRCUNFERÊNCIA:


//-- Exercício 5 --
//CRIE UMA CLASSE CONTA BANCÁRIA, COM OS ATRIBUTOS SALDO E numeroConta E MÉTODOS
// PARA DEPOSITAR, SACAR E VERIFICAR O SALDO


// -- Exercício 6 --