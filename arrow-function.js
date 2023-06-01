// Declaração de função:
console.log(apresentarDeclaracaoFuncao("Richard")); // Declaração de função pode ser chamada antes da linha de sua criação.
function apresentarDeclaracaoFuncao(nome) {
    return `meu nome é ${nome}!`;
}

// Expressão de função:
const apresentarExpressaoFuncao = function(nome) {return `meu nome é ${nome}!`};
console.log(apresentarExpressaoFuncao("Richard")); // Expressão de função só pode ser chamada após sua criaçaõ, pois a let tem que ser intanciada.

// Arrow function:
// Como só tem um parâmetro, não precisa de parênteses ();
// Como a instrução só tem uma linha, não precisa de chaves {} ou "return".
const arrowFunction = nome => `meu nome é ${nome}!`;
console.log(arrowFunction("Richard")); // Arrow function só pode ser chamada após sua criação, pois a let tem que ser intanciada.

// Como tem mais de um parâmetro, é necessário o parênteses ();
// Como a instrução só tem uma linha, não precisa de chaves {} e return.
const arrowFunctionDoisParametros = (nome, sobrenome) => `meu nome é ${nome} ${sobrenome}!`;
console.log(arrowFunctionDoisParametros("Richard", "Cardinot")); // Arrow function só pode ser chamada após sua criação, pois a let tem que ser intanciada.

// Como tem mais de um parâmetro, é necessário o parênteses ();
// Como a instrução tem mais de uma linha, é necessário chaves {} e return.
const arrowFunctionDoisParametrosDuasLinhasDeInstrucao = (num1, num2) => {
    if(num1 < 10 || num2 < 10) {
        return "somente números de 1 a 9."
    } else {
        return `a soma de ${num1} + ${num2} é ${num1 + num2}.`;
    }
};
console.log(arrowFunctionDoisParametrosDuasLinhasDeInstrucao(1, 1)); // Arrow function só pode ser chamada após sua criação, pois a let tem que ser intanciada.
console.log(arrowFunctionDoisParametrosDuasLinhasDeInstrucao(11, 12)); // Arrow function só pode ser chamada após sua criação, pois a let tem que ser intanciada.