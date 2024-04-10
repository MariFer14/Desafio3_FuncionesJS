/* FUNCIÓN DADA */
// function pintar() {
//   ele.style.backgroundColor = "yellow";
// }
// const ele = document.getElementById("ele1");
// ele.addEventListener("click", pintar);

/* FUNCIÓN MODIFICADA */
const elemento = document.getElementById("ele1");

function pintar(color = "green") {
    elemento.style.backgroundColor = color;
}

pintar()

elemento.addEventListener("click", function () {
  elemento.style.backgroundColor = "yellow";
});
