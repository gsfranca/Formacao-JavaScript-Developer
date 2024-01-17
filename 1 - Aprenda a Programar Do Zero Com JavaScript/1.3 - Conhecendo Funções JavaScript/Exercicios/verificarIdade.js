// Aula 6 - Exercício Guiado 2 - Função verificarIdade

function verificarIdade(idade)
{
    if (idade >= 18)
    {
        return 'Você é maior de idade';
    }
    else
    {
        return 'Você é menor de idade';
    }
}

(
    function()
    {
        let idade = 20;
        console.log(verificarIdade(idade));
    }
)();
