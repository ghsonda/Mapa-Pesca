document.addEventListener('DOMContentLoaded', () => {
// --- configuração inicial (zoom mobile/desktop) ---
const zoomInicial = (window.innerWidth < 768) ? 14 : 12;

// cria mapa
const map = L.map('map').setView([-26.243, -48.634], zoomInicial);

// camada base (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '© OpenStreetMap contributors'
}).addTo(map);

// ícones personalizados
const iconeCamarao = L.icon({
iconUrl: 'https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/camarao.png',
iconSize: [40,40],
iconAnchor: [20,40],
popupAnchor: [0,-36]
});

const iconeTainha = L.icon({
iconUrl: 'https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/tainha.png',
iconSize: [40,40],
iconAnchor: [20,40],
popupAnchor: [0,-36]
});

// marcadores
const markers = {};

// --- Marcador Ervino (caceio) ---
markers['ervino'] = L.marker([-26.4171428, -48.5963169], { icon: iconeCamarao })
.addTo(map)
.bindPopup(  <b>Pesca de Caceio - Praia do Ervino</b><br>   <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/Caceio.png"    alt="Caceio" style="width:200px; display:block; margin:10px auto;"><br>   Na Praia do Ervino, a pesca artesanal é vivida de duas formas que unem gerações e mantêm viva a tradição.<br><br>   O caceio acontece quando a rede é lançada mais ao fundo, enquanto na beira seguimos a corda, caminhando na direção em que o mar nos empurra.    Entre uma puxada e outra, há tempo para rir, conversar e compartilhar histórias.    É um jeito de pescar que representa união, saúde e alegria, ensinando desde cedo que a pesca é também cultura, memória e herança.  );

// --- Marcador Vai e Vem (tainha) ---
markers['vaievem'] = L.marker([-26.3710677, -48.5721821], { icon: iconeTainha })
.addTo(map)
.bindPopup(  <b>Vai e Vem</b><br>   <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/VaieVem.png"    alt="VaieVem" style="width:200px; display:block; margin:10px auto;"><br>   Já o vai e vem começa com um peso de cerca de 300 quilos colocado no fundo do mar.    Esse peso, junto de uma boia e uma roldana, guia a corda: de um lado está a rede, do outro o vazio.    Seis ou sete pessoas puxam juntas, num movimento contínuo — um lado trazendo a rede para a beira, o outro levando-a de volta ao fundo.    Esse ritmo de esforço coletivo se mistura com risadas, conversas e o companheirismo que transformam a pesca em encontro e celebração.    São momentos de convivência e de partilha que atravessam gerações, preservando a identidade e fortalecendo os laços da comunidade.  );

// ajustar vista para mostrar todos os marcadores
const grupo = L.featureGroup(Object.values(markers));
try {
const b = grupo.getBounds();
if (b.isValid && b.isValid()) {
map.fitBounds(b, { padding: [40,40] });
} else {
map.setView([-26.243, -48.634], zoomInicial);
}
} catch (err) {
map.setView([-26.243, -48.634], zoomInicial);
}

// forçar redraw após carregamento
setTimeout(() => map.invalidateSize(), 250);

// função utilitária para voar e abrir popup
function goTo(key, latlng, zoom = 15) {
map.flyTo(latlng, zoom, { duration: 1.0 });
setTimeout(() => {
if (markers[key]) markers[key].openPopup();
}, 1100);
}

// eventos da legenda
const ervinoItem = document.getElementById('ervino');
if (ervinoItem) {
ervinoItem.addEventListener('click', () => goTo('ervino', [-26.4171428, -48.5963169]));
ervinoItem.addEventListener('keydown', (e) => {
if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goTo('ervino', [-26.4171428, -48.5963169]); }
});
}

const vaievemItem = document.getElementById('vaievem');
if (vaievemItem) {
vaievemItem.addEventListener('click', () => goTo('vaievem', [-26.3710677, -48.5721821]));
vaievemItem.addEventListener('keydown', (e) => {
if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goTo('vaievem', [-26.3710677, -48.5721821]); }
});
}

// reaplica invalidateSize quando redimensionam a tela
let resizeTimeout;
window.addEventListener('resize', () => {
clearTimeout(resizeTimeout);
resizeTimeout = setTimeout(() => map.invalidateSize(), 200);
});
});