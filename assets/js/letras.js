/* Cambio de Colores */
let a = "pink";
let s = "orange";
let d = "skyblue";

function original() {
  let contenedor = document.getElementById("key");
  contenedor.style.backgroundColor = "white";
}

function cambiarRosa() {
  let contenedor = document.getElementById("key");
  contenedor.style.backgroundColor = "pink";
}

function cambiarNaranja() {
  let contenedor = document.getElementById("key");
  contenedor.style.backgroundColor = "orange";
}

function cambiarCeleste() {
  let contenedor = document.getElementById("key");
  contenedor.style.backgroundColor = "skyblue";
}

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    cambiarRosa();
  } else if (event.key === "s" || event.key === "S") {
    cambiarNaranja();
  } else if (event.key === "d" || event.key === "D") {
    cambiarCeleste();
  } else {
    original();
  }
});

/* Creando elementos */

let q = "purple";
let w = "gray";
let e = "brown";

function elementoMorado() {
  elemento = document.getElementById("elemento");
  elementNuevo = document.createElement("div");
  elementNuevo.style.backgroundColor = "purple";
  elementNuevo.style.border = "2px solid black";
  elementNuevo.style.width = "200px";
  elementNuevo.style.height = "200px";
  elementNuevo.style.margin = "40px 0 0 850px";
  elemento.appendChild(elementNuevo);
}

function elementoGris() {
  elemento = document.getElementById("elemento");
  elementNuevo = document.createElement("div");
  elementNuevo.style.backgroundColor = "gray";
  elementNuevo.style.border = "2px solid black";
  elementNuevo.style.width = "200px";
  elementNuevo.style.height = "200px";
  elementNuevo.style.margin = "40px 0 0 850px";
  elemento.appendChild(elementNuevo);
}

function elementoCafe() {
  elemento = document.getElementById("elemento");
  elementNuevo = document.createElement("div");
  elementNuevo.style.backgroundColor = "brown";
  elementNuevo.style.border = "2px solid black";
  elementNuevo.style.width = "200px";
  elementNuevo.style.height = "200px";
  elementNuevo.style.margin = "40px 0 0 850px";
  elemento.appendChild(elementNuevo);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "q" || event.key === "Q") {
    elementoMorado();
  } else if (event.key === "w" || event.key === "W") {
    elementoGris();
  } else if (event.key === "e" || event.key === "E") {
    elementoCafe();
  } else {
  }
});
