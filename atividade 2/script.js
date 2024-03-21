      let nome = prompt("Digite seu nome:");
      let altura = prompt("Digite sua altura, em centímetros:");
      let peso = prompt("Digite seu peso:");

      altura = parseFloat(altura) / 100;
      peso = parseFloat(peso);

      let M = parseInt(peso / (altura * altura));

      function classificacao() {
        if (M < 16) {
          return "Baixo peso muito grave.";
        } else if (M >= 16 && M <= 16.99) {
          return "Baixo peso grave.";
        } else if (M >= 17 && M <= 18.49) {
          return "Baixo peso.";
        } else if (M >= 18.5 && M <= 24.99) {
          return "Peso normal.";
        } else if (M >= 25 && M <= 29.99) {
          return "Sobrepeso.";
        } else if (M >= 30 && M <= 34.99) {
          return "Obesidade grau I.";
        } else if (M >= 35 && M <= 39.99) {
          return "Obesidade grau II.";
        } else if (M >= 40) {
          return "Obesidade grau III.";
        }
      }

      document.write(
        nome +
          " possui índice de massa corporal igual a " +
          M +
          ", sendo classificado como:" +
          " " +
          classificacao()
      );