// Esta función se ejecutará automáticamente cuando el script se cargue
function loadAndDisplayData() {
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "/assets/json/equipos.json", true);
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const equipo = JSON.parse(this.responseText);
      let text = "<h2>" + equipo.equipo + "</h2>";
      text += "<table border='0'>";
      text +=
        "<tr><th>Nombre</th><th>Edad</th><th>Altura(cm)</th><th>Posición</th></tr>";
      for (let i = 0; i < equipo.jugadores.length; i++) {
        text +=
          "<tr><td>" +
          equipo.jugadores[i].nombre +
          "</td><td>" +
          equipo.jugadores[i].edad +
          "</td><td>" +
          equipo.jugadores[i].altura +
          "</td><td>" +
          equipo.jugadores[i].posicion +
          "</td></tr>";
      }
      text += "</table>";
      document.getElementById("jugadores").innerHTML = text;
    }
  };
}

// Llama a la función para cargar y mostrar los datos cuando el script se carga
loadAndDisplayData();
