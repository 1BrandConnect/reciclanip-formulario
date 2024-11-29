document.addEventListener("DOMContentLoaded", () => {
  const simRadio = document.getElementById("sim");
  const naoRadio = document.getElementById("nao");
  const camposDinamicos = document.getElementById("campos-dinamicos");

  // Adicionar eventos aos botões
  simRadio.addEventListener("change", () => {
    if (simRadio.checked) {
      camposDinamicos.classList.remove("hidden"); // Exibir os campos
    }
  });

  naoRadio.addEventListener("change", () => {
    if (naoRadio.checked) {
      camposDinamicos.classList.add("hidden"); // Ocultar os campos
    }
  });
});
