//CRIAR UMA VARIÁVEL COM TIPO DE DADOS:
// let valor: number = 50;
// let nada: null;
// let nome: string = "Orquidea";
// let decisao: boolean = true;
// let bichos: Array<string> = ["Gato", "Cachorro", "Papagaio"];
// let objeto: object = {Aluna: "Orquídea"};

import { createSemanticDiagnosticsBuilderProgram } from "typescript";

// console.log(bichos);

//-------------------------------------------------------
//let num: number = 10.5;
// let valor: string = num.toFixed(2);
// console.log(`O valor é um ${typeof valor}`);

// let valor2: number = parseFloat(valor);
// console.log(`O valor atual é um ${typeof valor2}`);

// console.log(`R$ ${num} reais`);

//--------------------------------------------------------

//let pets: Array<string | number | boolean> = ["Cão", "Galo", "Jabuti", 3, true];
// let pets: Array<any> = ["Cão", "Galo", "Jabuti", 3, true];
// let alimento: Array<String> = ["Arroz", "Feijão", "Macarrão", "Farinha"];

// pets.push("Gato");
// //pets.pop();
// pets.unshift("30");
// //pets.shift();
// //console.log(pets.concat(alimento.concat(pets)));

// //let numeros: string = pets.join(", ");
// //console.log(numeros);

// console.log(alimento.slice(2, 3));

//------------------------------------------------------

// const diaDaSemana = {
//     Domingo: 1,
//     Segunda: 2,

// }

// enum DiaDaSemana = {
//     Domingo,
//     Segunda,

// }

// console.log("Com ENUM", DiaDaSemana)

//--------------------------------------------------------

enum TipoDeUsuario {
    Administrador,
    Usuario,
    Convidado,
}

function verificarPermissao(usuario: TipoDeUsuario): void {
    if (usuario === TipoDeUsuario.Administrador){
        //
    } else {
        //
    }
}

//------------------------------------------------------------