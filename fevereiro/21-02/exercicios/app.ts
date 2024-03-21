// Exercício 4: Compilação TypeScript


// EX.01
// 1. Declare uma variável chamada idade e atribua a ela o valor 25. Garanta que essa variável seja do tipo number
let idade: number = 25;

// 2. Declare uma variável chamada nome e atribua a ela o valor 'João'. Garanta que essa variável seja do tipo string.
let nome: string = "João";

// 3. Declare uma variável chamada isAtivo e atribua a ela o valor true. Garanta que essa variável seja do tipo boolean.
let isAtivo: boolean = true;

// Imprimir os valores das variáveis no console
console.log(`Ex.01 \nO ${nome} tem ${idade} anos. Com boolean: ${isAtivo}\n`)

//  EX.02
interface Usuario {
    nome: string;
    idade: number;
    email?: string;
}

let tipoUsuario: Usuario = {
    nome: 'Marcelo',
    idade: 19,
    email: "marcelo@gmail.com"
}

console.log(`Ex.02 \nNome: ${tipoUsuario.nome}, Idade: ${tipoUsuario.idade}, Email: ${tipoUsuario.email}`);
console.log(tipoUsuario, "\n")

// EX.03
function soma(x: number, y: number): number{
    return x + y;
}

function saudacao(nome: string) {
    return  `Olá ${nome}, tudo bem? Bem vindo ao Hello World!`;
}

console.log("Ex.03 \nSoma: ", soma(5,10));
console.log(saudacao(tipoUsuario.nome));