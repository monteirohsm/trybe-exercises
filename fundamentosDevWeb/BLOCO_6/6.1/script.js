function optionStates() {
  const estadosArray = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
    'DF',
  ];
  for (let index = 0; index < estadosArray.length; index += 1) {
    const selectLocal = document.querySelector('#input-estado-id');
    const newItem = document.createElement('option');
    newItem.innerText = estadosArray[index];
    selectLocal.appendChild(newItem);
  }
}

optionStates();
