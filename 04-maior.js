let idades = [19, 45, 67, 103, 34, 25, 100, 35, 23]

let maior = idades[0]

for (let idade of idades) {
    if (idade > maior) {
        maior = idade
    }
}

console.log(maior)