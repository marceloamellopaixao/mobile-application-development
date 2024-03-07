function Saudacao(nome, sobrenome) {
    if (sobrenome) {
        return "Ol\u00E1 ".concat(nome + " " + sobrenome, ", boa noite!");
    }
    else {
        return "Ol\u00E1 ".concat(nome, ", boa noite!");
    }
}
console.log(Saudacao("Marcelo", "Augusto"));
console.log(Saudacao("Marcelo"));
