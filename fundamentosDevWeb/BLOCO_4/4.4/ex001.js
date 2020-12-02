
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

/* Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
    Valor esperado no console: Bem-vinda, Margarida*/
    
    console.log('Bem-vinda, ' + info.personagem)

/* Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.*/
  info.recorrente = 'Sim'
  console.log(info)

/* Faça um for/in que mostre todas as chaves do objeto. */ 
    for (contador in info){
        console.log(info[contador])
    }

/* Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".*/ 

    let infoTio = {
        personagem: "Tio Patinhas",
        origem: "Christmas on Bear Mountain, Dell's Four Comics #178",
        nota: "O último MacPatinhas",
        recorrente: "Sim"
    }
    // to criando um for in que pecorre objetos diferentes usando o mesmo contador
    for (contador in info){
        if (info[contador] === info.recorrente && info.recorrente === "Sim" && infoTio.recorrente === 'Sim'){
            console.log('Ambos recorrentes')
        } else {
        console.log(info[contador] + ' e ' + infoTio[contador])
        }
    }