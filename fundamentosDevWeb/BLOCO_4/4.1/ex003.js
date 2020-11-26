// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

function maiorTresNumeros(a, b, c) {
    a = 10;
    b = 20;
    c = 30;
    if (a > b && a > c) {
      console.log("O maior número é", +a);
    } else if (b > a && b > c) {
      console.log("O maior número é", +b);
    } else if (c > a && c > b) {
        console.log("O maior número é", +c);
    } else {
      console.log("Error");
    }
  }
 maiorTresNumeros();
  