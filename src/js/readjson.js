// Esta función se ejecutará automáticamente cuando el script se cargue
function loadAndDisplayData(jsonURL, elementID) {
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", jsonURL, true);
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const equipo = JSON.parse(this.responseText);
      let text = "<h3>" + equipo.equipo + "</h3>";
      text += "<table border='0' cellspacing='20'>";
      text +=
        "<tr><th style='text-align: center;'>Nombre</th><th>Edad</th><th>Altura(cm)</th><th>Posición</th></tr>";
      for (let i = 0; i < equipo.jugadores.length; i++) {
        text +=
          "<tr><td style='text-align: center;'>" +
          equipo.jugadores[i].nombre +
          "</td><td style='text-align: center;'>" +
          equipo.jugadores[i].edad +
          "</td><td style='text-align: center;'>" +
          equipo.jugadores[i].altura +
          "</td><td style='text-align: center;'>" +
          equipo.jugadores[i].posicion +
          "</td></tr>";
      }
      text += "</table>";
      document.getElementById(elementID).innerHTML = text;
    }
  };
}

// Llama a la función dos veces para cargar y mostrar los datos (senior masculino y femenino)
loadAndDisplayData("/assets/json/seniorm.json", "seniorm");
loadAndDisplayData("/assets/json/seniorf.json", "seniorf");
