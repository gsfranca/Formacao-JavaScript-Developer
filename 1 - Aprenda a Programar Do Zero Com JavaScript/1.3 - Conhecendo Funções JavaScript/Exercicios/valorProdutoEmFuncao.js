// Aula 8 - Exercício Guiado 4 - Funções Para Calcular Preço

/*
    Elabore um algoritimo que calcule o que deve ser pago 
    por um produto, cosiderando o preço normal da etiqueta
    e a escolha da condição de pagamento.

    Utilize os codigos da tabela a seguir para ler qual a 
    condição de pagamento escolhida e efetuar o calculo
    adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto
    - À vista no Dinheiro ou PIX, recebe 15% de desconto
    - Em duas vezes, preço normal de etiqueta sem juros
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/




function pagamento(preco, isDebito, isDinOrPix, isCredito, isCredito2)
{
    // Debito
        function debito(preco)
        {
            preco = preco-(preco*0.1);
            return preco;
        }

    // Dinheiro ou PIX
        function dinOrPix(preco)
        {
            preco = preco-(preco*0.15);
            return preco;
        }

    // Credito - de 2 parcelas
        function credito(preco)
        {
            return "O preço continua o mesmo.\n" + preco;
        }
    
    // Credito + de 2 parcelas
        function credito2(preco)
        {
            preco = preco+(preco*0.1);
            return preco;
        }

    // IFs
        if (isDebito === true)          {return debito(preco);}
        else if (isDinOrPix === true)   {return dinOrPix(preco);}
        else if (isCredito === true)    {return credito(preco);}
        else                            {return credito2(preco);}
}

(
    function()
    {
        let preco = 10;
        let isDebito = false;
        let isDinOrPix = true;
        let isCredito = false;
        let isCredito2 = false;
        console.log("Preço: " + pagamento(preco, isDebito, isDinOrPix, isCredito, isCredito2));
    }
)();

