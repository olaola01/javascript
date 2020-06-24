/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, gamePlaying

let lastDice
init()

document.querySelector('.btn-roll').addEventListener('click', (e) => {
    if (gamePlaying) {
        let dice1 = Math.floor(Math.random() * 6) + 1
        let dice2 = Math.floor(Math.random() * 6) + 1

        document.getElementById('dice-1').style.display = 'block'
        document.getElementById('dice-2').style.display = 'block'

        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png'
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png'



        if (dice1 !== 1 && dice2 !== 1) {
            roundScore += dice1 + dice2
            document.querySelector('#current-' + activePlayer).innerText = roundScore
        } else {
            nextPlayer()
        }
        // if (dice === 6 && lastDice === 6){
        //     scores[activePlayer] = 0
        //     document.querySelector('#score-' + activePlayer).innerText = '0'
        //     nextPlayer()
        // }else if (dice !== 1) {
        //     roundScore += dice
        //     document.querySelector('#current-' + activePlayer).innerText = roundScore
        // } else {
        //     nextPlayer()
        // }
        //
        // lastDice = dice
    }
})


document.querySelector('.btn-hold').addEventListener('click', (e) => {
    if (gamePlaying) {
        scores[activePlayer] += roundScore
        document.querySelector('#score-' + activePlayer).innerText = scores[activePlayer]

        const input = document.querySelector('.final-score').value.trim()
        let winningScore
        if (input){
            winningScore = input
        }else {
            winningScore = 100;
        }

        if (scores[activePlayer] >= winningScore) {
            document.getElementById('name-' + activePlayer).innerText = 'Winner'
            document.getElementById('dice-1').style.display = 'none'
            document.getElementById('dice-2').style.display = 'none'
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

    document.getElementById('dice-1').style.display = 'block'
    document.getElementById('dice-2').style.display = 'block'
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

    document.getElementById('dice-1').style.display = 'none'
    document.getElementById('dice-2').style.display = 'none'
}