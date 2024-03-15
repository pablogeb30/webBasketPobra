// Obtiene la URL de la página actual
var url = window.location.href;

// Obtiene todos los enlaces del menú de navegación
var links = document.querySelectorAll("nav ul li a");

// Itera sobre los enlaces del menú
links.forEach(function (link) {
  // Compara la URL de cada enlace con la URL de la página actual
  if (url === link.href) {
    // Agrega una clase "active" al enlace actual si la URL coincide
    link.classList.add("active");
  }
});
