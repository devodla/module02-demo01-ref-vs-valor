const { deepStrictEqual } = require('assert')
let counter = 0
let counterTwo = counter
counterTwo++
// ?

const item = { counter: 0 }
const itemTwo = item

// tipo primitivo gera uma cópia em memória
deepStrictEqual(counter, 0)
deepStrictEqual(counterTwo, 1)

// Tipo de referência, copia o endereço de memória
// e aponta para o mesmo lugar
itemTwo.counter++
deepStrictEqual(item, { counter: 1 })
item.counter++
deepStrictEqual(itemTwo, { counter: 2 })
