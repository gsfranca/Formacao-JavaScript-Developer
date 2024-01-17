// Desafio da Aula 4 - Exercicio: Calculo de uma viagem

    /* 
        Faça um programa para calcular o valor de uma viagem:

        Você terá 3 variaveis, Sendo elas:
            1 - Preço do Combustivel
            2 - Gasto medio de combustivel do carro por KM
            3 - Distancia em KM da viagem

        Imprima no console o valor que será gasto para realizar esta viagem
    */

    const combuPreco = 5.62; // Preço do combustivel
    const combuCarro = 7.14; // Gasto medio do combustivel do carro por KM
    const distancia = 110; // Distancia em KM da viagem

    let litrosConsumidos = (distancia/combuCarro); // Litros consumidos
    let precoTotal = litrosConsumidos * combuPreco; // Preço total

    precoTotal = precoTotal.toFixed(2); // Arredonda pra 2 casas decimais

    console.log("Valor total: " + precoTotal);
