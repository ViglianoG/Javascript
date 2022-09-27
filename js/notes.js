//################ EVENTO PARA AGREGAR UNA NUEVA NOTA ################
document.getElementById("botonAgregarNota").addEventListener("click", (e) => {

    let texto = document.getElementById("input-texto-modal").value;
    let fecha = conseguirFecha();
    let hora = parseInt(conseguirHora());

    hora > 12 ? hora = (hora + "pm") : hora = (hora + "am");

    const notas = {
        texto,
        fecha,
        hora
    }

    let burbuja = document.getElementById("burbuja-nota");

    if (localStorage.getItem("Notas") === null) {
        let notero = [];
        notero.push(notas)
        localStorage.setItem("Notas", JSON.stringify(notero));
        burbuja.style.visibility = "visible";
        burbuja.style.opacity = "1";
    } else {
        burbuja.style.visibility = "hidden";
        burbuja.style.opacity = "0";
        let notero = JSON.parse(localStorage.getItem("Notas"));
        notero.push(notas);
        localStorage.setItem("Notas", JSON.stringify(notero));
    }

    Toastify({
        text: "Añadiste una nota!",
        duration: 3000,
        gravity: "bottom",
        position: "left",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to left, #FDC517, #5C4F26)",
        },
    }).showToast();

    modal.classList.toggle("modal-cierre");
    modalContenedor.style.opacity = "0";
    modalContenedor.style.visibility = "hidden";

    dibujarNotero();
    document.getElementsByClassName("tarjeta").reset();
    e.preventDefault();
});




//################ FUNCION PARA DIBUJAR LAS NOTAS EN EL DOM ################
function dibujarNotero() {
    let notas = JSON.parse(localStorage.getItem("Notas"));
    let notasDibujadas = document.getElementById("contenedorTarjetas1");

    notasDibujadas.innerHTML = '';

    notas.forEach(e => {
        let fecha = e.fecha;
        let hora = e.hora;
        let texto = e.texto;

        function numeroRandom(min, max) {
            min = Math.ceil(1);
            max = Math.floor(7);
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        notasDibujadas.innerHTML += `<div class="col-sm-8 col-md-4 col-xl-3 mt-3" style="width: 18rem height: 18rem">
                                        <img class="imgNota" src="../assets/img/post(${numeroRandom()}).png">
                                            <div class="textoNota">
                                            <audio autoplay src="../assets/sounds/audio-nota-terminada.mp3"></audio>
                                            <h5>${fecha}</h5>
                                            <h6>${hora}</h6>
                                            <p>${texto}</p>
                                            </div>
                                        <a onclick="eliminarNota('${texto}')"><img class="basurita" src="../assets/img/trash.svg"></a>
                                    </div>`;
    });
}
if (localStorage.getItem("Notas") != null) {
    dibujarNotero();
}

//################ FUNCION PARA ELIMINAR NOTAS Y DIBUJAR DE NUEVO EN EL DOM ################

function eliminarNota(texto) {
    let notas = JSON.parse(localStorage.getItem("Notas"));
    for (let i = 0; i < notas.length; i++) {
        if (notas[i].texto == texto) {
            notas.splice(i, 1);
        }
    }
    localStorage.setItem("Notas", JSON.stringify(notas));
    dibujarNotero();
}

//################ FUNCION QUE RETORNA EL VALOR DE LA FECHA DE LA NOTA ################
function conseguirFecha() {
    let nuevaFecha = new Date();
    let dia = nuevaFecha.getDate();
    let mes = nuevaFecha.getMonth() + 1;
    let anio = nuevaFecha.getFullYear();
    return (dia + "/" + mes + "/" + anio)
}

//################ FUNCION QUE RETORNA LA HORA ACTUAL EN LA QUE FUE ESCRITA LA NOTA ################
function conseguirHora() {
    let nuevaHora = new Date();
    let hora = nuevaHora.getHours();
    return (hora)
}


//################ MODAL ################

let modal = document.querySelectorAll(".modal1")[0];
let modalContenedor = document.querySelectorAll(".contenedor-modal")[0];

//################  ABRIR MODAL ################
document.getElementById("botonAgregarNota-modal").addEventListener("click", (e) => {
    e.preventDefault();
    modalContenedor.style.opacity = "1";
    modalContenedor.style.visibility = "visible";
    modal.classList.toggle("modal-cierre");
});

//################ CERRAR MODAL ################
document.querySelectorAll(".cerrar")[0].addEventListener("click", (e) => {
    modal.classList.toggle("modal-cierre");
    modalContenedor.style.opacity = "0";
    modalContenedor.style.visibility = "hidden";
});