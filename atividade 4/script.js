function mudaBackground(corFundo) {
    document.getElementById("caixa").style.backgroundColor= corFundo;        
    }
    
function recuperaValor() {
let valor = document.getElementById("caixa").value;

 if (valor.length <= 2) {
  document.getElementById("caixa").value
  document.getElementById("caixa").style.backgroundColor ='#F00'

} else {
  document.getElementById("caixa").style.backgroundColor ='#0F0'
}
}
