// Aula 1 - Estrutura Básica de Um Obejto

    const giovana = {
        nome: "Giovana Santos de França",
        idade: 18,
    };  // Objeto agrupa valores, coleção de dados

    // console.log(giovana.nome); // Console é um objeto
    // console.log(giovana.idade);
    // console.log(giovana);

    // Aula 2 - Editando Informações de Um Objeto

    giovana.altura = '1.65';
    // console.log(giovana);

    delete giovana.altura; // Deletar atributo
    // console.log(giovana);

// Aula 3 - Criando Métodos Para o Objeto

    // Fução dentro de Objeto = Metodo

    const luana = 
    {
        nome: 'Luana',
        idade: '4',
        descrever: function()
        {
            // console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`); // Precisa ser `` aqui
        }
    }

    luana.descrever = function(){/*console.log(`Meu nome é ${this.nome}`)*/}

    luana.descrever();

// Aula 4 - Acessando Dinamicamente Valores de um Objeto

    const query = 'nome';

    console.log(luana[query]);