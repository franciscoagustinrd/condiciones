let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let number3 = document.querySelector("#number3");

const btn = document.querySelector("#btn");
const msg = document.querySelector("#msg");

btn.addEventListener('click', () => {
	let password1 = number1.value;
	let password2 = number2.value;
	let password3 = number3.value;
	
 let password = password1 + password2 + password3;
	
	if (password === '911') {
			msg.innerHTML = 'Password 1 correcto';
	} else if (password === '714'){
			msg.innerHTML = 'Password 2 correcto';
	} else {
			msg.innerHTML = 'Password incorrecto'
	}
});




