const idadeMinima = 18;
const idadeCliente = 19;

if (idadeCliente >= idadeMinima) {
    console.log("cerveja");
} else {
    console.log("suco");
}

// O mesmo de cima, mas com operador ternário:
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco") 
//                    condição          ?   true    :  fase
                            
// Por que se chama operador ternário? R: Pois essa forma de escrita usa três operadores. No exemplo de cima, o ">=", o "?" e o ":".

// !! Por boa prática, nunca utilizar um operador ternário dentro de outro. Quando for necessário esse encadeamento, utilizar o IF !!