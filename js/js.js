
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


