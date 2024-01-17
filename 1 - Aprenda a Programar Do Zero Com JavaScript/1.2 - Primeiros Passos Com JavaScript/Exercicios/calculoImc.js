// Aula 17 - Exercicio 2 - Calculo do IMC

/*
    O IMC - Indice de Massa Corporal é um criterio da Organização Mundial
    de Saude para dar uma indicação sobre a condição do peso de uma pessoa
    adulta.

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritimo que dado o peso e a altura
    de um adulto mostresua condição de saude com base 
    na tabela abaixo.
    
    IMC em adultos Condição:
    - Abaixo de 18.5 = Abaixo do peso
    - Entre 18.5 e 25 = Peso normal
    - Entre 25 e 30 = Abaixo do peso
    - Entre 30 e 40 = Obeso
    - Acima de 40 = Obesidade grave
*/

const peso = 98;
const alt = 1.65;

let altElevado2 = Math.pow(alt, 2); // Biblioteca pra fazer numero elevado

let IMC = peso / altElevado2 ;

IMC = IMC.toFixed(1);

if (IMC < 18.5)
{
    console.log('Abaixo do peso')
    console.log('IMC: ' + IMC)
}
else if (IMC >= 18.5 && IMC < 25)
{
    console.log('Peso normal')
    console.log('IMC: ' + IMC)
}
else if (IMC >= 25 && IMC < 30)
{
    console.log('Acima do peso')
    console.log('IMC: ' + IMC)
}
else if (IMC >= 30 && IMC < 40)
{
    console.log('Obeso')
    console.log('IMC: ' + IMC)
}
else
{
    console.log('Obesidade grave')
    console.log('IMC: ' + IMC)
}