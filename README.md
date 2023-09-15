# Curso: Lógica de Programação - DIO

 A ideia proposta no curso é de desenvolver uma base sólida em programação aprendendendo a:
- Trabalhar com variáveis para armazenar informações;
- Dominar laços de repetição para otimizar fluxos;
- Criar funções para organizar seu código;
- Explorar o conceito de objetos para criar estrutura de dados mais complexas.

O curso completo conta com 3 desafios de projeto que estarão presentes em meu perfil. Para seguir o proposto em aula, utilizei a linguagem JavaScript. 

Desafiei a mim mesma para ir além e desenvolvi uma alternativa em Python de cada projeto, treinando assim minhas habilidades de trabalhar com diferentes linguagens, além de aprender melhor sobre as semelhanças e diferenças entre elas.

# 2️⃣ Calculadora de partidas Rankeadas (Desafio 2/3)

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}"

<a name="índice"></a>
# Índice
  *- [Demonstração](#demonstração)
  *- [Tecnologias Utilizadas](#tecnologias-utilizadas)
  *- [Identificando trechos](#identificando-trechos)
  *- [Modelo em Python](#modelo-em-python)


## Demonstração
<a id="demonstração"></a>
[voltar](#índice)

O código final foi:

![image](https://github.com/AgataAraujo-dev/Desafio2_PartidasRankeadas/assets/139137656/b260fe83-a9ce-4b15-a814-672b288a9b0f)

E o resultado seguiu o esperado:

![image](https://github.com/AgataAraujo-dev/Desafio2_PartidasRankeadas/assets/139137656/603fe786-304e-4096-a61e-71ccc39a1e74)


## Tecnologias Utilizadas
<a id="tecnologias-utilizadas"></a>
[voltar](#índice)

Utilizei o IDE VSCODE para fazer os testes em conjunto com o Node.js e uma extensão para Python.

## Identificando trechos
<a id="identificando-trechos"></a>
[voltar](#índice)

Iniciei declarando a variavel de nome do herói para o qual atribui valor para exemplo. E criei a variável de nível do herói, mas sem valor inicial:
```javascript
let nomeheroi = "Rei Arthur"
let nivelheroi
```

Chamei a função 'saldoRankeadas' para gerar o saldo de vitórias:
```javascript
saldoRankeadas(200,100)
}
```

Defini a função 'saldoRankeadas' da maneira que foi solicitado no descritivo do desafio, como sendo a fórmula de calcular o saldo de vitórias através da diferença entre vitórias e derrotas:
```javascript
function saldoRankeadas (vitorias , derrotas){
    saldoVitorias = vitorias - derrotas
    return saldoVitorias
}
```

Condicionei o nivel do herói para ser atualizado de acordo com o parâmetro 'saldoVitorias':
```javascript
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
```

E por último, para retornar o resultado proposto, utilizei console.log para obter a mensagem que indica o nome do herói, seu saldo de vitórias e seu nível, respectivamente:
```javascript
console.log( "O Herói " + nomeheroi + " tem o saldo de " + saldoVitorias + " e está no nível " + nivelheroi)
```

## Modelo em Python
<a id="modelo-em-python"></a>
[voltar](#índice)

Deixarei abaixo o código do mesmo desafio desenvolvido utilizando Python, ao contrário do anterior desta vez tentei desenvolver desde o início sem usar o código em JavaScript como base, assim pude utilizar outras maneiras de chegar ao mesmo resultado, porém que em uma aplicação real seria de fácil manutenção.
O código final foi:

![image](https://github.com/AgataAraujo-dev/Desafio2_PartidasRankeadas/assets/139137656/77ebfe31-5530-4abc-b2cd-689a46e78231)

E o resultado seguiu o esperado:

![image](https://github.com/AgataAraujo-dev/Desafio2_PartidasRankeadas/assets/139137656/603fe786-304e-4096-a61e-71ccc39a1e74)

