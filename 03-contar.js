const produtoProcurado = "cueca"
let estoque = ["cueca", "meia", "calça", "luva", "cueca"]

let contador = 0
for (let produto of estoque) {
    if (produto === produtoProcurado) {
        // contador = contador + 1
        contador += 1
    }
}

if (contador === 0) {
    console.log("Não tem no estoque")
} else {
    console.log(contador)
}