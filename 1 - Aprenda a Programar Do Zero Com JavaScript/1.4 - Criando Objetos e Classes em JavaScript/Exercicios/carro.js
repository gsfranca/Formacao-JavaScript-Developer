// Aula 8 - Exercicio Guiado - Criando a Classe Carro, Aula 9 - Exercicio Guiado - Criando a Instância e Aula 10 - Exercicio Guiado - Criando o Método calcularGastoDePercurso

/*
    Crie uma classe para representar carros.

    Os carros possume uma marca, uma cor e
    um gasto medio de combustivel por kilometro
    rodado.
    
    Crie um método que dado a quantidade de quilómetros
    e o preço do combustivel nos dê o valor gasto em 
    reais para realizar este percurso
*/

class Carro
{
    
    marcas;
    cores;
    combustivelPorKMs;

    valorCombustivel(kmRodados, valorCombustivel)
    {
       return 'R$'+(kmRodados * this.combustivelPorKMs * valorCombustivel).toFixed(2); 
    }

    constructor(marca, cor, combustivelPorKM, kmRodado)
    {
        this.marcas = marca;
        this.cores = cor;
        this.combustivelPorKMs = combustivelPorKM;
    }
}

const c1 = new Carro('Corsa', 'Verde', 1 / 7.4);
const c2 = new Carro('Uno', 'Vermelho', 1/ 13.9)

console.log(c1.valorCombustivel(110, 5.69));
console.log(c2.valorCombustivel(110, 5.69));

