// Aula 5 - Exercicio Guiado - Maior Número Sorteado
// Aula 6 - Resolução Guiada do Exercício Maior Número Sorteado
// Aula 7 - Depurando o Código do Exercício
// Aula 8 - Simplificando a Logica

/*
    Uma sala contém 5 alunos e para cada aluno foi sorteado um
    número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os
    alunos e mostre o maior número sorteado.

    Dados de entrada
    5
    50
    10
    98
    23

    Saída:
    98
*/
const {printNum, getNum, numeros}= require('./NumeroFunc');

let maiorValor = 0;

for (let i = 0; i <  numeros.length; i++) 
{
    const numeroSorteado = getNum();
    if(numeroSorteado > maiorValor)
    {
        maiorValor = numeroSorteado;
    }
}
printNum(maiorValor);
