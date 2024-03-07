function Saudacao(nome: string, sobrenome?: string){
    if (sobrenome){
        return `Olá ${nome + " " + sobrenome}, boa noite!`
    }
    else{
        return `Olá ${nome}, boa noite!`
    }
}

console.log(Saudacao("Marcelo", "Augusto"))
console.log(Saudacao("Marcelo"))

let salutation = ({name, surname}: SalutationProps): string => {
    return `Olá ${name} ${surname ?? ''}`
}