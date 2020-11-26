// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

function triangulo(a, b, c) {
  a = 45;
  b = 90;
  c = 40;
  if (a + b + c == 180) {
    console.log("true");
  } else if (a + b + c != 180) {
    console.log("false");
  } else {
    console.log("Error");
  }
}
triangulo();
