function contarPares(numeros) {
    return numeros.filter(function (numero) { return numero % 2 === 0; }).length;
}
var numeros = [1, 3, 4, 7, 8, 9, 10];
console.log("Numeros pares", contarPares(numeros)); //Imprime a quantidade de numeros Pares do Array
