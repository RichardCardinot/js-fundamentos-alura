// == (comparação implícita)
// === comparação explícita)

linha = "=========================================================================";

const numero = 5;
const texto = "5";

console.log(numero == texto); // true  - O JS converte o texto em número, por isso dá true. (comparação implícita)
console.log(numero === texto); // false - O JS compara tanto o tipo como o valor das variáveis, por isso dá false. (comparação explícita)

console.log(linha);

// tyupeof
console.log(typeof numero); // number
console.log(typeof texto); // string

// == só compara o valor
// === compara o valor e o tipo de dado

// !! Por boa prática, utilizar a comparação explícita !! //

console.log(linha);

// conversão explícita
Number(texto);
String(numero); 

console.log(typeof Number(texto)); // number -> Pois a conversão explícita transformou a variável "texto" em number;
console.log(typeof String(numero)); // string -> Pois a conversão explícita transformou a variável "numero" em string;