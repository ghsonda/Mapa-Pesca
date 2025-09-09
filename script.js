
document.addEventListener('DOMContentLoaded', () => {
  // --- Configuração inicial (zoom mobile/desktop) ---
  const zoomInicial = (window.innerWidth < 768) ? 14 : 12;

  // --- Cria mapa ---
  const map = L.map('map').setView([-26.243, -48.634], zoomInicial);

  // --- Camada base (OpenStreetMap) ---
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // --- Ícones personalizados ---
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

const iconeBaiacu = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/baiacu.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -36]
  });

const iconeRobalo = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/robalo.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -36]
  });

const iconeMarisco = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/marisco.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -36]
  });

const iconeCarapicu = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/carapicu.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -36]
  });

const iconeSardinha = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/sardinha.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -36]
  });

const iconeCaranguejo = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/caranguejo.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -36]
  });

const iconeBagre = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/bagre.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -36]
  });

  // --- Marcadores ---
  const markers = {};

  // Ervino (Caceio)
  markers['ervino'] = L.marker([-26.4171428, -48.5963169], { icon: iconeCamarao })
    .addTo(map)
    .bindPopup(`
      <b>Pesca de Caceio - Praia do Ervino</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/Caceio.png" 
           alt="Caceio" 
           style="width:200px; display:block; margin:10px auto;"><br>
      Na Praia do Ervino, a pesca artesanal é vivida de duas formas que unem gerações e mantêm viva a tradição.<br><br>
      O caceio acontece quando a rede é lançada mais ao fundo, enquanto na beira seguimos a corda, caminhando na direção em que o mar nos empurra.
      Entre uma puxada e outra, há tempo para rir, conversar e compartilhar histórias. É um jeito de pescar que representa união, saúde e alegria, ensinando desde cedo que a pesca é também cultura, memória e herança.
    `);

  // Vai e Vem (Tainha)
  markers['vaievem'] = L.marker([-26.3710677, -48.5721821], { icon: iconeTainha })
    .addTo(map)
    .bindPopup(`
      <b>Vai e Vem</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/VaieVem.png" 
           alt="VaieVem" 
           style="width:200px; display:block; margin:10px auto;"><br>
      Já o vai e vem começa com um peso de cerca de 300 quilos colocado no fundo do mar.
      Esse peso, junto de uma boia e uma roldana, guia a corda: de um lado está a rede, do outro o vazio.
      Seis ou sete pessoas puxam juntas, num movimento contínuo — um lado trazendo a rede para a beira, o outro levando-a de volta ao fundo.
      Esse ritmo de esforço coletivo se mistura com risadas, conversas e o companheirismo que transformam a pesca em encontro e celebração.
      São momentos de convivência e de partilha que atravessam gerações, preservando a identidade e fortalecendo os laços da comunidade.
    `);

// Trapiche gentil emitério dos Santos (Baiacu)
  markers['trapiche'] = L.marker([-26.2286383, -48.6138572], { icon: iconeBaiacu })
    .addTo(map)
    .bindPopup(`
      <b>Trapiche do Paulas</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/trapiche.png" 
           alt="trapiche" 
           style="width:200px; display:block; margin:10px auto;"><br>
      No trapiche do Paulas a pesca é mais que ofício: é memória viva entre o balanço das águas e o cheiro do sal.
      Barcos partem levando esperança e retornam com peixes, histórias e sorrisos.
      Ali, redes se abrem como abraços, mãos calejadas encontram repouso, e cada descarregamento é poesia de sobrevivência.
      Mais que madeira e concreto, o trapiche é coração da comunidade, onde o mar e a vida se encontram em respeito e devoção.
    `);

// Rancho de pesca Praia do lixo (Robalo)
  markers['rancho'] = L.marker([-26.2634738, -48.6500801], { icon: iconeRobalo })
    .addTo(map)
    .bindPopup(`
      <b>Rancho de Pesca</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/rancho.png" 
           alt="rancho" 
           style="width:200px; display:block; margin:10px auto;"><br>
      No trapiche do Paulas a pesca é mais que ofício: é memória viva entre o balanço das águas e o cheiro do sal.
      Barcos partem levando esperança e retornam com peixes, histórias e sorrisos.
      Ali, redes se abrem como abraços, mãos calejadas encontram repouso, e cada descarregamento é poesia de sobrevivência.
      Mais que madeira e concreto, o trapiche é coração da comunidade, onde o mar e a vida se encontram em respeito e devoção.
    `);

// Trapiche da Vila da Glória (Mariscos)
  markers['trapicheVG'] = L.marker([-26.221345, -48.664441], { icon: iconeMarisco })
    .addTo(map)
    .bindPopup(`
      <b>Trapiche da Vila da Glória</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/trapicheVG.png" 
           alt="trapicheVG" 
           style="width:200px; display:block; margin:10px auto;"><br>
      No trapiche do Paulas a pesca é mais que ofício: é memória viva entre o balanço das águas e o cheiro do sal.
      Barcos partem levando esperança e retornam com peixes, histórias e sorrisos.
      Ali, redes se abrem como abraços, mãos calejadas encontram repouso, e cada descarregamento é poesia de sobrevivência.
      Mais que madeira e concreto, o trapiche é coração da comunidade, onde o mar e a vida se encontram em respeito e devoção.
    `);

// Praia do Mota (Camarão)
  markers['mota'] = L.marker([-26.2501244, -48.6426105], { icon: iconeCamarao })
    .addTo(map)
    .bindPopup(`
      <b>Praia do Mota</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/Mota.png" 
           alt="mota" 
           style="width:200px; display:block; margin:10px auto;"><br>
      No trapiche do Paulas a pesca é mais que ofício: é memória viva entre o balanço das águas e o cheiro do sal.
      Barcos partem levando esperança e retornam com peixes, histórias e sorrisos.
      Ali, redes se abrem como abraços, mãos calejadas encontram repouso, e cada descarregamento é poesia de sobrevivência.
      Mais que madeira e concreto, o trapiche é coração da comunidade, onde o mar e a vida se encontram em respeito e devoção.
    `);

// Ubatuba (Tainha)
  markers['ubatuba'] = L.marker([-26.2153298, -48.5225488], { icon: iconeTainha })
    .addTo(map)
    .bindPopup(`
      <b>Ubatuba</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/ubatuba.png" 
           alt="ubatuba" 
           style="width:200px; display:block; margin:10px auto;"><br>
      No trapiche do Paulas a pesca é mais que ofício: é memória viva entre o balanço das águas e o cheiro do sal.
      Barcos partem levando esperança e retornam com peixes, histórias e sorrisos.
      Ali, redes se abrem como abraços, mãos calejadas encontram repouso, e cada descarregamento é poesia de sobrevivência.
      Mais que madeira e concreto, o trapiche é coração da comunidade, onde o mar e a vida se encontram em respeito e devoção.
    `);

// Praia do Forte (Carapicu)
  markers['forte'] = L.marker([-26.1649697, -48.5328666], { icon: iconeCarapicu })
    .addTo(map)
    .bindPopup(`
      <b>Praia do Forte</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/forte.png" 
           alt="forte" 
           style="width:200px; display:block; margin:10px auto;"><br>
      No trapiche do Paulas a pesca é mais que ofício: é memória viva entre o balanço das águas e o cheiro do sal.
      Barcos partem levando esperança e retornam com peixes, histórias e sorrisos.
      Ali, redes se abrem como abraços, mãos calejadas encontram repouso, e cada descarregamento é poesia de sobrevivência.
      Mais que madeira e concreto, o trapiche é coração da comunidade, onde o mar e a vida se encontram em respeito e devoção.
    `);

// Bairro Capri (Sardinha)
  markers['capri'] = L.marker([-26.1739446, -48.5600930], { icon: iconeSardinha })
    .addTo(map)
    .bindPopup(`
      <b>Bairro Capri</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/capri.png" 
           alt="capri" 
           style="width:200px; display:block; margin:10px auto;"><br>
      No trapiche do Paulas a pesca é mais que ofício: é memória viva entre o balanço das águas e o cheiro do sal.
      Barcos partem levando esperança e retornam com peixes, histórias e sorrisos.
      Ali, redes se abrem como abraços, mãos calejadas encontram repouso, e cada descarregamento é poesia de sobrevivência.
      Mais que madeira e concreto, o trapiche é coração da comunidade, onde o mar e a vida se encontram em respeito e devoção.
    `);

// Iperoba (Tainha)
  markers['iperoba'] = L.marker([-26.2138372, -48.5692799], { icon: iconeTainha })
    .addTo(map)
    .bindPopup(`
      <b>Iperoba</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/iperoba.png" 
           alt="iperoba" 
           style="width:200px; display:block; margin:10px auto;"><br>
      No trapiche do Paulas a pesca é mais que ofício: é memória viva entre o balanço das águas e o cheiro do sal.
      Barcos partem levando esperança e retornam com peixes, histórias e sorrisos.
      Ali, redes se abrem como abraços, mãos calejadas encontram repouso, e cada descarregamento é poesia de sobrevivência.
      Mais que madeira e concreto, o trapiche é coração da comunidade, onde o mar e a vida se encontram em respeito e devoção.
    `);

// Manguezal do Iperoba (Caranguejo)
  markers['manguezal'] = L.marker([-26.2139927, -48.5699562], { icon: iconeCaranguejo })
    .addTo(map)
    .bindPopup(`
      <b>Manguezal do Iperoba</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/manguezal.png" 
           alt="manguezal" 
           style="width:200px; display:block; margin:10px auto;"><br>
      No trapiche do Paulas a pesca é mais que ofício: é memória viva entre o balanço das águas e o cheiro do sal.
      Barcos partem levando esperança e retornam com peixes, histórias e sorrisos.
      Ali, redes se abrem como abraços, mãos calejadas encontram repouso, e cada descarregamento é poesia de sobrevivência.
      Mais que madeira e concreto, o trapiche é coração da comunidade, onde o mar e a vida se encontram em respeito e devoção.
    `);

// Ribeira (Bagre)
  markers['ribeira'] = L.marker([-26.3380494, -48.6852590], { icon: iconeBagre })
    .addTo(map)
    .bindPopup(`
     <b>Ribeira</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/ribeira.png" 
           alt="ribeira" 
           style="width:200px; display:block; margin:10px auto;"><br>
      No trapiche do Paulas a pesca é mais que ofício: é memória viva entre o balanço das águas e o cheiro do sal.
      Barcos partem levando esperança e retornam com peixes, histórias e sorrisos.
      Ali, redes se abrem como abraços, mãos calejadas encontram repouso, e cada descarregamento é poesia de sobrevivência.
      Mais que madeira e concreto, o trapiche é coração da comunidade, onde o mar e a vida se encontram em respeito e devoção.
    `);

// Canal do Linguado (Robalo)
  markers['canal'] = L.marker([-26.4137465, -48.6167724], { icon: iconeRobalo })
    .addTo(map)
    .bindPopup(`
     <b>Canal do Linguado</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/canal.png" 
           alt="canal" 
           style="width:200px; display:block; margin:10px auto;"><br>
      No trapiche do Paulas a pesca é mais que ofício: é memória viva entre o balanço das águas e o cheiro do sal.
      Barcos partem levando esperança e retornam com peixes, histórias e sorrisos.
      Ali, redes se abrem como abraços, mãos calejadas encontram repouso, e cada descarregamento é poesia de sobrevivência.
      Mais que madeira e concreto, o trapiche é coração da comunidade, onde o mar e a vida se encontram em respeito e devoção.
    `);

  // --- Ajustar vista para mostrar todos os marcadores ---
  const grupo = L.featureGroup(Object.values(markers));
  try {
    const bounds = grupo.getBounds();
    if (bounds.isValid && bounds.isValid()) {
      map.fitBounds(bounds, { padding: [40, 40] });
    } else {
      map.setView([-26.243, -48.634], zoomInicial);
    }
  } catch (err) {
    map.setView([-26.243, -48.634], zoomInicial);
  }

  // --- Forçar redraw após carregamento ---
  setTimeout(() => map.invalidateSize(), 400);

  // --- Função utilitária para voar e abrir popup ---
  function goTo(key, latlng, zoom = 15) {
    map.flyTo(latlng, zoom, { duration: 1.0 });
    setTimeout(() => {
      if (markers[key]) markers[key].openPopup();
    }, 1100);
  }

  // --- Eventos da legenda ---
  const ervinoItem = document.getElementById('ervino');
  if (ervinoItem) {
    ervinoItem.addEventListener('click', () => goTo('ervino', [-26.4171428, -48.5963169]));
    ervinoItem.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { 
        e.preventDefault(); 
        goTo('ervino', [-26.4171428, -48.5963169]); 
      }
    });
  }

  const vaievemItem = document.getElementById('vaievem');
  if (vaievemItem) {
    vaievemItem.addEventListener('click', () => goTo('vaievem', [-26.3710677, -48.5721821]));
    vaievemItem.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { 
        e.preventDefault(); 
        goTo('vaievem', [-26.3710677, -48.5721821]); 
      }
    });
  }

const trapicheItem = document.getElementById('trapiche');
if (trapicheItem) {
  trapicheItem.addEventListener('click', () => goTo('trapiche', [-26.2286383, -48.6138572]));
  trapicheItem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { 
      e.preventDefault(); 
      goTo('trapiche', [-26.2286383, -48.6138572]); 
    }
  });
}

const ranchoItem = document.getElementById('rancho');
if (ranchoItem) {
  ranchoItem.addEventListener('click', () => goTo('rancho', [-26.2634738, -48.6500801]));
  ranchoItem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { 
      e.preventDefault(); 
      goTo('rancho', [-26.2634738, -48.6500801]); 
    }
  });
}

const trapicheVGItem = document.getElementById('trapicheVG');
if (trapicheVGItem) {
  trapicheVGItem.addEventListener('click', () => goTo('trapicheVG', [-26.221345, -48.664441]));
  trapicheVGItem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { 
      e.preventDefault(); 
      goTo('trapicheVG', [-26.221345, -48.664441]); 
    }
  });
}

const motaItem = document.getElementById('mota');
if (motaItem) {
  motaItem.addEventListener('click', () => goTo('mota', [-26.2501244, -48.6426105]));
  motaItem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { 
      e.preventDefault(); 
      goTo('mota', [-26.2501244, -48.6426105]); 
    }
  });
}

const ubatubaItem = document.getElementById('ubatuba');
if (ubatubaItem) {
  ubatubaItem.addEventListener('click', () => goTo('ubatuba', [-26.2153298, -48.5225488]));
  ubatubaItem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { 
      e.preventDefault(); 
      goTo('ubatuba', [-26.2153298, -48.5225488]); 
    }
  });
}

const forteItem = document.getElementById('forte');
if (forteItem) {
  forteItem.addEventListener('click', () => goTo('forte', [-26.1649697, -48.5328666]));
  forteItem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { 
      e.preventDefault(); 
      goTo('forte', [-26.1649697, -48.5328666]); 
    }
  });
}

const capriItem = document.getElementById('capri');
if (capriItem) {
  capriItem.addEventListener('click', () => goTo('capri', [-26.1739446, -48.5600930]));
  capriItem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { 
      e.preventDefault(); 
      goTo('capri',
[-26.1739446, -48.5600930]);
    }
  });
}

const iperobaItem = document.getElementById('iperoba');
if (iperobaItem) {
  iperobaItem.addEventListener('click', () => goTo('iperoba', [-26.2138372, -48.5692799]));
  iperobaItem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { 
      e.preventDefault(); 
      goTo('iperoba',
[-26.2138372, -48.5692799]);
    }
  });
}

const manguezalItem = document.getElementById('manguezal');
if (manguezalItem) {
  manguezalItem.addEventListener('click', () => goTo('manguezal', [-26.2139927, -48.5699562]));
  manguezalItem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { 
      e.preventDefault(); 
      goTo('manguezal',
[-26.2139927, -48.5699562]);
    }
  });
}

const ribeiraItem = document.getElementById('ribeira');
if (ribeiraItem) {
  ribeiraItem.addEventListener('click', () => goTo('ribeira', [-26.3380494, -48.6852590]));
  ribeiraItem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { 
      e.preventDefault(); 
      goTo('ribeira',
[-26.3380494, -48.6852590]);
    }
  });
}

const canalItem = document.getElementById('canal');
if (canalItem) {
  canalItem.addEventListener('click', () => goTo('canal', [-26.4137465, -48.6167724]));
  canalItem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { 
      e.preventDefault(); 
      goTo('canal',
[-26.4137465, -48.6167724]);
    }
  });
}

  // --- Reaplica invalidateSize quando redimensionam a tela ---
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => map.invalidateSize(), 200);
  });
});
