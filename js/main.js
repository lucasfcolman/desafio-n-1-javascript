let materia = prompt("Ingrese Materia cursada: ");
let resultado = 0;

function promedio(valor1, valor2, valor3) {
    resultado = parseInt(((valor1 + valor2 + valor3)/ 3));
}
function mostrarPromedio(mensaje) {
    alert("El resultado es: " + mensaje);
}
let var1 = parseInt(prompt("Ingrese 1er Nota"));
let var2 = parseInt(prompt("Ingrese 2da Nota"));
let var3 = parseInt(prompt("Ingrese 3er Nota"));
promedio (var1, var2, var3);
mostrarPromedio (resultado);
if (resultado <= 7){
    alert ("Usted se encuentra desaprobado")
}else if (resultado <= 3){
alert ("Usted cuenta con un aplazo")
}
else{
    alert ("Felicitaciones, usted esta aprobado.")
}
