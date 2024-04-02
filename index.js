let nomeHeroi = "Agana"
let xpHeroi = 9001
let nivelHeroi = ""

if (xpHeroi <= 1000) {
    nivelHeroi = "Ferro"
} else if (xpHeroi <= 2000) {
    nivelHeroi = "Bronze"
} else if (xpHeroi <= 6000) {
    nivelHeroi = "Prata"
} else if (xpHeroi <= 7000) {
    nivelHeroi = "Ouro"
} else if (xpHeroi <= 8000) {
    nivelHeroi = "Platina"
} else if (xpHeroi <= 9000) {
    nivelHeroi = "Ascendente"
} else if (xpHeroi <= 10000) {
    nivelHeroi = "Imortal"
} else if (xpHeroi >= 10001) {
    nivelHeroi = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi, "está no nível de " + nivelHeroi)