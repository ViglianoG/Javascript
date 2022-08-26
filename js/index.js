
// let nombre = prompt("Bienvenid@! por favor especifica tu nombre.");
// let apellido = prompt("Ahora tu apellido..");

// function bienvenido() {
//         if ((nombre != "") && (apellido != "")) {
//             alert("Bienvenido " + nombre + " " + apellido + " ya podemos comenzar!");
//         } else {
//             alert("Necesitamos saber tu nombre completo para continuar");
//         }
// }

// bienvenido();

// variables para fecha
const fechaNumero = document.getElementById('fechaNumero');
const nombreDia = document.getElementById('nombreDia');
const fechaMes = document.getElementById('fechaMes');
const fechaAnio = document.getElementById('fechaAnio');

// contenedor de tareas
const contenedorTareas = document.getElementById('contenedorTareas');

// funcion para ordenar las fechas
const conseguirFecha = () => {
    const date = new Date();
    fechaNumero.textContent = date.toLocaleString('es', { day: 'numeric' });
    nombreDia.textContent = date.toLocaleString('es', { weekday: 'long' });
    fechaMes.textContent = date.toLocaleString('es', { month: 'short' });
    fechaAnio.textContent = date.toLocaleString('es', { year: 'numeric' });
};

//funcion para agregar nuevas tareas
const agregarNuevaTarea = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'bordeRedondeado');
    task.addEventListener('click', cambiarEstadoTarea)
    task.textContent = value;
    contenedorTareas.prepend(task);
    event.target.reset();
};

// cambiar estado a completado
const cambiarEstadoTarea = event => {
    event.target.classList.toggle('done');
};

// ordenar 
const ordenar = () => {
    const done = [];
    const toDo = [];
    contenedorTareas.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

const ordenarTareasCompletadas = () => {
    ordenar().forEach(el => contenedorTareas.appendChild(el))
}

conseguirFecha();
