var isHeaderReduced = false;
window.addEventListener("scroll", function () {
  var logo = document.getElementById("logo");
  var header = document.querySelector("header");
  if (window.scrollY > 200 && !isHeaderReduced) {
    logo.style.fontSize = "0.4em"; // Cambia el tamaño del logo cuando haces scroll hacia abajo
    header.style.height = "6.2em";
    isHeaderReduced = true;
  } else if (window.scrollY <= 200 && isHeaderReduced) {
    logo.style.fontSize = "1em"; // Tamaño original del logo cuando vuelves arriba
    header.style.height = "11em";
    isHeaderReduced = false;
  }
});
