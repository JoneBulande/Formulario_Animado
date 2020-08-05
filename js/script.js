const form = document.querySelector("form");
const ding = document.querySelector("#ding");
const wrong = document.querySelector("#wrong");
const btnLogin = document.querySelector(".btn");
btnLogin.addEventListener("click", event => {
	event.preventDefault();
	const campos = [...document.querySelectorAll("input")];
	campos.forEach(campo =>{
		if (campo.value == "") {
			form.classList.add("validate-error");
			setTimeout(wrong.play(), 100);
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
		setTimeout(ding.play(), 100);
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

/* squares */
const ulSquares = document.querySelector("ul.squares");
for(let i = 0; i < 50; i++){
	
	const li = document.createElement("li");
	const random = (min, max) => Math.random() * (max - min) + min;
	
	const size = Math.floor(random(120, 10));
	const position = random(1, 99);
	const delay = random(10, 0.1);
	const duration = random(42, 5);
	
	li.style.width = `${size}px`;
	li.style.height = `${size}px`;
	li.style.bottom = `-${size}px`;
	
	li.style.left = `${position}%`;

	li.style.animationDelay = `${delay}s`;
	li.style.animationDuration = `${duration}s`;

	li.style.animationTimingFunction = `cubit-bezier(${Math.random()*1}, ${Math.random()*1}, ${Math.random()*1})`

	
	ulSquares.appendChild(li);
}