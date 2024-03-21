class Funcionario{
    constructor(
        public nome: string, 
        public idade: number, 
        public cargo: string
    ){}

    apresentar(): string{
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu cargo atual é ${this.cargo}`
    }
}

let funcionario = new Funcionario("Marcelo", 19, "Desenvolvedor Full-Stack")
console.log(funcionario.apresentar())