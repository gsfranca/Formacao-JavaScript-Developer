// Aula 2 - Console e Como Declarar Variaveis e Aula 3 - Diferenças entre variaveis e tipos de operadores

    // Imprimir no Terminal
        console.log('Imprimir algo');

    // Variaveis
        let varLet = 10; // É possivel mudar o valor (VAR)
        const varConst = 3.14; // Não muda o valor nunca (VAL)

    // Trocar valor do Let
        varLet = 20;

    // Imprimir valor da Variavel
        console.log("VarLet = " + varLet)

    // Erro ao mudar o const (Pois ele não pode mudar de valor nunca)
        // varConst = 6;
        // console.log(varConst);

    // Operadores Matematicos

        // Somar
            let varLetSoma = varLet+10;
            console.log("Soma:" + varLetSoma);

        // Subtrair
            let varLetSub = varLet-10;
            console.log("Subtração:" + varLetSub);

        // Multiplicar
            let varLetMult = varLet*10;
            console.log("Multiplicação:" + varLetMult);

        // Dividir
            let varLetDiv = varLet/10;
            console.log("Divisão:" + varLetDiv);