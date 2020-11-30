// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

n = 5
soma = '*'

for (index = 0; index <= n - 2; index += 1){
    soma = soma + '*'
} for (index = 0; index < n; index += 1){
    console.log(soma)
}
