class CreateForm {
	constructor(username,email,password,password2){
		// this.form = form
		this.username = username
		this.email = email
		this.password = password
		this.password2 = password2
	}

	checkInputValues(){
		const usernameValue = this.username.value.trim()
		const emailValue = this.email.value.trim()
		const passwordValue = this.password.value.trim()
		const password2Value = this.password2.value.trim()

		if (usernameValue === ''){
			this.setErrorFor(username, 'Username cannot be blank')
		}else if (usernameValue.length < 3){
			this.setErrorFor(username, 'Must contain at least 3 characters')
		}else {
			this.setSuccessFor(username)
		}

		if (emailValue === ''){
			this.setErrorFor(email, 'Email cannot be blank')
		}else if(!this.isEmail(emailValue)) {
			this.setErrorFor(email, 'Email doesn\'t match')
		}else {
			this.setSuccessFor(email)
		}

		switch (true){
			case (passwordValue === ''):
				this.setErrorFor(password, 'Password cannot be blank')
				break;
			case (passwordValue.length < 8):
				this.setErrorFor(password, 'Must be 8 characters or longer')
				break;
			case (passwordValue.search(/[a-z]/) === -1):
				this.setErrorFor(password, 'Must contain a lowercase')
				break;
			case (passwordValue.search(/[A-Z]/) === -1):
				this.setErrorFor(password, 'Must contain an Uppercase')
				break;
			case (passwordValue.search(/[0-9]/) === -1):
				this.setErrorFor(password, 'Must contain a Number')
				break;
			case (passwordValue.search(/[!@#$%^&*]/) === -1):
				this.setErrorFor(password, 'Must contain a Symbol')
				break;
			default:
				this.setSuccessFor(password)
				console.log(passwordValue)
		}

		if (password2Value === ''){
			this.setErrorFor(password2, 'Confirm Password cannot be blank')
		}else if (passwordValue !== password2Value){
			this.setErrorFor(password2, 'Does not match with Password above')
		}else {
			this.setSuccessFor(password2)
		}
	}

	setErrorFor(input, message){
		const formControlParent = input.parentElement 
		const small = formControlParent.querySelector('small')

		small.innerText = message;

		formControlParent.className = 'form-control error';
	}

	setSuccessFor(input){
		const formControlParent = input.parentElement 
		formControlParent.className = 'form-control success';
	}

	isEmail(email){
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
	}
}

const form 		= document.querySelector('#form')
const username 	= document.querySelector('#username')
const email 	= document.querySelector('#email')
const password 	= document.querySelector('#password')
const password2 = document.querySelector('#password2')

const createform = new CreateForm(username,email,password,password2)

form.addEventListener('submit', (e) => {
	e.preventDefault();

	createform.checkInputValues()
})