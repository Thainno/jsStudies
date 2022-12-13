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
while (condição) {
  rotina
}
*/

let index = 0
while (index < setup.length) {
    console.log(`${index + 1}_ ${setup[index]}`)
    index++
}