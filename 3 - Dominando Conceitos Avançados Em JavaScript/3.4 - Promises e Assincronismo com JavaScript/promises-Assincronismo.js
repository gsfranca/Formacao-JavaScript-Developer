// Aula 1 - Funcionamento das Promises

    const NUMERO = new Promise((resolve, reject) => 
    {
        setTimeout(() =>
        {
            let num = parseInt(Math.random() * 100)
            resolve(num) // Se der certo
        }, 1000)
    })

    //console.log('Vai filhão');

    NUMERO
    .then((value) => // Se funcionar
    {
        //console.log(value)
        return value + 10
    })
    .then((value) => {
        //console.log(value)
    })
    .catch((error) => // Se der erro
    {
        //console.error(error)
    })
    .finally(() => // Executa não importando se deu certo ou errado
    {
        // console.log('Finalizou')
    })
    
// Aula 2 - Manipulando Arquivos através de Promises

    const fs = require('fs')
    const path = require('path')

    const filePath = path.resolve(__dirname, 'tarefas.csv')
    const promessaDaLeituraDoArquivo = fs.promises.readFile(filePath);

    promessaDaLeituraDoArquivo
    .then((arquivo) => arquivo.toString('utf8'))
    .then((texto) => texto.split('\n').slice(1))
    .then((linhas) => 
    linhas.map((linha) => {
        const [nome, feito] = linha.split(';')
        return{
            nome,
            feito: feito.trim() === 'true'
        }
    }))
    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((error) =>{
        // console.log('Deu ruim!', error)
    })

// Aula 3 -  Async e Await

    async function buscarArquivo()
    {
        try
        {
            const arquivo = await fs.promises.readFile(filePath)
            const textoDoArquivo = arquivo.toString('utf8')
            console.log(textoDoArquivo)
        }
        catch(error) {console.log(error)}
        finally {console.log('Finalizou!!!')}
    }

    buscarArquivo()