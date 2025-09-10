
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

const iconeEscola = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/escola.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -36]
  });

const iconeAco = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/aco.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -36]
  });

const iconePampu = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/pampu.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -36]
  });

const iconeLinguado = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/linguado.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -36]
  });

  // --- Marcadores ---
  const markers = {};

  // Ervino (Caceio)
  markers['ervino'] = L.marker([-26.4171428, -48.5963169], { icon: iconePampu })
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
      Na Praia do Lixo, a pesca artesanal resiste como herança viva das famílias que dela tiram sustento.
      Entre barcos simples e redes estendidas à beira-mar, pescadores se reúnem em silêncio atento, acompanhando o movimento da maré.
      É um espaço de trabalho e convivência, onde o saber tradicional passa de geração em geração. 
      Ali, o mar não é apenas cenário, mas fonte de alimento, memória e identidade cultural que mantém viva a relação íntima entre comunidade e natureza.
    `);

// Trapiche da Vila da Glória (Mariscos)
  markers['trapicheVG'] = L.marker([-26.221345, -48.664441], { icon: iconeMarisco })
    .addTo(map)
    .bindPopup(`
      <b>Trapiche da Vila da Glória</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/trapicheVG.png" 
           alt="trapicheVG" 
           style="width:200px; display:block; margin:10px auto;"><br>
      O Trapiche da Vila da Glória, em São Francisco do Sul, é muito mais que um ponto turístico: é também um espaço onde a pesca se mantém viva.
      Entre o vai e vem das embarcações, moradores e visitantes lançam linhas e redes nas águas calmas da Baía da Babitonga, em busca de camarões, peixes e mariscos.
      Ali, a tradição pesqueira se mistura à beleza do trapiche, proporcionando momentos de contemplação e conexão com a natureza, enquanto mantém viva a cultura local.
    `);

// Praia do Mota (Camarão)
  markers['mota'] = L.marker([-26.2501244, -48.6426105], { icon: iconeCamarao })
    .addTo(map)
    .bindPopup(`
      <b>Praia do Mota</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/Mota.png" 
           alt="mota" 
           style="width:200px; display:block; margin:10px auto;"><br>
      Na Praia do Mota, em São Francisco do Sul, a pesca artesanal acontece em harmonia com o mar tranquilo da Baía da Babitonga.
      Além da faixa de areia onde redes e tarrafas são lançadas, o trapiche se torna ponto de encontro para pescadores e moradores.
      É dali que partem barcos simples, carregando histórias e retornando com peixes, camarões e mariscos que sustentam a comunidade.
      O trapiche não é apenas estrutura de madeira sobre o mar: é espaço de trabalho, convivência e tradição, onde cada saída e cada chegada reafirma o vínculo entre a vida dos pescadores e a riqueza das águas.
    `);

// Ubatuba (Tainha)
  markers['ubatuba'] = L.marker([-26.2153298, -48.5225488], { icon: iconeTainha })
    .addTo(map)
    .bindPopup(`
      <b>Ubatuba</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/ubatuba.png" 
           alt="ubatuba" 
           style="width:200px; display:block; margin:10px auto;"><br>
      Em Ubatuba, a pesca se desenha na beira da praia, onde homens e mar se encontram no compasso do esforço coletivo.
      O arrasto de praia traz à areia cardumes que brilham ao sol, lembrando que o mar é generoso quando respeitado. 
      Já o cerco, feito com redes que abraçam os peixes em movimento, guarda a paciência e a sabedoria passada de geração em geração. 
      Assim, a comunidade mantém viva sua ligação com o oceano e com o modo simples de viver da pesca artesanal.
    `);

// Praia do Forte (Carapicu)
  markers['forte'] = L.marker([-26.1649697, -48.5328666], { icon: iconeCarapicu })
    .addTo(map)
    .bindPopup(`
      <b>Praia do Forte</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/forte.png" 
           alt="forte" 
           style="width:200px; display:block; margin:10px auto;"><br>
      Na Praia do Forte, a pesca é mais que trabalho: é tradição que se desenrola a cada amanhecer.
      Os pescadores lançam suas linhas e redes nas águas calmas da baía, esperando pacientemente pelos carapicus, robalos, corvinas e arraias que surgem entre as ondas.
      Cada captura alimenta famílias e fortalece laços antigos, mantendo viva a memória de gerações que aprenderam a respeitar e ouvir o mar.
      Ali, o ofício se mistura à poesia do cotidiano, e cada arremesso é um gesto de cuidado e conexão com a vida que pulsa sob a superfície.
    `);

// Bairro Capri (Sardinha)
  markers['capri'] = L.marker([-26.1739446, -48.5600930], { icon: iconeSardinha })
    .addTo(map)
    .bindPopup(`
      <b>Bairro Capri</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/capri.png" 
           alt="capri" 
           style="width:200px; display:block; margin:10px auto;"><br>
      No bairro Capri, a pesca artesanal é mais do que uma atividade econômica — é tradição que se renova a cada amanhecer.
      Os pescadores seguem para o mar com suas pequenas embarcações, redes e anzóis, guiados pelo ritmo das marés e pelo conhecimento passado de geração em geração.
      O cheiro de maresia mistura-se ao som das ondas, enquanto o sol desponta no horizonte, pintando o céu de tons dourados.<br><br>
      Peixes como tainha, robalo e sardinha são os mais comuns, capturados com paciência e habilidade, respeitando o ciclo natural da pesca.
      Cada rede lançada é um gesto de cuidado, cada retorno à margem é celebrado com gratidão pelo sustento que o mar oferece.
      No Capri, a pesca artesanal é vida, memória e cultura, entrelaçando a comunidade com o oceano que a cerca.
    `);

// Iperoba (Tainha)
  markers['iperoba'] = L.marker([-26.2138372, -48.5692799], { icon: iconeTainha })
    .addTo(map)
    .bindPopup(`
      <b>Iperoba</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/iperoba.png" 
           alt="iperoba" 
           style="width:200px; display:block; margin:10px auto;"><br>
      No Iperoba, a pesca artesanal é um espetáculo de tradição e paciência.
      Os pescadores partem cedo, com suas pequenas embarcações ou diretamente da praia, usando técnicas que passam de geração em geração.
      Com redes de emalhar, capturam peixes como tainha e robalo, permitindo que os cardumes sejam recolhidos com cuidado.
      Anzóis são lançados com atenção, na expectativa de trazer a pesca do dia, enquanto a tarrafa se abre sobre a água como um leque, cobrindo a superfície e garantindo capturas variadas.<br><br>
      Cada gesto é fruto de conhecimento profundo do mar e das marés.
      No Iperoba, a pesca artesanal não é só sustento: é memória, identidade e poesia, mantendo viva a conexão entre as famílias e o oceano que as sustenta.
    `);

// Manguezal do Iperoba (Caranguejo)
  markers['manguezal'] = L.marker([-26.2139927, -48.5699562], { icon: iconeCaranguejo })
    .addTo(map)
    .bindPopup(`
      <b>Manguezal do Iperoba</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/manguezal.png" 
           alt="manguezal" 
           style="width:200px; display:block; margin:10px auto;"><br>
      No manguezal do Iperoba, o caranguejo-uçá se esconde entre as raízes e túneis de lama, sendo uma das espécies mais valorizadas na pesca artesanal local.
      Os pescadores coletam esses caranguejos à mão, aproveitando a maré baixa para entrar cuidadosamente no manguezal, ou usam ancinhos e redes pequenas para retirá-los sem prejudicar o habitat.<br><br>
      A captura exige atenção: o caranguejo-uçá é rápido e ágil, fugindo para seus buracos quando sente perigo.
      Essa prática não é apenas fonte de sustento, mas também preserva a tradição e o equilíbrio do manguezal, garantindo que a espécie continue abundante para futuras gerações.
    `);

// Ribeira (Bagre)
  markers['ribeira'] = L.marker([-26.3380494, -48.6852590], { icon: iconeBagre })
    .addTo(map)
    .bindPopup(`
     <b>Ribeira</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/ribeira.png" 
           alt="ribeira" 
           style="width:200px; display:block; margin:10px auto;"><br>
      Na Ribeira, a pesca acontece em águas calmas, onde a vida se mistura ao ritmo da maré.
      O robalo, elegante e valorizado, surge entre os manguezais e rios, trazendo alegria a quem o captura.
      O bagre, presente no fundo lodoso, garante alimento constante às famílias. O parati, pequeno e abundante, cai facilmente nas tarrafas, sempre bem-vindo à mesa.
      Já o siri, vindo dos mangues, completa a fartura, apanhado em covos e servido em saborosas casquinhas.<br><br>
      Cada captura guarda um pedaço da tradição da Ribeira: simples, generosa e marcada pelo encontro entre homem e natureza.
    `);

// Canal do Linguado (Robalo)
  markers['canal'] = L.marker([-26.4137465, -48.6167724], { icon: iconeRobalo })
    .addTo(map)
    .bindPopup(`
     <b>Canal do Linguado</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/canal.png" 
           alt="canal" 
           style="width:200px; display:block; margin:10px auto;"><br>
      No Canal do Linguado, a pesca artesanal é mais do que uma atividade econômica: é um modo de vida.
      Os pescadores locais utilizam redes de espera, posicionadas em pontos estratégicos do canal, para capturar robalo e bagre, que se movimentam com a maré.
      Em pequenos barcos, praticam o caceio, puxando a rede por trechos curtos, sempre em grupo, tornando a pesca um trabalho coletivo e divertido.<br><br>
      Para espécies menores, como siri e camarão, são usadas armadilhas cuidadosamente colocadas no fundo do canal, garantindo que a captura seja seletiva e sustentável.
      A pesca com anzol e linha, mais artesanal, é feita individualmente ou em família, muitas vezes à beira da água, aproveitando a tranquilidade do canal.
      A pesca no Canal do Linguado combina técnica, paciência e tradição, mantendo viva a cultura local e a conexão das comunidades com o mar.
    `);

// Escola (cvc)
  markers['cvc'] = L.marker([-26.2722445, -48.6432519], { icon: iconeEscola })
    .addTo(map)
    .bindPopup(`
     <b>Escola CVC</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/cvc.png" 
           alt="cvc" 
           style="width:200px; display:block; margin:10px auto;">
    `);

// Arcelor (Fábrica)
  markers['arcelor'] = L.marker([-26.295030, -48.640989], { icon: iconeAco })
    .addTo(map)
    .bindPopup(`
     <b>Arcelor</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/arcelor.png" 
           alt="arcelor" 
           style="width:200px; display:block; margin:10px auto;">
    `);

// Enseada (Linguado)
  markers['enseada'] = L.marker([-26.2190069, -48.4997343], { icon: iconeLinguadi })
    .addTo(map)
    .bindPopup(`
      <b>Enseada</b><br>
      <img src="https://raw.githubusercontent.com/ghsonda/Mapa-Pesca/main/enseada.png" 
           alt="enseada" 
           style="width:200px; display:block; margin:10px auto;"><br>
      Na Enseada, os barcos seguem para além da arrebentação, próximos da costa que leva a Itapoá, Praia Grande e Prainha.
      No silêncio do mar aberto, a tradição se revela nos gestos: o arrasto duplo percorre o fundo em busca de cardumes, enquanto o caracol, uma rede longa puxada vagarosamente, desenha círculos no oceano, envolvendo os peixes com paciência.
      É dali que partem barcos simples, carregando histórias e retornando com peixes, camarões e mariscos que sustentam a comunidade.
      Já a rede de fundeio permanece ancorada, imóvel nas águas, esperando que os cardumes se aproximem por si mesmos, como se o mar viesse até ela.<br><br>
      Assim, entre o movimento e a espera, a pesca artesanal da Enseada guarda sua poesia, unindo saber antigo e a cadência das marés.
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

const enseadaItem = document.getElementById('enseada');
if (enseadaItem) {
  enseadaItem.addEventListener('click', () => goTo('enseada', [-26.2190069, -48.4997343]));
  enseadaItem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { 
      e.preventDefault(); 
      goTo('enseada',
[-26.2190069, -48.4997343]);
    }
  });
}

const toggleBtn = document.getElementById("darkToggle");
const body = document.body;

// verifica se o usuário já tinha preferência salva
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️ Modo Claro";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Modo Claro";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙 Modo Escuro";
    localStorage.setItem("theme", "light");
  }
});


  // --- Reaplica invalidateSize quando redimensionam a tela ---
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => map.invalidateSize(), 200);
  });
});
