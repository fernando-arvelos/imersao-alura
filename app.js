var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;
var elementoResultado = document.getElementById("resultado");

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  let botaoChutar = document.getElementById("botaoChutar");
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (chute != numeroSecreto && chute > numeroSecreto) {
    tentativas = tentativas - 1;
    elementoResultado.innerHTML = `Você errou, o número é menor e você tem ${tentativas} tentativa(s)`;
  } else if (chute != numeroSecreto && chute < numeroSecreto) {
    tentativas = tentativas - 1;
    elementoResultado.innerHTML = `Você errou, o número é maior e você tem ${tentativas} tentativa(s) `;
  }

  if (tentativas == 0) {
    elementoResultado.innerHTML = `Você perdeu, o número era ${numeroSecreto}, clique no botão recomeçar e tente novamente`;
  }

  if (chute == numeroSecreto) {
    botaoChutar.disabled = true;
  } else if (tentativas == 0) {
    botaoChutar.disabled = true;
  }
}

function Recomecar() {
  numeroSecreto = parseInt(Math.random() * 11);
  botaoChutar.disabled = false;
  tentativas = 3;
  elementoResultado.innerHTML = "Você tem três novas tentativas!";
  valor.value = "";
}
