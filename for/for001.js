const compras = [
    'monitor',
    'teclado',
    'mouse',
    'cpu',
    'gabinete',
    'processador',
    'placaMae'
]

/*
for ([inicialização]; [condição]; [expressão final]) {
    declaração
}
*/
for (let index = 0 ; index < compras.length; index++) {
    console.log(`${index+1}_ ${compras[index]}`)
}