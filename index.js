function ConverterDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
  
    var valorEmDolar = valorEmRealNumerico * 5;
    console.log(valorEmDolar);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "$" + valorEmDolar;
    elementoValorConvertido.innerHTML = valorConvertido;
  }

  function ConverterEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
  
    var valorEmEuro = valorEmRealNumerico * 6.22;
    console.log(valorEmEuro);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "€" + valorEmEuro;
    elementoValorConvertido.innerHTML = valorConvertido;
  }

  function ConverterIene() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
  
    var valorEmIene = valorEmRealNumerico * 0.048;
    console.log(valorEmIene);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "¥" + valorEmIene.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
  }
