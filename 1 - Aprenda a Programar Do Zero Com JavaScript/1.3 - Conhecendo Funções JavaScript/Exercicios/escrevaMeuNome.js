// Aula 5 - Exercício Guiado 1 - Função escrevaMeuNome

// Função escreva meu nome
    function escreverNome(nome)
    {
        return 'Meu nome é: '+ nome;
    }

// Função Principal
    (
        function ()
        {
            let nome = 'Fulano';
            console.log(escreverNome(nome));   
        }
    )();

