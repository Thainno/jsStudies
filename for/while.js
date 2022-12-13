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
while (condição) {
  rotina
}
*/

let index = 0
while (index < compras.length) {
    console.log(`${index + 1}_ ${compras[index]}`)
    index++
}