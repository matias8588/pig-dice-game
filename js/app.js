/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/* Declaración de variables */
var scores, roundScore, activePlayer

/* Inicio la app */
init()

/* Evento para crear un numero random al hacer click */
document.querySelector('.btn-roll').addEventListener('click', function () {
  var dice = Math.floor(Math.random() * 6) + 1
  var diceDom = document.querySelector('.dice')
  diceDom.style.display = 'block'
  diceDom.src = './img/dice-' + dice + '.png'
  if (dice !== 1) {
    roundScore += dice
    document.querySelector('#current-' + activePlayer).textContent = roundScore
  } else {
    nextPlayer()
  }
})

/* Evento para mantener el puntaje en espera */
document.querySelector('.btn-hold').addEventListener('click', function () {
  scores[activePlayer] += roundScore
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
  if (scores[activePlayer] >= 10) {
    document.querySelector('#name-' + activePlayer).textContent = '¡Ganador!'
    document.querySelector('.dice').style.display = 'none'
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
  } else {
    nextPlayer()
  }
})

document.querySelector('.btn-new').addEventListener('click', init)

/* Funcion para pasar al siguente jugador */
function nextPlayer () {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
  roundScore = 0
  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'
  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')
  document.querySelector('.dice').style.display = 'none'
}

/* Funcion para inicializar los resultados en 0 */
function init () {
  scores = [0, 0]
  activePlayer = 0
  roundScore = 0
  document.getElementById('score-0').textContent = '0'
  document.getElementById('score-1').textContent = '0'
  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'
  document.querySelector('.dice').style.display = 'none'
  document.getElementById('name-0').textContent = 'Jugador 1'
  document.getElementById('name-1').textContent = 'Jugador 2'
  document.querySelector('.player-0-panel').classList.remove('winner')
  document.querySelector('.player-1-panel').classList.remove('winner')
  document.querySelector('.player-0-panel').classList.remove('active')
  document.querySelector('.player-1-panel').classList.remove('active')
  document.querySelector('.player-0-panel').classList.add('active')
}
