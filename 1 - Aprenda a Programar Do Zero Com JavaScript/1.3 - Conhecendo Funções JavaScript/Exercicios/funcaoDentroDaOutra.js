// Aula 7 - Exercício Guiado 3 - Invocando Função Dentro de Outra Função

// Função escreva meu nome
    function escreverNome(nome)
    {
        return 'Nome: '+ nome;
    }


// Função verifica idade
    function verificarIdade(idade)
    {
        if (idade >= 18)
        {
            return escreverNome('Giovana') + '\nVocê é maior de idade';
        }
        else
        {
            return  escreverNome('Giovana') + '\nVocê é menor de idade';
        }
    }

// Função Principal
    (
        function ()
        {
            let idade = 18;
            console.log(verificarIdade(idade));   
        }
    )();

