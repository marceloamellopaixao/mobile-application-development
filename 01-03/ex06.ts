// 6) Trabalhando com Arrays em TypeScript:
//    a. Escreva uma função chamada "somaArray" que recebe um array de números como parâmetro e retorna a soma de todos os elementos.

function somaArray(numerosArray:number[]) {
    let soma = 0
    for (let index = 0; index < numerosArray.length; index++) {
        soma += numerosArray[index]
    }
    return soma
}

console.log(`Fala ${somaArray([50,50,50,50,50,50])}`)

//    b. Escreva uma função chamada "maiorElemento" que recebe um array de números como parâmetro e retorna o maior elemento do array.

function maiorElemento(numerosArray:number[]){

}

console.log(maiorElemento([1,50,50]))