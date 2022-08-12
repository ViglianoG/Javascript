alert("Aqui se encuentra tu registro de compras de la semana ->");
const compras = [{
    producto: "Arroz",
    marca: "Gallo",
    caducidad: "02/02/23",
    precio: 230
}, {
    producto: "Tostadas",
    marca: "Cerealitas",
    caducidad: "11/10/22",
    precio: 241
},{
    producto: "Mermelada",
    marca: "Arcor",
    caducidad: "16/05/23",
    precio: 299
},{
    producto: "Galletitas",
    marca: "Mana",
    caducidad: "05/12/22",
    precio: 151
}]
console.table(compras);


class Compra {
    constructor(producto, marca, caducidad, precio) {
        this.producto = producto;
        this.marca = marca;
        this.caducidad = caducidad;
        this.precio = precio;
    }
}

function agregarCompra() {
    let productoCompraNueva = prompt("Nombre del producto:");
    let marcaCompraNueva = prompt("Ingresar marca de la nueva compra :");
    let caducidadCompraNueva = prompt("Ingresar caducidad:");
    let precioCompraNueva = parseInt(prompt("Ingresar precio del producto:"));

    let compraNueva = new Compra(productoCompraNueva, marcaCompraNueva, caducidadCompraNueva, precioCompraNueva);

    compras.unshift(compraNueva);

    console.log(compras);
}

let siAgregar = confirm("Quieres agregar mas compras?");

while (siAgregar == true) {
    agregarCompra()
    break;
}


console.log("COMPRAS ORDENADAS POR PRECIO DEL MAS BAJO AL MAS ALTO");
compras.sort((a,b)=> a.precio - b.precio);
console.table(compras);

let totalPrecios = compras.reduce(((suma, producto)=> suma + producto.precio),0);
console.log("RESUMEN TOTAL DE DINERO GASTADO EN LA SEMANA: " + "$"+ totalPrecios);