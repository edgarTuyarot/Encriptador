var botonEncriptar = document.querySelector("#encriptar");
var textoIntroducido = document.querySelector("#texto-introducido");

botonEncriptar.addEventListener("click", () => {
  var texto = textoIntroducido.value;
  var textoCodificado = "";
  texto = texto.toLowerCase();
  texto = limpiarAcentos(texto);
  textoCodificado = codificar(texto);
  resultado.value = textoCodificado;
  textoIntroducido.value = "";
});

function limpiarAcentos(texto) {
  texto = texto.replaceAll("á", "a");
  texto = texto.replaceAll("é", "e");
  texto = texto.replaceAll("í", "i");
  texto = texto.replaceAll("ó", "o");
  texto = texto.replaceAll("ú", "u");
  console.log(texto);
  return texto;
}

function codificar(texto) {
  const codigo = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };
  return texto
    .split("")
    .map((letra) => codigo[letra] || letra)
    .join("")
    .toString();
}
