let carta1 = 10
let carta2 = 11
let soma = carta1 + carta2

let cartab1 = 2
let cartab2 = 2
let cartab3 = 2
let cartab4 = 2
let somaBanco = cartab1 + cartab2 + cartab3 + cartab4

if (somaBanco>21) {
    console.log('O Banco Perdeu')
}else if (soma>somaBanco && soma<=21){
    console.log("Você ganhou para o banco")
}else {
    console.log ("O Banco ganhou")
}

