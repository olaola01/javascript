/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, gamePlaying;

init()

// dice = Math.floor(Math.random() * 6) + 1
// document.querySelector('#current-' + activePlayer).innerText = dice


document.querySelector('.btn-roll').addEventListener('click', (e) => {
    if (gamePlaying) {
        let dice = Math.floor(Math.random() * 6) + 1
        const diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block'
        diceDOM.src = 'dice-' + dice + '.png'

        if (dice !== 1) {
            roundScore += dice
            document.querySelector('#current-' + activePlayer).innerText = roundScore
        } else {
            nextPlayer()
        }
    }
})


document.querySelector('.btn-hold').addEventListener('click', (e) => {
    if (gamePlaying) {
        scores[activePlayer] += roundScore
        const winner = document.querySelector('#score-' + activePlayer).innerText = scores[activePlayer]
        if (winner >= 20) {
            document.getElementById('name-' + activePlayer).innerText = 'Winner'
            document.querySelector('.dice').style.display = 'none'
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
            gamePlaying = false
        } else {
            nextPlayer()
        }
    }
})

document.querySelector('.btn-new').addEventListener('click', init)



function init () {
    scores = [0,0]
    roundScore = 0
    activePlayer = 0
    gamePlaying = true

    document.querySelector('.dice').style.display = 'none'
    document.getElementById('score-0').innerText = '0'
    document.getElementById('score-1').innerText = '0'
    document.getElementById('current-0').innerText = '0'
    document.getElementById('current-1').innerText = '0'
    document.getElementById('name-0').innerText = 'Player 1'
    document.getElementById('name-1').innerText = 'Player 2'
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')

}

nextPlayer = () => {
    // if activePlayer = 0 then activePlayer should be equal to 1 else activePlayer = 0
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0

    document.getElementById('current-0').innerText = '0'
    document.getElementById('current-1').innerText = '0'

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    document.querySelector('.dice').style.display = 'none'
}