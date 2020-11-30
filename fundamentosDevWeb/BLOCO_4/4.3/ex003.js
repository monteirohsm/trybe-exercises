let n = 5;
let soma = '*';
let vazio = '';
let vazioPos = n;


for (contador = 0; contador < n; contador += 1){
    for(i = 0; i <= n; i += 1){
        if (i < vazioPos){
            vazio = vazio + ' '
        } else {
            vazio = vazio + '*'
        } 
    } 
    console.log(vazio)
    vazio = ''
   vazioPos = vazioPos - 1
}; 