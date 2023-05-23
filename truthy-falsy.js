// boolean

const usuarioLogado = true;
const constaPaga = false;

let separador = '=============================================';
console.log(separador);
// =============================================

// truthy ou falsy

// 0 => false
// 1 => true

console.log(0 == false); // true
console.log('' == false); // true
console.log(1 == true); // true
console.log('1' == true); // true

console.log(separador);
// =============================================

let minhaVar; // Quando declaramos uma variável sem valor, o JS automaticamente atribuiu a variável o valor "undefined".
let varNull = null;

console.log(minhaVar);
console.log(varNull);

console.log(separador);

let numero = 3;
let texto = 'Alura';

// "typeof" serve para o JS dizer qual é o tipo de dado que está sendo armazenado na variável.
console.log(typeof numero);
console.log(typeof texto); 
console.log(typeof minhaVar);
console.log(typeof varNull); 

console.log(separador);