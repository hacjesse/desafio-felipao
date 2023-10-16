let nomeHeroi = "HomeLander"
let quantExp = 7000
let nivel = ""

if(quantExp <=1000){
    nivel += "Ferro"
} else if(quantExp <= 2000 ){
    nivel += "Bronze"
} else if(quantExp <= 5000 ){
    nivel += "Prata"
} else if(quantExp <= 6000){
    nivel += "Prata II"
} else if( 6001 <= quantExp && quantExp <= 7000){
    nivel += "Ouro"
} else if( 7001 <= quantExp && quantExp <= 8000){
    nivel += "Platina"
} else if( 8001 <= quantExp && quantExp <= 9000){
    nivel += "Ascedente"
} else if( 9001 <= quantExp && quantExp <= 10000){
    nivel += "Imortal"
} else{
    nivel += "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel)