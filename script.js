// zoom inicial (pc / mobile)
let zoomInicial = (window.innerWidth < 768) ? 14 : 12;

// cria o mapa (uma vez)
var map = L.map('map').setView([-26.243, -48.634], zoomInicial);

// ícones personalizados (recomendo PNG transparente)
const iconeCamarao = L.icon({
  iconUrl: 'img/camarao.png', // verifique o nome/exensão exatos no seu /img
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -36]
});

const iconeTainha = L.icon({
  iconUrl: 'img/tainha.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -36]
});

// camada base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// lista de marcadores
const marcadores = [];

// marcador com ícone de camarão
marcadores.push(
  L.marker([-26.4171428, -48.5963169], { icon: iconeCamarao })
    .addTo(map)
    .bindPopup(`
      <b>Pesca de Caceio - Praia do Ervino</b><br>
      Na Praia do Ervino, a pesca artesanal é vivida de duas formas...
    `)
);

// marcador com outro ícone (exemplo)
marcadores.push(
  L.marker([-26.3710677, -48.5721821], { icon: iconeTainha })
    .addTo(map)
    .bindPopup("<b>Vai e Vem</b><br>Já o vai e vem começa com ...")
);

// ajusta a vista para todos os marcadores
const grupo = L.featureGroup(marcadores);
map.fitBounds(grupo.getBounds(), { padding: [30, 30] });

// força recálculo de tamanho (evita blocos brancos)
setTimeout(() => {
  map.invalidateSize();
}, 100);
