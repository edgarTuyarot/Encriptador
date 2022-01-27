

function decodificar(texto) {
  var textoDeco = texto.replaceAll("enter", "e");
  textoDeco = textoDeco.replaceAll("ai", "a");
  textoDeco = textoDeco.replaceAll("imes", "i");
  textoDeco = textoDeco.replaceAll("ober", "o");
  textoDeco = textoDeco.replaceAll("ufat", "u");

  return textoDeco;
}
