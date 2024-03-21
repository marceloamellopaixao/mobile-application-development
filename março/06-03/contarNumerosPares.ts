function contarPares(numeros: number[]): number{
    return numeros.filter((numero) => numero % 2 === 0).length;
}

const  numeros = [1, 3,  4, 7, 8, 9, 10];
console.log("Numeros pares",contarPares(numeros)); //Imprime a quantidade de numeros Pares do Array