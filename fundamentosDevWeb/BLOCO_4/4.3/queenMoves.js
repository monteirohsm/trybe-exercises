 let posicaoRainhaLinha = 4;
 let posicaoRainhaColuna = 4;

 let posicaoPecaLinha = 1;
 let posicaoPecaColuna = 1;

 let ataqueBemSucedido = false;


// Verificando o ataque na horizontal ---> mesma linha
 if (posicaoRainhaLinha === posicaoPecaLinha) {
    ataqueBemSucedido = true;
 }

 // Verificando o ataque na vertical ---> mesma coluna
 if (posicaoRainhaColuna === posicaoPecaColuna){
     ataqueBemSucedido = true;
 }

 // Verificando diagonal superior direita 
 for (contador = 1; contador < 8; contador += 1){ 
      let linhaRainha = posicaoRainhaLinha + contador;
      let colunaRainha = posicaoRainhaColuna + contador;

      if(linhaRainha > 8 || colunaRainha > 8){
          break;
      }

      if (linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna){
          ataqueBemSucedido = true;
          break;
      }
 }

 // Verificando diagonal inferior direita 
 for (contador = 1; contador < 8; contador += 1){ 
    let linhaRainha = posicaoRainhaLinha - contador;
    let colunaRainha = posicaoRainhaColuna + contador;

    if(linhaRainha < 1 || colunaRainha > 8){
        break;
    }

    if (linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna){
        ataqueBemSucedido = true;
        break;
    }
}
 // Verificando diagonal superior esquerda
 for (contador = 1; contador < 8; contador += 1){
     linhaRainha = posicaoRainhaLinha + contador;
     colunaRainha = posicaoRainhaColuna - contador;

     if (linhaRainha > 8 || colunaRainha < 1){
        break;
    }

     if (linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna){
         ataqueBemSucedido = true;
         break
     }
 } 

 // Verificando diagonal Inferior Esquerda 
 for (contador = 1; contador < 8; contador += 1){
    let linhaRainha = posicaoRainhaLinha - contador;
    let colunaRainha = posicaoRainhaColuna - contador;

    if (linhaRainha < 1 || colunaRainha < 1){
       break;
   }

    if (linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna){
        ataqueBemSucedido = true;
        break
    }
} console.log(ataqueBemSucedido)