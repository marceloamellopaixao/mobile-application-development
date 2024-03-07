function ehPalindromo(frase: string): boolean{
    let cleanString = frase.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); //Remove todos os caracteres que não  são letras ou números
    for (let i = 0; i < frase.length; i++) {
        const element = frase[i];
        
    }
}

// ou

/*
function ehPalindromo(frase: string): boolean{
    let cleanString = frase.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); //Remove todos os caracteres que não  são letras ou números
    let  reversed = cleanString.split('').reverse().join('');
    return cleanString === reversed;
}
*/

console.log(ehPalindromo("Ana")); // True