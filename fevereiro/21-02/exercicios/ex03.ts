// Exercício 3: Funções

function soma(x: number, y: number): number{
    return x + y;
}

function saudacao(nome: string) {
    return  `Olá ${nome}, tudo bem? Bem vindo ao Hello World!`;
}

console.log("Soma: ", soma(5,10));
console.log(saudacao("Marcelo"));