/*
    3) Faça um programa que calcule e imprima o salario 
    a ser transferido para um funcionario.

    Para realizar o calculo receba o valor bruto do 
    salario e o adicional dos beneficios.

    O salario a der transferido e calculado da seguinte
    maneira:

    valor bruto do sálario 
    - percentual de imposto mediante a faixa salarial
    + adicional de beneficios

    Para calcular o percentual de impostos, segue as aliquotas:

    De R$ 0.00 as R$ 1100.00 = 5.00%
    De R$ 1100.01 A R$ 2500.00 = 10.00%
    Maior que R$2500.00 = 15.00%
*/

// Variaveis
    const salarioBruto = 1000;
    const valorBeneficio = 500;

// Função Salario Bruto - Imposto
    function percentualImposto(salarioBruto)
    {
        switch (true)
        {
            case (salarioBruto < 1100):
                return (salarioBruto - (salarioBruto * 0.05));
            break;

            case (salarioBruto >= 1100.01 && salarioBruto <= 2500):
                return (salarioBruto - (salarioBruto * 0.1));
            break;

            case (salarioBruto > 2500):
                return (salarioBruto - (salarioBruto * 0.15));
            break;

            default:
            break;
        }
    }

// Função Salario com descondo do imposto + o beneficio
    function salarioLiquido(salarioBruto, valorBeneficio)
    {
        return percentualImposto(salarioBruto) + valorBeneficio;
    }

// Imprimir Salario liquido
    console.log(salarioLiquido(salarioBruto, valorBeneficio));