// tipo de dado
// booleanos

const numero = 111;
const numeroString = "222";

// =============================================================================

//                     -- conversão implícita --
//                        (Não Recomendado!!!) 

// Com o == o valor é comparado, mas o tipo não.
// O JS converte o numero em string, depois compara o valor com a outra string.
console.log(numero == numeroString); // true

// Com o === o valor e o tipo são comparados.
console.log(numero === numeroString); // false

// O JS converte o numero em string, depois concatena o valor com a outra string.
console.log(numero + numeroString); // 111222

// =============================================================================

//                     -- conversão explícita --
//                         (Recomendado!!!) 

// Number()
// String() ou toString()

// Com a função Number(), convertemos o numeroString em um number. 
console.log(numero + Number(numeroString));  // 333

// Se tentar converter uma string que não contém apenas números, será retornado o NaN (Not a Number)
console.log(numero + Number(numeroString + "a")); // NaN

// Com a função String(), convertemos o número em uma String
console.log(numeroString + String(numero));  // 222111

// Com a função toString(), também convertemos o número em uma String
console.log(numeroString + numero.toString());  // 222111

// Convertendo o String(), é possível converter o boolean em String
const booleanFalse = false;
const booleanTrue = true;
console.log(String(booleanFalse)); // false
console.log(String(booleanTrue)); //true

// O + antes davariável String que contém o número, transforma o valor da string em number
const larguraString = "10";
const alturaString = "5";
console.log( + larguraString * + alturaString); // 50

// Convertendo boolean em number com a função Number()
console.log(Number(booleanFalse)); // 0, pois zero é false
console.log(Number(booleanTrue));  // 1, pois um é true
