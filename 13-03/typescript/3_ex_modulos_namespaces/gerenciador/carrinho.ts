import { ProdutoModule } from "./produto";

export namespace CarrinhoModule{
    export class Carrinho{
        private produtos:ProdutoModule.Produto[] = [];
    
        adicionarProduto(produto: ProdutoModule.Produto): void{
            this.produtos.push(produto);
        }
    
        calcularTotalCarrinho(): number{
            let total = 0;
            this.produtos.forEach(produto => {
                total += produto.calcularTotal();
            });
            return total;
        }
    }
}