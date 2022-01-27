



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
