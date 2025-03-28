


let num_max = 100;
const num_min = 1;
const limite_intentos = 10;
let numero_random = Math.floor(Math.random() * num_max) + num_min;
let contador = 0;

function comparar_numero() {
	contador++;

	let my_num_input = document.getElementById("numero");
	let my_num = my_num_input.value;
	let resultado = document.getElementById("resultado");

	
	document.getElementById("submit").value = "Intentos: " + contador;

	if (my_num < numero_random) {
		resultado.innerHTML = "<em class=\"error\">El número es más grande que " + my_num + "</em>";
	
		my_num_input.style.border = "1px solid red"
	
		//resultado.style.color = "#ff0000";
		} else if (my_num > numero_random) {
			resultado.innerHTML = "<em class=\"error\">El número es más pequeño que " + my_num + "</em>";
		
			my_num_input.style.border = "1px solid red"
		
			//resultado.style.color = "#ff0000";
		} else {
			resultado.innerHTML = "<em class=\"you_win\">¡Lo has acertado, era " + my_num + "!</em>";
		
		
			//resultado.style.color = "#00ff00";
		}
	
		if (contador >= limite_intentos) {
			resultado.innerHTML = "Has llegado al límite de intentos, máximos intentos: " + limite_intentos;
	
			my_num_input.style.border = "1px solid #00ff00"

		
			document.getElementById("submit").disabled = true;
		}

				
		my_num_input.value = "";
		my_num_input.focus();
	}