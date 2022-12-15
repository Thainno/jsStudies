const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const par = n => n % 2 === 0
const numeroPar = numeros.filter(par)

console.log(`Array com números pares: ${numeroPar}`)