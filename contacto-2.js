

let nombre_field;
let pass_field;
let nacimiento_field;
let edad_field;
let suscribe_field;
let contact_form;

document.addEventListener("DOMContentLoaded", (event) => {
	nombre_field = document.getElementById("campo-nombre");
	pass_field = document.getElementById("campo-password");
	nacimiento_field = document.getElementById("campo-nacimiento");
	edad_field = document.getElementById("campo-edad");
	suscribe_field = document.getElementById("campo-suscripcion");
	contactForm = document.getElementById("contact-form");
	suscribe_field.addEventListener("click", function(event) {
		if(event.target.checked) {
			alert("ja ja já Tu alma es mia");
		}
		else {
			alert("Nooooooooooooooooooo");
		}
	});
	
	contact_form.addEventListener("submit", (event) => {
		let send = true;
		let nombre_field = document.getElementById("campo-nombre");

		if (nombre_field.value.length <= 2 || nombre_field.value.length >= 32) {
			send = false;
			nombre_field.style.border = "1px solid red";
		} else {
			nombre_field.style.border = "";
		}

		if (!send) {
			event.preventDefault();
    }
});

	
});
