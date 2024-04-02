function partidas (vitorias, derrotas){
    let resultado = vitorias - derrotas
    return resultado
}

function rank(){
    let resultadoRank = partidas (110, 10)
    let nivel = ""
    if (resultadoRank <= 10){
        nivel = "Ferro"
    } else if (resultadoRank <= 20){
        nivel = "Bronze"
    } else if (resultadoRank <= 50){
        nivel = "Prata"
    } else if (resultadoRank <= 80){
        nivel = "Ouro"
    } else if (resultadoRank <= 90){
        nivel = "Diamante"
    } else if (resultadoRank <= 100){
        nivel = "Lendário"
    } else if (resultadoRank >= 101){
        nivel = "Imortal"
    }
    return `O Herói tem de saldo de ${resultadoRank} e está nível de ${nivel}`
}

console.log(rank())
