// FUNÇÕES AULA 08/08
/*
function - Colocar o nome da função
 Entre parênteses colocar os parâmetros da função
 Chamar o console.log (Criar a frase a ser exibida e adicionar os parâmetros)
 nomeDaFunção("nome do(s) parâmetro(")
 */



// function exibirSaudacao(nome, dia, mes){
//     console.log("Bom dia! " + nome + " Hoje é dia " + dia + " de " + mes + " de 2023")
// }

// exibirSaudacao("Orquidea!", "08", "Julho");
// exibirSaudacao("Maria!" , "10", "Setembro");
// exibirSaudacao("Aluna!!!", "09", "Outubro")

//---------------------------------------------------------------------------

//OUTRA FORMA DE APLICAR A MENSAGEM

//function nomeDaFunção(parâmetro1, parâmetro2)
//const mensagem = `texto1 ${parâmetro1} texto2{parâmetro2}
//console.log(mensagem)
//exibirSaudacao("nomear parâmetro1", "nomear parâmetro2")


// function exibirSaudacao(nome, dia){
//     const mensagem = `Olá! ${nome}! Tenha uma ótima ${dia}`;
//     console.log(mensagem)
// }

// exibirSaudacao("Orquídea", "Terça-Feira")

//---------------------------------------------------------------------

// --QUESTÃO 1--

// function exibirSaudacao(mensagem) {
//     console.log("Olá, Mundo!");
// }

// exibirSaudacao("Olá, Mundo!")


// --QUESTÃO 2--

// function dobro(num){
//     console.log(num * 2);
// }

// dobro("20");



// --QUESTÃO 3--

// function mostrarNumeros(numi, numf){
//     while(numi <= numf){
//         console.log(numi)
//         numi++
//     }
// }
// mostrarNumeros(10,15)




// --QUESTÃO 4--
// function verificarPar(numero){
//     if(numero%2===0){
//         console.log(`o numero ${numero} é par`)
//     }
// }
// verificarPar(10)



// --QUESTÃO 5--

//for: a primeira declaração de variável, depois a condição e depois a interação

function imprimirLista(lista){
    for(let valor = 0; valor < lista.length; valor++){
        console.log(lista[valor]);
    }
}
let sabores = ["chácomlate", "morânguio", "leite compensado", "frocks"];

imprimirLista(sabores);

// --QUESTÃO 6--

let medias = [10, 20, 2.5, 7];

function calcularMedia(numeros){
    let soma = 0;
    for(let i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }
    const medias = soma / numeros.length;
    return medias;
}

console.log(calcularMedia(medias));

// --QUESTÃO 6--

let maior = [10, 20, 2.5, 7];

function maiorNumero(mAior){
    console.log(Math.max(...mAior));
}
maiorNumero(maior);

// --QUESTÃO 7--

function contarVogais(quantas){
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let contVogal = 0;
    for(let j = 0; j < quantas.length; j++){
        if (vogais.indexOf(quantas[j]) != -1){
            contVogal++;
        }
    }
    console.log(`O nome ${quantas}, contém ${contVogal} vogais.`);
}
contarVogais("Orquidea"); //Revisar a contagem de vogais

//-- QUESTÃO 8 --

function imprimirTabuada(){
    
}