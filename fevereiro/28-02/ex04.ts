// Versão Antiga de Função 
function VerificarIdade1 (idade: number){
    if (idade >= 18){
        console.log("É maior de idade.")
    }
    else{
        console.log("É menor de idade.")
    }
}

VerificarIdade1(18) 


// Nova forma de Função. (Arrow Function)
let verificarIdade2 = (idade: number) => {
    if (idade >= 18) {
        return "Você é maior de idade.";
    } else {
        return "Você é menor de idade.";
    }
};

console.log(verificarIdade2(20)); 
console.log(verificarIdade2(15));