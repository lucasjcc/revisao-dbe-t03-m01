const precos = [4, 8.5, 100.20, 300, 400, 2000]

let somador = 0
for (let preco of precos) {
    // somador = somador + preco
    somador += preco
}

console.log(somador)

//--------------------------------------------------------------------
let soma = 0

for (let preco of precos) {
    if (preco % 2 === 0) {
        soma += preco
    }
}