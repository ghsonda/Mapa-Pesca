let zoomInicial;

// Se a tela for menor que 768px (tablets/celulares), usa zoom mais perto
if (window.innerWidth < 768) {
  zoomInicial = 14;  // celular
} else {
  zoomInicial = 12;  // para PC
}

// Cria o mapa centralizado em São Francisco do Sul
var map = L.map('map').setView([-26.243, -48.634], zoomInicial);

// Adiciona camada de mapa do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Guarda os marcadores em um array
const marcadores = [];

// marcador
marcadores.push(
  L.marker([-26.249, -48.633])
    .addTo(map)
    .bindPopup("<b>Comunidade de Pescadores - Enseada</b><br>Pesca artesanal e turismo.")
);

marcadores.push(
  L.marker([-26.228, -48.645])
    .addTo(map)
    .bindPopup("<b>Comunidade de Pescadores - Vila da Glória</b><br>Pesca de camarão e peixe.")
);

// Centraliza automaticamente para mostrar todos os marcadores
const grupo = L.featureGroup(marcadores);
map.fitBounds(grupo.getBounds(), { padding: [30, 30] });

// Garante que o Leaflet redesenhe o mapa corretamente
setTimeout(function () {
  map.invalidateSize();
}, 100);
