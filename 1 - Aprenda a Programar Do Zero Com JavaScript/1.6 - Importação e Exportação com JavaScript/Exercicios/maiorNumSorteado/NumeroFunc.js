const numeros = [5, 50, 10, 98, 23, 33, 44, 99, 1, 7, 200];
let i = 0;

function getNum() 
{
    const valor = numeros[i];
    i++;
    return valor;
}

function printNum(texto) {
    console.log(texto);
}

module.exports = { printNum, getNum, numeros};
