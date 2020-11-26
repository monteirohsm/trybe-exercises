/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals*/

function chess(piece){
    if (piece == 'pawn'.toLowerCase()) {
        console.log('forward only, one square at a time')
    
    } else if (piece == 'bishop'.toLowerCase()) {
        console.log('diagonals')
    } else if (piece == 'Rook'.toLowerCase()) {
        console.log('straight line either horizontally or vertically through any number of unoccupied squares')
    } else if (piece == 'Knight'.toLowerCase()) {
        console.log('moves two squares horizontally or vertically and then one more square at a right-angle.')
    } else if (piece == 'Queen'.toLowerCase()) {
        console.log('It can move any number of squares in a straight line - either vertically, horizontally or diagonally.')
    } else if (piece == 'King'.toLowerCase()) {
        console.log('The king can move to any adjacent square. That is, it can move one square in any direction')
    } else {
        console.log('Error')
    }
}
chess()