// Aula 7 - Conceito de Boolean e Condicionais

// Declarações booleanas
    const camisetaAzul = true; // a cor da camiseta é azul? Verdairo
    const camisetaAmarela = false; // a cor da camiseta é amarela? Falso

// Aula 8 -  Exemplo com resto de divisão
    const numero = 0;

    // Verifica se é par
        const eNumeroPar = (numero % 2) === 0; // Operador pra ver o resto da divisão por 2
    
    // Verifica se é impar
        const eNumeroImpar = (numero % 2) > '0'; // Converte automaticamente
        /*
            Caso o o for string:
                Se usar == ele não leva em condição o tipo de var
                Se usar === ele leva em condição o tipo de var
        */

    console.log('É par? ' + eNumeroPar);
    console.log('É impar? ' + eNumeroImpar);

// Aula 9 - Estrutura Condicional com If e Else

    // Operador Se (Se oq estiver dentro do () for verdade, executa {})
        if(eNumeroPar) 
        {
            console.log('É par? (IF) ' + eNumeroPar);
        }
        else // SE NÃO
        {
            console.log('É impar? (ELSE) ' + eNumeroImpar);
        }

    // Deixa a declaração ao contrario
        if(!eNumeroPar) 
        {
            console.log('É impar? (IF) ' + eNumeroImpar);
        }
    
 // Aula 10 - Estrutura Condicional com Else If

        const numeroDivisivelPor5 = (numero % 5) === 0;
        if (numero === 0)
        {
            console.log('O número é 0');
        }
        else if (numeroDivisivelPor5) // Mais de 2 condições
        {
            console.log('É divisivel por 5');
        }
        else 
        {
            console.log('Não é divisivel por 5');
        }

// Aula 11 - Revisão e dicas de boas praticas
    /*
        Se é booleano, coloca is no nome da VAR
        Contas complexas é melhor deixar em outra VAR
    */

