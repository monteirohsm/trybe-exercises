// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// criei funcao palindromo com parametro palavra
function palindromo(palavra) {
  let palavraemArray = palavra.split(""); // transformei parametro 'palavra' em array c/ split
  let arrayPalindromo = []
  let arrayPalavra = []
  for (contador = 1; contador <= palavraemArray.length; contador += 1) {
    // criei for usando length de palavra array
    let letraPalindromo = (palavraemArray[palavraemArray.length - contador]); // dei um CLog de palavra array[palavraArray.length - contador]
    arrayPalindromo.push(letraPalindromo)
}
arrayPalindromo.toString()
let letPalindromo = arrayPalindromo.toString()

    for (contador = 0; contador < palavraemArray.length; contador += 1){
        let letraPalavra = (palavraemArray[contador])
        arrayPalavra.push(letraPalavra)
    }
arrayPalavra.toString()
letPalavra = arrayPalavra.toString()
if (letPalindromo === letPalavra){
    console.log('É palíndromo')
} else {
    console.log('Nao é palíndromo')
}
}
palindromo("arara");
