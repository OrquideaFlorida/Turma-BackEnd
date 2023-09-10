//EXERCÍCIOS
//1) DECLARAR UMA VARIÁVEL "minhaVar" SEM VALOR
var minhaVar = null;
//2)Atribua o valor 10 a "minhaVar"
var minhaVar = 10;
console.log(minhaVar);
//3) DECLARE UMA NOVA VARIÁVEL CHAMADA "soma" E ADICIONE UMA INSTRUÇÃO SOMANDO OS VALORES 15 E 8
var soma = 15 + 8;
//4) ATRIBUA A VARIÁVEL "soma" TODO O VALOR DELA, SOMANDO 1, USANDO O OPERADOR DE SOMA ABREVIADO
soma += 1
//5) ATRIBUA À VARIÁVEL "soma" TODO O VALOR DELA, MULTIPLICANDO POR 3, USANDO O OPERADOR DE MULTIPLICAÇÃO ABREVIADO
soma *= 3
//6) QUAL O VALOR DE "soma" ATÉ AQUI?
console.log(soma);
//7) DECLARE UMA VARIÁVEL CHAMADA "fazSol", ATRIBUINDO À ELA O VALOR BOOLEANDO QUE REPRESENTA "VEDADEIRO"
var fazSol = true
console.log(fazSol);
//8) DECLARE UMA VARIÁVEL CHAMADA "comida" QUE RECEBE UM ARRAY COM OS VALORES "ARROZ", "FEIJÃO" E "OVO"
var comida = ['arroz', 'feijão', 'ovo'];
console.log(comida);
//9) DIGITE A INSTRUÇÃO QUE IMPRIME O VALOR DE "feijão", QUE ESTÁ NA VARIÁVEL "comida"
console.log(comida[1]);
//10) DIGITE O CÓDIGO QUE VERIFICA SE A VARIÁVEL "soma" É IGUAL A VARIÁVEL "minhaVar" (TESTANDO O TIPO TAMBÉM)
console.log(soma == minhaVar);
console.log(typeof soma);
console.log(typeof minhaVar);
//11) DIGITE O CÓDIGO QUE VERIFICA SE A VARIÁVEL "minhaVar" É MENOR OU IGUAL A VARIÁVEL "soma"
console.log(minhaVar <= soma);
//12) CRIE UMA FUNÇÃO CHAMADA "divisao" QUE RECEBA COMO PARÂMETRO DOIS NÚMEROS, E RETORNE O RESULTADO DA DIVISÃO
function divisao(n1, n2) {
    return n1 / n2
}
console.log(divisao(10, 2));
//13) INVOQUE A FUNÇÃO ACIMA, PASSANDO OS PARÂMETROS 10 E 2
// RESOLVIDO ACIMA