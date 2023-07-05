const produtoProcurado = "cueca"
const loja = {
    nome: "Caldeirão",
    cnpj: "13124223543",
    estoque: ["cueca", "meia", "calça", "luva"],
    aberta: true
}

let encontrado = false

for (let produto of loja.estoque) {
    if (produto === produtoProcurado) {
        encontrado = true
        break
    }
}

if (!encontrado) {
    console.log("O produto não tem no estoque")
} else if (encontrado === true && loja.aberta === true) {
    console.log("Pode buscar")
} else {
    console.log("A loja não se encontra aberta no momento")
}