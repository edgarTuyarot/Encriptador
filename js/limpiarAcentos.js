function limpiarAcentos(texto) {
    texto = texto.replaceAll("á", "a");
    texto = texto.replaceAll("é", "e");
    texto = texto.replaceAll("í", "i");
    texto = texto.replaceAll("ó", "o");
    texto = texto.replaceAll("ú", "u");
    console.log(texto);
    return texto;
  }