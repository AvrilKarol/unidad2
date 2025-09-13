
let nombre = "Yadira";

function saludar() {
  alert("¡Hola " + nombre + "! Bienvenida a la página ✨");
}


if (nombre.length > 3) {
  console.log("Tu nombre tiene más de 3 letras");
}

let compañeras = ["Avril", "Daniela", "Britany"];
console.log("Compañeras del grupo:", compañeras);

document.addEventListener("DOMContentLoaded", () => {
  let titulo = document.querySelector("h1");
  titulo.style.color = "blue";
});
