const form = document.querySelector("form");
const btnLogin = document.querySelector(".btn");
btnLogin.addEventListener("click", event => {
	event.preventDefault();
	const campos = [...document.querySelectorAll("input")];
	campos.forEach(campo =>{
		if (campo.value == "") {
			form.classList.add("validate-error");
		}
	});
	const formError = document.querySelector(".validate-error");
	if (formError) {
		formError.addEventListener("animationend", event =>{
			if (event.animationName == "nono") {
				form.classList.remove("validate-error");
			}
		});
	}else{
		form.classList.add("form-hide");
	}
});
form.addEventListener("animationstart", event => {
	if (event.animationName == "down") {
		document.querySelector("body").style.overflow = "hidden";
	}
});

form.addEventListener("animationend", event => {
	if (event.animationName == "down") {
		document.querySelector("body").style.overflow = "none";
	}
});