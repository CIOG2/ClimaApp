// ``
function CLIMA(ciudad) {

	let link = "https://weatherapi-com.p.rapidapi.com/current.json?q=" + ciudad;

	fetch(link, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
			"x-rapidapi-key": "0c5911963bmsh430fa4f73d71a5dp14dc20jsn3edb351cb442"
		}
	})
	.then(response => {
		response.json().then(function(data) {
			EXTRACTOR(data);
		});
	})
	.catch(err => {
		let ciudad = document.getElementById("CIUDAD").value;
		console.log('akskakkakakakka');
		ERROR(ciudad);
	});
}

function EXTRACTOR(datos) {
	let temperatura = parseInt(datos.current.temp_c);
	let icono = datos.current.condition.icon;
	let ciudadEstadoPais = [
		datos.location.name,
		datos.location.region,
		datos.location.country,
	]
	let ubicacion = document.getElementById("UBICACION");
	let clima = document.getElementById("TEMPERATURA");
	let punto = document.getElementById("PUNTO-GRADOS");
	let imagen_clima = document.getElementById("imagen-clima");

	imagen_clima.src = icono;
	clima.innerText = temperatura;
	punto.innerText = "°";
	ubicacion.innerText = `${ciudadEstadoPais[0]} ${ciudadEstadoPais[1]}, ${ciudadEstadoPais[2]}`;
}

function ERROR(ciudad) {	
	if (ciudad) {
		swal('Error', ciudad + ' No es una ciudad', 'error')
	}else{
		swal('Error', 'No agregaste un nombre', 'error')
	}
}

function extraerCiudad() {
	let ciudad = document.getElementById("CIUDAD").value;
	
	if (ciudad) {
		CLIMA(ciudad);
	}else{
		console.log('buenas noches');
		ERROR(ciudad);
	}
}




CLIMA("culiacan");