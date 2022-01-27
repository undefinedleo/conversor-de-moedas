// var warning = document.getElementById("warning");

function Converter() {
    const valorElemento = parseFloat(document.getElementById("valor").value);
  
    var valorEmReal = valorElemento * 5.26;
  
    var valorEmRealV = valorEmReal.toFixed(1);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido =
      "O valor que você deseja converter para Real, é R$ " + valorEmReal + "💶";
    //just "got" the element
    elementoValorConvertido.innerHTML = valorConvertido;
  
    document.getElementById("valor").value = "";
  }
  function Converter2() {
    let valorElemento = parseFloat(document.getElementById("valor").value);
  
    // if (valorElemento) {
    let valorEmDolar = valorElemento / 5.26;
  
    let valorEmDolarV = valorEmDolar.toFixed(1);
  
    let elementoValorConvertido = document.getElementById("valorConvertido");
    let valorConvertido =
      "O valor que você deseja converter para Dolar, é U$ " +
      valorEmDolarV +
      "💵";
    elementoValorConvertido.innerHTML = valorConvertido;
    // } else {
    // //arning.innerHTML = "Por favor, insira um valor para conversão";
    document.getElementById("valor").value = "";
  }
  function Converter3() {
    var valorElemento = parseFloat(document.getElementById("valor").value);
  
    var valorEmBtc = valorElemento * 0.0000021;
  
    var valorEmBtcFixed = valorEmBtc.toFixed(5);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido =
      "O valor que você deseja converter para Bitcoin, é " +
      valorEmBtcFixed +
      "₿";
    elementoValorConvertido.innerHTML = valorConvertido;
  
    document.getElementById("valor").value = "";
  }
  function Converter4() {
    let valorElemento = parseFloat(document.getElementById("valor").value);
  
    // // if (valorElemento) {
    var valorEmBtc = valorElemento * 0.000004;
    var valorEmBtcFixed = valorEmBtc.toFixed(5);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido =
      "O valor que você converter para Bitcoin, é " + valorEmBtcFixed + "₿";
    elementoValorConvertido.innerHTML = valorConvertido;
    // } else
    // warning.innerHTML = "Por favor, insira um valor para conversão";
    document.getElementById("valor").value = "";
  }
  