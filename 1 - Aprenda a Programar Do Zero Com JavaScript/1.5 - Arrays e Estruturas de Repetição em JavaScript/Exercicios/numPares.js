// Aula 10 - Exercício Guiado -  Apenas Números Pares
// Aula 11 - Depurando o Código - Apenas Números Pares

/*
    Crie um programa que seja capaz de percorrer
    uma lista de números e imprima cada número 
    pares encontrados.
*/

let numero = [1, 2, 3, 4 ,5, 6]
for (let i = 0; i < numero.length; i++) 
{
    if (numero[i] % 2 === 0) 
    {
        console.log(numero[i])
    }
}