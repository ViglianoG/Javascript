//array
const Notas = [];
const NotasNuevas = [];
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


//funcion para sacar la fecha
function conseguirFecha() {
    let nuevaFecha = new Date();
    let dia = nuevaFecha.getDate();
    let mes = nuevaFecha.getMonth() + 1;
    let anio = nuevaFecha.getFullYear();
    return (dia + "/" + mes + "/" + anio)
}

//funcion para sacar la hora
function conseguirHora() {
    let nuevaHora = new Date();
    let hora = nuevaHora.getHours();
    return (hora)
}

//funcion para agregar nuevas notas
function nuevaNota() {
    let inputTexto = document.getElementById("input-texto-modal").value;

    let idNuevo = (NotasNuevas.length + 1);
    let textoNotaNueva = inputTexto;
    let fechaNotaNueva = conseguirFecha();
    let horaNotaNueva = parseInt(conseguirHora());

    horaNotaNueva > 12 ? horaNotaNueva = (horaNotaNueva + "pm") : horaNotaNueva = (horaNotaNueva + "am");

    let notaNueva = new Nota(idNuevo, textoNotaNueva, fechaNotaNueva, horaNotaNueva);
    NotasNuevas.push(notaNueva);

    console.table(NotasNuevas);

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

    //pusheando las notas nuevas a  al JSON
    const notasNuevasStorage = JSON.stringify(NotasNuevas);
    localStorage.setItem("notasNuevas", notasNuevasStorage);

    // dibujarNotasNuevas();
}

//pusheando las notas existentes a  al JSON
const notasExistentesStorage = JSON.stringify(Notas);
localStorage.setItem("notasExistentes", notasExistentesStorage);




//funcion para dibujar las notas en el DOM
function dibujarNotas() {
    let traigoDelStorageExistentes = localStorage.getItem("notasExistentes");
    const notasExistentesTraidasStorage = JSON.parse(traigoDelStorageExistentes);
    notasExistentesTraidasStorage.forEach(
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

function dibujarNotasNuevas() {

    let traigoDelStorageNotasNuevas = localStorage.getItem("notasNuevas");
    const notasNuevasTraidasStorage = JSON.parse(traigoDelStorageNotasNuevas);
    if (notasNuevasTraidasStorage != null) {
        notasNuevasTraidasStorage.forEach(
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
}

dibujarNotas();
dibujarNotasNuevas();



let botonAgregarNota = document.getElementById("botonAgregarNota");
botonAgregarNota.addEventListener("click", () => {

    Toastify({
        text: "Añadiste una nota!",
        duration: 3000,
        gravity: "bottom",
        position: "left",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to left, #FDC517, #5C4F26)",
        },
        // onClick:
    }).showToast();

    nuevaNota();
    modal.classList.toggle("modal-cierre");
    modalContenedor.style.opacity = "0";
    modalContenedor.style.visibility = "hidden";
});


//modal

let cerrar = document.querySelectorAll(".cerrar")[0];
let abrir = document.getElementById("botonAgregarNota-modal");
let modal = document.querySelectorAll(".modal1")[0];
let modalContenedor = document.querySelectorAll(".contenedor-modal")[0];

abrir.addEventListener("click", (e) => {
    e.preventDefault();
    modalContenedor.style.opacity = "1";
    modalContenedor.style.visibility = "visible";
    modal.classList.toggle("modal-cierre");
});

cerrar.addEventListener("click", (e) => {
    modal.classList.toggle("modal-cierre");
    modalContenedor.style.opacity = "0";
    modalContenedor.style.visibility = "hidden";
});