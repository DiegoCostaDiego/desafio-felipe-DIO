let nomeDoHeroi = "Mestre dos Magos"
let xp = 6584
let nivel = ""

switch(true) {
    case xp <= 1000:
         nivel = "Ferro";
         break;
    case xp <= 2000: 
        nivel = "Bronze"; 
        break;
    case xp <= 5000:
         nivel = "Prata"; 
         break;
    case xp <= 7000:
         nivel = "Ouro"; 
         break;
    case xp <= 8000: 
        nivel = "Platina"; 
        break;
    case xp <= 9000:
         nivel = "Ascendente"; 
         break;
    case xp <= 10000: 
        nivel = "Imortal"; 
        break;
    default: nivel = "Radiante"; break; 
}
console.log("O Herói do nome: " + nomeDoHeroi + " está no nível de " +nivel)

//Nesse código tentei atingir o mesmo resultado por um caminho diferente
// no desafio o nível "ouro" começa em 6001 xp e vai até 7000 e o nível "prata" vai de 2001 até 5000
// sendo assim que coloquei o nível "ouro" começando de 5001 até 7000.