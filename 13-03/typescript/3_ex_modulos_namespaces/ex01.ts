import { CarrinhoModule } from './gerenciador/carrinho';
import { ProdutoModule } from './gerenciador/produto';

let carrinho = new CarrinhoModule.Carrinho();
let celular = new ProdutoModule.Produto('Iphone 15 Pro Max', 8999.99, 1);
let notebook = new ProdutoModule.Produto('Notebook Lenovo', 2599.99, 1);


carrinho.adicionarProduto(celular);
carrinho.adicionarProduto(notebook);
carrinho.adicionarProduto(celular);
carrinho.adicionarProduto(celular);
carrinho.adicionarProduto(celular);
carrinho.adicionarProduto(celular);
carrinho.adicionarProduto(notebook);

console.log(`O total a ser pago pelos produtos no carrinho é de R$ ${carrinho.calcularTotalCarrinho()}`)