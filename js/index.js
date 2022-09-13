// const nombreUser = JSON.parse(localStorage.getItem("nombreUsuario")) || [];
// class User {
//     constructor(nombre, apellido) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//     }
// }
// // console.log(nombreUser)

// function conseguirUser() {
//     let nombre = prompt("Bienvenid@! por favor especifica tu nombre.");
//     let apellido = prompt("Ahora tu apellido..");
//     nombreUser.push(new User(nombre, apellido));
// }
// if (nombreUser == []){
//     conseguirUser();
// }

// if (nombreUser == []) {
//     conseguirUser();
// } else {
//     const usuarioExistente = JSON.stringify(nombreUser)
//     localStorage.setItem("nombreUsuario", usuarioExistente);
// }



// let nombreStorage = usuarioExistente[0].nombre;
// let apellidoStorage = usuarioExistente[0].apellido;
let contenedorNombre = document.getElementById("contenedor-nombre");

// ((nombreStorage != "") && (apellidoStorage != "") || (nombreStorage != "null") || (apellidoStorage != "null")) ?
contenedorNombre.innerHTML = `<h3>Bienvenid@! el clima de hoy es:</h3>`//: alert("Necesitamos saber tu nombre completo para continuar");
// function bienvenido() {
// }

// bienvenido();



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