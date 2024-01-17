// Aula 5 - Como Criar Classes e Instâncias

class Pessoa
{
    nome;
    idade;
    descrever() 
    {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`)    
    }
}

    // Classe = Definição, Instancia = Ocorrencia

    const giovana = new Pessoa();
    giovana.nome = 'Giovana';
    giovana.idade = 18;


    const luana = new Pessoa();
    luana.nome = 'Luana';
    luana.idade = 4;

    // console.log(giovana);
    // console.log(luana);

// Aula 6 - Criando Instâncias Com o Constructor
    class Pessoa2
    {
        nome;
        idade;
        constructor(nome, idade) // Oque acontece quando alguem é instanciado
        {
            this.nome = nome;
            this.idade = idade;
            this.anoDeNascimento = 2022 - idade;
        }
        descrever() 
        {
            // console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`)    
        }
    }
    const livia = new Pessoa2('Livia', 4);
    // console.log(livia);

// Aula 7 - Funções Recebendo Objetos
    const nair = new Pessoa2('Nair', 70)
    function compararPessoa(p1, p2)
    {
        if (p1.idade > p2.idade)
        {
            console.log(`${p1.nome} é mais velho que ${p2.nome}.`);
        }
        else if (p2.idade > p1.idade)
        {
            console.log(`${p2.nome} é mais velho que ${p1.nome}.`);
        }
        else
        {
            console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
        }
    }
    compararPessoa(luana, giovana);