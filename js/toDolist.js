//################ VARIABLES PARA LA FECHA ################
const fechaNumero = document.getElementById('fechaNumero');
const nombreDia = document.getElementById('nombreDia');
const fechaMes = document.getElementById('fechaMes');
const fechaAnio = document.getElementById('fechaAnio');

//################ CONTENEDOR DE TAREAS ################
const contenedorTareas = document.getElementById('contenedorTareas');

//################ FUNCION PARA CONSEGUIR LA FECHA ################
const conseguirFecha = () => {
    const date = new Date();
    fechaNumero.textContent = date.toLocaleString('es', {
        day: 'numeric'
    });
    nombreDia.textContent = date.toLocaleString('es', {
        weekday: 'long'
    });
    fechaMes.textContent = date.toLocaleString('es', {
        month: 'short'
    });
    fechaAnio.textContent = date.toLocaleString('es', {
        year: 'numeric'
    });
};

//################ FUNCION PARA AGREGAR NUEVAS TAREAS ################
const agregarNuevaTarea = event => {
    event.preventDefault();
    const {
        value
    } = event.target.taskText;
    if (!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'bordeRedondeado');
    task.addEventListener('click', cambiarEstadoTarea)
    task.textContent = value;
    contenedorTareas.prepend(task);
    Toastify({
        text: "Añadiste una nueva tarea!",
        duration: 2000,
        gravity: "bottom",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #FDC517, #5C4F26)",
        },
    }).showToast();
    event.target.reset();
};

//################ CAMBIAR ESTADO DE LA TAREA A COMPLETADO ################
const cambiarEstadoTarea = event => {
    event.target.classList.toggle('done');
    Toastify({
        text: "Completaste una tarea!",
        duration: 1000,
        gravity: "bottom",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to left, #FF1D1D,#000000,#000000, #0000)",
        },
    }).showToast();
};

//################ ORDENAR LAS TAREAS POR COMPLETADAS Y POR COMPLETAR ################
const done = [];
const toDo = []; 
const ordenar = () => {
    contenedorTareas.childNodes.forEach(el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}
const ordenarTareasCompletadas = () => {
    ordenar().forEach(el => contenedorTareas.appendChild(el))
    Toastify({
        text: "Te quedan: " + toDo.length + " " +"tareas por completar...",
        duration: 5000,
        gravity: "bottom",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b,#00b09b,#96c93d,#96c93d, #0000)",
        },
    }).showToast();
}

conseguirFecha();