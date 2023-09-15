let nomeheroi = "Rei Arthur"
let nivelheroi

saldoRankeadas(200,100)

function saldoRankeadas (vitorias , derrotas){
    saldoVitorias = vitorias - derrotas
    return saldoVitorias
}

if (saldoVitorias <= 10){
    nivelheroi = "Ferro"
} else if (saldoVitorias >= 11 && saldoVitorias <= 20){
    nivelheroi = "Bronze"
} else if (saldoVitorias >= 21 && saldoVitorias <= 50){
    nivelheroi = "Prata"
} else if (saldoVitorias >= 51 && saldoVitorias <= 80){
    nivelheroi = "Ouro"
} else if (saldoVitorias >= 81 && saldoVitorias <= 90){
    nivelheroi = "Diamante"
} else if (saldoVitorias >= 91 && saldoVitorias <= 100){
    nivelheroi = "Lendário"
} else if (saldoVitorias >= 101){
    nivelheroi = "Imortal"
}

console.log( "O Herói " + nomeheroi + " tem o saldo de " + saldoVitorias + " e está no nível " + nivelheroi)
