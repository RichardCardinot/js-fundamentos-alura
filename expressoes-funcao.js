// => Declaração de função
function minhaFuncao(param) {
    // bloco de código
}

minhaFuncao("param");

// ======================================================

// => Expressão de função
const soma = function(num1, num2) {return num1 + num2}

console.log(soma(1, 1));

// diferença principal:
// - funções e var são "listadas" no topo do arquivo, então é possível chamar a função e o var antes da linha que ela é criada;
// - já a "expressão de função" não, pois a let que está está contida tem que ser iniciada antes de ser utilizada.

console.log(apresentar());

function apresentar() {
    return "olá";
}

console.log(soma2(1, 1)) // Retorna o erro "Cannot access 'soma2' before initialization", pois a "expressão de função" soma2
// só será criada na linha 27, então por ser uma const, ela não pode ser chamada antes de sua declaração.
const soma2 = function(num1, num2) { return num1 + num2 }