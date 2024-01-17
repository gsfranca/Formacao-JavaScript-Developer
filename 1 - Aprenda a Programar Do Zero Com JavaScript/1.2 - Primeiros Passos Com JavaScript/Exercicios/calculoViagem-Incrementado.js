// Desafio da Aula 13 - Exercicio: Calculo de uma viagem Incrementado

    /* 
        Faça um programa para calcular o valor de uma viagem:

        Você terá 3 variaveis, Sendo elas:
            1 - Preço do etanol
            2 - Preço da gasolina
            3 - Tipo de combustivel usado pelo carro
            4 - Gasto medio de combustivel do carro por KM
            5 - Distancia em KM da viagem

        Imprima no console o valor que será gasto para realizar esta viagem
    */
    
    let isEtanol = true;
    let isGasolina = false;
    let combuPreco = 0; // Preço do combustivel

    const isOnlyEtanol =  (isEtanol === true) && (isGasolina === false); // && = E ou AND
    const isOnlyGasolina = (isEtanol === false) && (isGasolina === true);
    
    if(isOnlyEtanol) // Se estiver usando etanol *E* não usando gasolina
    {
        combuPreco = 6.13;
    }
    else if (isOnlyGasolina)  // Se estiver usando gasolimna *E* não usando etanol
    {
        combuPreco = 5.63;
    }
    else // Caso não seja nenhum dos casos anteriores
    {
        console.log("Erro no tipo de combustivel");
    }

    if (combuPreco != 0)
    {
        const combuCarro = 7.14; // Gasto medio do combustivel do carro por KM
        const distancia = 110; // Distancia em KM da viagem

        let litrosConsumidos = (distancia/combuCarro); // Litros consumidos
        let precoTotal = litrosConsumidos * combuPreco; // Preço total

        precoTotal = precoTotal.toFixed(2); // Arredonda pra 2 casas decimais

        console.log("Valor total: " + precoTotal);
    }
    
