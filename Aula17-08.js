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

try {
    console.log("Calculos");
    let input = 0;
    if (input === 0) {

        throw "Valor negado";
    }
    let result = 15 / input
} catch (erro) {
    console.log("[Erro] Divisão por zero não permitida");
}finally {
    console.log("Finalizando");
}

