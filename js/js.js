/*
let nombre = prompt("Bienvenid@! por favor especifica tu nombre.");
let apellido = prompt("Ahora tu apellido..");

function bienvenido() {
        if ((nombre != "") && (apellido != "")) {
            alert("Bienvenido " + nombre + " " + apellido + " ya podemos comenzar!");
        } else {
            alert("Necesitamos saber tu nombre completo para continuar");
        }
}

bienvenido();

alert("El uso diario del celular en 2021 subió en promedio hasta 4,8 horas diarias, lo que supone un tercio de las horas que pasamos despiertos al día, con un crecimiento del 30 por ciento respecto al año anterior.");

let horas=parseInt(prompt("Es por esto que queremos ayudarte a cumplir con un uso 'saludable' de los dispositivos.. A continuación indicanos tu uso semanal empezando por el día 1:"));

let sumaHoras=0;
let cantidadHoras=0;

while(horas!=-1){
    sumaHoras = sumaHoras + horas;
    cantidadHoras = cantidadHoras+1;
    horas=parseInt(prompt("Ingresa tus horas (-1 para terminar)"));
}

let promedio=sumaHoras/cantidadHoras;
let porcentajeMayor= (100 * promedio) / 2 - 100;
if (promedio<=2){
    alert("Tu promedio de horas es: "+ promedio +"hs, te encuentras dentro de las horas saludables de uso...");
}else{
    alert("Tu promedio de horas es "+ promedio +"hs, es alrededor de un "+ porcentajeMayor +"% más de lo que sería saludable (2 horas diarias).")
}
*/
class Nota {
    constructor(fecha, hora, texto) {
        this.fecha = fecha;
        this.hora = hora;
        this.texto = texto;
    }
}


let nota1 = new Nota("09/08/22", 12, "Dia en la playa");
let nota2 = new Nota("10/07/21", 15, "Dia en la montaña");
let nota3 = new Nota("11/04/20", 16, "Visita al museo");
let nota4 = new Nota("12/03/22", 22, "Cena con amigos");
let nota5 = new Nota("13/12/18", 9, "Junta de trabajo");

const Notas = [];

Notas.push(nota1, nota2, nota3, nota4, nota5);


function agregarNota() {
    let fechaNotaNueva = prompt("Ingresar fecha de la nota a añadir en formato 'dd/mm/aa' :");
    let horaNotaNueva = parseInt(prompt("Ingresar hora (Formato 24hs):"));
    let textoNotaNueva = prompt("Ingresar texto:");

    let notaNueva = new Nota(fechaNotaNueva, horaNotaNueva, textoNotaNueva);

    Notas.unshift(notaNueva);
}
alert("Esta es tu lista de notas ->");

console.log(Notas);

alert("Agreguemos otra nota mas!");

for (let i = 4; i < 5; i++) {
    agregarNota();
}

console.table(Notas);



// for (let i=0; i < Notas.length; i++) {
//     console.log(Notas[i]);
// }