var objetos = []



function add() {
    const inputElement = document.getElementById("input");
    const input = inputElement.value.trim();

    if (objetos.includes(input)) {
        alert("Objeto já foi adicionado")
    }

    else if (input === "") {
        alert("Informe um valor válido")

    }

    else {
        objetos.push(input);
        order();

    }
    console.log(objetos);
    inputElement.value = "";
}

function order() {
    const ordenados = objetos.sort();
    console.log(ordenados)

}


