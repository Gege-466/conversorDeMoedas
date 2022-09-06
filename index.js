function resultado() {
    var valorEmReal = document.getElementById("real").value
    var valorEmDolar = valorEmReal / 5.16
    var valorFinal = valorEmDolar.toFixed(2)
    alert ("O valor em dólar é " + valorFinal)
}
