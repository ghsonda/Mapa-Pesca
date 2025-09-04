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
  L.marker([-26.4171428, -48.5963169])
    .addTo(map)
    .bindPopup("<b>Pesca de Caceio - Praia do Ervino</b><br>Na Praia do Ervino, a pesca artesanal é vivida de duas formas que unem gerações e mantêm viva a tradição.

O caceio acontece quando a rede é lançada mais ao fundo, enquanto na beira seguimos a corda, caminhando na direção em que o mar nos empurra. Entre uma puxada e outra, há tempo para rir, conversar e compartilhar histórias. É um jeito de pescar que representa união, saúde e alegria, ensinando desde cedo que a pesca é também cultura, memória e herança.")
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
