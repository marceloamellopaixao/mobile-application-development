// Exercício 2: Interfaces

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

console.log(`Nome: ${tipoUsuario.nome}, Idade: ${tipoUsuario.idade}, Email: ${tipoUsuario.email}`);
console.log(tipoUsuario)