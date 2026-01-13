addEventListener("DOMContentLoaded", () => {
  const selectComunas = document.querySelector("#comunas");

  let options = "";

  comunas.forEach(comuna => {
    options += `<option value="${comuna.id}" class="text-black" >${comuna.nombre}</option>`;
  });

  selectComunas.innerHTML += options;
});