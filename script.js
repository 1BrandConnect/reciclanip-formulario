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
function buscarEnderecoViaCep() {
  var cep = document.getElementById("cep").value.replace("-", ""); // Remove o hífen se o usuário digitar
  var script = document.createElement("script");

  // Adiciona a URL do ViaCEP com o formato JSONP
  script.src = `https://viacep.com.br/ws/${cep}/json/?callback=preencherEndereco`;
  document.body.appendChild(script);
}

function preencherEndereco(dados) {
  if (dados && dados.cep) {
    // Preencher os campos do formulário com os dados retornados
    document.getElementById("rua").value = dados.logradouro;
    document.getElementById("bairro").value = dados.bairro;
    document.getElementById("complemento").value = dados.complemento;
    document.getElementById("cidade").value = dados.localidade;
    document.getElementById("estado").value = dados.uf;
    document.getElementById("numero").focus(); // Foca no próximo campo para facilitar a navegação
  } else {
    alert("CEP não encontrado ou inválido.");
  }
}

function validarCep() {
  const cep = document.getElementById("cep");
  const regex = /^\d{5}-\d{3}$/;

  if (!regex.test(cep.value)) {
    alert("O formato do CEP deve ser XXXXX-XXX.");
    cep.value = ""; // Limpa o campo caso o formato seja inválido
    cep.focus();
  }
}
function mascaraCep(input) {
  // Remove tudo que não for número
  input.value = input.value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d{1,3})/, "$1-$2");
}

function validarCep() {
  const cep = document.getElementById("cep");
  const regex = /^\d{5}-\d{3}$/;

  if (!regex.test(cep.value)) {
    alert("O formato do CEP deve ser XXXXX-XXX.");
    cep.value = ""; // Limpa o campo caso o formato seja inválido
    cep.focus();
  }
}

// Espera o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os checkboxes
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  // Função para mostrar/ocultar os inputs correspondentes aos checkboxes
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      const inputId = "codigo-" + this.id; // Gera o id do input correspondente
      const inputField = document.getElementById(inputId); // Seleciona o input pelo id

      // Se o checkbox for marcado, mostra o campo de input
      if (this.checked) {
        inputField.closest(".form-container").classList.remove("hidden");
      } else {
        inputField.closest(".form-container").classList.add("hidden");
      }
    });
  });
});
