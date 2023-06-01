// parâmetros de função
              //2   //2
function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(40, "Juliana")); // Meu nome é 40 e minha idade é Juliana

function multiplica(num1, num2) {
    return num1 * num2;
}
                            //9    *   //6
console.log(multiplica(soma(4,5), soma(3,3))); // resultado: 54

                            //9
console.log(multiplica(soma(4,5))); // resultado: NaN, pois a funções recebeu um número(9) e um undefined


function multiplicaComValorPadrao(num1 = 1, num2 = 1) {
    return num1 * num2;
}

                                          //9
console.log(multiplicaComValorPadrao(soma(4,5))); // resultado: 9, pois como somente um dos parâmtros foi passado (9),
// a função multiplicaComValorPadrao() utilizou o valor padrão definido para o segundo parâmetro, que é (1).


// Por boa prática, uma função deve receber poucos argumentos/parâmetros. 
// Se a operação precisar de muitos argumentos/parâmetros, o correto é dividi-la em funções menores.

// Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; 
// algumas documentações se referem a parâmetros no momento em que a função 
// é definida (no caso, numero1, numero2, etc) e argumentos como os dados que 
// utilizamos para executar a função (ou seja, 30, 45, etc).


