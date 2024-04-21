
var numeros = [];
for (var i = 1; i <= 16; i++) {
    numeros.push(i);
}


document.write("<strong> Array de números de 1 a 16:</strong><br>");
document.write("<table>");
for (var i = 0; i < numeros.length; i += 4) {
    document.write("<tr>");
    for (var j = i; j < i + 4 && j < numeros.length; j++) {
        document.write("<td>" + numeros[j] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table><br>");


var numeroDez = numeros[9]; 
document.write("O numero dez é: " + numeroDez + "<br>");

document.write("<table>");
document.write("<tr><th colspan='2'>Exemplos de comparações entre variáveis</th></tr>");


var a = 1;
var b = 11;
document.write("<tr><td>");
if (a == b) {
    document.write("As variáveis a e b são iguais");
} else {
    document.write("As variáveis a e b são diferentes");
}
document.write("</td></tr>");


document.write("<tr><td>");
if (a != b) {
    document.write("A e B são diferentes");
} else {
    document.write("A e B são iguais");
}
document.write("</td></tr>");


document.write("<tr><td>");
if (a !== b) {
    document.write("A e B são diferentes em valor e tipo");
} else {
    document.write("A e B são iguais em valor e tipo");
}
document.write("</td></tr>");


document.write("<tr><td>");
if (a === b) {
    document.write("A e B são verdadeiros e do mesmo tipo");
} else {
    document.write("A e B não são verdadeiros ou não são do mesmo tipo");
}
document.write("</td></tr>");


document.write("<tr><td>");
if (a !== b) {
    document.write("A e B não são do mesmo tipo");
} else {
    document.write("A e B são do mesmo tipo");
}
document.write("</td></tr>");


document.write("<tr><td>");
if (a < b) {
    document.write("A é menor que B");
} else {
    document.write("A não é menor que B");
}
document.write("</td></tr>");

document.write("<tr><td>");
if (a > b) {
    document.write("A é maior que B");
} else {
    document.write("A não é maior que B");
}
document.write("</td></tr>");


document.write("<tr><td>");
if (a <= b) {
    document.write("A é menor ou igual a B");
} else {
    document.write("A não é menor ou igual a B");
}
document.write("</td></tr>");


document.write("<tr><td>");
if (a >= b) {
    document.write("A é maior ou igual a B");
} else {
    document.write("A não é maior ou igual a B");
}
document.write("</td></tr>");

document.write("</table>");