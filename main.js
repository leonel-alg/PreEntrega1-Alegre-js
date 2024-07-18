let notas = [];
let i;
for (i = 0; i < 10; i++) {
    notas.push(Number(prompt("Ingresa tu nota:" + (i + 1), )));
}

let suma = notas.reduce(function(total, cantidad) {
    return total + cantidad
});

let promedio = (suma / (notas.length)).toFixed(1);

let estado;
if (promedio >= 6.0) {
    estado = ("Aprobado");
} else {
    estado = ("Reprobado");
}
alert("Tus notas son: " + notas + "  " + "Tu Promedio es: " + promedio + "  " + "Estado: " + estado + " ");