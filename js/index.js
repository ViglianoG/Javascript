//################ EVENTO PARA SACAR EL NOMBRE DEL USUARIO ################
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

//################ MENSAJE DE BIENVENIDA ################
function mensajeBienvenida() {
    let nombreCompleto = JSON.parse(localStorage.getItem("nombreYapellido"));
    let contenedorNombre = document.getElementById("contenedor-nombre");
    let animacionBienvenida = document.getElementById("mensaje-bienvenida");
    if (localStorage.getItem("nombreYapellido") === null) {
        document.getElementById("botonNombre").classList.remove("disabled");
        animacionBienvenida.innerHTML = `Bienvenid@!`
        contenedorNombre.innerHTML = `<h3>Bienvenid@! el clima de hoy es:</h3>`
    } else {
        animacionBienvenida.innerHTML = `Bienvenid@! ${nombreCompleto[0].nombre} ${nombreCompleto[0].apellido}`
        contenedorNombre.innerHTML = `<h3>Bienvenid@! ${nombreCompleto[0].nombre} ${nombreCompleto[0].apellido} el clima de hoy es:</h3>`
    }

}
mensajeBienvenida();



//################ GEOLOCALIZACIÓN PARA EL CLIMA ################

let tempValor = document.getElementById("temp-valor");
let tempDescripcion = document.getElementById("temp-descripcion");
let humedad = document.getElementById("humedad");

let ciudad = document.getElementById("ubicacion");
let iconoAnimado = document.getElementById("icono-animado");

let velViento = document.getElementById("vel-viento");

window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posi => {
            let latitud = posi.coords.latitude;
            let longitud = posi.coords.longitude;
            let apiKey = "da53dcac9ee0f4524e9d2c482ab89e63";
//################ USO DE API WEATHER ################
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
                    let vel = Math.round(datos.wind.speed * 3.6);
                    velViento.innerHTML = `${vel} km/h`
                    let hum = datos.main.humidity;
                    humedad.innerHTML = `Humedad: ${hum}%`

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

});


//################ FUNCION PARA OBTENER EL VALOR DEL DOLAR DESDE UNA API ################
function valorDolar() {
    const valoresDolar = `https://www.dolarsi.com/api/api.php?type=valoresprincipales`;
    let contenedorPrecios = document.getElementById("caja-dolar");
    fetch(valoresDolar)
        .then(res => res.json())
        .then(data => {
            for(let i = 0 ; i <= 4 ; i++){
                contenedorPrecios.innerHTML += `
                                            <div>
                                                <h3>${data[i].casa.nombre}</h3>
                                                <p>Precio de compra : $${data[i].casa.compra} ARS</p>
                                                <p>Precio de venta : $${data[i].casa.venta} ARS</p>
                                            </div>
                                            `
            } 
        })
        .catch(error => {
            console.log(error)
        })
};
valorDolar();



//################ FUNCION RELOJ ################
let reloj = document.getElementById("tiempo");

setInterval(function () {
    tiempo = new Date();

    horas = tiempo.getHours();
    minutos = tiempo.getMinutes();
    segundos = tiempo.getSeconds();

    if (horas < 10)
        horas = "0" + horas;
    if (minutos < 10)
        minutos = "0" + minutos;
    if (segundos < 10)
        segundos = "0" + segundos;

    reloj.innerHTML = horas + " : " + minutos + " : " + segundos;
}, 1000);