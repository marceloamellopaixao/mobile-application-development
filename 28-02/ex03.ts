interface Animal
{
    emitirSom(): string;
}

let animal: Animal = {
    emitirSom() {
        return "Miauuu"
    }
}

console.log(animal.emitirSom())