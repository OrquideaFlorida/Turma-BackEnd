//const readline = require("readline-sync");
import readline from "readline-sync"

class Cliente {
  constructor(nome, cpf, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.agencia = "3205"; // Agência fixa
    this.conta = this.gerarContaAleatoria();
    this.saldo = saldo;
    this.transacoes = [];
  }

  gerarContaAleatoria() {
    // Gera um número aleatório de 5 dígitos com "-" antes do último dígito para a conta
    const numeroConta = Math.floor(10000 + Math.random() * 90000);
    return numeroConta.toString().slice(0, 4) + "-" + numeroConta.toString().slice(-1);
  }

  formatarCPF() {
    // Formata o CPF no estilo "000.000.000-00"
    return this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      this.transacoes.push(`Depósito de R$ ${valor.toFixed(2)}`);
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log("Valor de depósito inválido.");
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      this.transacoes.push(`Saque de R$ ${valor.toFixed(2)}`);
      console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log("Valor de saque inválido ou saldo insuficiente.");
    }
  }

  listarTransacoes() {
    console.log("Histórico de Transações:");
    for (const transacao of this.transacoes) {
      console.log(transacao);
    }
  }
}

const clientes = [];

let loop = true;

while (loop) {
  console.clear();
  console.log("=== SISTEMA BANCÁRIO ===");
  console.log("========== MENU ==========");
  console.log("0 - Sair do sistema");
  console.log("1 - Listar todos os clientes");
  console.log("2 - Cadastrar um novo cliente");
  console.log("3 - Buscar um cliente");
  console.log("4 - Ver saldo bancário");
  console.log("5 - Sacar dinheiro");
  console.log("6 - Depositar dinheiro");
  console.log("7 - Listar transações do cliente");
  console.log("==========================");
  let opcao = readline.questionInt("Escolha uma opção: ");

  switch (opcao) {
    case 1:
      console.log("Listando todos os clientes");
      for (const cliente of clientes) {
          console.log("------------------------");
          console.log(`Nome: ${cliente.nome}`);
          console.log(`CPF: ${cliente.formatarCPF()}`); // Formata o CPF antes de exibir
          console.log(`Agência: ${cliente.agencia}`);
          console.log(`Conta: ${cliente.conta}`);
          console.log(`Saldo: R$ ${cliente.saldo.toFixed(2)}`);
      }
      console.log("------------------------");
      readline.keyInPause();
      break;

    case 2:
      let nomeCliente = readline.question("Digite seu nome completo: ");
      let cpfCliente = readline.question("Digite seu CPF: ");
      let saldoCliente = readline.questionFloat("Digite o saldo que deseja depositar: ");
      const novoCliente = new Cliente(nomeCliente, cpfCliente, saldoCliente);
      clientes.push(novoCliente);
      console.log("Cliente cadastrado com sucesso!");
      readline.keyInPause();
      break;

    case 3:
      let buscaCPF = readline.question("Digite o CPF do cliente que deseja buscar: ");
      for (const cliente of clientes) {
        if (cliente.cpf === buscaCPF) {
          console.log("Resultado da busca");
          console.log("------------------------");
          console.log(`Nome: ${cliente.nome}`);
          console.log(`CPF: ${cliente.formatarCPF()}`); // Formata o CPF antes de exibir
          console.log(`Agência: ${cliente.agencia}`);
          console.log(`Conta: ${cliente.conta}`);
          console.log(`Saldo: R$ ${cliente.saldo.toFixed(2)}`);
        }
      }
      readline.keyInPause();
      break;

    case 4:
      let buscaCPFSaldo = readline.question("Digite o seu CPF para ver o saldo: ");
      for (const cliente of clientes) {
        if (cliente.cpf === buscaCPFSaldo) {
          console.log(`Saldo do cliente ${cliente.nome}: R$ ${cliente.saldo.toFixed(2)}`);
        }
      }
      readline.keyInPause();
      break;

    case 5:
      let agenciaContaSaque = readline.question("Digite a agência e a conta (no formato XXXX-XXXXX-X) do cliente que deseja sacar dinheiro: ");
      let [agenciaSaque, contaSaque] = agenciaContaSaque.split("-");
      for (const cliente of clientes) {
        if (cliente.agencia === agenciaSaque && cliente.conta === `${contaSaque}-${cliente.conta.slice(-1)}`) {
          let valorSaque = readline.questionFloat("Digite o valor a sacar: ");
          cliente.sacar(valorSaque);
        }
      }
      readline.keyInPause();
      break;

    case 6:
      let agenciaContaDeposito = readline.question("Digite a agência e a conta (no formato XXXX-XXXXX-X) do cliente que deseja depositar dinheiro: ");
      let [agenciaDeposito, contaDeposito] = agenciaContaDeposito.split("-");
      for (const cliente of clientes) {
        if (cliente.agencia === agenciaDeposito && cliente.conta === `${contaDeposito}-${cliente.conta.slice(-1)}`) {
          let valorDeposito = readline.questionFloat("Digite o valor a depositar: ");
          cliente.depositar(valorDeposito);
        }
      }
      readline.keyInPause();
      break;

    case 7:
      let buscaCPFTransacoes = readline.question("Digite o CPF do cliente que deseja listar transações: ");
      for (const cliente of clientes) {
        if (cliente.cpf === buscaCPFTransacoes) {
          cliente.listarTransacoes();
        }
      }
      readline.keyInPause();
      break;

    case 0:
      console.log("Saindo do sistema...");
      loop = false;
      break;

    default:
      console.log("Opção inválida!");
}
}