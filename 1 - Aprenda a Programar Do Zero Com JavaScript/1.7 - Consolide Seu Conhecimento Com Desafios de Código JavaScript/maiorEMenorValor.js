/*
    2) Faça um programa que receba N (quantidade de números)
    e seus respectivos valores.
    Imprima o maior número par e o menor número impar.

    Exemplo
        - Entrada: 3, 4, 1, 10, 8
        - Saída: 
            Maior número par: 10
            Menor número impar: 1
*/

// Variaveis
    const qtndNumeros = 5;
    const numeros = [3, 4, 1, 10, 8];
    let numerosPares = []
    let numerosImpares = []

// Repetir o switch para avaliar todos os números
    for (let i = 0; i < qtndNumeros; i++) 
    {
        // Usado para avaliar se a condição do case é true ou false
            switch(true)
            {
                // Caso o número for par
                    case (numeros[i] % 2 == 0):
                        numerosPares.push(numeros[i]);
                    break;
                
                // Caso o número for impar
                    case (numeros[i] % 2 != 0):
                        numerosImpares.push(numeros[i]);
                    break;

                // Caso valor invalido
                    default:
                        console.log("Valor invalido");
                    break;
            }
    }

// Imprimir maior par e menor impar
    console.log("Maior par: "+ Math.max.apply(null, numerosPares));
    console.log("Menor impar: "+ Math.min.apply(null, numerosImpares));