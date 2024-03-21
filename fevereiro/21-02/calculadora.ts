interface Calculadora {
    somar(x: number, y: number): number
    subtrair(x: number, y: number): number;
    dividir(x: number, y: number): number;
    multiplicar(x: number, y: number): number;
}

let minhaCalculadora: Calculadora = {
    somar(x, y) {
        return x + y;
    },

    subtrair(x, y) {
        return x - y;
    },

    dividir(x, y) {
        if (y == 0) {
            throw new Error("Não é possível dividir por zero.");
        } else {
            return x / y;
        }
    },

    multiplicar(x, y) {
        return x * y;
    }
}


console.log(minhaCalculadora.somar(5, 10))
console.log(minhaCalculadora.subtrair(50, 80))
console.log(minhaCalculadora.dividir(654, 2))
console.log(minhaCalculadora.multiplicar(5545, 2))