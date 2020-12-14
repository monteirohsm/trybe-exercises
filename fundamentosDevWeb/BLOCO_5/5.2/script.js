function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

  // Exercício 01
  let listaDias = document.querySelector('#days');
  console.log(listaDias)
  for (let contador = 0;contador < dezDaysList.length; contador += 1){
      let dia = document.createElement('li')
      dia.innerHTML = dezDaysList[contador]
      dia.className = 'day'
      listaDias.appendChild(dia)
  }
  console.log(listaDias)

  // Exercício 02
  function holiday(Feriados){
    let botao = document.createElement('button');
    botao.id = 'btn-holiday'

    let paiButton = document.querySelector('.buttons-container')
    paiButton.appendChild(botao)
  }
  holiday()