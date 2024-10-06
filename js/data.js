document.addEventListener("DOMContentLoaded", () => {
    const dataElement = document.getElementById("data");
    const datosGuardados = localStorage.getItem("datosGuardados");
  
    if (datosGuardados) {
      dataElement.textContent = datosGuardados;
    } else {
      dataElement.textContent = "No hay datos almacenados.";
    }
  });
  