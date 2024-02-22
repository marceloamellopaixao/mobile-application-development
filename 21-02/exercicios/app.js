// Exercício 4: Compilação TypeScript
// EX.01
// 1. Declare uma variável chamada idade e atribua a ela o valor 25. Garanta que essa variável seja do tipo number
var idade = 25;
// 2. Declare uma variável chamada nome e atribua a ela o valor 'João'. Garanta que essa variável seja do tipo string.
var nome = "João";
// 3. Declare uma variável chamada isAtivo e atribua a ela o valor true. Garanta que essa variável seja do tipo boolean.
var isAtivo = true;
// Imprimir os valores das variáveis no console
console.log("Ex.01 \nO ".concat(nome, " tem ").concat(idade, " anos. Com boolean: ").concat(isAtivo, "\n"));
var tipoUsuario = {
    nome: 'Marcelo',
    idade: 19,
    email: "marcelo@gmail.com"
};
console.log("Ex.02 \nNome: ".concat(tipoUsuario.nome, ", Idade: ").concat(tipoUsuario.idade, ", Email: ").concat(tipoUsuario.email));
console.log(tipoUsuario, "\n");
// EX.03
function soma(x, y) {
    return x + y;
}
function saudacao(nome) {
    return "Ol\u00E1 ".concat(nome, ", tudo bem? Bem vindo ao Hello World!");
}
console.log("Ex.03 \nSoma: ", soma(5, 10));
console.log(saudacao(tipoUsuario.nome));
