function decodificar(texto) {
  texto = texto.replaceAll("enter", "e");
  texto = texto.replaceAll("ai", "a");
  texto = texto.replaceAll("imes", "i");
  texto = texto.replaceAll("ober", "o");
  texto = texto.replaceAll("ufat", "u");

  return texto;
}
