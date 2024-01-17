// Aula 15 - Exercicio Media de Notas

/*
    Faça um algoritimo que, dado as 3 notas 
    tiradas por um aluno em um semestre da faculdade,
    calcule e imprima a sua média e a sua classificação
    conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3

    Classificação:
        - Média menor que 5, reprovação
        - Média entre 5 e 7, recuperação
        - Média acima de 7, passou de semestre
*/

const n1 = 5;
const n2 = 9;
const n3 = 2;

let media = (n1+n2+n3)/3;
media = media.toFixed(1);

if (media < 5)
{
    console.log("O aluno foi reprovado com nota " + media+ ".");
}
else if (media >= 5 && media <= 7)
{
    console.log("O aluno está de recuperação com nota " + media+ ".");
}
else
{
    console.log("O aluno foi aprovado com nota " + media+ ".")
}