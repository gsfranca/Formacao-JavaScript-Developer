// Aula 1 - Orientação a Protótipo, Funções Construturas

    /*
        Polimorfismo: permite que um mesmo código possa ser utilizado para tratar objetos de diferentes tipos
    */
    const pessoa = 
    {
        genero: 'Feminino'
    }

    const Giovana = 
    {
        nome: 'Giovana',
        idade: 18,
        __proto__: pessoa
    }


    // console.log(pessoa.nome); // Acesso direto, busca dentro do objeto
    
    // Prototipo: Base pro objeto

    // console.log(Giovana.genero);

    // Funções construtoras: Pode ser invocada através do operador New

    function Pessoa(nome, idade) // Maiusculo = Construtora
    {
        this.nome = nome;
        this.idade =  idade;
    }

    const RENAN = new Pessoa('Renan', 30)
    // console.log(RENAN)

    Pessoa.prototype.falar = function () {console.log(`Meu nome é ${this.nome}`)}

    // RENAN.falar();

    class PessoaClass
    {
        constructor(nome, idade) // igual a função Pessoa
        {
            this.nome = nome
            this.idade = idade
        }

        falar()
        {
            console.log(`Meu nome é ${this.nome}`)
        }
    }
// Aula 2 - Entendendo Sobreescrita e Shadowing

    const pessoa1 = {
        idade: 18
    }
    const ana = 
    {
        nome: 'Ana',
        idade: 20,
        __proto__: pessoa1
    }

    // console.log(ana.idade);

// Aula 3 - Formas de criação de objetos literais com Protótipos

    const pessoa2 = 
    {
        genero: 'Masculino'
    }
    const maria =  Object.create(pessoa) // cria um objeto com outro como prototipo
    maria.nome = 'Maria'

    pessoa2._proto__ // usado para objetos instanciados
   
// Aula 4 Entendendo melhor o operador New e Brincando com Protótipos

    function Pessoa3(nome, idade)
    {
        this.nome = nome
        this.idade = idade
    }
    Pessoa3.prototype.falar = function ()
    {
        console.log(`Meu nome é: ${this.nome}`)
    }

    const Renao = {
        genero: 'Masculino'
    }
    Pessoa3.call(Renao, 'nome', 30)

    // console.log(Renao)

    // Renao.falar() // Não passa o prototype

    String.prototype.toPLang = function()
    {
        return `P ${this}`
    }

    // console.log('teste'.toPLang())
