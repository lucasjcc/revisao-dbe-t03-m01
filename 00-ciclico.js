const anoTeveCopa = 2002
const periodo = 4
const anoDesejado = 1998

const diferenca = anoDesejado - anoTeveCopa

if (diferenca % periodo === 0) {
    console.log("Ano de copa")
} else {
    console.log("Não é ano de copa")
}

// -------------------------------------------------------------------------

let fila = ["Matheus", "Lara", "Clara"]

const resto = sorteio % fila.length

if (resto === 0) {
    console.log(fila[fila.length-1])
} else {
    console.log(fila[resto-1])
}

