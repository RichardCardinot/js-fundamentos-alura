// tipo de dado
// booleanos

// =============================================================================

//                     -- conversão implícita --

const numero = 456;
const numeroString = "456";

// Com o == o valor é comparado, mas o tipo não.
// O JS converte o numero em string, depois compara o valor com a outra string.
console.log(numero == numeroString) // true

// Com o === o valor e o tipo são comparados.
console.log(numero === numeroString) // false

// O JS converte o numero em string, depois concatena o valor com a outra string.
console.log(numero + numeroString) // 456456

// =============================================================================

//                     -- conversão explícita --

// Number()
// String()

// Com a função Number(), convertemos o numeroString em um number. 
console.log(numero + Number(numeroString))  // 912

// Se tentar converter uma string que não contém apenas números, será retornado o NaN (Not a Number)
console.log(numero + Number(numeroString + "a"))  // NaN