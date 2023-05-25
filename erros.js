// let teste = "oi"  => Linha comentada para caurar erro no console.
console.log(teste) 

// Segue o stacktrace do erro mostrado no console:

// D:\Documents\Estudos\Alura\JavaScript\erros.js:2
// console.log(teste) 
//             ^

// ReferenceError: teste is not defined
//     at Object.<anonymous> (D:\Documents\Estudos\Alura\JavaScript\erros.js:2:13)
//     at Module._compile (node:internal/modules/cjs/loader:1105:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
//     at node:internal/main/run_main_module:17:47

// Pegando como exemplo a linha "at Object.<anonymous> (D:\Documents\Estudos\Alura\JavaScript\erros.js:2:13)"
// podemos observar que o log diz que o erro ocorre no arquivo "erros" (\erros.), linha "2" (:2) e caracter "13" (:13), exatamente
// onde consta a let "teste", que foi comentada e logo não está declarada.

// =====================================================================================================================

// Categoria de erros comuns:

// => RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. 
//    Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.

// => ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida; 
//    muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.

// => SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. 
//    Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou 
//    sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.

// => TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas 
//    recebeu outro, como um número, booleano ou null.