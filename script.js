// var

// -- A "var" é muito solta, então pode ser utilizada antes de ser declarada. (Não é recomendado utilizá-la!)

// Ctrl + k => seleciona, Ctrl + c => comenta, Ctrl + u => descomenta. É preciso selecionar antes de comentar ou descomentar!!!

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;

// console.log(area);
// var area;

//==============================================================

// let

// -- A "led", diferente da "var", sempre deve ser declarada antes de ser utilizada. (É a recomendada!)

// Ctrl + k => seleciona, Ctrl + c => comenta, Ctrl + u => descomenta. É preciso selecionar antes de comentar ou descomentar!!!

// let forma = 'retangulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retangulo') {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2;
// }

// console.log(area)

//==============================================================

// const

// A "const" é constante, ou seja, o seu valor não pode ser alterado. É sempre declarada com a atribuição do valor, por obrigação!

// Ctrl + k => seleciona, Ctrl + c => comenta, Ctrl + u => descomenta. É preciso selecionar antes de comentar ou descomentar!!!

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);