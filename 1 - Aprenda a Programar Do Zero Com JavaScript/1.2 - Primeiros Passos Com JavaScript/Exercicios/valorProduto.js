// Aula 19 = Execicio 3 - Valor Pago de um Produto

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
let preco = 10;
let isDebito = false;
let isDinOrPix = false;
let isCredito = false;
let isCredito2 = true;

if(isDebito === true)
{
    preco = preco-(preco*0.1);
}
else if (isDinOrPix === true)
{
    preco = preco-(preco*0.15);
}
else if (isCredito === true)
{
    console.log("O preço continua o mesmo.")
}
else
{
    preco = preco+(preco*0.1);
}

console.log("Preço: " + preco);
