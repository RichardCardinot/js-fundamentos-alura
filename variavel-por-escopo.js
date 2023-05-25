var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29

    // A variável var "respostaDeTudo" teve o seu valor alterado para "3.14" dentro deste escopo {} e valerá para todo o programa, pois a var tem escopo global;
    // A variável let "idade" teve o seu valor alterado para "42" dentro deste escopo {} e esse valor só valerá nesse escopo {}, pois a let tem escopo local;
    // A variável constante const não teve o seu valor alterado, mas também não poderia, pois é uma constante.
    console.log(respostaDeTudo, idade, pi) // 3.14 42 29

}

// A variável var "respostaDeTudo" trasnporta o valor alterado ("3.14") no escopo anterior {} para fora do espoco {}, pois a var tem escopo global;
// A variável let "idade" alterada para "42" no escopo anterior {} agora vale "29", que é valor original, pois sua alteração só vale no escopo {}, pois a let tem escopo local;
// A variável constante const não teve o seu valor alterado, mas também não poderia, pois é uma constante.
console.log(respostaDeTudo, idade, pi) // 3.14 29 3.14