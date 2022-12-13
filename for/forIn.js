const empresa = [
    {
        nome: 'João',
        cargo: 'Suporte'
    },
    {
        nome: 'Maria',
        cargo: 'Gerente'
    },
    {
        nome: 'Paloma',
        cargo: 'Recursos humanos'
    }
]

/*
for (variavel in objeto) {...
}
*/

for (let colaborador in empresa) {
    console.log(empresa[colaborador])
}

