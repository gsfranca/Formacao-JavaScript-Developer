// Aula 1 - Variaveis

    var var1 = 10;
    // var1 = 'Texto';

    var var2 = '20';
    // var2 = 'Teste';

    // console.log(var1 + var2);
    // console.log(var1 - var2);

// Aula 2 - Hoisting

    var var3 = 'Teste 1';
    // teste();
    // console.log(var3)

    function teste()
    {
        console.log('teste')
    }

    var3 = 'Teste 2'

    //teste1();
    //teste2();

    var teste1 = function() // Vai da erro
    {
        console.log('Teste 1')
    }
    function teste2() // Vai funcionar
    {
        console.log('Teste 2')
    }

    // Function funciona se tiver depois, variavel não
                               
// Aula 3 - Escopos e Diferenças entre Var, Let e Const

    if(true)
    {
        var var10 = 'Teste'; // Escapa do escopo (Não se mantem só dentro do If)
    }
    // console.log(var10);

    function teste11() 
    {
        var var11 = 10 // Não escapa do escopo (Se mantem so dentro da função)
    }

    // console.log(var11);

    if(true)
    {
        let var12 = 10 // Não vaza de nenhum bloco (escopo)
    }
    // console.log(var12);

    var x = 10
    x = 11

    // console.log(x);

    const y = 10 // Não pode ser reatribuido
    // y = 11;
    // console.log(y)

// Aula 4 - Convenções de nomenclaturas

    var teste = 10; 
    const TESTE = 10;
    
    /*
        - Pode começar com letra
        - Pode começar com $ (Principalmente Jquery)
        - Pode começar com _ (quando a variavel é restrita a um escopo)

        - Normalmente começa com letra minuscula
        - Começa com maiuscula se for classe ou função construtura
        - TUDO sera maisculo se for constante

        - se for nome com mais de uma palavra, a proxima palavra vai ter a primeira letra maiuscula, Ex: valorSalario

        - Não pode começar com número
    */
// Aula 5 - Tipos de dados, Wrappers, Coerção de tipos, Boolean, Null e Undefined

    /*
        Tipos Primitivos: (São imutaveis)

        Boolean = True e False
        Null = Ausencia de valor (A var existe)
        Undefined = Ausencia de declaração (A var não existe)
    */

    // Object

    let a = 10 // Imutavel
    a = 20  // Substitui mas não muda

    let b = { numero: 10} // Murtavel
    b.numero = 20 // Valor fica diferente

    true, false // Imutavel
    new Boolean(true) 

    // console.log(10 + '10');
    // console.log(10 == '10'); // Desconsidera o tipo
    // console.log(10 === '10'); // Considera o tipo

    // console.log(!''); // transforma em boolean

    const nome = '';
    if (nome)
    {
        console.log("Preenchido")
    }

    // console.log(!!''); // Negado na primeira = False / Negado outra vez = true

// Aula 6 - Tipos de dados, Numbers, String e Symbol

    /*
        Tipos Primitivos: (São imutaveis)

    */

    /*
        Number 
        {
            +Infinity, -Infinity e NaN (Not a Number)
            
            Double Precision 64-bit binary format IEEE 754
                0.1 - 0.3 = - 0.19999999999999998 (Lixo de arredondamento por conta do formato)

                Se precisar fzr calculos extremamentes precisos:
                usar decimal.js
        }

    */

    /*
        String
        {
            "Texto" 
            'Texto' = Texto normal
            `Texto` = Quando for concatenar

            "" e ''
            '<div id="+id+">teste</div>' // Mesma coisa q o debaixo
            '<div id="${id}">teste</div>'
        }

    */

    /*
        Synbol
    */
        const f = Symbol('10'); // Imuitavel e unico
        const g = Symbol('10');

        // console.log(f);
        // console.log(f === g);

// Aula 7 - Objetos e Metodos

    /*
        Objetos: Coleção dinamica de chave e valor
    */

    const obj = {
        nome: 'Renan',
        idade: 30,
    }; // Cria um objeto 

    x.sobrenome = 'Johannsen de Paula';

    // Duas formas de invocar o nome
        // console.log(obj.nome);
        // console.log(obj['nome'])

    // Reatribuir valor
        obj['nome'] = "Jose";

        // console.log(obj);

    obj.falar = function()
    {
        console.log(`Meu nome é ${this.nome}`);
    }

    // obj.falar();

    