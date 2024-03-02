// 5) Funções em TypeScript:
// a. Escreva uma função chamada "dobrarNumero" que 
// recebe um número como parâmetro e retorna o dobro desse número.

function dobrarNumero(num: number){
    return num * 2
}

console.log(dobrarNumero(15))


// b. Escreva uma função chamada "saudacaoHora" que 
// recebe como parâmetro a hora atual (em formato de 24 horas) e 

// retorna uma saudação correspondente ao período do dia ("Bom dia", "Boa tarde" ou "Boa noite").
function saudacaoHora(hora: number) {

    if (hora >= 5 && hora < 12){
        return 'Bom dia cidadão!'
    }
    else if(hora >= 12 && hora < 18){
        return 'Boa tarde cidadão!'
    }
    else if(hora >= 18 && hora < 23){
        return 'Boa noite cidadão!'
    }
    else{
        return 'Boa madrugada cidadão!'
    }
    
}

console.log(saudacaoHora(5))