document.addEventListener('DOMContentLoaded', () => {
  // --- configuração inicial (zoom mobile/desktop) ---
  const zoomInicial = (window.innerWidth < 768) ? 14 : 12;

  // cria mapa
  const map = L.map('map').setView([-26.243, -48.634], zoomInicial);

  // camada base (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
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

  markers['ervino'] = L.marker([-26.4171428, -48.5963169], { icon: iconeCamarao })
    .addTo(map)
    .bindPopup(`
      <b>Pesca de Caceio - Praia do Ervino</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/Caceio.png" 
           alt="Caceio" style="width:200px; display:block; margin:10px auto;"><br>
      Na Praia do Ervino... (texto de descrição)
    `);

  markers['vaievem'] = L.marker([-26.3710677, -48.5721821], { icon: iconeTainha })
    .addTo(map)
    .bindPopup(`
      <b>Vai e Vem</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/VaieVem.png" 
           alt="VaieVem" style="width:200px; display:block; margin:10px auto;"><br>
      Já o vai e vem começa...
    `);

  // ajustar vista para mostrar todos os marcadores (se bounds válidos)
  const grupo = L.featureGroup(Object.values(markers));
  try {
    const b = grupo.getBounds();
    if (b.isValid && b.isValid()) {
      map.fitBounds(b, { padding: [40,40] });
    } else {
      map.setView([-26.243, -48.634], zoomInicial);
    }
  } catch (err) {
    // fallback para evitar crash
    map.setView([-26.243, -48.634], zoomInicial);
  }

  // forçar redraw após carregamento (evita mapa em branco)
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