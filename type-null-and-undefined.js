// O tipo "null" pode ser traduzido como “ausência de valor” e pode ser atribuído como valor de uma variável:

let contemNull = null;

 console.log(contemNull);

// O tipo "undefined" também representa “ausência de valor”, porém de uma outra forma: usualmente, enquanto null 
// é um valor atribuído a uma variável que existe e foi iniciada, undefined se refere ao valor de uma variável que 
// não foi inicializada (ou seja, não foi atribuído nenhum valor a ela).

let contemUndefined;

console.log(contemUndefined); // undefined

// É importante notar que, embora os dois tipos sejam utilizados para sinalizar ausência de valor, os operadores de 
// comparação do JavaScript podem ou não diferenciá-los:

console.log(contemNull == contemUndefined); // true
console.log(contemNull === contemUndefined); // false
