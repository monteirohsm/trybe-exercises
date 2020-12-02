// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indiceMaior(){
    let maior = '0'
    let arrayTeste = [2, 4, 6, 7, 10, -1]
    for (contador = 0; contador <= arrayTeste.length; contador += 1){
        let posicao = (arrayTeste[contador])
        if (posicao > maior){
            maior = posicao
        } 
    }for (contador = 0; contador < arrayTeste.length; contador += 1){
        let posicao2 = (arrayTeste[contador])
        if (maior === posicao2){
            console.log(contador)
        }
    }
}
indiceMaior()