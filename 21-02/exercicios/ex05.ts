// TypeScript Convertido

interface Circulo{
    raio: number;
}

function calcularArea(circulo: Circulo){
    return Math.PI * circulo.raio * circulo.raio;
}

function imprimirCirculo(circulo: Circulo): void{
    console.log("A área do círculo é: " + calcularArea(circulo));
}

let circulo: Circulo = {
    raio: 50
}

imprimirCirculo(circulo);