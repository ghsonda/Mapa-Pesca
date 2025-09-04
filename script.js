// Definir zoom inicial (diferente para PC e celular)
let zoomInicial = (window.innerWidth < 768) ? 14 : 12;

// Criar o mapa
var map = L.map('map').setView([-26.243, -48.634], zoomInicial);

// Adicionar camada do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Lista de marcadores
const marcadores = [];

// Exemplo de comunidades
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

// Ajusta o mapa para mostrar todos os marcadores
const grupo = L.featureGroup(marcadores);
map.fitBounds(grupo.getBounds(), { padding: [30, 30] });

// Corrige bug de carregamento
setTimeout(() => {
  map.invalidateSize();
}, 100);
