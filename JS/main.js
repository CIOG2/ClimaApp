fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=80140%20culiacan", {
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
	ERROR();
});


function EXTRACTOR(datos) {
	let temperatura = parseInt(datos.current.temp_c);
	let icono = datos.current.condition.icon;
	let clima = document.getElementById("TEMPERATURA");
	let punto = document.getElementById("PUNTO-GRADOS");
	let imagen_cliama = document.getElementById("imagen-clima");



	imagen_cliama.src = icono;
	clima.innerText = temperatura;
	punto.innerText = "°";
	


	console.log(datos);
}








function ERROR() {
	const ERROR = document.getElementById("PUNTO-GRADOS");
	ERROR.innerText = "Refresh page";
}