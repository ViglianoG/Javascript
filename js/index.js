document.getElementById("botonNombre").addEventListener("click", () => {
    let nombre = prompt("tu nombre");
    let apellido = prompt("y tu apellido");

    const nombreCompleto = {
        nombre,
        apellido
    };

    if (localStorage.getItem("nombreYapellido") === null) {
        let aNombre = [];
        aNombre.push(nombreCompleto)
        localStorage.setItem("nombreYapellido", JSON.stringify(aNombre));
    } else {
        let aNombre = JSON.parse(localStorage.getItem("nombreYapellido"));
        aNombre.push(nombreCompleto);
        localStorage.setItem("nombreYapellido", JSON.stringify(aNombre));
    }

});


function mensajeBienvenida() {
    let nombreCompleto = JSON.parse(localStorage.getItem("nombreYapellido"));
    let contenedorNombre = document.getElementById("contenedor-nombre");
    if (localStorage.getItem("nombreYapellido") === null){
        document.getElementById("botonNombre").classList.remove("disabled");
        contenedorNombre.innerHTML = `<h3>Bienvenid@! el clima de hoy es:</h3>`
    }else{
        contenedorNombre.innerHTML = `<h3>Bienvenid@! ${nombreCompleto[0].nombre} ${nombreCompleto[0].apellido} el clima de hoy es:</h3>`
    }
    
}
mensajeBienvenida();




//geolocalización para el clima

let tempValor = document.getElementById("temp-valor");
let tempDescripcion = document.getElementById("temp-descripcion");

let ciudad = document.getElementById("ubicacion");
let iconoAnimado = document.getElementById("icono-animado");

window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posi => {
            let latitud = posi.coords.latitude;
            let longitud = posi.coords.longitude;
            let apiKey = "da53dcac9ee0f4524e9d2c482ab89e63";
            //API UrlWeather
            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apiKey}&units=metric&lang=es`;
            fetch(urlWeather)
                .then(resultado => resultado.json())
                .then(datos => {
                    let temp = Math.round(datos.main.temp);
                    tempValor.innerText = `${temp} °C`;
                    let desc = datos.weather[0].description;
                    tempDescripcion.innerText = `${desc.toUpperCase()}`;
                    let ubi = datos.name;
                    ciudad.innerText = `${ubi}`;

                    switch (datos.weather[0].main) {
                        case 'Thunderstorm':
                            iconoAnimado.src = './assets/img/animated/thunder.svg'
                            break;
                        case 'Drizzle':
                            iconoAnimado.src = './assets/img/animated/rainy-2.svg'
                            break;
                        case 'Rain':
                            iconoAnimado.src = './assets/img/animated/rainy-7.svg'
                            break;
                        case 'Snow':
                            iconoAnimado.src = './assets/img/animated/snowy-6.svg'
                            break;
                        case 'Clear':
                            iconoAnimado.src = './assets/img/animated/day.svg'
                            break;
                        case 'Atmosphere':
                            iconoAnimado.src = './assets/img/animated/weather.svg'
                            break;
                        case 'Clouds':
                            iconoAnimado.src = './assets/img/animated/cloudy-day-1.svg'
                            break;
                        default:
                            iconoAnimado.src = './assets/img/animated/cloudy-day-1.svg'
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        })
    }
})



// function obtenerDatos(){
//     const UrlGet="";
// }