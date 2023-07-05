let idades = [19, 45, 67, 103, 34, 25, 100, 35, 18, 23]

// menor: 18

let menor = idades[0]

for (let idade of idades) {
    if (idade < menor) {
        menor = idade
    }
}

console.log(menor)