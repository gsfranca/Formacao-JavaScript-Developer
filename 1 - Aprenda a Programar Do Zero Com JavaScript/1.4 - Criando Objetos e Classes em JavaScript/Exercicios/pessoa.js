// Aula 12 - Exercicio Guiado - Criando a Classe Pessoa
// Aula 13 - Exercicio Guiado - Criando o Método calcularIMC
// Aula 14 - Exercicio Guiado - Criando a Instância
// Aula 15 - Exercicio Guiado - Criando o Método classificarImc

/*
    Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC.
    (IMC = peso / (altura * altura))
    Instancie uma pessoa chamada José, que tenha 70Kg de peso e 1,75 de altura
    e peça para José dizer o valor do seu IMC
*/

class Pessoa 
{
    nome;

    constructor(nomes)
    {
        this.nome = nomes;
    }
    calcularIMC(peso, alt)
    {
        let IMC = peso/(Math.pow(alt, 2));
        return IMC.toFixed(1);
    }
    classificarIMC(IMC)
    {
        let classificacaoIMC;
        switch (true)
        {
            // Abaixo do Peso
                case (IMC < 18.5):
                    classificacaoIMC = 'Abaixo do peso\nIMC: ' + IMC;
                break;

            // Peso Normal
                case (IMC >= 18.5 && IMC < 25):
                    classificacaoIMC = 'Peso Normal\nIMC: ' + IMC;
                break;
            
            // Acima do Peso
                case (IMC >= 25 && IMC < 30):
                    classificacaoIMC = 'Acima do peso\nIMC: ' + IMC;
                break;

            // Obeso
                case (IMC >= 30 && IMC < 40):
                    classificacaoIMC = 'Obeso\nIMC: ' + IMC;
                break;

            // Obesidade grave
                case (IMC >= 40):
                    classificacaoIMC = 'Obesidade grave\nIMC: ' + IMC;
                break;

            // Default
                default:
                    classificacaoIMC = 'Foi impossivel classificar\nIMC:' + IMC;
                break;
          }
          return classificacaoIMC;
    }
}

const jose = new Pessoa('Jose');
console.log(Pessoa(70, 1.75));
console.log(jose.classificarIMC(22.9));