const filtros = document.querySelector(".buttonFiltros");
const abrirFiltro = document.querySelector(".abrirFiltros");

filtros.addEventListener("click", () => {
    abrirFiltro.classList.toggle("cerrarFiltros");
})