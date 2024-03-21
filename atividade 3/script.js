let num1 = prompt("Digite um número:");
let operacao = prompt("Digite a operação: soma ou subtração");
let num2 = prompt("Digite o segundo número:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

function calcularOperacao(operacao) {
  switch (operacao) {
    case "soma":
      return num1 + num2;
      break;

    case "subtração":
      return num1 - num2;
      break;

    default:
      return "Digite corretamente 'soma' ou 'subtração'";
      break;
  }
}

let resultado = calcularOperacao(operacao);

document.write("O resultado é: " + resultado);