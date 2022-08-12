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