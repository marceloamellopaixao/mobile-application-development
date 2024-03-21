interface Usuario{
    nome: string;
    idade: number;
    tipo: 'Administrador' | 'Funcionário' | 'Cliente';
}

function criarUsuario(nome: string, idade: number, tipo: 'Administrador' | 'Funcionário' | 'Cliente'): Usuario {
    return { nome, idade, tipo }
}

let administrador1 = criarUsuario("Marcelo", 19, "Administrador")
console.log(administrador1)

let administrador2 = criarUsuario("Eliel", 9, "Administrador")
console.log(administrador2)

let  funcionario1 = criarUsuario("João", 35, "Funcionário")
console.log(funcionario1)

let  funcionario2 = criarUsuario("Josias", 43, "Funcionário")
console.log(funcionario2)

let  cliente1 = criarUsuario("Ana", 60, "Cliente")
console.log(cliente1)

let  cliente2 = criarUsuario("Isabela", 20, "Cliente")
console.log(cliente2)
