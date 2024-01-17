// Variaveis
const salarioBruto = parseFloat(gets());
const valorBeneficio = parseFloat(gets());

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
console.log(salarioLiquido(salarioBruto, valorBeneficio).toFixed(2));