class Produto{
    constructor(public nome: string, public preco: number, public quantidade: number){}

    apresentarProduto(): string{
        return `Comprei ${this.quantidade}: ${this.nome}, com o valor de R$ ${this.preco}`
    }
}

let produto = new Produto("Banana", 4.5, 10)
console.log(produto.apresentarProduto())