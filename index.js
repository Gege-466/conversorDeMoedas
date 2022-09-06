function resultado() {
    var valorEmReal = document.getElementById("real").value
    var valorEmDolar = document.getElementById("dolar").value
    var conversão = valorEmReal / valorEmDolar
    var valorFinal = conversão.toFixed(2)
    alert ("O valor em dólar é " + valorFinal)
}
