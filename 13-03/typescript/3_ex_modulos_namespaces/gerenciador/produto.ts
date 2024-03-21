export namespace ProdutoModule{
    export class Produto{
        constructor(public nome: string, public preco: number, public quantidade: number){}
    
        calcularTotal(): number{
            return  this.preco * this.quantidade;
        }
    }
}