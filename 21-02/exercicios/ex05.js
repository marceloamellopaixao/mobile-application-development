// JavaScript Original

function calcularArea(raio){
    return Math.PI * raio * raio;
}

function imprimirArea(raio){
    console.log("A área do círculo é: " + calcularArea(raio));
}

imprimirArea(50);