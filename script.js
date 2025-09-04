// Cria o mapa centralizado em São Francisco do Sul
var map = L.map('map').setView([-26.243, -48.634], 12);

// Adiciona camada de mapa do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Exemplo de marcador (substitua com as comunidades reais)
L.marker([-26.249, -48.633]).addTo(map)
  .bindPopup("<b>Comunidade de Pescadores - Enseada</b><br>Pesca artesanal e turismo.")
  .openPopup();

L.marker([-26.228, -48.645]).addTo(map)
  .bindPopup("<b>Comunidade de Pescadores - Vila da Glória</b><br>Pesca de camarão e peixe.");

let zoomInicial;

// Se a tela for menor que 768px (tablets/celulares), usa zoom mais perto
if (window.innerWidth < 768) {
  zoomInicial = 14;  // para celular
} else {
  zoomInicial = 50;  // para PC
}

var map = L.map('map').setView([-26.243, -48.634], zoomInicial);

// Tile layer...
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

