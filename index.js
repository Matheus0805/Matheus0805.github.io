function ConverterDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
  
    var valorEmDolar = valorEmRealNumerico / 5.60;
    console.log(valorEmDolar);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "$" + valorEmDolar.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
  }

  function ConverterEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
  
    var valorEmEuro = valorEmRealNumerico / 6.36;
    console.log(valorEmEuro);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "€" + valorEmEuro.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
  }

  function ConverterIene() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
  
    var valorEmIene = valorEmRealNumerico / 0.050;
    console.log(valorEmIene);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "¥" + valorEmIene.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
  }
function ConverterBitcoin() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
  
    var valorEmBitcoin = valorEmRealNumerico/329327.38 ;
    console.log(valorEmBitcoin);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "BTC" + valorEmBitcoin.toFixed(6);
    elementoValorConvertido.innerHTML = valorConvertido;
  }
