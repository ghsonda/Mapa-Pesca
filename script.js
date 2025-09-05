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

/* Exemplo de comunidades
marcadores.push(
  L.marker([-26.249, -48.633])
    .addTo(map)
    .bindPopup("<b>Comunidade de Pescadores - Enseada</b><br>Pesca artesanal e turismo.")
);
*/

marcadores.push(
  L.marker([-26.4171428, -48.5963169])
    .addTo(map)
    .bindPopup(`
  <b>Pesca de Caceio - Praia do Ervino</b><br>
  Na Praia do Ervino, a pesca artesanal é vivida de duas formas que unem gerações e mantêm viva a tradição.<br><br>
  O caceio acontece quando a rede é lançada mais ao fundo, enquanto na beira seguimos a corda, caminhando na direção em que o mar nos empurra. 
  Entre uma puxada e outra, há tempo para rir, conversar e compartilhar histórias. 
  É um jeito de pescar que representa união, saúde e alegria, ensinando desde cedo que a pesca é também cultura, memória e herança.
`)
);

marcadores.push(
  L.marker([-26.3724494, -48.57263240])
    .addTo(map)
    .bindPopup("<b>Vai e Vem</b><br>Já o vai e vem começa com um peso de cerca de 300 quilos colocado no fundo do mar. Esse peso, junto de uma boia e uma roldana, guia a corda: de um lado está a rede, do outro o vazio. Seis ou sete pessoas puxam juntas, num movimento contínuo — um lado trazendo a rede para a beira, o outro levando-a de volta ao fundo. Esse ritmo de esforço coletivo se mistura com risadas, conversas e o companheirismo que transformam a pesca em encontro e celebração. são momentos de convivência e de partilha que atravessam gerações, preservando a identidade e fortalecendo os laços da comunidade.")
);

// Ajusta o mapa para mostrar todos os marcadores
const grupo = L.featureGroup(marcadores);
map.fitBounds(grupo.getBounds(), { padding: [30, 30] });

// Corrige bug de carregamento
setTimeout(() => {
  map.invalidateSize();
}, 100);
