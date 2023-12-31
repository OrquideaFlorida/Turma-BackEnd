//const readline = require("readline-sync"); // Importa a biblioteca readline-sync para interagir com o usuário via console.
import readline from "readline-sync"

class Cliente {
    constructor(nome, cpf, saldo) { // Define o construtor da classe Cliente que é chamado ao criar um novo cliente.
        this.nome = nome; // Armazena o nome do cliente.
        this.cpf = cpf; // Armazena o CPF do cliente.
        this.agencia = "3205"; // Define uma agência fixa para todos os clientes.
        this.conta = this.gerarContaAleatoria(); // Gera um número de conta aleatório quando um cliente é criado.
        this.saldo = saldo; // Armazena o saldo inicial do cliente.
        this.transacoes = []; // Cria uma lista vazia para armazenar as transações do cliente.
    }

    sacar(valor) { // Método para realizar um saque na conta do cliente.
        if (!validarValor(valor)) { // Verifica se o valor do saque é válido.
            console.log("Erro: Valor de saque inválido. O valor deve ser numérico e maior que zero.");
            return; // Retorna sem fazer nada se o valor não for válido.
        }

        if (valor <= this.saldo) { // Verifica se o saldo é suficiente para o saque.
            this.saldo -= valor; // Deduz o valor do saldo.
            this.transacoes.push(`Saque de R$ ${valor.toFixed(2)}`); // Registra a transação na lista de transações.
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("Erro: Saldo insuficiente para realizar o saque."); // Exibe uma mensagem de erro se o saldo for insuficiente.
        }
    }

    depositar(valor) { // Método para realizar um depósito na conta do cliente.
        if (!validarValor(valor)) { // Verifica se o valor do depósito é válido.
            console.log("Erro: Valor de depósito inválido. O valor deve ser numérico e maior que zero.");
            return; // Retorna sem fazer nada se o valor não for válido.
        }

        this.saldo += valor; // Adiciona o valor ao saldo.
        this.transacoes.push(`Depósito de R$ ${valor.toFixed(2)}`); // Registra a transação na lista de transações.
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    }

    gerarContaAleatoria() { // Método para gerar um número de conta aleatório.
        const numeroConta = Math.floor(10000 + Math.random() * 90000); // Gera um número aleatório entre 10000 e 99999.
        return numeroConta.toString().slice(0, 4) + "-" + numeroConta.toString().slice(-1); // Formata o número de conta como "XXXX-Y".
    }

    formatarCPF() { // Método para formatar o CPF do cliente no formato "XXX.XXX.XXX-XX".
        return this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    listarTransacoes() { // Método para listar as transações do cliente.
        console.log("")
        console.log("Histórico de Transações:");
        console.log("")
        for (const transacao of this.transacoes) { // Percorre a lista de transações e exibe cada uma.
            console.log(transacao);
        }
    }

    exibirDados() { // Método para exibir os dados do cliente.
        console.log("=== DADOS DO CLIENTE ===");
        console.log(`Nome: ${this.nome}`); // Exibe o nome do cliente.
        console.log(`CPF: ${this.formatarCPF()}`); // Exibe o CPF do cliente no formato correto.
        console.log(`Agência: ${this.agencia}`); // Exibe a agência do cliente (fixa).
        console.log(`Conta: ${this.conta}`); // Exibe o número de conta do cliente.
        console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`); // Exibe o saldo do cliente formatado como moeda.
        console.log("========================");
    }
}

class Banco {
    constructor() { // Construtor da classe Banco que é chamado ao criar uma instância do banco.
        this.clientes = []; // Inicializa a lista de clientes vazia quando o banco é criado.
    }

    cadastrarCliente() { // Método para cadastrar um novo cliente.
        console.clear(); // Limpa a tela do console.
        console.log("=== CADASTRAR CLIENTE ===");

        const nomeCliente = obterNomeCliente(); // Chama uma função para obter o nome do cliente.
        if (!nomeCliente) return; // Retorna se o nome não for válido.

        const cpfCliente = obterCPFCliente(); // Chama uma função para obter o CPF do cliente.
        if (!cpfCliente) return; // Retorna se o CPF não for válido.

        const saldoCliente = obterSaldoCliente(); // Chama uma função para obter o saldo inicial do cliente.
        if (saldoCliente === null) return; // Retorna se o saldo não for válido.

        const novoCliente = new Cliente(nomeCliente, cpfCliente, saldoCliente); // Cria um novo cliente com os dados informados.
        this.clientes.push(novoCliente); // Adiciona o novo cliente à lista de clientes do banco.
        console.log("Cliente cadastrado com sucesso!");
        readline.keyInPause(); // Aguarda o usuário pressionar uma tecla antes de continuar.
    }

    listarClientes() { // Método para listar os clientes cadastrados no banco.
        console.clear(); // Limpa a tela do console.
        console.log("=== LISTAR CLIENTES ===");

        if (this.clientes.length === 0) { // Verifica se não há clientes cadastrados.
            console.log("Nenhum cliente cadastrado.");
            readline.keyInPause(); // Aguarda o usuário pressionar uma tecla antes de continuar.
            return;
        }

        let clienteIndex = 1; // Variável para enumerar os clientes na lista.
        for (const cliente of this.clientes) { // Percorre a lista de clientes.
            console.log(`${clienteIndex} - ${cliente.nome}`); // Exibe o número e o nome do cliente.
            clienteIndex++;
        }

        const escolha = readline.questionInt("Digite o número correspondente ao cliente para ver os detalhes (ou 0 para voltar): ");

        if (escolha >= 1 && escolha <= this.clientes.length) { // Verifica se a escolha do cliente é válida.
            const clienteSelecionado = this.clientes[escolha - 1]; // Seleciona o cliente com base na escolha.
            exibirDetalhesCliente(clienteSelecionado, this.clientes); // Chama uma função para exibir os detalhes do cliente selecionado.
        } else if (escolha !== 0) { // Se a escolha não for 0 (voltar), exibe uma mensagem de erro.
            console.log("Erro: Escolha inválida.");
            readline.keyInPause(); // Aguarda o usuário pressionar uma tecla antes de continuar.
        }
    }

    buscarCliente() { // Método para buscar um cliente.
        console.clear(""); // Limpa a tela do console.
        console.log("===== BUSCAR CLIENTE =====");
        console.log("1 - Buscar pelo nome");
        console.log("2 - Buscar pelo CPF");
        console.log("0 - Voltar ao menu principal");
        console.log("==========================");
        console.log("");

        const escolha = readline.questionInt("Escolha uma opção: "); // Solicita ao usuário que escolha uma opção.

        switch (escolha) {
            case 1:
                this.buscarPorNome(); // Chama um método para buscar por nome.
                break;
            case 2:
                this.buscarPorCPF(); // Chama um método para buscar por CPF.
                break;
            case 0:
                break; // Retorna ao menu principal.
            default:
                console.log("Erro: Opção inválida."); // Exibe uma mensagem de erro se a opção for inválida.
                readline.keyInPause(); // Aguarda o usuário pressionar uma tecla antes de continuar.
        }
    }

    buscarPorNome() { // Método para buscar clientes por nome.
        while (true) { // Loop infinito para permitir várias buscas.
            console.clear(); // Limpa a tela do console.
            console.log("=== BUSCAR CLIENTE POR NOME ===");
            const nomeBusca = readline.question("Digite o nome do cliente (ou 0 para voltar): "); // Solicita o nome a ser buscado.
            if (nomeBusca === '0') {
                return; // Retorna ao menu anterior se o usuário digitar 0.
            }

            const clientesEncontrados = []; // Cria uma lista vazia para armazenar os clientes encontrados.

            for (const cliente of this.clientes) { // Percorre a lista de clientes.
                if (cliente.nome.toLowerCase().includes(nomeBusca.toLowerCase())) { // Verifica se o nome do cliente contém o texto digitado (ignora maiúsculas/minúsculas).
                    clientesEncontrados.push(cliente); // Adiciona o cliente encontrado à lista.
                }
            }

            if (clientesEncontrados.length === 0) { // Verifica se nenhum cliente foi encontrado.
                console.log("Nenhum cliente encontrado com esse nome.");
                readline.keyInPause(); // Aguarda o usuário pressionar uma tecla antes de continuar.
            } else {
                console.log("Clientes encontrados:");
                clientesEncontrados.forEach((cliente, index) => {
                    console.log(`${index + 1} - ${cliente.nome}`); // Enumera e exibe o nome dos clientes encontrados.
                });

                const escolha = readline.questionInt("Digite o número correspondente ao cliente para ver os detalhes (ou 0 para voltar): ");
                if (escolha >= 1 && escolha <= clientesEncontrados.length) { // Verifica se a escolha do cliente é válida.
                    const clienteSelecionado = clientesEncontrados[escolha - 1]; // Seleciona o cliente com base na escolha.
                    exibirDetalhesCliente(clienteSelecionado, this.clientes); // Chama uma função para exibir os detalhes do cliente selecionado.
                } else if (escolha === 0) { // Se a escolha for 0 (voltar), retorna ao menu anterior.
                    return;
                } else {
                    console.log("Erro: Escolha inválida."); // Exibe uma mensagem de erro se a escolha for inválida.
                    readline.keyInPause(); // Aguarda o usuário pressionar uma tecla antes de continuar.
                }
            }
        }
    }

    buscarPorCPF() { // Método para buscar clientes por CPF.
        while (true) { // Loop infinito para permitir várias buscas.
            console.clear(); // Limpa a tela do console.
            console.log("=== BUSCAR CLIENTE POR CPF ===");
            const cpfBusca = readline.question("Digite o CPF do cliente (11 dígitos numéricos, ou 0 para voltar): ");

            if (cpfBusca === '0') {
                return; // Retorna ao menu anterior se o usuário digitar 0.
            }

            if (validarCPF(cpfBusca)) { // Verifica se o CPF digitado é válido.
                const clienteEncontrado = this.clientes.find(cliente => cliente.cpf === cpfBusca); // Procura um cliente com o CPF correspondente.
                if (clienteEncontrado) {
                    exibirDetalhesCliente(clienteEncontrado, this.clientes); // Chama uma função para exibir os detalhes do cliente encontrado.
                    readline.keyInPause(); // Aguarda o usuário pressionar uma tecla antes de continuar.
                } else {
                    console.log("Erro: Nenhum cliente encontrado com esse CPF."); // Exibe uma mensagem de erro se nenhum cliente for encontrado.
                    readline.keyInPause(); // Aguarda o usuário pressionar uma tecla antes de continuar.
                }
            } else {
                console.log("Erro: CPF inválido."); // Exibe uma mensagem de erro se o CPF for inválido.
                readline.keyInPause(); // Aguarda o usuário pressionar uma tecla antes de continuar.
            }
        }
    }
}


function exibirDetalhesCliente(clienteSelecionado, clientes) {
    let continua = true; // Define uma variável que controla a continuação do loop
    while (continua) { // Entra em um loop enquanto a variável continua for verdadeira
        console.clear(); // Limpa a tela do console
        console.log("=== DETALHES DO CLIENTE ==="); // Exibe o título "DETALHES DO CLIENTE"
        console.log(`Nome: ${clienteSelecionado.nome}`); // Exibe o nome do cliente
        console.log(`CPF: ${clienteSelecionado.formatarCPF()}`); // Exibe o CPF formatado do cliente
        console.log(`Agência: ${clienteSelecionado.agencia}`); // Exibe a agência do cliente
        console.log(`Conta: ${clienteSelecionado.conta}`); // Exibe o número da conta do cliente
        console.log(`Saldo: R$ ${clienteSelecionado.saldo.toFixed(2)}`); // Exibe o saldo do cliente formatado com duas casas decimais
        console.log("==========================="); // Exibe uma linha de separação
        console.log(""); // Exibe uma linha em branco
        console.log("Opções:"); // Exibe as opções disponíveis para o cliente
        console.log("1 - Alterar CPF ou Nome");
        console.log("2 - Sacar Dinheiro");
        console.log("3 - Depositar Dinheiro");
        console.log("4 - Ver Registro de Alterações");
        console.log("5 - Excluir Cliente");
        console.log("0 - Voltar ao menu principal");
        console.log("==========================="); // Exibe outra linha de separação
        console.log("");

        let opcao = readline.questionInt("Escolha uma opção: "); // Solicita ao usuário que escolha uma opção numérica
        switch (opcao) { // Inicia uma estrutura de switch para tratar a opção escolhida
            case 1: // Se a opção escolhida for 1 (Alterar CPF ou Nome)
                let atualizacaoNomeCpf = false; // Define uma variável que controla a atualização de nome ou CPF como falsa
                while (true) { // Entra em um loop infinito para exibir opções de alteração de nome ou CPF
                    console.clear(); // Limpa a tela do console
                    console.log("=== ALTERAR CPF OU NOME ==="); // Exibe o título "ALTERAR CPF OU NOME"
                    console.log("1 - Alterar Nome"); // Exibe a opção 1 (Alterar Nome)
                    console.log("2 - Alterar CPF"); // Exibe a opção 2 (Alterar CPF)
                    console.log("0 - Voltar ao menu anterior"); // Exibe a opção 0 (Voltar ao menu anterior)
                    console.log("==========================="); // Exibe uma linha de separação
                    console.log(); // Exibe uma linha em branco

                    const escolha = readline.questionInt("Escolha uma opção: "); // Solicita ao usuário que escolha uma opção numérica

                    switch (escolha) { // Inicia outra estrutura de switch para tratar a escolha dentro do menu de alteração de nome ou CPF
                        case 0: // Se a escolha for 0 (Voltar ao menu anterior)
                            return; // Sai da função e volta ao menu anterior
                        case 1: // Se a escolha for 1 (Alterar Nome)
                            let novoNome = readline.question("Digite o novo nome do Cliente: "); // Solicita ao usuário que digite o novo nome
                            clienteSelecionado.nome = novoNome; // Atualiza o nome do cliente
                            console.log("Nome do cliente atualizado com sucesso!"); // Exibe uma mensagem de sucesso
                            atualizacaoNomeCpf = true; // Marca que houve uma atualização de nome ou CPF
                            readline.keyInPause(); // Aguarda o usuário pressionar uma tecla para continuar
                            break;
                        case 2: // Se a escolha for 2 (Alterar CPF)
                            let novoCPF = readline.question("Digite o novo CPF do Cliente: "); // Solicita ao usuário que digite o novo CPF

                            for (let i = 0; i < clientes.length; i++) { // Inicia um loop para verificar se o novo CPF já está cadastrado em outros clientes
                                if (clientes[i].cpf == novoCPF) { // Compara o novo CPF com os CPFs existentes
                                    console.log("Erro: Cliente com o mesmo CPF já cadastrado."); // Exibe uma mensagem de erro se o CPF já existe
                                    readline.keyInPause(); // Aguarda o usuário pressionar uma tecla para continuar
                                    break; // Sai do loop
                                }
                            }

                            clienteSelecionado.cpf = novoCPF; // Atualiza o CPF do cliente
                            console.log("CPF do cliente atualizado com sucesso!"); // Exibe uma mensagem de sucesso
                            atualizacaoNomeCpf = true; // Marca que houve uma atualização de nome ou CPF
                            readline.keyInPause(); // Aguarda o usuário pressionar uma tecla para continuar
                            break;
                        default: // Se a escolha for diferente de 0, 1 ou 2 (Opção inválida)
                            console.log("Erro: Opção inválida!"); // Exibe uma mensagem de erro
                    }

                    if (atualizacaoNomeCpf) { // Se houve uma atualização de nome ou CPF
                        return; // Sai da função e volta ao menu anterior
                    }
                }
            case 2: // Se a opção escolhida for 2 (Sacar Dinheiro)
                let valorSaque = parseFloat(readline.question("Digite o valor a sacar: ")); // Solicita ao usuário que digite o valor a ser sacado como número decimal
                while (!validarValor(valorSaque)) { // Entra em um loop enquanto o valor do saque não for válido
                    console.log("Erro: Valor de saque inválido. Digite um número positivo."); // Exibe uma mensagem de erro
                    valorSaque = parseFloat(readline.question("Digite o valor a sacar: ")); // Solicita novamente que o usuário digite o valor do saque
                }
                clienteSelecionado.sacar(valorSaque); // Chama a função sacar do cliente com o valor informado
                readline.keyInPause(); // Aguarda o usuário pressionar uma tecla para continuar
                break;
            case 3: // Se a opção escolhida for 3 (Depositar Dinheiro)
                let valorDeposito = parseFloat(readline.question("Digite o valor a depositar: ")); // Solicita ao usuário que digite o valor a ser depositado como número decimal
                while (!validarValor(valorDeposito)) { // Entra em um loop enquanto o valor do depósito não for válido
                    console.log("Erro: Valor de depósito inválido. Digite um número positivo."); // Exibe uma mensagem de erro
                    valorDeposito = parseFloat(readline.question("Digite o valor a depositar: ")); // Solicita novamente que o usuário digite o valor do depósito
                }
                clienteSelecionado.depositar(valorDeposito); // Chama a função depositar do cliente com o valor informado
                readline.keyInPause(); // Aguarda o usuário pressionar uma tecla para continuar
                break;
            case 4: // Se a opção escolhida for 4 (Ver Registro de Alterações)
                clienteSelecionado.listarTransacoes(); // Chama a função listarTransacoes do cliente para exibir o registro de alterações
                readline.keyInPause(); // Aguarda o usuário pressionar uma tecla para continuar
                break;
            case 5: // Se a opção escolhida for 5 (Excluir Cliente)
                if (confirmarExclusao()) { // Chama a função confirmarExclusao para confirmar se o cliente deve ser excluído
                    const cpfCliente = clienteSelecionado.cpf; // Obtém o CPF do cliente
                    excluirCliente(cpfCliente); // Chama a função excluirCliente para remover o cliente da lista
                    console.log("Cliente excluído com sucesso."); // Exibe uma mensagem de sucesso
                    readline.keyInPause(); // Aguarda o usuário pressionar uma tecla para continuar
                    continua = false; // Define continua como false para sair do loop principal
                }
                break;

            case 0: // Se a opção escolhida for 0 (Voltar ao menu principal)
                continua = false; // Define continua como false para sair do loop principal
                break;
            default: // Opção inválida
                console.log("Erro: Opção inválida!"); // Exibe uma mensagem de erro
        }
    }
}


// Função para excluir um cliente da lista de clientes do banco com base no CPF.
function excluirCliente(cpf) {
    // Encontra o índice do cliente na lista de clientes do banco.
    const indice = banco.clientes.findIndex(cliente => cliente.cpf === cpf);
    // Se o índice for diferente de -1, significa que o cliente foi encontrado.
    if (indice !== -1) {
        // Remove o cliente da lista usando splice.
        banco.clientes.splice(indice, 1);
    }
}

// Função para confirmar se o usuário deseja realmente excluir um cliente.
function confirmarExclusao() {
    // Solicita ao usuário uma confirmação (S para Sim, N para Não) e retorna true se for "S" e false se for "N".
    const confirmacao = readline.keyInYN("Tem certeza de que deseja excluir o cliente? (S/N): ");
    return confirmacao;
}

// Função para validar se um valor é um número positivo.
function validarValor(valor) {
    // Retorna true se o valor for um número (não NaN) e for maior que zero.
    return !isNaN(valor) && valor > 0;
}

// Função para validar um número de CPF com 11 dígitos numéricos.
function validarCPF(cpf) {
    // Retorna true se o CPF tiver exatamente 11 dígitos numéricos.
    return /^[0-9]{11}$/.test(cpf);
}

// Função para obter o nome do cliente.
function obterNomeCliente() {
    // Solicita ao usuário que digite o nome do cliente.
    const nome = readline.question("Digite o nome do cliente: ");
    // Se o nome for válido (contém apenas letras e espaços), retorna o nome. Caso contrário, mostra um erro e retorna null.
    if (validarNome(nome)) {
        return nome;
    } else {
        console.log("Erro: Nome inválido.");
        // Pausa a execução até que o usuário pressione uma tecla.
        readline.keyInPause();
        return null;
    }
}

// Função para obter o CPF do cliente (com validação de 11 dígitos numéricos).
function obterCPFCliente() {
    // Solicita ao usuário que digite o CPF do cliente.
    const cpf = readline.question("Digite o CPF do cliente (11 dígitos numéricos): ");
    // Se o CPF for válido (contém exatamente 11 dígitos numéricos), retorna o CPF. Caso contrário, mostra um erro e retorna null.
    if (validarCPF(cpf)) {
        return cpf;
    } else {
        console.log("Erro: CPF inválido.");
        // Pausa a execução até que o usuário pressione uma tecla.
        readline.keyInPause();
        return null;
    }
}

// Função para obter o saldo inicial do cliente (com validação de número positivo).
function obterSaldoCliente() {
    // Solicita ao usuário que digite o saldo inicial do cliente.
    const saldo = parseFloat(readline.question("Digite o saldo inicial do cliente: "));
    // Se o saldo for válido (um número não negativo), retorna o saldo. Caso contrário, mostra um erro e retorna null.
    if (!isNaN(saldo) && saldo >= 0) {
        return saldo;
    } else {
        console.log("Erro: Saldo inválido.");
        // Pausa a execução até que o usuário pressione uma tecla.
        readline.keyInPause();
        return null;
    }
}

// Função para validar se um nome contém apenas letras e espaços.
function validarNome(nome) {
    // Retorna true se o nome contiver apenas letras e espaços (sem números ou caracteres especiais).
    return /^[A-Za-z\s]+$/.test(nome);
}


// Cria uma instância do objeto "Banco" para representar o sistema bancário.
const banco = new Banco();

// Inicia um loop infinito que mantém o programa em execução até que o usuário decida sair.
while (true) {
    // Exibe o menu do sistema.
    exibirMenu();

    // Solicita ao usuário que escolha uma opção digitando um número.
    const opcao = readline.questionInt("Escolha uma opção: ");

    // Utiliza um switch para executar diferentes ações com base na opção escolhida pelo usuário.
    switch (opcao) {
        case 1:
            // Chama o método "cadastrarCliente" do objeto "banco" para cadastrar um novo cliente.
            banco.cadastrarCliente();
            break;
        case 2:
            // Chama o método "listarClientes" do objeto "banco" para listar os clientes cadastrados.
            banco.listarClientes();
            break;
        case 3:
            // Chama o método "buscarCliente" do objeto "banco" para buscar um cliente por nome.
            banco.buscarCliente();
            break;
        case 0:
            // Encerra o programa e exibe uma mensagem de encerramento.
            console.log("Encerrando o programa.");
            //return;
        default:
            // Se o usuário escolher uma opção inválida, exibe uma mensagem de erro e pausa a execução.
            console.log("Erro: Opção inválida.");
            readline.keyInPause();
    }
}

// Função para exibir o menu do sistema.
function exibirMenu() {
    console.clear(); // Limpa a tela do console.
    console.log("===== SISTEMA BANCÁRIO =====");
    console.log("1 - Cadastrar Novo Cliente");
    console.log("2 - Listar Clientes");
    console.log("3 - Buscar Cliente");
    console.log("0 - Sair");
    console.log("============================");
    console.log("");
}

