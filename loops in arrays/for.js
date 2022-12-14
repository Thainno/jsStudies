const setup = [
    'monitor',
    'teclado',
    'mouse',
    'cpu',
    'gabinete',
    'processador',
    'placaMae'
]

/*
for ([inicialização]; [condição]; [expressão final]) {...
}
*/

for (let index = 0 ; index < setup.length; index++) {
    console.log(`${index+1}_ ${setup[index]}`)
    if(setup[index] == 'pcCompleto') break 
    //se encontrar o objeto "pcCompleto, o loop é interrompido"
}