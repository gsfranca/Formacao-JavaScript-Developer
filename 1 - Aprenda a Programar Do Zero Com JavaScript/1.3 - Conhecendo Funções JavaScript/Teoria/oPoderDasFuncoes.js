// Aula 1 - Conceito Basico sobre Funções

    // Função teste
        function teste() // Declara a função
        {
            console.log('Teste');
        }

        // teste(); // Chama a Função

    // Função Meu nome
        function sayMyName(name) // passando parametro
        {
            console.log('Your name is: '+ name);
        }
    
        // sayMyName('Giovana');
        // sayMyName('Mario');

    // Função quadrado
        function quadrado(valor) // retorna um valor
        {
            return valor*valor;
        }
        const quadradoDeDez = quadrado(10);
        // console.log('quadradoDeDez: ' + quadradoDeDez)
        // console.log('quadrado: ' + quadrado(10)*quadrado(10))

    // Função Juros
        function incrementarJuros(valor, percentualJuros)
        {
            const valorDeAcrecimo = (percentualJuros/100) * valor
            return valor + valorDeAcrecimo
        }
        // console.log('incrementarJuros: ' + incrementarJuros(100, 10));
        // console.log('incrementarJuros: ' + incrementarJuros(100, 15));
        // console.log('incrementarJuros: ' + incrementarJuros(100, 20));

    
// Aula 2 - Como Organizar as Funções

    // function main() // Sempre ter uma função pro codigo principal
    // {
    //     console.log('Programa principal')
    //     calcularJuros();
    // }
    // main();

    // function calcularJuros()
    // {

    // }

// Aula 3 - Exemplo Prático com Funções

    function calcularIMC(peso, alt)
    {
        return peso / Math.pow(alt, 2)
    }
    
    function ClassificarIMC(IMC)
    {
        if (IMC < 18.5)
        {
            return 'Abaixo do peso';
        }
        else if (IMC >= 18.5 && IMC < 25)
        {
            return 'Peso normal';
        }
        else if (IMC >= 25 && IMC < 30)
        {
            return 'Acima do peso';
        }
        else if (IMC >= 30 && IMC < 40)
        {
            return 'Obeso';
        }
        else
        {
            return 'Obesidade grave';
        }
    }

    // Invocando automaticamente a função Main (isola ela)
    ( 
        function ()
        {
            const peso = 98;
            const alt = 1.65;
            let IMC = calcularIMC(peso, alt).toFixed(1);

            console.log(ClassificarIMC(IMC))
            console.log('IMC: ' + IMC)
        }
    )(); 


    // main();

// Aula 4 - Funções Invocadas Imediatamente

    // console.log(main); // Objeto do tipo função

    main = function(){/*console.log(1);*/}
    // main();
