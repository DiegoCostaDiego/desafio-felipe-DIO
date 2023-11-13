let nomeDoHeroi = "Mestre dos Magos"
let xp = 10001
let nivel = ""

if (xp <= 1000) {
    nivel = "Ferro"
    console.log("O Héroi de nome " + nomeDoHeroi + " está no nível de " + nivel)
} else if (xp <= 2000) {
    nivel = "Bronze"
    console.log("O Héroi de nome " + nomeDoHeroi + " está no nível de " + nivel)
} else if (xp <= 5000){
    nivel = "Prata"
    console.log("O Héroi de nome " + nomeDoHeroi + " está no nível de " + nivel)
} else if (xp <= 7000) {
    nivel = "Ouro"
    console.log("O Héroi de nome " + nomeDoHeroi + " está no nível de " + nivel)
} else if (xp <= 8000) {
    nivel = "Platina"
    console.log("O Héroi de nome " + nomeDoHeroi + " está no nível de " + nivel)
} else if (xp <= 9000) {
    nivel = "Ascendente"
    console.log("O Héroi de nome " + nomeDoHeroi + " está no nível de " + nivel)
} else if (xp <= 10000) {
    nivel = "Imortal"
    console.log("O Héroi de nome " + nomeDoHeroi + " está no nível de " + nivel)
} else {
    nivel = "Radiante"
    console.log("O Héroi de nome " + nomeDoHeroi + " está no nível de " + nivel)}

// no desafio o nível "ouro" começa em 6001 xp e vai até 7000 e o nível "prata" vai de 2001 até 5000
// sendo assim que coloquei o nível "ouro" começando de 5001 até 7000.