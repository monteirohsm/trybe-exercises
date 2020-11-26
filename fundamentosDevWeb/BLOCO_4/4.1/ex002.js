// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

function maiorNumero(a, b) {
  a = 50;
  b = 20;
  if (a > b) {
    console.log("O maior número é", +a);
  } else if (b > a) {
    console.log("O maior número é", +b);
  } else {
    console.log("Error");
  }
}
maiorNumero();
