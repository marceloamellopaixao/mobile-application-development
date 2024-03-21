var minhaCalculadora = {
    somar: function (x, y) {
        return x + y;
    },
    subtrair: function (x, y) {
        return x - y;
    },
    dividir: function (x, y) {
        if (y == 0) {
            throw new Error("Não é possível dividir por zero.");
        }
        else {
            return x / y;
        }
    },
    multiplicar: function (x, y) {
        return x * y;
    }
};
console.log(minhaCalculadora.somar(5, 10));
console.log(minhaCalculadora.subtrair(50, 80));
console.log(minhaCalculadora.dividir(654, 2));
console.log(minhaCalculadora.multiplicar(5545, 2));
