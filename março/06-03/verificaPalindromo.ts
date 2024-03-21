function ehPalindromo(frase: string): boolean{
    let cleanString = frase.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); //Remove todos os caracteres que não  são letras ou números
    let  reversed = cleanString.split('').reverse().join('');
    return cleanString === reversed;
}


console.log(ehPalindromo("Ana")); // True