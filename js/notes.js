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
    Notas.push(new Nota(1, "Dia de playa", "09/08/22", "12am"));
    Notas.push(new Nota(2, "Dia en la montaña", "10/07/21", "15pm"));
    Notas.push(new Nota(3, "Visita al museo", "11/04/20", "16pm"));
    Notas.push(new Nota(4, "Cena con amigos", "12/03/22", "22pm"));
    Notas.push(new Nota(5, "Junta de trabajo", "13/12/18", "9am"));
}
pushNotas();
console.table(Notas);

function dibujarNotas() {
    Notas.forEach(
        (elemento) => {
            let contenedorNota = document.createElement("div");
            contenedorNota.classList.add('col-sm-8', 'col-md-4', 'col-xl-3', 'mt-3');
            contenedorNota.innerHTML = `
            <div class="card cuerpoTarjeta" style="width: 15rem;">
            <img src="../assets/img/nota3.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${elemento.fecha}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${elemento.hora}</h6>
                    <p class="card-text">${elemento.texto}</p>
                    <a href="#" class="btn btn-primary">Ir a</a>
                </div>
            </div>`;
            document.getElementById("contenedorTarjetas1").appendChild(contenedorNota);
        }
    );

}


function nuevaNota() {
    let idNuevo = (Notas.length + 1);
    let textoNotaNueva = prompt("Ingresar texto:");
    let fechaNotaNueva = prompt("Ingresar fecha de la nota a añadir en formato 'dd/mm/aa' :");
    let horaNotaNueva = parseInt(prompt("Ingresar hora (Formato 24hs):"));

    if (horaNotaNueva > 12) {
        horaNotaNueva = (horaNotaNueva + "pm");
    } else {
        horaNotaNueva = (horaNotaNueva + "am");
    }

    let notaNueva = new Nota(idNuevo, textoNotaNueva, fechaNotaNueva, horaNotaNueva);
    Notas.push(notaNueva);

    console.table(Notas);

    let contenedorNotaNueva = document.createElement("div");
    contenedorNotaNueva.classList.add('col-sm-8', 'col-md-4', 'col-xl-3', 'mt-3');
    contenedorNotaNueva.innerHTML = `
            <div class="card cuerpoTarjeta" style="width: 15rem;">
            <img src="../assets/img/nota3.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${notaNueva.fecha}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${notaNueva.hora}</h6>
                    <p class="card-text">${notaNueva.texto}</p>
                    <a href="#" class="btn btn-primary">Ir a</a>
                </div>
            </div>`;
    document.getElementById("contenedorTarjetas1").appendChild(contenedorNotaNueva);

}

dibujarNotas();


let botonAgregarNota = document.getElementById("botonAgregarNota");
botonAgregarNota.addEventListener("click", nuevaNota);