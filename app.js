function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let min = parseInt(document.getElementById("de").value);
  let max = parseInt(document.getElementById("ate").value);
  let resultado = document.getElementById("resultado");
  let sorteados = [];

  for (let i = 1; i <= quantidade; i++) {
    let numeros = obterNumeroAleatorio(min, max);

    // while (sorteados.includes(numeros)) {
    //   numeros = obterNumeroAleatorio(min, max);
    // }

    sorteados.push(numeros);

    sorteados.forEach((element) => {
      if (element == numeros) {
        numeros = obterNumeroAleatorio(min, max);
      }
    });
  }

  resultado.innerHTML = `
    <label class="texto__paragrafo">Números sorteados:  ${sorteados} </label>
  `;

  alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  return parseInt(Math.random() * (max - min + 1) + min);
}

function alterarStatusBotao() {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `
    <label class="texto__paragrafo">Números sorteados: nenhum até agora </label>
    `;

    alterarStatusBotao();
}
