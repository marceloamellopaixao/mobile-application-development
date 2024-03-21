interface Usuario{
    nome: string;
    idade: number;
    email ?: string;   //significa que o atributo é opcional, ou seja, pode ser preenchido ou não.
}

// Uilizando interface
function cadastrarUsuario(usuario: Usuario){
    // Implementação da Função
    console.log(usuario)
}

let novoUsuario = {
    nome: "Marcelo",
    idade: 19,
    email: 'marcelo@gmail.com'
}

cadastrarUsuario(novoUsuario)