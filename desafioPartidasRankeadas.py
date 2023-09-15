nome_heroi = "Rei Arthur"

def saldo_Rankeadas(vitorias, derrotas):
    saldo_Vitorias = vitorias - derrotas
    return saldo_Vitorias

def determinar_Nivel(saldo_Vitorias):
    niveis = {
        range(0, 11): "Ferro",
        range(11, 21): "Bronze",
        range(21, 51): "Prata",
        range(51, 81): "Ouro",
        range(81, 91): "Diamante",
        range(91, 101): "Lendário",
        range(101, 300): "Imortal"
    }

    for faixa, nivel in niveis.items():
        if saldo_Vitorias in faixa:
            return nivel

def main():
    saldo = saldo_Rankeadas(200, 100)
    nivel = determinar_Nivel(saldo)
    print("O Herói", nome_heroi, "tem o saldo de", saldo, "e está no nível", nivel)

main()
