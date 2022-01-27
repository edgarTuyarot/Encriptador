var botonCopiar = document.querySelector("#copiar");

botonCopiar.addEventListener("click", () => {
  resultado.select();
  document.execCommand("copy");
  alert("Copiado!");
});
