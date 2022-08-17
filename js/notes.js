class Nota {
    constructor(texto, fecha, hora) {
        this.texto = texto;
        this.fecha = fecha;
        this.hora = hora;
    }
}


let nota1 = new Nota("Dia de playa", "09/08/22", "12am");
let nota2 = new Nota("Dia en la montaña", "10/07/21", "15pm");
let nota3 = new Nota("Visita al museo", "11/04/20", "16pm");
let nota4 = new Nota("Cena con amigos", "12/03/22", "22pm");
let nota5 = new Nota("Junta de trabajo", "13/12/18", "9am");

const Notas = [];
Notas.push(nota1, nota2, nota3, nota4, nota5);
alert("Esta es tu lista de notas ->");
console.table(Notas);

function bucleConstructor(){
    for (Nota of Notas) {
        constructorDeNotas();
    }
    }

function agregarNota() {
    let textoNotaNueva = prompt("Ingresar texto:");
    let fechaNotaNueva = prompt("Ingresar fecha de la nota a añadir en formato 'dd/mm/aa' :");
    let horaNotaNueva = parseInt(prompt("Ingresar hora (Formato 24hs):"));

    if (horaNotaNueva > 12) {
        horaNotaNueva = (horaNotaNueva + "pm");
    } else {
        horaNotaNueva = (horaNotaNueva + "am");
    }

    let notaNueva = new Nota(textoNotaNueva, fechaNotaNueva, horaNotaNueva);

    Notas.unshift(notaNueva);

    console.table(Notas);

    bucleConstructor();

}



function constructorDeNotas() {
    let contenedorNota = document.createElement("div");
    contenedorNota.classList.add('col-sm-8', 'col-md-4', 'col-xl-3', 'mt-3');
    contenedorNota.innerHTML = `
            <div class="card cuerpoTarjeta" style="width: 15rem;">
            <img src="../assets/img/nota3.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${Nota.fecha}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${Nota.hora}</h6>
                    <p class="card-text">${Nota.texto}</p>
                    <a href="#" class="btn btn-primary">Ir a</a>
                </div>
            </div>`;
    document.getElementById("contenedorTarjetas1").appendChild(contenedorNota);
}


let siAgregarNota = confirm("Deseas agregar una nueva nota?");

if (siAgregarNota == true) {
    agregarNota()
}else{
    bucleConstructor()
}


/*


alert("Agreguemos otra nota mas!");

for (let i = 4; i < 5; i++) {
    agregarNota();
}

console.table(Notas);
*/


// for (let i = 0; i < Notas.length; i++) {
//     console.log(Notas[i]);
// }