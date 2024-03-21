function calcularMedia(notas: number[]): number {
    let total = 0;
    for (let nota of notas){
        total += nota
    }

    return total / notas.length
}

let notasAluno: number[] = [8,9,10,4]
let media: number = calcularMedia(notasAluno)
console.log(`A média do aluno é: ${media}`)