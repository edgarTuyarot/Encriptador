var desencriptar = document.querySelector("#desencriptar");
var resultado = document.querySelector("#resultado");

desencriptar.addEventListener("click", () => {
  var texto = textoIntroducido.value;
  textoDecodificado = decodificar(texto);
  resultado.value = textoDecodificado;
  console.log(textoDecodificado);
});

function decodificar(texto) {
  var textoDeco = texto.replaceAll("enter", "e");
  textoDeco = textoDeco.replaceAll("ai", "a");
  textoDeco = textoDeco.replaceAll("imes", "i");
  textoDeco = textoDeco.replaceAll("ober", "o");
  textoDeco = textoDeco.replaceAll("ufat", "u");

  return textoDeco;
}
