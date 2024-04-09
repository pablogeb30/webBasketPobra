document.addEventListener("DOMContentLoaded", function () {
  // Obtén referencia al enlace de abrir el popup
  var openPopupLink = document.getElementById("open-popup");

  // Obtén referencia al contenedor del popup
  var popupContainer = document.getElementById("popup-container");

  // Agrega evento de clic al enlace de abrir el popup
  openPopupLink.addEventListener("click", function (event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del enlace
    popupContainer.style.display = "flex"; // Muestra el popup
  });

  // Agrega evento de clic al botón de cerrar el popup
  var closeButton = document.querySelector(".screen-header-button.close");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      popupContainer.style.display = "none"; // Oculta el popup al hacer clic en el botón de cerrar
    });
  }

  // Agrega evento de clic al botón de cerrar el popup
  var sendButton = document.querySelector(".app-form-button");
  if (sendButton) {
    sendButton.addEventListener("click", function () {
      popupContainer.style.display = "none"; // Oculta el popup al hacer clic en el botón de enviar formulario
    });
  }
});
