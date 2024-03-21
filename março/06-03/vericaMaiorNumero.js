function maiorNumero(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    }
    else {
        return numero2;
    }
}
// or
/*

function maiorNumero(a: number, b: number): number {
    return Math.max(a, b);
}

*/
console.log(maiorNumero(2, 5)); // Saída: 10
