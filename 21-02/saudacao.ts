function saudacao(nome: string, hora?: string): string{
    if (hora){
        return  `Bom dia ${nome}! Agora são ${hora}.`
    } else {
        return `Olá ${nome}!`
    }

}

console.log(saudacao("Marcelo")) // Retorna: Bom dia Marcelo! Agora são 10h.