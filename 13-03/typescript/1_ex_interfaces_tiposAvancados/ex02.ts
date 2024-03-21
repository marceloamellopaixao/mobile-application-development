interface Produto{
    nome: string;
    preco: number;
    tipo: "Eletrônico" | "Vestuário" | "Alimento"
}

function CriarProduto(nome: string, preco: number, tipo: "Eletrônico" | "Vestuário" | "Alimento"): Produto{
    return { nome, preco, tipo }
}

let eletronic1 = CriarProduto("Radio", 59.9, "Eletrônico")
console.log(eletronic1)

let vestuario1 = CriarProduto("Camiseta Manga Curta", 89.9, "Vestuário")
console.log(vestuario1)

let alimento1 = CriarProduto("Cacho de Banana", 8.9, "Alimento")
console.log(alimento1)