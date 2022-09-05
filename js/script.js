let theme = localStorage.getItem('theme')


if(theme == null){
	setTheme('light')
}
else{
	setTheme(theme)
}


let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'css/default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'css/blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'css/green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'css/purple.css'
	}

	localStorage.setItem('theme', mode)
}

const alert = document.querySelector('.alert')
const form = document.querySelector('#contact-form')
const inputFields = document.getElementsByClassName('input-field')

form.addEventListener('submit', e => {
	e.preventDefault()
	alert.className = 'alert alert-show'
	setTimeout(() => {
		alert.className = 'alert'
		for (let i=0; i<inputFields.length; i++){
			inputFields[i].value = ''
		}
	}, 2000);
})