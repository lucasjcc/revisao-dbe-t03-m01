const fila = ["Matheus", "Lara", "Clara", "Lucas", "Lara", "Ariel", "Lucas"]
const pessoaProcurada = "Lara"

const posicoes = []
for (let i = 0; i < fila.length; i++) {
    if (fila[i] === pessoaProcurada) {
        posicoes.push(i + 1)
    }
}

if (posicoes.length === 0) {
    console.log("Pessoa não encontrada")
} else {
    console.log(posicoes)
}


//---------------------------------------------------------
const precos = [4, 8.5, 100.20, 300, 400, 2000]
const valorMinimo = 300

let valoresPermitidos = []
for (let preco of precos) {
    if (preco >= valorMinimo) {
        valoresPermitidos.push(preco)
    }
}

console.log(valoresPermitidos)