const setup = [
    {
        hardware: 'processador',
        funcao: 'processar'
    },
    {
        hardware: 'memória',
        funcao: 'memoriar'
    },
    {
        hardware: 'monitor',
        funcao: 'monitorar'
    }
]

/*
for (variavel in objeto) {...
}
*/

for (let periferico in setup) {
    console.log(setup[periferico])
}

