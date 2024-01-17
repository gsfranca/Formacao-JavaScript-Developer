// Aula 1 - First Class Functions, Higher Order Functions, Function Declaration e Function Expression

    // First Class Functions
    // Higher Order Functions

    function falarMeuNome(){console.log('Meu nome é Giovana')}
    // const referenciaNova = falarMeuNome;
    // referenciaNova()

    function falarMeuNomeCompleto(falarMeuNome)
    {
        falarMeuNome();
        console.log('Santos de França');
        return falarMeuNome
    }

    // falarMeuNomeCompleto(falarMeuNome)()

    /* 
        Function Expression
        - Não nomeia a função, apenas a variavel
        - Não sofre o hoisting
    */
        const nomeDeOutraFuncao = function (){}


    
    /* 
            Function Declaration 
            - Nomeia a função
            - Sofre o hoisting (Vai pra cima)
    */

        function nomeDaFuncao(){}

    // Invocação normal pra ambas

// Aula 2 - Declaração Explícita e Arrow Function

    // Function Expression com Arrow Function
        const funcaoComArrowFunction = () => {}

    // Arrow Function não tem contexto

    // Exemplo
        function funcao1()
        {
            console.log(this)
        }
        const funcao2 = () =>
        {
            console.log(this)
        }

        const renan =
        {
            nome: 'Renan',
            funcao1,
            funcao2
        }

        //renan.funcao1() // Imprime e isola o contexto
        //renan.funcao2() // Não imprime o contexto 

// Aula 3 - Closures ou Fechamentos

        function soma(x) // Closure: capacidade de armazenar o X, função filho acessa a dados da função pai
        {
            return function(y)
            {
                return x+y
            }
        }

        const SomaParcial = soma(10)

        // console.log(soma(10)(20));

        // console.log(SomaParcial(20))
        // console.log(SomaParcial(30))
        // console.log(SomaParcial(40))

// Aula 4 - Invocação Direta, Call, Apply e Operador New
    const pessoa = 
        {
            nome: 'Renan',
            idade: 30
        }

        function gritar(prefixo)
        {
            console.log(prefixo, this.nome)
        }

        function teste(){console.log('Teste')}

        // Formas de invocar função
            // Direta
                // gritar('Ola')

            // Apply - Quando vc tem uma array, mas precisa dos objetos separados, ex: Math.max.apply(null, array)
                // gritar.apply(pessoa, ['Olaa'])

            // Call - Chamar uma função para criar herança
                // gritar.call(pessoa, 'Olaaa')

            // New
                // new gritar('Olaaaa')
        
// Aula 5 - Menção Honrosa aos Callbacks

    function adicao(x, y)
    {
        return x + y
    }

    function multiplicacao(x, y)
    {
        return x * y
    }
    function calculadora(x, operacao, y)
    {
        console.log(operacao(x,y))
    }

    // calculadora(10, adicao, 20)
    // calculadora(10, multiplicacao, 20)

    // document.getElementById('btn1').addEventListener(
    //    'click', () => {console.log('Clicou')})

// Aula 6 - Introdução a Manipulação de Listas
    // Aula inalgural

// Aula 7 - Foreach

    const LISTA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    LISTA.forEach((value, i, listRef) =>  { // Um pouco mais lento, se tiver muitos elementos
        //console.log(value, i, listRef)
        // console.log(value + i)
    })

    const CB = (value, i, listRef) =>  {console.log(value + i)}
    for (let i = 0; i < LISTA.length; i++) {
        const element = LISTA[i];
        // CB(element, i, LISTA)  
    }

// Aula 8 - Filter

    const listaDeNumerosPares = LISTA.filter((element) => { // cria uma nova lista
        return (element % 2 === 0)
    })

    // console.log(listaDeNumerosPares)

// Aula 9 - Map

    class Pessoa
    {
        constructor(name)
        {
            this.name = name
        }
    }

    const lista = [
        new Pessoa('Renan'), 
        new Pessoa('Andressa'), 
        new Pessoa('Vitor'), 
        new Pessoa('José'),
        new Pessoa('Ana'), 
        new Pessoa('Amanda'), 
    ]
    // console.log(lista)

    const listaNomes = []
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        listaNomes.push(element.name)
        
    }
    // console.log(listaNomes)

    const listaNomesMap = lista.map((element) => element.name)
    // console.log(listaNomesMap)

    const listaNomesMapHTML = lista.map((element) => {
        return `
            <li>
                ${element.name}
            </li>
        `
    })    
    // console.log(listaNomesMapHTML)


// Aula 10 - Reduce

    const somaDeTodosOsNumeros = LISTA.reduce((previous, current) => {
        //console.log(previous, current)
        return previous + current
    }, 0)
    //console.log(somaDeTodosOsNumeros)

// Aula 11 - Join e Combinação de Funções de Manipulação

    console.log(
        lista
        .map((e) => e.name)
        .filter((e) => e.startsWith('A'))
        .join('; ')
    )

