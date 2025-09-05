// zoom inicial (pc / mobile)
let zoomInicial = (window.innerWidth < 768) ? 14 : 12;

// cria o mapa (uma vez)
var map = L.map('map').setView([-26.243, -48.634], zoomInicial);

// ícones personalizados 
const iconeCamarao = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/camarao.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -36]
});

const iconeTainha = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/tainha.png',
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
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/Caceio.png" 
           alt="Caceio" 
           style="width:200px; display:block; margin:10px auto;"><br>
      Na Praia do Ervino, a pesca artesanal é vivida de duas formas que unem gerações e mantêm viva a tradição.<br><br>
      O caceio acontece quando a rede é lançada mais ao fundo, enquanto na beira seguimos a corda, caminhando na direção em que o mar nos empurra. 
      Entre uma puxada e outra, há tempo para rir, conversar e compartilhar histórias. 
      É um jeito de pescar que representa união, saúde e alegria, ensinando desde cedo que a pesca é também cultura, memória e herança.
    `)
);
  
marcadores.push(
  L.marker([-26.3710677, -48.5721821], { icon: iconeTainha })
    .addTo(map)
    .bindPopup(`
      <b>Vai e Vem</b><br>
      <img 
        src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/VaieVem.png" 
        alt="VaieVem" 
        style="width:200px; display:block; margin:10px auto;"
      ><br>
      Já o vai e vem começa com um peso de cerca de 300 quilos colocado no fundo do mar. 
      Esse peso, junto de uma boia e uma roldana, guia a corda: de um lado está a rede, do outro o vazio. 
      Seis ou sete pessoas puxam juntas, num movimento contínuo — um lado trazendo a rede para a beira, o outro levando-a de volta ao fundo. 
      Esse ritmo de esforço coletivo se mistura com risadas, conversas e o companheirismo que transformam a pesca em encontro e celebração. 
      São momentos de convivência e de partilha que atravessam gerações, preservando a identidade e fortalecendo os laços da comunidade.
    `)
);

// ajusta a vista para todos os marcadores
const grupo = L.featureGroup(marcadores);
map.fitBounds(grupo.getBounds(), { padding: [30, 30] });

// força recálculo de tamanho (evita blocos brancos)
setTimeout(() => {
  map.invalidateSize();
}, 100);





