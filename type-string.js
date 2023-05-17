const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!";
const stringDeNumeros = "34567";
const citacao = 'eu nome é ';
const meuNome = "Richard";
const numeroDecimal = 7.5845668;


// concatenação (+)
console.log(citacao + meuNome);

// Exibir inteiro
console.log(Math.round(numeroDecimal));

// Formatar quantidade de casas decimais (Obs.: Retorno uma String com o valor arredandado, 
// nesse caso, em duas casas decimais passadas por parâmetro)
console.log(numeroDecimal.toFixed(2));

// Formatando como moeda
console.log(numeroDecimal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

// Maior número inteiro que é maior que o número passado
// por exemplo Math.ceil(11.123), o valor fica 12
const numeroDecimalCeil = 11.123
console.log(Math.ceil(numeroDecimalCeil));

// Menor número inteiro que é menor que o número passado
// por exemplo Math.floor(11.789), o valor fica 11
const numeroDecimalFloor = 11.789
console.log(Math.floor(numeroDecimalFloor));

// ====================================================================================
// Ordenando o array
const lista = [10,1, 5, 9, 8, 12, 15];

// A função sort() usa por padrão a ordenação alfabética baseada na tabela Unicode,
// então o resultado numérico parece não está ordenado
console.log(lista.sort()); 

// Para ordenar da forma numérica, é precisa usar a seguinte arrow functions:
console.log(lista.sort((a, b) => a - b));

// ====================================================================================

// O JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

// Transformando o input em letras minúsculas, a compração é true.
const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

// ====================================================================================

// Descobrindo a quantidade de caracteres em uma String
const senhaTamanho = "minhaSenha123"
console.log(senhaTamanho.length) // 13 caracteres

// Lista completa de métodos de string do MDN: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos