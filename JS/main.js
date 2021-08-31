fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=80140%20culiacan", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
		"x-rapidapi-key": "0c5911963bmsh430fa4f73d71a5dp14dc20jsn3edb351cb442"
	}
})
.then(response => {
    console.log('hola');
    response.json().then(function(data) {
        EXTRACTOR(data);
    });
})
.catch(err => {
	console.error(err);
});




function EXTRACTOR(datos) {
	const CLIMA = document.getElementById("TEMPERATURA");
	const temperatura = datos.current.temp_c;

	CLIMA.innerText = temperatura;
}