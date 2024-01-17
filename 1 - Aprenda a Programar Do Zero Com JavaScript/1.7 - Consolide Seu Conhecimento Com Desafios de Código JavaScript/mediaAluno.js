/*
    1) Faça um programa que receba a média de um aluno.
    Caso a média seja < 5 imprima "Reprovado"
    Caso a média seja >= 5 e 7 imprima "Recuperação"
    Caso a média seja >= 7 imprima "Aprovado"

    Exemplo:    
    - Entrada: 5.5
    - Saída: Recuperação
*/

const nota = 5.5;

switch(true)
{
    // Caso a média seja < 5
        case (nota < 5):
            console.log("Reprovado");
        break;

    // Caso a média seja >= 5 e <= 6.99
        case (nota >=5 && nota <= 6.99):
            console.log("Recuperação");
        break;

    // Caso a média seja >=7
        case (nota >= 7):
            console.log("Aprovado");
        break;

    // Caso o valor seja invalido
        default:
            console.log("Valor invalido");
        break;
}