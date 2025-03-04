// CALCULATOR
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement, computation) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.computation = computation
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)

    }

    appendNumber(number) {
        if (this.computation !== '') {
            this.currentOperand = ''
            this.computation = ''
        }
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        // let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                this.computation = prev + current
                break
            case '-':
                this.computation = prev - current
                break
            case '*':
                this.computation = prev * current
                break
            case '/':
                this.computation = prev / current
                break
            default:
                return
        }
        // console.log(this.computation)
        this.currentOperand = this.computation.toLocaleString('en')
        this.operation = undefined
        this.previousOperand = ''
    }

    // getDisplayNumber(number){
    // 	const stringNumber = number.toString()
    // 	const integerDigits = parseFloat(stringNumber.split('.')[0])
    // 	const decimalDigits = stringNumber.split('.')[1]
    // 	let integerDisplay
    // 	if (isNaN(integerDigits)){
    // 		integerDisplay = ''
    // 	}else {
    // 		integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    // 	}
    // 	if (decimalDigits != null ){
    // 		return `${integerDisplay}.${decimalDigits}`
    // 	}else{
    // 		return integerDisplay
    // 	}
    // }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }

        // if (this.computation === this.currentOperand){
        // 	console.log(this.currentOperand)
        // }

    }

    // testingObject(number){
    // 	if (this.computation == this.currentOperand){
    // 	}}
    // 	// console.log(this.computation)
    // 	if(this.computation !== '' && number === '.' && this.currentOperand.includes('.')) return
    // 		this.currentOperand = ''
    // 		this.currentOperand = this.currentOperand.toString() + number.toString()
    // 	}
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const computation = ''
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement, computation)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})