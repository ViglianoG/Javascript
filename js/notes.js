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
let nota5 = new Nota("Junta de trabajo", "13/12/18", "9pm");

const Notas = [];

Notas.push(nota1, nota2, nota3, nota4, nota5);

alert("Esta es tu lista de notas ->");

console.table(Notas);

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

    console.log(Notas);
}


let siAgregarNota = confirm("Deseas agregar una nueva nota?");

while (siAgregarNota == true) {
    agregarNota()
    break;
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