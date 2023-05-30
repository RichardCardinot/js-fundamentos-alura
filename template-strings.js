let nome = "Ju";
let idade = 2021 - 1981;
const cidadeDeNascimento = "São Paulo";

const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;

console.log(apresentacao);

// Com tamplate string: `text ${variável} texto`
const apresentacaoTemplateString = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacaoTemplateString);


nome = "Leo";
idade = 23;
let bebidaMaior = "cerveja";
let bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)

// template literal, escrevendo o texto entre acentos graves (`) e colocando as variáveis com ${variavel} para que o valor deles fique nessa posição.