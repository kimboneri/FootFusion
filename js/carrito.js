const abrirCarrito = document.getElementById("carrito");
const cerrarCarrito = document.getElementById("cerrar");
const dropDown = document.getElementById("dropdown");

abrirCarrito.addEventListener("click", () => {
    dropDown.classList.remove("menu-cerrado");
   dropDown.classList.add("menu-desplegable");
   
})
cerrarCarrito.addEventListener("click", () => {
    dropDown.classList.add("menu-cerrado");
})