// Aula 4 - Como Funciona a Estrutura For
    // Estrutura de Repetição 
        for (
            let i = 0; // Declaração
            i < 10; // Condição
            i++ // i + 1
            ) 
        {
            // console.log(i)
        }
// Aula 5 - Executando For em Uma String
    
    const nome = 'Giovana Santos de França'; // String é uma Array de Caracter

    // Colocar uma letra em cada posição
        for (let i = 0; i < nome.length; i++) 
        {
            // console.log(nome[i]);
        }

    
// Aula 6 - Executando For Para Exibir a Média de Notas
        
    const notas = []

    notas.push(5);
    notas.push(10);
    notas.push(10); 

    let soma = 0;
    for (let i = 0; i < notas.length; i++) 
    {
        const nota = notas[i]
        soma = soma + nota;
    }
    const media = soma / notas.length;
    // console.log(media.toFixed(1));

// Aula 7 - Como Depurar o Código

