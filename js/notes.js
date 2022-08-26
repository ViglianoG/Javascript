//array
const Notas = [];
//clase constructora
class Nota {
    constructor(id, texto, fecha, hora) {
        this.id = id;
        this.texto = texto;
        this.fecha = fecha;
        this.hora = hora;
    }
}
//notas creadas y pusheadas al array
function pushNotas() {
    Notas.push(new Nota(1, "Dia de playa", "09/08/2022", "12am"));
    Notas.push(new Nota(2, "Dia en la montaña", "10/07/2022", "15pm"));
    Notas.push(new Nota(3, "Visita al museo", "11/04/2021", "16pm"));
    Notas.push(new Nota(4, "Cena con amigos", "12/03/2020", "22pm"));
    Notas.push(new Nota(5, "Junta de trabajo", "13/12/2018", "9am"));
}
pushNotas();
console.table(Notas);



function dibujarNotas() {
    Notas.forEach(
        (elemento) => {
            let contenedorNota = document.createElement("div");
            contenedorNota.classList.add('col-sm-8', 'col-md-4', 'col-xl-3', 'mt-3');
            contenedorNota.style = "width: 18rem";
            contenedorNota.style = "height: 18rem";
            contenedorNota.innerHTML = `
                <img class="imgNota" src="../assets/img/post.png">
                <div class="textoNota">
                    <h5>${elemento.fecha}</h5>
                    <h6>${elemento.hora}</h6>
                    <p>${elemento.texto}</p>
                </div>
                     `;
            document.getElementById("contenedorTarjetas1").appendChild(contenedorNota);
        }
    );
}


function conseguirFecha() {
    let nuevaFecha = new Date();
    let dia = nuevaFecha.getDate();
    let mes = nuevaFecha.getMonth() + 1;
    let anio = nuevaFecha.getFullYear();
    return (dia + "/" + mes + "/" + anio)
}


function nuevaNota() {
    let idNuevo = (Notas.length + 1);
    let textoNotaNueva = prompt("Ingresar texto:");
    let fechaNotaNueva = conseguirFecha();
    let horaNotaNueva = parseInt(prompt("Ingresar hora (Formato 24hs):"));

    horaNotaNueva > 12 ? horaNotaNueva = (horaNotaNueva + "pm") : horaNotaNueva = (horaNotaNueva + "am");

    let notaNueva = new Nota(idNuevo, textoNotaNueva, fechaNotaNueva, horaNotaNueva);
    Notas.push(notaNueva);

    console.table(Notas);

    let contenedorNotaNueva = document.createElement("div");
    contenedorNotaNueva.classList.add('col-sm-8', 'col-md-4', 'col-xl-3', 'mt-3');
    contenedorNotaNueva.style = "width: 18rem";
    contenedorNotaNueva.style = "height: 18rem";
    contenedorNotaNueva.innerHTML = `
    <img class="imgNota" src="../assets/img/post.png">
    <audio autoplay src="../assets/sounds/audio-nota-terminada.mp3"></audio>
    <div class="textoNota">
        <h5>${notaNueva.fecha}</h5>
        <h6>${notaNueva.hora}</h6>
        <p>${notaNueva.texto}</p>
    </div>
    `;

    document.getElementById("contenedorTarjetas1").appendChild(contenedorNotaNueva);


    const notaNuevaStorage = JSON.stringify(Notas);
    localStorage.setItem("notasNuevas", notaNuevaStorage);
    let traigoDelStorage = localStorage.getItem("notasNuevas");
    const notasTraidasJSON = JSON.parse(traigoDelStorage);
}

dibujarNotas();


let botonAgregarNota = document.getElementById("botonAgregarNota");
botonAgregarNota.addEventListener("click", nuevaNota);