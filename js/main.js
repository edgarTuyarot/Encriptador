var botonEncriptar = document.querySelector("#encriptar");
var desencriptar = document.querySelector("#desencriptar");
var resultado = document.querySelector("#resultado");
var botonCopiar = document.querySelector("#copiar");

botonEncriptar.addEventListener("click", () => {
  var textoIntroducido = document.querySelector("#texto-introducido");
  var texto = textoIntroducido.value;
  if (texto != "") {
    var textoCodificado = "";
    texto = texto.toLowerCase();
    texto = limpiarAcentos(texto);
    textoCodificado = codificar(texto);
    resultado.value = textoCodificado;
    textoIntroducido.value = "";
  } else {
    alert("ingrese algun caracter");
  }
});

desencriptar.addEventListener("click", () => {
  var textoIntroducido = document.querySelector("#texto-introducido");
  var texto = textoIntroducido.value;
  if (texto != "") {
    textoDecodificado = decodificar(texto);
    resultado.value = textoDecodificado;
 
  } else {
    alert("ingrese algun caracter");
  }
});

botonCopiar.addEventListener("click", () => {
  resultado.select();
  document.execCommand("copy");
  alert("Copiado!");
});
