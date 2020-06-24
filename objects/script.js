(function(){
    class Question {
        constructor(question, answer, correct){
            this.question = question
            this.answer = answer
            this.correct = correct
        }

        displayQuestions(){
            // let ans;
            console.log(this.question)
            for (let i = 0; i < this.answer.length; i++){
                console.log(i + ': ' + this.answer[i])
            }
            // ans = parseInt(prompt('Please select the correct answer'))
        }

        checkAnswer(ans, callback){
            let sc;
            if (ans === this.correct){
                console.log('Correct Answer')
                sc = callback(true)
            }else {
                console.log('Incorrect Answer ')
                sc = callback(false)
            }

            this.displayScore(sc)
        }

        displayScore(score){
            console.log('Your current score is: ' + score)
            console.log('---------------------')
        }
    }

    const question_one = 'Is javascript the coolest programming language in the world?'
    const answer_one = ['Yes', 'No']
    const correct_one = 0

    const question_two = 'What\'s the name of this course\'s teacher?'
    const answer_two = ['Me', 'Myself', 'Jonas']
    const correct_two = 2

    const question_three = 'What word best describe\'s programming?'
    const answer_three = ['Boring', 'Hard', 'Fun', 'Tedious']
    const correct_three = 2

// const ans = ''
// const question_four = 'Is javascript the coolest programming language in the world?'
// const answer_four = ['Yes', 'No']
// const correct_four  = 0

    let q1 = new Question(question_one, answer_one, correct_one)
    let q2 = new Question(question_two, answer_two, correct_two)
    let q3 = new Question(question_three, answer_three, correct_three)
// let q4 = new Question()
    let questions = [q1, q2, q3]

    /* CLOSURE */
    function score() {
        let sc = 0
        return function (correct) {
            if (correct) {
                sc++
            }
            return sc
        }
    }
    let keepScore = score()
    /* CLOSURE END*/

    function nextQuestion() {
        let n = Math.floor(Math.random() * questions.length)

        questions[n].displayQuestions()

        let ans = prompt('Please select the correct answer')

        if (ans !== 'exit') {
            questions[n].checkAnswer(parseInt(ans), keepScore)
            nextQuestion()
        }
    }
        nextQuestion()
})();



