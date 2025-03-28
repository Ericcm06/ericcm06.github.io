		    function comprobar_campos(event) {
			
            let nombre = document.getElementById("campo-nombre");
            let nacimiento = document.getElementById("campo-nacimiento");
            let edad = document.getElementById("campo-edad");
            let contraseña = document.getElementById("campo-password");
			
            let valido = true;
			
			if (contraseña.value == "") {
                contraseña.style.border = "1px solid red";
                valido = false;
            } else {
                contraseña.style.border = "";
            }
			
            if (nombre.value == "") {
                nombre.style.border = "1px solid red";
                valido = false;
            } else {
                nombre.style.border = "";
            }

            if (nacimiento.value == "") {
                nacimiento.style.border = "1px solid red";
                valido = false;
            } else {
                nacimiento.style.border = "";
            }

            if (edad.value == "") {
                edad.style.border = "1px solid red";
                valido = false;
            } else {
                edad.style.border = "";
            }
            
            if (!valido) {
                event.preventDefault();
            }
        }