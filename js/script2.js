const form = document.querySelector("form");
const btnLogin = document.querySelector(".btn");
function remover() {
	form.classList.remove("validate-error");
}
btnLogin.addEventListener("click", event =>{
	event.preventDefault();	
	const inputs = [...document.querySelectorAll("input")];
	inputs.forEach(input =>{
		if (input.value == "") {
			form.classList.add("validate-error");
			setTimeout(remover, 500);
		}else{
			form.classList.remove("validate-error");
			form.classList.add("form-hide");
		}
	});
});
form.addEventListener("animationstart", event => {
	if (event.animationName == "down") {
		document.querySelector("body").style.overflow = "hidden";
	}
});
form.addEventListener("animationend", event => {
	if (event.animationName == "down") {
		form.style.display = "none";
		document.querySelector("body").style.overflow = "none";
	}
});