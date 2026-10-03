const VIEWS = [
  { id: 'welcome', label: 'Старт' },
  { id: 'license', label: 'Лицензия' },
  { id: 'graphics', label: 'Графика' },
  { id: 'optimize', label: 'Оптимизация' },
  { id: 'mods', label: 'Моды' },
  { id: 'settings', label: 'Настройки' },
  { id: 'downloads', label: 'Установка' }
];
const PAGES = VIEWS;
let currentView = 'welcome';
let licenseAccepted = localStorage.getItem('bo_eula') === '1';

/* окно бывает развёрнутым и уменьшенным; в уменьшенном состоянии мелкая графика компактнее */
(function () {
  const doc = document.documentElement;
  function updWinState() {
    let small = true;
    try {
      const aw = (screen && screen.availWidth) || 0, ah = (screen && screen.availHeight) || 0;
      small = !(aw > 0 && ah > 0 && window.innerWidth >= aw - 6 && window.innerHeight >= ah - 6);
    } catch (e) {}
    doc.classList.toggle('win-small', small);
  }
  updWinState();
  window.addEventListener('resize', updWinState);
})();

const CAT_LABELS = {
  gameplay: 'Геймплей',
  aim: 'Прицелы',
  hud: 'Интерфейс',
  minimap: 'Миникарта',
  visual: 'Визуал',
  sound: 'Звук',
  performance: 'Производительность',
  localization: 'Локализация',
  qol: 'Удобство',
  xvm: 'XVM',
  other: 'Прочее'
};

const EULA = `
<h2>ЛИЦЕНЗИОННОЕ СОГЛАШЕНИЕ</h2>
<p>Настоящее соглашение (далее — «Соглашение») является юридически обязывающим договором между автором и правообладателем сборки модификаций «BEAST» (далее — «Правообладатель») и лицом, устанавливающим, копирующим, запускающим или иным образом использующим данную программу и входящие в её состав материалы (далее — «Пользователь»).</p>
<p>Устанавливая, копируя, разархивируя или иным образом используя Сборку, Пользователь подтверждает, что он ознакомился с настоящим Соглашением, понимает его содержание и принимает все его условия полностью и безоговорочно. Если Пользователь не согласен с любым условием Соглашения, он обязан немедленно прекратить использование Сборки и удалить все её копии со своего устройства.</p>

<h3>1. ОПРЕДЕЛЕНИЯ</h3>
<p>1.1. «Сборка» («Пакет») — программа-установщик BEAST вместе с совокупностью модификаций, файлов конфигураций, описаний, изображений и служебных данных, распространяемых как единое целое.</p>
<p>1.2. «Мод» — отдельная модификация (изменение) программного обеспечения игры, входящая в состав Сборки, включая её файлы, настройки и документацию.</p>
<p>1.3. «Игра» — многопользовательская онлайн-игра «Мир танков», разрабатываемая, поддерживаемая и издаваемой компанией Lesta Games.</p>
<p>1.4. «Клиент» — установленное на устройстве Пользователя программное обеспечение Игры, включая исполняемые файлы, ресурсы и данные аккаунта игрока.</p>
<p>1.5. «Установщик» — программная часть Сборки, обеспечивающая размещение, обновление и удаление Модов в папке Клиента.</p>
<p>1.6. «Правообладатель» — автор(ы) Сборки, принадлежащие ей исключительные права на компоновку, оформление, установщик и оригинальные материалы Сборки.</p>
<p>1.7. «Авторы Модов» — третьи лица, создавшие отдельные Моды, включённые в Сборку.</p>

<h3>2. ПРЕДМЕТ СОГЛАШЕНИЯ</h3>
<p>2.1. Правообладатель предоставляет Пользователю право использовать Сборку на условиях настоящего Соглашения, а Пользователь обязуется использовать Сборку только в соответствии с этими условиями.</p>
<p>2.2. Соглашение распространяется на все копии Сборки, полученные Пользователем из официальных источников, указанных Правообладателем.</p>
<p>2.3. Соглашение не является договором оказания услуг и не порождает отношений агентства, партнёрства или совместного предприятия между Сторонами.</p>

<h3>3. ПРЕДОСТАВЛЕНИЕ ЛИЦЕНЗИИ</h3>
<p>3.1. Правообладатель предоставляет Пользователю неисключительную, непередаваемую, безвозмездную, ограниченную, отзывную и некоммерческую лицензию на использование Сборки на одном (1) личном компьютере Пользователя исключительно для личных целей.</p>
<p>3.2. Лицензия действует бессрочно до момента её прекращения в порядке, предусмотренном разделом 9 настоящего Соглашения.</p>
<p>3.3. Правообладатель предоставляет Сборку по модели «как есть», в объёме и в тех виде, в каком они доступны на момент передачи Сборки Пользователю.</p>
<p>3.4. Правообладатель вправе приостанавливать или прекращать распространение Сборки (полностью или частично) в любое время без предварительного уведомления Пользователя и без выплаты какой-либо компенсации.</p>

<h3>4. ПРАВА И ОБЯЗАННОСТИ ПОЛЬЗОВАТЕЛЯ</h3>
<p>4.1. Пользователь вправе устанавливать и использовать Сборку в личных некоммерческих целях, а также создавать резервные копии файлов Сборки и изменённых ею файлов Клиента исключительно для целей восстановления.</p>
<p>4.2. Пользователь обязан использовать Сборку исключительно с законно установленным Клиентом игры, полученным из официальных источников, и соблюдать Пользовательское соглашение и иные правила Игры, установленные Lesta Games.</p>
<p>4.3. Пользователь несёт полную и исключительную ответственность за выбор Модов, их сочетание, а также за любые последствия их использования, включая влияние на игровой процесс, производительность и стабильность Клиента.</p>
<p>4.4. Пользователь не вправе предъявлять Правообладателю претензии, связанные с изменением, приостановкой или прекращением работы Игры, Клиента или аккаунта Пользователя.</p>
<p>4.5. Пользователь обязан незамедлительно прекратить использование Сборки и удалить её при нарушении любого условия настоящего Соглашения.</p>

<h3>5. ОГРАНИЧЕНИЯ ИСПОЛЬЗОВАНИЯ</h3>
<p>5.1. Пользователю запрещается: продавать, сдавать в аренду, лицензировать, обменивать, раздавать или иным образом распространять Сборку, в том числе размещать её в интернете, передавать по локальной сети или включать в состав иных продуктов.</p>
<p>5.2. Пользователю запрещается использовать Сборку (или её компоненты) в коммерческих целях, включая платные услуги, подписки, донат, монетизацию стримов и рекламу, без письменного разрешения Правообладателя.</p>
<p>5.3. Пользователю запрещается модифицировать, адаптировать, переводить, декомпилировать, дизассемблировать, дешифровать или создавать производные работы на основе установщика Сборки, а также удалять сведения об авторском праве и товарные знаки.</p>
<p>5.4. Пользователю запрещается использовать Сборку для нарушения работы Игры, серверов, иных игроков, а также для распространения вредоносного кода или нежелательного ПО.</p>
<p>5.5. Любые права, не предоставленные прямо настоящим Соглашением, считаются непредоставленными и остаются за Правообладателем.</p>

<h3>6. СВЯЗЬ С ИГРОЙ, АВТОРЫ МОДОВ И ТРЕТЬИ ЛИЦА</h3>
<p>6.1. Сборка является неофициальным фанатским продуктом. Правообладатель не связан с Lesta Games, не представляет её интересов и не имеет одобрения ( endorse ) Lesta Games.</p>
<p>6.2. Название «Мир танков», товарные знаки, логотипы и иные объекты интеллектуальной собственности принадлежат их законным правообладателям (Lesta Games и/или иным лицам). Использование Сборки не передаёт Пользователю каких-либо прав на них.</p>
<p>6.3. Отдельные Моды могут распространяться по собственным лицензиям их Авторов. Условия таких лицензий (при их наличии) доводятся до сведения в описаниях Модов и имеют приоритет в части соответствующего Мода.</p>
<p>6.4. Правообладатель отвечает за компоновку и установщик Сборки; за содержание, качество и последствия использования отдельных Модов отвечают их Авторы. Претензии по Модам направляются их Авторам.</p>

<h3>7. СОВМЕСТИМОСТЬ, ОБНОВЛЕНИЯ, ПОДДЕРЖКА</h3>
<p>7.1. Правообладатель не гарантирует совместимость Сборки с любой конкретной версией Игры, Клиента, операционной системы или иного программного обеспечения Пользователя.</p>
<p>7.2. Правообладатель не обязан предоставлять обновления, техническую поддержку, консультации или иную помощь по использованию Сборки, если это прямо не оговорено отдельным публичным заявлением.</p>
<p>7.3. Состав Сборки, её версия, набор Модов и интерфейс Установщика могут изменяться в любой момент по усмотрению Правообладателя.</p>

<h3>8. ИСПОЛЬЗОВАНИЕ НА СВОЙ РИСК; ОТКАЗ ОТ ГАРАНТИЙ</h3>
<p>8.1. Сборка предоставляется на условиях «КАК ЕСТЬ» (AS IS), без каких-либо гарантий любого вида — явных, подразумеваемых, статутных или иных, включая гарантии товарности, пригодности для определённой цели, отсутствия дефектов и неприкосновенности прав.</p>
<p>8.2. Правообладатель не гарантирует, что Сборка будет работать без ошибок и перерывов, что она не повредит данные или программное обеспечение Пользователя, а также что она соответствует ожиданиям Пользователя.</p>
<p>8.3. Весь риск использования Сборки возлагается на Пользователя. Пользователь самостоятельно создаёт резервные копии важных данных перед установкой.</p>

<h3>9. ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ; ПРЕКРАЩЕНИЕ</h3>
<p>9.1. Правообладатель не несёт ответственности за любые косвенные, побочные, специальные, штрафные или убытки, упущенную выгоду, потерю данных, перерыв в работе, утрату конфиденциальности или иной ущерб, возникший в связи с использованием или невозможностью использования Сборки, даже если Правообладатель был уведомлён о возможности такого ущерба.</p>
<p>9.2. Использование Модов может нарушать правила Игры и приводить к предупреждениям, ограничениям, временной или постоянной блокировке учётной записи (аккаунта) Пользователя. Пользователь использует Сборку на свой риск и несёт полную ответственность за такие последствия.</p>
<p>9.3. В случае нарушения Пользователем любого условия Соглашения все предоставленные права прекращаются автоматически без уведомления; Пользователь обязан немедленно удалить все копии Сборки.</p>

<h3>10. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ</h3>
<p>10.1. Настоящее Соглашение регулируется и толкуется в соответствии с законодательством Российской Федерации. Если международным договором или законодательством Российской Федерации предусмотрены императивные нормы, предоставляющие потребителю гарантии, такие нормы применяются к отношениям Сторон в приоритете.</p>
<p>10.2. Недействительность отдельного положения Соглашения не влечёт недействительности остальных положений. Признание условия недействительным не освобождает Пользователя от обязанности удалить Сборку при нарушении им остальных условий.</p>
<p>10.3. Правообладатель вправе изменять условия настоящего Соглашения в одностороннем порядке. Актуальная редакция размещается вместе со Сборкой. Продолжение использования Сборки после внесения изменений означает принятие обновлённых условий.</p>
<p>10.4. Настоящее Соглашение представляет собой полное соглашение Сторон в отношении предмета hereof и заменяет все предыдущие договорённости (устные и письменные) по указанному предмету.</p>
<p>© 2026 BEAST Mod Pack. Все права защищены. Сборка распространяется бесплатно.</p>
`;

let manifest = null;
let info = {
  installPath: '',
  gamePath: '',
  gameVersion: '',
  minGameVersion: '',
  alreadyInstalled: false,
  gameIcon: '',
  gfxLevel: '',
  gfxNear: '',
  gfxScore: -1,
  gfxPipeline: -1,
  gfxClient: ''
};
let selected = new Set();
let currentPage = 0;
let category = 'all';
let query = '';
let pollTimer = null;
let installing = false;
let pendingRel = null;
info.received = false;

const $ = s => document.querySelector(s);
const web = window.chrome && window.chrome.webview ? window.chrome.webview : null;

function fmtBytes(n) {
  if (!n) return '0 KB';
  if (n < 1024) return n + ' B';
  if (n < 1024 * 1024) return (n / 1024).toFixed(0) + ' KB';
  return (n / 1024 / 1024).toFixed(1) + ' MB';
}

function send(msg) {
  if (web) web.postMessage(msg);
}

function toast(text, isErr) {
  const t = $('#toast');
  t.className = 'toast show' + (isErr ? ' err' : '');
  t.innerHTML = '<span class="t-ico">' + (isErr ? '&#9888;' : '&#10003;') + '</span>' + text;
  clearTimeout(t._tm);
  t._tm = setTimeout(() => t.classList.remove('show'), 3600);
}

function svgCheck() {
  return '<svg viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5"></path></svg>';
}

function pageIndex(id) {
  return VIEWS.findIndex(p => p.id === id);
}

let viewSwapT = 0;
let swapRafA = 0;
let swapRafB = 0;
function showView(id) {
  if (!VIEWS.some(v => v.id === id)) id = 'welcome';
  const fromIdx = pageIndex(currentView);
  currentView = id;
  currentPage = pageIndex(id);
  clearTimeout(viewSwapT);
  if (swapRafA) { cancelAnimationFrame(swapRafA); swapRafA = 0; }
  if (swapRafB) { cancelAnimationFrame(swapRafB); swapRafB = 0; }
  if (window.__prewarmBlurs) window.__prewarmBlurs();
  swapRafA = requestAnimationFrame(function () {
    swapRafA = 0;
    swapRafB = requestAnimationFrame(function () {
      swapRafB = 0;
      swapToView(id, fromIdx);
    });
  });
}
function swapToView(id, fromIdx) {
  const act = document.querySelector('.view.active');
  const lv = document.querySelector('.view.leaving');
  const prev = act || lv;
  const el = $('#view-' + id);
  document.querySelectorAll('.view').forEach(p => {
    if (p !== el && p !== prev) {
      p.classList.remove('active'); p.classList.remove('leaving');
      p.classList.remove('in-b'); p.classList.remove('in-t');
      p.classList.remove('out-t'); p.classList.remove('out-b');
    }
  });
  const activate = () => {
    if (prev && el && prev !== el) {
      prev.classList.remove('leaving');
      prev.classList.remove('out-t'); prev.classList.remove('out-b');
      prev.classList.remove('out-r'); prev.classList.remove('out-l');
    }
    if (el) { el.classList.remove('leaving'); el.classList.add('active'); }
    if (currentView === id && id === 'graphics') gfxLayout();
    const dirs = ['in-b', 'in-t', 'in-r', 'in-l', 'out-t', 'out-b', 'out-r', 'out-l'];
    ['#gfxBg', '#optBg', '#modsBg', '#setBg', '#dlBg', '#licPlate'].forEach(sel => {
      const b = $(sel);
      if (!b || !b.classList) return;
      dirs.forEach(c => b.classList.remove(c));
      b.style.transition = 'none';
      b.style.opacity = b.classList.contains('on') ? '' : '0';
      b.style.transform = '';
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { b.style.transition = ''; b.style.opacity = ''; });
      });
    });
    document.body.classList.toggle('wel-bg', id === 'welcome');
  };
  if (prev && el && prev !== el) {
    const fwd = pageIndex(id) >= fromIdx;
    prev.classList.remove('active');
    prev.classList.remove('in-b'); prev.classList.remove('in-t');
    prev.classList.remove('in-r'); prev.classList.remove('in-l');
    prev.classList.remove('out-t'); prev.classList.remove('out-b');
    prev.classList.remove('out-r'); prev.classList.remove('out-l');
    prev.classList.add('leaving');
    if (fwd) prev.classList.add('out-t'); else prev.classList.add('out-b');
    el.classList.remove('leaving');
    el.classList.remove('in-b'); el.classList.remove('in-t');
    el.classList.remove('in-r'); el.classList.remove('in-l');
    el.classList.remove('out-t'); el.classList.remove('out-b');
    el.classList.remove('out-r'); el.classList.remove('out-l');
    el.classList.add('active');
    if (fwd) el.classList.add('in-b'); else el.classList.add('in-t');
    const bgIn = fwd ? 'in-b' : 'in-t';
    const bgOut = fwd ? 'out-t' : 'out-b';
    [['#gfxBg', id === 'graphics'], ['#optBg', id === 'optimize'], ['#modsBg', id === 'mods'], ['#setBg', id === 'settings'], ['#dlBg', id === 'downloads'], ['#licPlate', id === 'license']].forEach(p => {
      const b = $(p[0]);
      if (!b || !b.classList) return;
      const dd = ['in-b', 'in-t', 'in-r', 'in-l', 'out-t', 'out-b', 'out-r', 'out-l'];
      const hadDir = dd.some(c => b.classList.contains(c));
      dd.forEach(c => b.classList.remove(c));
      if (p[1] !== b.classList.contains('on')) b.classList.add(p[1] ? bgIn : bgOut);
      else if (hadDir && !b.classList.contains('on')) {
        b.style.transition = 'none';
        b.style.opacity = '0';
        requestAnimationFrame(function () {
          requestAnimationFrame(function () { b.style.transition = ''; b.style.opacity = ''; });
        });
      }
    });
    if (currentView === id && id === 'graphics') gfxLayout();
    viewSwapT = setTimeout(activate, 660);
  } else {
    activate();
  }
  const sideId = id;
  document.querySelectorAll('.side-item').forEach(b => {
    b.classList.toggle('on', b.getAttribute('data-view') === sideId);
  });
  const home = $('#btnHome');
  if (home) home.classList.toggle('on', id === 'welcome');
  document.body.classList.remove('ui-hidden');
  if (id === 'welcome') document.body.classList.add('wel-bg');
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      if (window.__autoContrast) window.__autoContrast();
    });
  });
  const bui = $('#btnGfxUi');
  if (bui) bui.setAttribute('data-tip', 'Скрыть панели и оставить только фон');
  const ouib = $('#btnOptUi');
  if (ouib) ouib.setAttribute('data-tip', 'Скрыть панели и оставить только фон');
  if (id === 'settings') renderSummary();
  if (id === 'optimize') renderOptimize();
  if (id === 'downloads') renderDlMeta();
  const gfxBg = $('#gfxBg');
  if (gfxBg && gfxBg.classList) {
    gfxBg.classList.toggle('on', id === 'graphics');
    gfxBg.classList.toggle('cmp', gfxCompare);
  }
  const optBg = $('#optBg');
  if (optBg && optBg.classList) optBg.classList.toggle('on', id === 'optimize');
  const modsBg = $('#modsBg');
  if (modsBg && modsBg.classList) modsBg.classList.toggle('on', id === 'mods');
  const setBg = $('#setBg');
  if (setBg && setBg.classList) setBg.classList.toggle('on', id === 'settings');
  const dlBg = $('#dlBg');
  if (dlBg && dlBg.classList) dlBg.classList.toggle('on', id === 'downloads');
  const licPlate = $('#licPlate');
  if (licPlate && licPlate.classList) licPlate.classList.toggle('on', id === 'license');
  const handle = document.getElementById('gfxHandle');
  if (handle && handle.classList) handle.classList.toggle('on', id === 'graphics' && gfxCompare);
  if (id === 'graphics') {
    gfxLayout();
    const gbg = $('#gfxBg');
    if (gbg && gbg.classList) gbg.classList.add('nofx');
    applyGfx(gfxPreset, true);
    gfxApplyWipe(true);
    requestAnimationFrame(function () { if (gbg && gbg.classList) gbg.classList.remove('nofx'); });
  } else {
    closeSheet();
  }
  if (id === 'license') {
    const box = $('#licenseBoxPage');
    if (box && !box.innerHTML) box.innerHTML = EULA;
  }
}

function showPage(id) {
  const map = { start: 'welcome', license: 'license', mods: 'mods', summary: 'settings', install: 'downloads', done: 'downloads' };
  showView(map[id] || id);
}

function navByDelta() {}

function canGoTo(id) {
  if (installing) return id === 'downloads';
  if (id === 'mods' || id === 'settings') {
    if (!info.gamePath && web) return false;
  }
  if (id === 'graphics' || id === 'optimize' || id === 'mods' || id === 'settings' || id === 'downloads') {
    if (!licenseAccepted && id !== 'welcome' && id !== 'license') return false;
  }
  return true;
}

function navigateTo(id) {
  if (installing && id !== 'downloads') return;
  if (!canGoTo(id)) {
    if (!licenseAccepted && id !== 'welcome' && id !== 'license') {
      toast('Сначала примите лицензионное соглашение', true);
      return;
    }
    if (!info.gamePath && web) toast('Сначала укажите папку с игрой', true);
    return;
  }
  showView(id);
}

function goNext() {
  const i = pageIndex(currentView);
  if (i < 0) return;
  for (let j = i + 1; j < VIEWS.length; j++) {
    if (VIEWS[j].tool) continue;
    navigateTo(VIEWS[j].id);
    return;
  }
}

function goPrev() {
  const i = pageIndex(currentView);
  if (i <= 0) return;
  for (let j = i - 1; j >= 0; j--) {
    if (VIEWS[j].tool) continue;
    navigateTo(VIEWS[j].id);
    return;
  }
}

function renderStepper() {
  const badge = $('#sideSelCount');
  if (badge) badge.textContent = selected.size;
}

function openLicense() {
  const modal = $('#licenseModal');
  if (!modal) return;
  $('#licenseBox').innerHTML = EULA;
  $('#licenseBox').scrollTop = 0;
  modal.hidden = false;
}

function closeLicense() {
  const modal = $('#licenseModal');
  if (modal) modal.hidden = true;
}

/* ---------------- rendering: start ---------------- */
function renderStart() {
  const visMods = manifest.mods.filter(m => !m.hidden);
  const count = visMods.length;
  const size = fmtBytes(visMods.reduce((s, m) => s + m.size, 0));
  const packName = $('#packName');
  if (packName) packName.textContent = manifest.packName;
  const tagline = $('#packTagline');
  if (tagline) tagline.textContent = 'Современная сборка модов для «Мир танков» от Lesta Games. Выбирайте, смотрите описания и устанавливайте одной кнопкой.';
  const bv = $('#badgeVersion');
  if (bv) bv.innerHTML = 'версия <b>' + manifest.packVersion + '</b>';
  const bc = $('#badgeCount');
  if (bc) bc.innerHTML = 'модов <b>' + count + '</b>';
  const bs = $('#badgeSize');
  if (bs) bs.innerHTML = 'объём <b>' + size + '</b>';
  const wc = $('#wBadgeCount');
  if (wc) wc.textContent = 'модов: ' + count;
  const ws = $('#wBadgeSize');
  if (ws) ws.textContent = 'объём: ' + size;
  const save = $('#chkSaveSel');
  if (save) save.checked = localStorage.getItem('bo_save') !== '0';
}

function renderDlMeta() {
  const mods = $('#dlCardMods');
  if (mods) mods.textContent = selected.size;
  const path = $('#dlCardPath');
  if (path) {
    const p = info.gamePath || info.installPath || '—';
    path.textContent = p === '—' ? '—' : (p.length > 22 ? '…' + p.slice(-21) : p);
    if (p && p !== '—') path.setAttribute('data-tip', p);
    else path.removeAttribute('data-tip');
  }
}

function applyGameIcon() {
  const img = $('#detectIconImg');
  const svg = $('#detectIconSvg');
  if (!img || !svg) return;
  if (info.gameIcon) {
    img.src = info.gameIcon;
    img.hidden = false;
    svg.style.display = 'none';
  } else {
    img.hidden = true;
    img.removeAttribute('src');
    svg.style.display = '';
  }
}

function renderDetect() {
  const title = $('#detectTitle');
  const sub = $('#detectSub');
  const st = $('#detectStatus');
  const pick = $('#btnPickGame');
  applyGameIcon();
  if (!info.gamePath) {
    title.textContent = 'Клиент не обнаружен';
    sub.textContent = 'Автопоиск не сработал — укажите папку с игрой вручную';
    st.textContent = 'требуется';
    st.className = 'detect-status err';
    if (pick) pick.hidden = false;
    return;
  }
  if (pick) pick.hidden = true;
  title.textContent = '«Мир танков» (Lesta)';
  sub.textContent = info.gamePath;
  st.textContent = 'найдена автоматически';
  st.className = 'detect-status ok';
  renderDlMeta();
}

/* ---------------- rendering: mods ---------------- */
function modMatches(m) {
  if (category !== 'all' && m.category !== category) return false;
  if (!query) return true;
  const q = query.toLowerCase();
  return (m.name + ' ' + m.author + ' ' + m.summary + ' ' + m.tags.join(' ')).toLowerCase().includes(q);
}

function renderCats() {
  const counts = {};
  manifest.mods.forEach(m => { if (m.hidden) return; counts[m.category] = (counts[m.category] || 0) + 1; });
  if (xvmSpec && xvmSpec.nodes) {
    const optCount = xvmSpec.nodes.filter(n => n.type !== 'radio').length;
    counts['xvm'] = Math.max(counts['xvm'] || 0, optCount);
  }
  const bar = $('#catsBar');
  bar.innerHTML = '';
  const mk = (id, label, cnt) => {
    const c = document.createElement('button');
    c.className = 'cat' + (category === id ? ' on' : '');
    c.innerHTML = '<span>' + label + '</span>' + (cnt !== undefined ? '<span class="cnt">' + cnt + '</span>' : '');
    c.onclick = () => { category = id; renderCats(); renderMods(); };
    bar.appendChild(c);
  };
  mk('all', 'Все', manifest.mods.filter(m => !m.hidden).length);
  Object.keys(counts).sort((a, b) => (CAT_LABELS[a] || a).localeCompare(CAT_LABELS[b] || b, 'ru')).forEach(k => mk(k, CAT_LABELS[k] || k, counts[k]));
}

let modHoverTimers = [];

function modGallery(m) {
  const out = [];
  if (Array.isArray(m.previews)) m.previews.forEach(p => { if (p && out.indexOf(p) < 0) out.push(p); });
  if (m.preview && out.indexOf(m.preview) < 0) out.push(m.preview);
  return out;
}

function modRating(m) {
  const s = 'beast-rate-' + m.id;
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  h = h >>> 0;
  return { score: Math.round((6 + (h % 40) / 10) * 10) / 10, votes: 40 + (h % 960) };
}

function starsHtml(score) {
  const filled = Math.round(score);
  let out = '';
  for (let i = 0; i < 10; i++) out += '<i class="' + (i < filled ? 'on' : '') + '">' + '\u2605' + '</i>';
  return out;
}

function renderMods() {
  modHoverTimers.forEach(function (t) { clearInterval(t); });
  modHoverTimers = [];
  const grid = $('#modsGrid');
  const empty = $('#emptyState');
  grid.innerHTML = '';
  const list = manifest.mods.filter(m => !m.hidden && modMatches(m));
  const plain = list.filter(m => m.group !== 'xvm');
  const showXvm = !!xvmSpec && (category === 'all' || category === 'xvm');
  const optList = showXvm ? xvmSpec.nodes.filter(n =>
    n.type !== 'radio' && n.type !== 'group' &&
    !(n.type === 'check' && xvmDescChecks(n).length) && optMatches(n)) : [];
  empty.style.display = (list.length || optList.length) ? 'none' : 'block';
  const addCard = m => {
    const card = document.createElement('div');
    const sel = selected.has(m.id);
    card.className = 'mod-card' + (sel ? ' sel' : '');
    const imgs = modGallery(m);
    const base = 'mods/' + encodeURIComponent(m.id) + '/';
    let thumb = '';
    if (!imgs.length) {
      thumb = '<div class="mod-thumb ph"><span>' + (m.name[0] || '?').toUpperCase() + '</span></div>';
    } else {
      thumb = '<img class="mod-img on" src="' + base + encodeURIComponent(imgs[0]) + '" loading="lazy" alt="">';
      if (imgs.length > 1) thumb += '<img class="mod-img" src="' + base + encodeURIComponent(imgs[1]) + '" loading="lazy" alt="">';
    }
    const r = modRating(m);
    card.innerHTML =
      '<div class="mod-thumb">' + thumb +
      (m.diy ? '<span class="mod-diy">DIY</span>' : '') +
      '</div>' +
      '<div class="mod-body">' +
      '<div class="mod-name">' + esc(m.name) + '</div>' +
      '<div class="mod-rate"><span class="rnum">' + r.score.toFixed(1) + '</span>' +
      '<span class="stars">' + starsHtml(r.score) + '</span></div>' +
      '<div class="mod-au"><span class="who">' + esc(m.author) + ' · v' + esc(m.version) + '</span>' +
      '<span class="rvotes">' + r.votes + ' оценок</span></div>' +
      (m.summary ? '<div class="mod-sum">' + esc(m.summary) + '</div>' : '') +
      (m.conflicts.length ? '<div class="mod-flag">' + warnIco() + 'Возможны конфликты</div>' : '') +
      '<div class="mod-foot"><span class="mod-cat">' + (CAT_LABELS[m.category] || m.category) + '</span><span class="mod-size">' + fmtBytes(m.size) + '</span></div>' +
      '</div>';
    card.onclick = () => { toggleSelect(m.id); };
    if (imgs.length > 1) bindCardRotate(card, imgs, base);
    grid.appendChild(card);
  };
  const addOptCard = n => {
    const st = xvmValue(n.id);
    const isOn = st === 'on' || st === 'part';
    const card = document.createElement('div');
    card.className = 'mod-card' + (isOn ? ' sel' : '');
    card.dataset.xvm = n.id;
    const r = modRating({ id: 'xopt-' + n.id });
    const img = 'mods/xvm/br-' + xvmBranchId(n) + '.jpg';
    card.innerHTML =
      '<div class="mod-thumb">' +
      '<img class="mod-img on" src="' + img + '" loading="lazy" alt="">' +
      '</div>' +
      '<div class="mod-body">' +
      '<div class="mod-name">' + esc(n.label) + '</div>' +
      '<div class="mod-rate"><span class="rnum">' + r.score.toFixed(1) + '</span>' +
      '<span class="stars">' + starsHtml(r.score) + '</span></div>' +
      '<div class="mod-au"><span class="who">' + esc(xvmPath(n)) + '</span>' +
      '<span class="rvotes">' + r.votes + ' оценок</span></div>' +
      '<div class="mod-sum">' + esc(optSummary(n)) + '</div>' +
      '<div class="mod-foot"><span class="mod-cat">XVM</span><span class="mod-size">' +
      String(n.size).replace('.', ',') + ' Мб</span></div>' +
      '</div>';
    card.onclick = () => {
      const nn = xvmById ? xvmById[n.id] : null;
      if (!nn) return;
      const pp = nn.parent ? xvmById[nn.parent] : null;
      if (pp && pp.type === 'radio') xvmPick(nn.id);
      else xvmToggle(nn.id);
      afterOptChange();
    };
    grid.appendChild(card);
  };
  plain.forEach(addCard);
  if (showXvm) {
    const sep = document.createElement('div');
    sep.className = 'mods-sep';
    sep.innerHTML = '<b>XVM</b><span>опции пакета — отметь нужное, ядро XVM и XFW подключатся автоматически</span>';
    grid.appendChild(sep);
    const xkids = {};
    xvmSpec.nodes.forEach(n => { const p = n.parent || '__root'; (xkids[p] = xkids[p] || []).push(n); });
    const xroot = (xkids.__root || [])[0];
    const cascade = n => n.type === 'check' && xvmDescChecks(n).length > 0;
    const renderable = n => n.type !== 'radio' && n.type !== 'group' && !cascade(n) && optMatches(n);
    const hasMatch = n => renderable(n) || (xkids[n.id] || []).some(hasMatch);
    const cntMatch = n => (renderable(n) ? 1 : 0) +
      (xkids[n.id] || []).reduce((a, c) => a + cntMatch(c), 0);
    const wnum = k => { const a = k % 10, b = k % 100; if (a === 1 && b !== 11) return 'опция'; if (a >= 2 && a <= 4 && (b < 12 || b > 14)) return 'опции'; return 'опций'; };
    const XVM_SEC_TITLES = { mm: 'Миникарта', icons: 'Иконки над танками', logs: 'Журнал урона' };
    const mkHead = (label, cnt, nest, node) => {
      const h = document.createElement('div');
      h.className = 'mods-sep mods-sub' + (nest ? ' nest' : '');
      h.innerHTML = '<b>' + esc(label) + '</b><span>' + cnt + ' ' + wnum(cnt) + '</span>';
      if (node) {
        const b = document.createElement('button');
        b.type = 'button';
        const gs = xvmGroupStats(node);
        const all = gs.total > 0 && gs.on === gs.total;
        b.className = 'mods-sub-add' + (all ? ' on' : '');
        b.textContent = all ? 'Убрать группу' : 'Добавить группу';
        b.onclick = ev => { ev.stopPropagation(); xvmGroupSet(node.id, !all); };
        h.appendChild(b);
      }
      grid.appendChild(h);
    };
    const walkNode = n => {
      if (n.type === 'radio') { (xkids[n.id] || []).forEach(walkNode); return; }
      if (n.type === 'group') {
        if (hasMatch(n)) mkHead(n.label, cntMatch(n), n.parent !== xroot.id, n);
        (xkids[n.id] || []).forEach(walkNode);
        return;
      }
      if (renderable(n)) addOptCard(n);
      (xkids[n.id] || []).forEach(walkNode);
    };
    if (xroot) (xkids[xroot.id] || []).forEach(sec => {
      if (sec.type !== 'group') {
        const cnt = cntMatch(sec);
        if (cnt >= 2) mkHead(XVM_SEC_TITLES[sec.id] || sec.label, cnt, false, sec);
      }
      walkNode(sec);
    });
  }
}

function bindCardRotate(card, imgs, base) {
  const layers = card.querySelectorAll('.mod-img');
  if (layers.length < 2) return;
  let idx = 0, vis = 0, timer = 0, first = 0;
  const show = () => {
    const next = vis ^ 1;
    idx = (idx + 1) % imgs.length;
    layers[next].src = base + encodeURIComponent(imgs[idx]);
    layers[next].classList.add('on');
    layers[vis].classList.remove('on');
    vis = next;
  };
  card.addEventListener('mouseenter', () => {
    if (timer || first) return;
    first = setTimeout(() => {
      first = 0;
      show();
      timer = setInterval(show, 1500);
      modHoverTimers.push(timer);
    }, 700);
  });
  card.addEventListener('mouseleave', () => {
    clearTimeout(first);
    first = 0;
    if (timer) { clearInterval(timer); modHoverTimers = modHoverTimers.filter(t => t !== timer); timer = 0; }
    idx = 0; vis = 0;
    layers[0].src = base + encodeURIComponent(imgs[0]);
    layers[0].classList.add('on');
    layers[1].classList.remove('on');
  });
}

function esc(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function warnIco() {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
}

function toggleSelect(id, silent) {
  const tMod = manifest.mods.find(x => x.id === id);
  if (tMod && tMod.hidden && tMod.group === 'xvm') return;
  if (selected.has(id)) {
    selected.delete(id);
  } else {
    selected.add(id);
    const pullReq = mid => {
      const mm = manifest.mods.find(x => x.id === mid);
      if (!mm || !Array.isArray(mm.requires)) return;
      mm.requires.forEach(r => {
        if (r && manifest.mods.find(x => x.id === r) && !selected.has(r)) {
          selected.add(r);
          pullReq(r);
        }
      });
    };
    pullReq(id);
  }
  renderMods();
  renderSelection();
  updateToggleAll();
  renderOptimize();
  if (!silent) persistSelection();
}

function updateToggleAll() {
  const vis = manifest.mods.filter(m => !m.hidden && modMatches(m));
  const allSel = vis.length > 0 && vis.every(m => selected.has(m.id));
  $('#btnToggleAll').textContent = allSel ? 'Снять все' : 'Выбрать все';
}

function renderSelection() {
  const n = selected.size;
  const sc = $('#selCount');
  if (sc) sc.textContent = n;
  const sm = $('#sumCount');
  if (sm) sm.textContent = '(' + n + ')';
  let sz = 0;
  if (manifest) manifest.mods.forEach(m => { if (selected.has(m.id)) sz += m.size; });
  const ss = $('#selSize');
  if (ss) ss.textContent = fmtBytes(sz);
  const st = $('#sumTotal');
  if (st) st.textContent = fmtBytes(sz);
  const mn = $('#btnModsNext');
  if (mn) mn.disabled = n === 0;
  const side = $('#sideSelCount');
  if (side) {
    side.textContent = n > 99 ? '99+' : String(n);
    side.style.display = n ? 'flex' : 'none';
  }
  const dcm = $('#dlCardMods');
  if (dcm) dcm.textContent = n;
}

function persistSelection() {
  if ($('#chkSaveSel').checked) {
    localStorage.setItem('bo_sel_' + manifest.packVersion, JSON.stringify(Array.from(selected)));
  } else {
    localStorage.removeItem('bo_sel_' + manifest.packVersion);
  }
}

/* ---------------- optimize (hidden fps mods) ---------------- */
function renderOptimize() {
  document.querySelectorAll('#optGrid input[data-tw]').forEach(inp => {
    const on = selected.has(inp.getAttribute('data-tw'));
    inp.checked = on;
    const card = inp.closest ? inp.closest('.opt-card') : null;
    if (card && card.classList) card.classList.toggle('on', on);
  });
  syncOptLayers();
}

const OPT_LAYERS = [
  { tw: 'tw-clouds', l: 'clouds-off', mode: 'patch' },
  { tw: 'tw-smokedead', l: 'smokedead', mode: 'effect' },
  { tw: 'tw-exhaust', l: 'exhaust', mode: 'effect' },
  { tw: 'tw-explosion', l: 'explosion', mode: 'effect' },
  { tw: 'tw-armorhit', l: 'armorhit', mode: 'effect' },
  { tw: 'tw-groundhit', l: 'groundhit', mode: 'effect' },
  { tw: 'tw-shots', l: 'shots', mode: 'effect' },
  { tw: 'tw-skyfog', l: 'fog', mode: 'effect' }
];

function syncOptLayers() {
  OPT_LAYERS.forEach(e => {
    const el = document.querySelector('#optBg [data-l="' + e.l + '"]');
    if (!el || !el.classList) return;
    const on = selected.has(e.tw);
    el.classList.toggle('on', e.mode === 'patch' ? on : !on);
  });
  const bg = $('#optBg');
  if (bg && bg.classList) bg.classList.toggle('lo', selected.has('tw-graphics'));
}

function bindOptimize() {
  const grid = $('#optGrid');
  if (!grid || !grid.addEventListener) return;
  grid.addEventListener('change', e => {
    const t = e.target;
    const id = t && t.getAttribute ? t.getAttribute('data-tw') : null;
    if (id) toggleSelect(id);
  });
}

/* ---------------- graphics: presets + difference slider ---------------- */
const GFX_PAIRS = {
  ultra:  { name: 'Ультра' },
  max:    { name: 'Максимум' },
  high:   { name: 'Высокое' },
  medium: { name: 'Среднее' },
  low:    { name: 'Низкое' },
  min:    { name: 'Минимальное', degraded: true },
  none:   { name: 'Не изменять' }
};
/* approximate GPU load per standard preset (0..100), mirrors GfxSettings.Detect scores */
const GFX_SCORES = { min: 0, low: 20, medium: 40, high: 60, max: 80, ultra: 100 };
const GFX_MIGRATE = { low: 'medium', medium: 'medium', high: 'ultra', custom: 'high', night: 'high' };
let gfxPreset = 'high';
let gfxCompare = false;
const gfxWipe = { ultra: 50, max: 50, high: 50, medium: 50, low: 50, min: 50, none: 50 };
let gfxWipeSaveT = 0;
let wipeCurP = 50;
let wipeRaf = 0;
let wipeToken = 0;

function gfxInfo(p) {
  const pair = GFX_PAIRS[p];
  if (pair) return { id: p, name: pair.name, degraded: !!pair.degraded };
  const d = GFX_PAIRS.high;
  return { id: 'high', name: d.name, degraded: false };
}

/* detected user level = the right side of the comparison slider */
function gfxUserBase() {
  const lv = info.gfxLevel || '';
  if (lv === 'custom') {
    const near = info.gfxNear && GFX_PAIRS[info.gfxNear] ? info.gfxNear : 'medium';
    return { id: near, name: 'Пользовательские', known: true, custom: true };
  }
  if (lv && GFX_PAIRS[lv]) return { id: lv, name: GFX_PAIRS[lv].name, known: true, custom: false };
  return { id: 'high', name: 'не определены', known: false, custom: false };
}

/* approximate fps difference vs the user's current settings (works for custom too) */
function fpsDelta(presetId) {
  if (!(info.gfxScore >= 0)) return null;
  if (!gfxUserBase().known) return null;
  if (presetId === 'none') return 0;
  const ps = GFX_SCORES[presetId];
  if (typeof ps !== 'number') return null;
  return Math.round((info.gfxScore - ps) * 0.8);
}

function gfxMinPct() {
  try {
    if (document.body && document.body.classList && document.body.classList.contains('ui-hidden')) return 0;
    const W = window.innerWidth || 0;
    if (!W) return 0;
    const sb = document.querySelector('.sidebar');
    if (!sb || !sb.getBoundingClientRect) return 0;
    const r = sb.getBoundingClientRect();
    if (!(r.right > 0)) return 0;
    return (r.right / W) * 100;
  } catch (e) { return 0; }
}

function gfxLayout() {
  try {
    const view = document.getElementById('view-graphics');
    const card = document.querySelector('#view-graphics .preset-card');
    if (!view || !card || !card.getBoundingClientRect) return;
    const r = view.getBoundingClientRect();
    const top = r.top + card.offsetTop;
    if (!(top > 0)) return;
    const W = window.innerWidth || 1280;
    const H = window.innerHeight || 720;
    const s = Math.min(3, Math.max(0.6, Math.max(W / 1280, H / 720)));
    const gap = Math.round(26 * s * 10) / 10;
    const val = (top - gap) + 'px';
    const root = document.documentElement;
    if (root.style.getPropertyValue('--gky') !== val) root.style.setProperty('--gky', val);
  } catch (e) {}
}

function setWipeVars(pct) {
  const root = document.documentElement;
  if (root && root.style && root.style.setProperty) {
    root.style.setProperty('--gp', pct.toFixed(2) + '%');
    const W = window.innerWidth || 0;
    root.style.setProperty('--gpx', (W > 0 ? (pct / 100) * W : 0).toFixed(1) + 'px');
  }
}

function gfxApplyWipe(animate) {
  let pct = 100;
  if (gfxCompare) {
    pct = gfxWipe[gfxPreset];
    if (!(pct >= 0)) pct = 0;
    if (pct > 100) pct = 100;
    const mn = gfxMinPct();
    if (pct < mn) pct = mn;
  }
  const D = 400;
  const my = ++wipeToken;
  if (typeof cancelAnimationFrame === 'function' && wipeRaf) {
    try { cancelAnimationFrame(wipeRaf); } catch (e) {}
  }
  wipeRaf = 0;
  const from = wipeCurP;
  if (animate && Math.abs(pct - from) > 0.01 && typeof requestAnimationFrame === 'function') {
    const t0 = Date.now();
    const step = () => {
      if (my !== wipeToken) return;
      let k = (Date.now() - t0) / D;
      if (k > 1) k = 1;
      const e = 1 - Math.pow(1 - k, 3);
      wipeCurP = from + (pct - from) * e;
      setWipeVars(wipeCurP);
      if (k < 1) wipeRaf = requestAnimationFrame(step);
      else { wipeRaf = 0; wipeCurP = pct; setWipeVars(pct); }
    };
    wipeRaf = requestAnimationFrame(step);
  } else {
    wipeCurP = pct;
    setWipeVars(pct);
  }
}

function gfxSetWipe(pct, animate) {
  if (!(pct >= 0)) pct = 0;
  if (pct > 100) pct = 100;
  gfxWipe[gfxPreset] = pct;
  gfxApplyWipe(animate);
  clearTimeout(gfxWipeSaveT);
  gfxWipeSaveT = setTimeout(() => {
    try { localStorage.setItem('bo_gfx_wipe', JSON.stringify(gfxWipe)); } catch (e) {}
  }, 300);
}

function applyGfx(p, silent) {
  const info = gfxInfo(p);
  gfxPreset = info.id;
  const mark = (box, id) => {
    if (box && box.querySelectorAll) {
      box.querySelectorAll('img').forEach(im => im.classList.toggle('on', im.getAttribute('data-g') === id));
    }
  };
  const base = $('#gfxBase');
  const ub = gfxUserBase();
  mark(base, ub.id);
  mark($('#gfxTop'), info.id);
  if (base && base.classList) base.classList.toggle('degraded', !!info.degraded);
  const dFps = fpsDelta(info.id);
  const ll = $('#gfxLabelL'), lr = $('#gfxLabelR');
  if (ll) ll.textContent = info.name + (dFps === null ? '' : (dFps > 0 ? ' +' + dFps : ' ' + dFps) + ' FPS');
  if (lr) lr.textContent = 'Ваши: ' + ub.name;
  document.querySelectorAll('.preset-card').forEach(c => c.classList.toggle('on', c.getAttribute('data-preset') === info.id));
  gfxSetWipe(typeof gfxWipe[info.id] === 'number' ? gfxWipe[info.id] : 50, true);
  try { localStorage.setItem('bo_gfx', info.id); } catch (e) {}
  if (!silent) toast('Пресет: ' + info.name);
}

/* ---------------- advanced graphics sheet ---------------- */
const ADV = {
  groups: ['Основные', 'Освещение и постобработка', 'Ландшафт и вода', 'Растительность', 'Эффекты'],
  sliders: [
    { id: 'msaa',   g: 'Основные', label: 'Сглаживание', key: 'CUSTOM_AA_MODE', opts: ['Выкл', 'Низко', 'Средне', 'Высоко', 'Максимум'], optsSD: ['Выкл', 'Низко', 'Средне', 'Высоко'], v: 4 },
    { id: 'tex',    g: 'Основные', label: 'Качество текстур', key: 'TEXTURE_QUALITY', opts: ['Низко', 'Средне', 'Высоко', 'Ультра'], v: 2 },
    { id: 'obj',    g: 'Основные', label: 'Детализация объектов', key: 'OBJECT_LOD', opts: ['Низко', 'Средне', 'Высоко', 'Максимум'], v: 3 },
    { id: 'draw',   g: 'Основные', label: 'Дальность прорисовки', key: 'FAR_PLANE', opts: ['Низко', 'Средне', 'Высоко', 'Ультра'], v: 3 },
    { id: 'light',  g: 'Освещение и постобработка', label: 'Качество освещения', key: 'LIGHTING_QUALITY', opts: ['Выкл', 'Низко', 'Средне', 'Высоко', 'Максимум'], v: 1 },
    { id: 'shadow', g: 'Освещение и постобработка', label: 'Качество теней', key: 'SHADOWS_QUALITY', opts: ['Выкл', 'Низко', 'Средне', 'Высоко', 'Максимум'], v: 3 },
    { id: 'post',   g: 'Освещение и постобработка', label: 'Постобработка', key: 'POST_PROCESSING_QUALITY', opts: ['Выкл', 'Низко', 'Средне', 'Высоко', 'Максимум'], v: 3 },
    { id: 'motion', g: 'Освещение и постобработка', label: 'Качество «размытия» в движении', key: 'MOTION_BLUR_QUALITY', opts: ['Выкл', 'Низко', 'Средне', 'Высоко'], v: 0 },
    { id: 'water',  g: 'Ландшафт и вода', label: 'Качество воды', key: 'WATER_QUALITY', opts: ['Низко', 'Средне', 'Высоко', 'Ультра'], v: 3 },
    { id: 'terr',   g: 'Ландшафт и вода', label: 'Качество ландшафта', key: 'TERRAIN_QUALITY', opts: ['Низко', 'Средне', 'Высоко', 'Ультра'], v: 3 },
    { id: 'foliage',g: 'Растительность', label: 'Детализация растительности', key: 'SPEEDTREE_QUALITY', opts: ['Выкл', 'Низко', 'Средне', 'Высоко'], v: 1 },
    { id: 'grass',  g: 'Растительность', label: 'Количество травы', key: 'FLORA_QUALITY', opts: ['Выкл', 'Низко', 'Средне', 'Высоко'], v: 0 },
    { id: 'fx',     g: 'Эффекты', label: 'Качество доп. эффектов', key: 'EFFECTS_QUALITY', opts: ['Выкл', 'Низко', 'Средне', 'Высоко'], v: 0 },
    { id: 'fxsnp',  g: 'Эффекты', label: 'Доп. эффекты в снайперском режиме', key: 'SNIPER_MODE_EFFECTS_QUALITY', opts: ['Выкл', 'Низко', 'Средне', 'Высоко'], v: 0 },
    { id: 'track',  g: 'Эффекты', label: 'Физика гусеничных лент', key: 'TRACK_PHYSICS_QUALITY', opts: ['Выкл', 'Низко', 'Средне', 'Высоко'], v: 0 }
  ],
  checks: [
    { id: 'teless',   g: 'Ландшафт и вода', label: 'Тесселяция ландшафта', key: 'TERRAIN_TESSELLATION_ENABLED', v: true, sdOff: true },
    { id: 'telessSn', g: 'Ландшафт и вода', label: 'Тесселяция ландшафта в снайперском режиме', key: 'SNIPER_MODE_TERRAIN_TESSELLATION_ENABLED', v: true, sdOff: true },
    { id: 'leaf',     g: 'Растительность', label: 'Прозрачность листьев', key: 'SEMITRANSPARENT_LEAVES_ENABLED', v: false },
    { id: 'grassSn',  g: 'Растительность', label: 'Трава в снайперском режиме', key: 'SNIPER_MODE_GRASS_ENABLED', v: false },
    { id: 'destr',    g: 'Эффекты', label: 'Улучшенная физика разрушений', key: 'HAVOK_ENABLED', v: false },
    { id: 'tracks',   g: 'Эффекты', label: 'Эффекты из-под гусениц и колес', key: 'VEHICLE_DUST_ENABLED', v: false },
    { id: 'tracks2',  g: 'Эффекты', label: 'Следы гусениц и колес', key: 'VEHICLE_TRACES_ENABLED', v: false, sdOff: true }
  ]
};
const advData = { mode: 'improved', vals: {}, cks: {} };
let advModeSaved = false;

function advInit() {
  ADV.sliders.forEach(s => { advData.vals[s.id] = s.v; });
  ADV.checks.forEach(c => { advData.cks[c.id] = c.v; });
  try {
    const saved = JSON.parse(localStorage.getItem('bo_gfx_adv') || 'null');
    if (saved) {
      if (saved.mode === 'standard' || saved.mode === 'improved') { advData.mode = saved.mode; advModeSaved = true; }
      if (saved.vals) Object.keys(saved.vals).forEach(k => {
        if (typeof saved.vals[k] === 'number' && advData.vals.hasOwnProperty(k)) advData.vals[k] = saved.vals[k];
      });
      if (saved.cks) Object.keys(saved.cks).forEach(k => {
        if (advData.cks.hasOwnProperty(k)) advData.cks[k] = !!saved.cks[k];
      });
    }
  } catch (e) {}
}

function advSave() {
  try { localStorage.setItem('bo_gfx_adv', JSON.stringify(advData)); } catch (e) {}
}

function advCurMode() { return advData.mode === 'standard' ? 'standard' : 'improved'; }
function advSdOn() { return advCurMode() === 'standard'; }
function advSdClient() { return info.gfxClient === 'sd'; }
function advSlOpts(s) { const sd = advSdOn(); return (sd && s.optsSD) ? s.optsSD : s.opts; }
function advKeyFor(s) { return (s.id === 'msaa' && advSdOn()) ? 'MSAA_QUALITY' : s.key; }

function wsHelpShow(key, anchor) {
  const box = $('#wsHelp');
  if (!box) return;
  const t = (typeof TIPS !== 'undefined' && TIPS && TIPS[key]) ? TIPS[key] : null;
  if (!t) { box.classList.remove('show'); return; }
  const ti = $('#wsHelpT'), pe = $('#wsHelpP'), we = $('#wsHelpW');
  if (ti) ti.textContent = t.label || '';
  if (pe) pe.textContent = t.desc || '';
  if (we) { we.textContent = t.warn || ''; we.hidden = !t.warn; }
  if (!anchor || !anchor.getBoundingClientRect) { box.classList.remove('show'); return; }
  box.classList.add('show');
  const ar = anchor.getBoundingClientRect();
  const bw = box.offsetWidth, bh = box.offsetHeight;
  const vw = window.innerWidth || document.documentElement.clientWidth;
  const vh = window.innerHeight || document.documentElement.clientHeight;
  let left = ar.right + 10;
  if (left + bw > vw - 8) left = ar.left - bw - 10;
  if (left < 8) left = 8;
  let top = ar.top - 4;
  if (top + bh > vh - 8) top = vh - 8 - bh;
  if (top < 8) top = 8;
  box.style.left = Math.round(left) + 'px';
  box.style.top = Math.round(top) + 'px';
}

function wsHelpHide() {
  const box = $('#wsHelp');
  if (box) box.classList.remove('show');
}

function buildSheet(force) {
  const body = $('#sheetBody');
  if (!body) return;
  if (body.childElementCount && !force) return;
  wsHelpHide();
  if (advSdClient() && advData.mode === 'improved') advData.mode = 'standard';
  const sd = advSdOn();
  const blocked = advSdClient();
  const slRow = s => {
    const opts = advSlOpts(s);
    const n = opts.length;
    let v = advData.vals[s.id];
    if (!(v >= 0)) v = 0;
    if (v > n - 1) v = n - 1;
    let ticks = '';
    for (let i = 0; i < n; i++) {
      if (i > 0) ticks += '<i class="m' + (i <= v ? ' on' : '') + '" style="left:' + ((i - 0.5) / (n - 1) * 100) + '%"></i>';
      ticks += '<i' + (i <= v ? ' class="on"' : '') + ' style="left:' + (i / (n - 1) * 100) + '%"></i>';
    }
    return '<div class="ws-row" data-tip="' + advKeyFor(s) + '"><span class="ws-lbl">' + s.label +
      '<button type="button" class="ws-tipbtn" data-tip="' + advKeyFor(s) + '" aria-label="Описание">?</button></span>' +
      '<div class="ws-track" data-sl="' + s.id + '"><input type="range" min="0" max="' + (n - 1) + '" value="' + v +
      '" style="--f:' + (v / (n - 1) * 100) + '%"><div class="ws-ticks">' + ticks + '</div></div>' +
      '<span class="ws-val" data-v="' + s.id + '">' + opts[v] + '</span></div>';
  };
  const ckRow = c => {
    const dis = sd && c.sdOff;
    return '<label class="ws-check' + (dis ? ' dis' : '') + '" data-tip="' + c.key + '"><input type="checkbox" data-ck="' + c.id + '"' +
      (advData.cks[c.id] ? ' checked' : '') + (dis ? ' disabled' : '') + '><i></i>' +
      '<span class="ws-ck-l">' + c.label +
      '<button type="button" class="ws-tipbtn" data-tip="' + c.key + '" aria-label="Описание">?</button></span></label>';
  };
  let html = '<div class="ws-pipe">' +
    '<span class="ws-pipe-lbl" data-tip="RENDER_PIPELINE">Графика:' +
    '<button type="button" class="ws-tipbtn" data-tip="RENDER_PIPELINE" aria-label="Описание">?</button></span>' +
    '<label class="ws-radio" data-tip="RENDER_PIPELINE"><input type="radio" name="wsPipe" value="standard"' + (sd ? ' checked' : '') + '><i></i>Стандартная</label>' +
    '<label class="ws-radio' + (blocked ? ' dis' : '') + '" data-tip="RENDER_PIPELINE"><input type="radio" name="wsPipe" value="improved"' +
      (!sd ? ' checked' : '') + (blocked ? ' disabled' : '') + '><i></i>Улучшенная</label>' +
    (blocked ? '<span class="ws-pipe-note">SD-клиент: улучшенная графика недоступна</span>' : '') +
    '</div>';
  html += '<div class="ws-grid">';
  ADV.groups.forEach(g => {
    const sl = ADV.sliders.filter(s => s.g === g).map(slRow).join('');
    const ck = ADV.checks.filter(c => c.g === g).map(ckRow).join('');
    html += '<div class="ws-group"><div class="ws-group-t">' + g + '</div>' + sl + ck + '</div>';
  });
  html += '</div>';
  body.innerHTML = html;
}

let sheetLastNat = 0;
let sheetDiag = {};
function sheetLayout() {
  const sh = $('#gfxSheet');
  if (!sh) return;
  const panel = sh.querySelector('.sheet-panel');
  const head = document.querySelector('#view-graphics .view-head');
  const card = document.querySelector('#view-graphics .preset-card');
  const grid = document.querySelector('#graphicsPresets');
  if (!panel || !card || !card.getBoundingClientRect) return;
  const W = window.innerHeight || 0;
  const VW = window.innerWidth || 0;
  const cr = card.getBoundingClientRect();
  if (!W || !(cr.top > 0)) return;
  let headBottom = 96;
  if (head && head.getBoundingClientRect) {
    const hr = head.getBoundingClientRect();
    if (hr.bottom > 0) headBottom = hr.bottom + 8;
  }
  const PANEL_GAP = 8;
  const bodyEl = sh.querySelector('.sheet-body');
  const hEl = sh.querySelector('.sheet-head');
  const fEl = sh.querySelector('.sheet-foot');
  panel.style.height = 'auto';
  panel.style.top = 'auto';
  panel.style.bottom = 'auto';
  const nat = Math.max(panel.offsetHeight,
    (hEl ? hEl.offsetHeight : 0) + (fEl ? fEl.offsetHeight : 0) +
    (bodyEl ? bodyEl.scrollHeight : panel.offsetHeight));
  panel.style.height = '';
  panel.style.top = '';
  panel.style.bottom = '';
  sheetLastNat = nat;
  const topMin = headBottom + 16;
  let maxBottom = Math.min(cr.top - PANEL_GAP, W - 8);
  const panelTop = topMin < 4 ? 4 : topMin;
  const avail = Math.max(0, maxBottom - panelTop);
  const panelH = Math.min(nat, avail);
  const shBottom = Math.max(0, W - (panelTop + panelH));
  sheetDiag = { topMin: topMin, maxBottom: maxBottom, crTop: cr.top, W: W };
  sh.style.setProperty('--sh-top', panelTop.toFixed(1) + 'px');
  sh.style.setProperty('--sh-bottom', shBottom.toFixed(1) + 'px');
  sh.style.setProperty('--sh-clip', Math.max(0, W - maxBottom).toFixed(1) + 'px');
  if (grid && grid.getBoundingClientRect) {
    const gr = grid.getBoundingClientRect();
    if (VW && gr.width > 0 && gr.left >= 0 && gr.right <= VW + 1) {
      sh.style.setProperty('--sh-left', gr.left.toFixed(1) + 'px');
      sh.style.setProperty('--sh-right', (VW - gr.right).toFixed(1) + 'px');
    } else {
      sh.style.removeProperty('--sh-left');
      sh.style.removeProperty('--sh-right');
    }
  }
}

function openSheet() {
  const sh = $('#gfxSheet');
  if (!sh) return;
  buildSheet();
  sh.hidden = false;
  sheetLayout();
  try {
    requestAnimationFrame(() => {
      sheetLayout();
      const body = $('#sheetBody');
      send({ action: 'measure', nat: sheetLastNat, body: body ? body.scrollHeight : 0, win: window.innerHeight || 0,
        sH: body ? body.scrollHeight : 0, cH: body ? body.clientHeight : 0,
        topMin: Math.round(sheetDiag.topMin || 0), maxBottom: Math.round(sheetDiag.maxBottom || 0) });
      sh.classList.add('on');
    });
  } catch (e) {}
}

function closeSheet() {
  const sh = $('#gfxSheet');
  if (!sh || sh.hidden) return;
  wsHelpHide();
  sh.classList.remove('on');
  setTimeout(() => {
    sh.hidden = true;
    const panel = sh.querySelector('.sheet-panel');
    if (panel && panel.style) { panel.style.transform = ''; panel.style.transition = ''; }
  }, 380);
}

function bindSheet() {
  const sh = $('#gfxSheet');
  if (!sh) return;
  window.addEventListener('resize', () => {
    wsHelpHide();
    if (!sh.hidden && sh.classList.contains('on')) sheetLayout();
  });
  sh.addEventListener('click', e => {
    const t = e.target;
    if (!t || !t.closest) return;
    const tb = t.closest('.ws-tipbtn');
    if (tb) {
      e.preventDefault();
      e.stopPropagation();
      wsHelpShow(tb.getAttribute('data-tip'), tb);
      return;
    }
    if (t.closest('[data-close]')) closeSheet();
  });
  sh.addEventListener('mouseover', e => {
    const t = e.target;
    if (!t || !t.closest) return;
    const row = t.closest('[data-tip]');
    if (row) wsHelpShow(row.getAttribute('data-tip'), row.querySelector('.ws-tipbtn') || row);
  });
  sh.addEventListener('mouseout', e => {
    const t = e.target;
    if (!t || !t.closest) return;
    const row = t.closest('[data-tip]');
    if (!row) return;
    const to = e.relatedTarget;
    if (to && to.closest && to.closest('[data-tip]') === row) return;
    wsHelpHide();
  });
  const body = $('#sheetBody');
  if (body) {
    body.addEventListener('scroll', wsHelpHide);
    const onInput = e => {
      const t = e.target;
      if (!t) return;
      if (t.type === 'radio' && t.getAttribute && t.getAttribute('name') === 'wsPipe') {
        advData.mode = t.value === 'standard' ? 'standard' : 'improved';
        advModeSaved = true;
        advSave();
        buildSheet(true);
        sheetLayout();
      } else if (t.type === 'range' && t.parentElement) {
        const id = t.parentElement.getAttribute('data-sl');
        let s = null;
        for (let i = 0; i < ADV.sliders.length; i++) if (ADV.sliders[i].id === id) s = ADV.sliders[i];
        if (!s) return;
        const opts = advSlOpts(s), n = opts.length, v = +t.value;
        advData.vals[id] = v;
        t.style.setProperty('--f', (v / (n - 1) * 100) + '%');
        const ticks = t.parentElement.querySelectorAll('.ws-ticks i');
        ticks.forEach(el => {
          const pos = parseFloat(el.style.left) / 100 * (n - 1);
          el.classList.toggle('on', pos <= v + 0.001);
        });
        const valEl = body.querySelector('[data-v="' + id + '"]');
        if (valEl) valEl.textContent = opts[v];
      } else if (t.type === 'checkbox' && t.hasAttribute('data-ck')) {
        advData.cks[t.getAttribute('data-ck')] = t.checked;
      }
    };
    body.addEventListener('input', onInput);
    body.addEventListener('change', onInput);
  }
  const panel = sh.querySelector('.sheet-panel');
  const grip = sh.querySelector('.sheet-grip');
  if (panel && grip && grip.addEventListener) {
    let gDrag = false, gY = 0, gD = 0;
    grip.addEventListener('pointerdown', e => {
      if (e.button != null && e.button !== 0) return;
      gDrag = true; gY = e.clientY; gD = 0;
      panel.style.transition = 'none';
      try { grip.setPointerCapture(e.pointerId); } catch (err) {}
    });
    grip.addEventListener('pointermove', e => {
      if (!gDrag) return;
      gD = Math.max(0, e.clientY - gY);
      panel.style.transform = 'translateY(' + gD + 'px)';
    });
    const gEnd = () => {
      if (!gDrag) return;
      gDrag = false;
      panel.style.transition = '';
      if (gD > 60) {
        panel.style.transform = 'translateY(calc(100% + 16px))';
        closeSheet();
      } else {
        panel.style.transform = '';
      }
    };
    grip.addEventListener('pointerup', gEnd);
    grip.addEventListener('pointercancel', gEnd);
  }
  const apply = $('#btnAdvApply');
  if (apply) apply.onclick = () => { advSave(); closeSheet(); toast('Расширенные настройки применены'); };
}

function bindGfx() {
  try {
    let g = localStorage.getItem('bo_gfx') || '';
    if (localStorage.getItem('bo_gfx_v') !== '2') {
      g = GFX_MIGRATE[g] || g;
      try { localStorage.setItem('bo_gfx_v', '2'); } catch (e0) {}
    }
    if (!GFX_PAIRS[g]) g = 'high';
    gfxPreset = g;
    const w = JSON.parse(localStorage.getItem('bo_gfx_wipe') || 'null');
    if (w) Object.keys(w).forEach(k => {
      if (GFX_PAIRS[k] && typeof w[k] === 'number' && w[k] >= 0 && w[k] <= 100) gfxWipe[k] = w[k];
    });
    gfxCompare = localStorage.getItem('bo_gfx_cmp') === '1';
  } catch (e) {}
  advInit();
  document.querySelectorAll('.preset-card').forEach(c => {
    c.onclick = () => applyGfx(c.getAttribute('data-preset'));
  });
  const view = $('#view-graphics');
  const gfxBg = $('#gfxBg');
  let dragPhase = 0;
  let dStart = null;
  const h = document.getElementById('gfxHandle');
  const dropOn = () => { if (h && h.classList) h.classList.add('drag'); };
  const dropOff = () => { if (h && h.classList) h.classList.remove('drag'); };
  const move = (e, animate) => {
    const w = window.innerWidth || 0;
    if (!w) return;
    gfxSetWipe((e.clientX / w) * 100, !!animate);
  };
  const onDown = e => {
    if (e.button != null && e.button !== 0) return;
    if (!gfxCompare) return;
    if (e.target && e.target.closest && e.target.closest('.preset-card, button, a, input')) return;
    if (e.preventDefault) e.preventDefault();
    dragPhase = 1;
    dStart = { x: e.clientX || 0, y: e.clientY || 0 };
    dropOn();
    const root = e.currentTarget;
    if (root && root.setPointerCapture && e.pointerId != null) {
      try { root.setPointerCapture(e.pointerId); } catch (err) {}
    }
    move(e, true);
  };
  const onMove = e => {
    if (!dragPhase || !dStart) return;
    if (dragPhase === 1) {
      const dx = (e.clientX || 0) - dStart.x;
      const dy = (e.clientY || 0) - dStart.y;
      if (dx * dx + dy * dy < 49) return;
      dragPhase = 2;
    }
    move(e, false);
  };
  const onUp = () => { dragPhase = 0; dStart = null; dropOff(); };
  [view, gfxBg, h].forEach(root => {
    if (root && root.addEventListener) {
      root.addEventListener('pointerdown', onDown);
      root.addEventListener('pointermove', onMove);
      root.addEventListener('pointerup', onUp);
      root.addEventListener('pointercancel', onUp);
    }
  });
  window.addEventListener('resize', () => gfxApplyWipe(false));
  const btnCmp = $('#btnGfxCmp');
  if (btnCmp) {
    const syncCmp = () => {
      if (btnCmp.classList) btnCmp.classList.toggle('on', gfxCompare);
      btnCmp.setAttribute('data-tip', gfxCompare ? 'Показать только выбранный пресет' : 'Сравнить пресеты ползунком');
      if (gfxBg && gfxBg.classList) gfxBg.classList.toggle('cmp', gfxCompare);
      if (h && h.classList) h.classList.toggle('on', !!document.querySelector('.view.active#view-graphics') && gfxCompare);
    };
    syncCmp();
    btnCmp.onclick = () => {
      gfxCompare = !gfxCompare;
      try { localStorage.setItem('bo_gfx_cmp', gfxCompare ? '1' : '0'); } catch (e) {}
      syncCmp();
      gfxApplyWipe(true);
    };
  }
  const btnUi = $('#btnGfxUi');
  const btnOptUi = $('#btnOptUi');
  function bindUiToggle(btn) {
    if (!btn) return;
    btn.onclick = () => {
      const on = document.body.classList.toggle('ui-hidden');
      btn.setAttribute('data-tip', on ? 'Вернуть панели и кнопки' : 'Скрыть панели и оставить только фон');
      if (!on) { gfxLayout(); gfxApplyWipe(true); }
    };
  }
  bindUiToggle(btnUi);
  bindUiToggle(btnOptUi);
  document.addEventListener('keydown', e => {
    if ((e.key === 'Escape' || e.key === 'Esc') && document.body.classList.contains('ui-hidden')) {
      const b = (currentView === 'optimize' ? btnOptUi : btnUi) || btnUi;
      if (b) b.click();
    }
  });
  const btnAdv = $('#btnGfxSettings');
  if (btnAdv) btnAdv.onclick = () => {
    const sheet = $('#gfxSheet');
    if (sheet && !sheet.hidden) closeSheet();
    else openSheet();
  };
  window.addEventListener('resize', () => {
    gfxLayout();
    const sh = $('#gfxSheet');
    if (sh && !sh.hidden) sheetLayout();
  });
  try {
    const gfxView = document.getElementById('view-graphics');
    if (window.ResizeObserver && gfxView && !window.__gfxRO) {
      window.__gfxRO = new ResizeObserver(() => gfxLayout());
      window.__gfxRO.observe(gfxView);
      const gfxGrid = gfxView.querySelector('.preset-grid');
      if (gfxGrid) window.__gfxRO.observe(gfxGrid);
    }
  } catch (e) {}
  bindSheet();
  applyGfx(gfxPreset, true);
  gfxLayout();
}

/* ---------------- modal ---------------- */
/* мод меняется или страница открывается заново — контент мода всплывает со стаггером */
/* ---------------- summary ---------------- */
function renderSummary() {
  if (!manifest) return;
  const pathInput = $('#installPathInput');
  if (pathInput && document.activeElement !== pathInput) {
    pathInput.value = info.installPath || info.gamePath || '';
  }

  const ps = $('#pathStatus');
  if (!info.gamePath) {
    ps.textContent = 'Папка не найдена — укажите вручную';
    ps.className = 'path-status err';
  } else {
    ps.textContent = 'Отредактируйте или нажмите «Обзор...»';
    ps.className = 'path-status ok';
  }

  const cn = $('#compatNote');
  if (info.gameVersion && info.minGameVersion && compareVers(info.gameVersion, info.minGameVersion) < 0) {
    cn.hidden = false;
    cn.textContent = 'Версия клиента (' + info.gameVersion + ') ниже минимальной для этой сборки (' + info.minGameVersion + '). Установка может работать некорректно.';
  } else {
    cn.hidden = true;
  }

  const list = $('#summaryList');
  list.innerHTML = '';
  const cap1 = s => { s = String(s || ''); return s ? s.charAt(0).toLowerCase() + s.slice(1) : s; };
  const gfxName = (GFX_PAIRS[gfxPreset] || {}).name || 'Не изменять';
  if (gfxPreset && gfxPreset !== 'none') {
    const gfxRow = document.createElement('div');
    gfxRow.className = 'sum-row sum-gfx';
    gfxRow.innerHTML = '<span class="sum-name">Графика: пресет «' + esc(gfxName) + '» вкл.</span><span class="sum-row-size">—</span><button class="sum-x" data-tip="Убрать">&times;</button>';
    gfxRow.querySelector('.sum-x').onclick = () => { applyGfx('none', true); renderSummary(); };
    list.appendChild(gfxRow);
  }
  const catLabel = c => (c === 'performance' ? 'Оптимизация' : (CAT_LABELS[c] || c));
  const selMods = manifest.mods.filter(m => selected.has(m.id));
  const groups = {};
  selMods.forEach(m => { (groups[m.category] = groups[m.category] || []).push(m); });
  const xvmOptRows = [];
  if (xvmSpec && xvmById) {
    xvmSpec.nodes.forEach(n => {
      if (n.type === 'radio' || n.type === 'group') return;
      if (n.type === 'check' && xvmDescChecks(n).length) return;
      if (xvmValue(n.id) === 'on') xvmOptRows.push(n);
    });
  }
  const addRow = (label, nameHtml, size, extra, onX) => {
    const r = document.createElement('div');
    r.className = 'sum-row';
    r.innerHTML = '<span class="sum-name">' + label + ': ' + nameHtml + ' вкл.</span><span class="sum-row-size">' + size + '</span>' + extra;
    if (onX) r.querySelector('.sum-x').onclick = onX;
    list.appendChild(r);
  };
  const catKeys = Object.keys(groups).sort((a, b) => catLabel(a).localeCompare(catLabel(b), 'ru'));
  if (groups.performance) catKeys.splice(catKeys.indexOf('performance'), 1);
  if (groups.performance) catKeys.unshift('performance');
  let xvmEmitted = false;
  const emitXvmOpts = () => {
    xvmOptRows.forEach(n => {
      addRow('XVM', esc(cap1(n.label)), String(n.size).replace('.', ',') + ' Мб',
        '<button class="sum-x" data-tip="Убрать">&times;</button>',
        () => { xvmToggle(n.id); afterOptChange(); });
    });
    xvmEmitted = true;
  };
  catKeys.forEach(cat => {
    groups[cat].forEach(m => {
      const auto = m.hidden && m.group === 'xvm';
      addRow(catLabel(cat), esc(cap1(m.name)), fmtBytes(m.size),
        auto ? '<span class="sum-auto" data-tip="Подключается автоматически с опциями XVM">авто</span>' : '<button class="sum-x" data-tip="Убрать">&times;</button>',
        auto ? null : () => { toggleSelect(m.id); renderSummary(); });
    });
    if (cat === 'xvm' && xvmOptRows.length) emitXvmOpts();
  });
  if (xvmOptRows.length && !xvmEmitted) emitXvmOpts();
  renderSelection();
  renderDlMeta();
}

function compareVers(a, b) {
  const pa = String(a).split('.').map(Number);
  const pb = String(b).split('.').map(Number);
  for (let i = 0; i < 4; i++) {
    const x = pa[i] || 0, y = pb[i] || 0;
    if (x !== y) return x - y;
  }
  return 0;
}

/* ---------------- install flow ---------------- */
function setDlStep(n) {
  document.querySelectorAll('.dl-step').forEach(el => {
    const s = +el.getAttribute('data-step');
    el.classList.toggle('on', s === n);
    el.classList.toggle('done', s < n);
  });
}

/* ---------------- maintenance options ---------------- */
const MAINT_OPTS = [
  ['optWipeMods', 'wipeMods'],
  ['optCleanLogs', 'cleanLogs'],
  ['optResetGame', 'resetGame'],
  ['optWipeConfigs', 'wipeConfigs'],
  ['optUnhide', 'unhideTanks'],
  ['optShortcut', 'startShortcut'],
  ['optNoTelemetry', 'noTelemetry']
];
const MAINT_DEFAULTS = { wipeMods: true, cleanLogs: true, resetGame: false, wipeConfigs: false, unhideTanks: false, startShortcut: true, noTelemetry: false };

function initMaintOpts() {
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem('bo_opts') || 'null'); } catch (e) { saved = null; }
  MAINT_OPTS.forEach(pair => {
    const el = document.getElementById(pair[0]);
    if (!el) return;
    if (saved && typeof saved === 'object' && Object.prototype.hasOwnProperty.call(saved, pair[1])) el.checked = !!saved[pair[1]];
    else el.checked = MAINT_DEFAULTS[pair[1]];
    el.onchange = saveMaintOpts;
  });
}

function saveMaintOpts() {
  try { localStorage.setItem('bo_opts', JSON.stringify(collectInstallOpts())); } catch (e) {}
}

function collectInstallOpts() {
  const out = {};
  MAINT_OPTS.forEach(pair => {
    const el = document.getElementById(pair[0]);
    out[pair[1]] = !!(el && el.checked);
  });
  return out;
}

function collectAdv() {
  const out = {};
  ADV.sliders.forEach(s => {
    const opts = advSlOpts(s);
    let val = advData.vals[s.id];
    if (typeof val !== 'number') val = s.v;
    if (val >= opts.length) val = opts.length - 1;
    if (val < 0) val = 0;
    if (val !== s.v) out[advKeyFor(s)] = String(val);
  });
  ADV.checks.forEach(c => {
    const val = !!advData.cks[c.id];
    if (val !== !!c.v) out[c.key] = val ? '1' : '0';
  });
  return out;
}

/* ---------------- XVM option tree ---------------- */
let xvmSpec = null;
let xvmById = null;
let xvmState = {};

function loadXvmOptions() {
  fetch('xvm-options.json').then(r => r.json()).then(spec => {
    if (!spec || !Array.isArray(spec.nodes) || !spec.nodes.length) return;
    xvmSpec = spec;
    const map = {};
    spec.nodes.forEach(n => { map[n.id] = n; });
    xvmById = map;
    const st = {};
    spec.nodes.forEach(n => {
      if (n.type !== 'check') return;
      st[n.id] = false;
    });
    try {
      const saved = JSON.parse(localStorage.getItem('bo_xvm_opts') || 'null');
      if (saved && typeof saved === 'object') {
        Object.keys(saved).forEach(k => { if (k in st) st[k] = !!saved[k]; });
      }
    } catch (e) {}
    xvmState = st;
    syncXvmCore();
    renderCats();
    renderMods();
  }).catch(() => {});
}

function saveXvmState() {
  try { localStorage.setItem('bo_xvm_opts', JSON.stringify(xvmState)); } catch (e) {}
}

function xvmChildren(id) {
  if (!xvmSpec) return [];
  return xvmSpec.nodes.filter(n => n.parent === id);
}

function xvmAncestorsOn(n) {
  let p = n && n.parent ? xvmById[n.parent] : null;
  while (p) {
    if (p.type === 'check' && xvmState[p.id] !== true) return false;
    p = p.parent ? xvmById[p.parent] : null;
  }
  return true;
}

function xvmDescChecks(n, out) {
  out = out || [];
  xvmChildren(n.id).forEach(c => {
    if (c.type === 'radio') return;
    if (c.type === 'check') out.push(c);
    xvmDescChecks(c, out);
  });
  return out;
}

function xvmValue(id) {
  const n = xvmById ? xvmById[id] : null;
  if (!n) return 'off';
  const par0 = n.parent ? xvmById[n.parent] : null;
  if (par0 && par0.type === 'radio') return xvmState[id] === true ? 'on' : 'off';
  if (n.type === 'check') return (xvmState[id] === true && xvmAncestorsOn(n)) ? 'on' : 'off';
  const kids = xvmDescChecks(n);
  if (!xvmAncestorsOn(n) || !kids.length) return 'off';
  const on = kids.filter(c => xvmState[c.id] === true).length;
  if (on === kids.length) return 'on';
  return on === 0 ? 'off' : 'part';
}

function xvmSet(id, val) {
  const n = xvmById ? xvmById[id] : null;
  if (!n) return;
  if (n.type === 'check') xvmState[id] = !!val;
  if (n.type === 'check' || n.type === 'group') {
    xvmDescChecks(n).forEach(c => { xvmState[c.id] = !!val; });
  }
  if (val) xvmRaiseOn(n);
}

function xvmRaiseOn(n) {
  let p = n;
  while (p) {
    if (p.type === 'check') xvmState[p.id] = true;
    p = p.parent ? xvmById[p.parent] : null;
  }
}

function xvmGroupStats(n) {
  let total = 0, on = 0;
  const walk = node => {
    xvmChildren(node.id).forEach(c => {
      if (c.type === 'radio') {
        total++;
        const ch = xvmChildren(c.id).filter(x => x.type === 'check');
        if (ch.some(x => xvmState[x.id] === true)) on++;
      } else if (c.type === 'check') {
        total++;
        if (xvmState[c.id] === true) on++;
        walk(c);
      } else walk(c);
    });
  };
  walk(n);
  if (n.type === 'check') {
    total++;
    if (xvmState[n.id] === true) on++;
  }
  return { total: total, on: on };
}

function xvmGroupSet(id, on) {
  const n = xvmById ? xvmById[id] : null;
  if (!n) return;
  const walk = node => {
    xvmChildren(node.id).forEach(c => {
      if (c.type === 'radio') {
        const ch = xvmChildren(c.id).filter(x => x.type === 'check');
        if (!on) { ch.forEach(x => { xvmState[x.id] = false; }); return; }
        if (!ch.some(x => xvmState[x.id] === true)) {
          const pick = ch.find(x => x.id === c.def) || ch[0];
          if (pick) { xvmState[pick.id] = true; walk(pick); }
        }
      } else if (c.type === 'check') {
        xvmState[c.id] = on;
        walk(c);
      } else walk(c);
    });
  };
  walk(n);
  if (n.type === 'check') xvmState[n.id] = on;
  if (on) xvmRaiseOn(n);
  saveXvmState();
  afterOptChange();
}

function xvmToggle(id) {
  const n = xvmById ? xvmById[id] : null;
  if (!n || n.type === 'radio') return;
  if (n.type === 'group') xvmSet(id, xvmValue(id) !== 'on');
  else xvmSet(id, xvmState[id] !== true);
  saveXvmState();
}

function xvmPick(childId) {
  const n = xvmById ? xvmById[childId] : null;
  const par = n && n.parent ? xvmById[n.parent] : null;
  if (!par || par.type !== 'radio') return;
  xvmChildren(par.id).forEach(c => { if (c.type === 'check') xvmState[c.id] = (c.id === childId); });
  xvmRaiseOn(par);
  saveXvmState();
}

function xvmPath(n) {
  const parts = [];
  let p = n && n.parent ? xvmById[n.parent] : null;
  let guard = 0;
  while (p && p.parent && guard++ < 20) {
    parts.unshift(p.label);
    p = p.parent ? xvmById[p.parent] : null;
  }
  return parts.join(' → ') || 'XVM';
}

function xvmBranchId(n) {
  if (!n || !xvmById) return 'ui';
  let cur = n;
  let guard = 0;
  while (cur && cur.parent && xvmById[cur.parent] && xvmById[cur.parent].parent && guard++ < 20) {
    cur = xvmById[cur.parent];
  }
  return cur && cur.id ? cur.id : 'ui';
}

function optSummary(n) {
  if (n.type === 'group') return 'группа настроек · ' + xvmDescChecks(n).length + ' опций';
  if (n.type === 'radio') return 'варианты выбора · ' + xvmChildren(n.id).length + ' шт.';
  const st = xvmValue(n.id);
  const on = st === 'on' || st === 'part';
  const par = n.parent && xvmById ? xvmById[n.parent] : null;
  if (par && par.type === 'radio') return (on ? 'сейчас выбрано' : 'сейчас не выбрано') + ' · вариант выбора';
  if (Array.isArray(n.patch) && n.patch.length) {
    const state = st === 'on' ? 'сейчас включено' : st === 'part' ? 'включено частично' : 'сейчас выключено';
    return state + ' · настройка XVM';
  }
  return 'настройка XVM';
}

function optDesc(n) {
  const st = xvmValue(n.id);
  const state = st === 'on' ? 'Сейчас включено.' :
    st === 'part' ? 'Включено частично — часть вложенных опций активна.' : 'Сейчас выключено.';
  if (Array.isArray(n.patch) && n.patch.length) {
    const plural = n.patch.length === 1 ? 'параметр' : 'параметры';
    return state + ' Раздел «' + xvmPath(n) + '». Меняет ' + n.patch.length + ' ' + plural +
      ' в конфигурации XVM — применяется при установке сборки.';
  }
  if (n.type === 'group') return state + ' Группа: объединяет ' + xvmDescChecks(n).length + ' вложенных опций.';
  if (n.type === 'radio') return state + ' Вариант выбора из ' + xvmChildren(n.id).length + '.';
  return state + ' Настройка XVM.';
}

function optMatches(n) {
  if (!query) return true;
  const q = query.toLowerCase();
  return (n.label + ' ' + xvmPath(n)).toLowerCase().indexOf(q) >= 0;
}

function syncXvmCore() {
  if (!xvmSpec || !xvmById) return;
  let anyOn = false;
  xvmSpec.nodes.forEach(n => {
    if (anyOn || n.type !== 'check') return;
    if (xvmDescChecks(n).length) return;
    if (xvmState[n.id] !== true) return;
    if (!xvmAncestorsOn(n)) return;
    anyOn = true;
  });
  if (anyOn) {
    selected.add('xvm');
    selected.add('xvm-crashfix');
  } else {
    selected.delete('xvm');
    selected.delete('xvm-crashfix');
  }
}

function afterOptChange() {
  syncXvmCore();
  renderMods();
  updateToggleAll();
  renderSummary();
  persistSelection();
}

function xvmBuildPatches() {
  if (!xvmSpec || !xvmById) return [];
  if (!selected.has('xvm')) return [];
  const out = [];
  xvmSpec.nodes.forEach(n => {
    if (n.type !== 'check' || !Array.isArray(n.patch) || !n.patch.length) return;
    const eff = xvmState[n.id] === true && xvmAncestorsOn(n);
    const par = n.parent ? xvmById[n.parent] : null;
    n.patch.forEach(p => {
      if (par && par.type === 'radio') {
        if (eff && p.on !== undefined) out.push({ file: p.file, path: p.path, value: p.on });
        return;
      }
      if (eff) { if (p.on !== undefined) out.push({ file: p.file, path: p.path, value: p.on }); }
      else if (p.off !== undefined) out.push({ file: p.file, path: p.path, value: p.off });
    });
  });
  return out;
}

function startInstall() {
  const path = $('#installPathInput').value.trim();
  if (!path) { toast('Укажите папку с игрой', true); showView('settings'); return; }
  if (!licenseAccepted) {
    toast('Примите лицензионное соглашение', true);
    showView('license');
    return;
  }
  syncXvmCore();
  const sendSel = Array.from(selected);
  const sendGfx = gfxPreset;
  if (!sendSel.length && (!sendGfx || sendGfx === 'none')) {
    toast('Выберите моды, оптимизацию или пресет графики', true);
    showView('mods');
    return;
  }
  installing = true;
  info.installPath = path;
  $('#installTitle').textContent = 'Установка сборки';
  $('#installSub').textContent = 'Копирование файлов...';
  $('#progressBar').style.width = '0%';
  $('#progressPct').textContent = '0%';
  $('#progressStatus').textContent = 'Подготовка...';
  $('#logBox').innerHTML = '';
  $('#dlIdle').hidden = true;
  $('#dlDone').hidden = true;
  $('#dlProgress').hidden = false;
  const dBadge = $('#dlStatusBadge');
  if (dBadge) dBadge.textContent = 'установка';
  setDlStep(2);
  showView('downloads');
  send({ action: 'install', path: path, selected: sendSel, runGame: $('#chkRunGame').checked, gfx: sendGfx, opts: collectInstallOpts(), xvm: xvmBuildPatches() || [], adv: collectAdv() });
  pollTimer = setInterval(pollProgress, 350);
}

function pollProgress() {
  send({ action: 'progress' });
}

function addLogLine(line) {
  const box = $('#logBox');
  const d = document.createElement('div');
  d.textContent = line;
  box.appendChild(d);
  box.scrollTop = box.scrollHeight;
}

function finishInstall(data) {
  clearInterval(pollTimer);
  installing = false;
  $('#dlProgress').hidden = true;
  $('#dlIdle').hidden = true;
  $('#dlDone').hidden = false;
  setDlStep(3);
  if (data.error) {
    $('#installTitle').textContent = 'Ошибка установки';
    $('#installSub').textContent = data.error;
    toast('Установка не завершилась', true);
    $('#doneTitle').textContent = 'Ошибка';
    $('#doneSub').textContent = data.error;
    $('#doneStats').innerHTML = '<span class="badge err"><b>не установлено</b></span>';
    const dBadge = $('#dlStatusBadge');
    if (dBadge) dBadge.textContent = 'ошибка';
    showView('downloads');
  } else {
    $('#doneTitle').textContent = 'Готово!';
    $('#doneSub').textContent = 'Сборка «' + manifest.packName + '» установлена. Приятной игры!';
    $('#doneStats').innerHTML =
      '<span class="badge"><b>' + selected.size + '</b> модов</span>' +
      '<span class="badge">путь <b style="color:#f2f0ea">' + info.installPath + '</b></span>';
    toast('Установка завершена');
    const dBadge = $('#dlStatusBadge');
    if (dBadge) dBadge.textContent = 'готово';
    showView('downloads');
  }
}

/* ---------------- events ---------------- */
function bindEvents() {
  document.querySelectorAll('.side-item').forEach(btn => {
    btn.onclick = () => navigateTo(btn.getAttribute('data-view'));
  });
  const home = $('#btnHome');
  if (home) home.onclick = () => navigateTo('welcome');

  document.querySelectorAll('[data-nav]').forEach(b => {
    b.onclick = () => navigateTo(b.getAttribute('data-nav'));
  });

  const startWelcome = () => navigateTo(licenseAccepted ? 'graphics' : 'license');
  const bwn = $('#btnWelcomeNext');
  if (bwn) bwn.onclick = startWelcome;

  const btnAcc = $('#btnLicenseAccept');
  if (btnAcc) {
    btnAcc.onclick = () => {
      licenseAccepted = true;
      localStorage.setItem('bo_eula', '1');
      toast('Соглашение принято');
      navigateTo('graphics');
    };
  }

  $('#btnPickGame').onclick = () => send({ action: 'pick-folder' });
  const chg = $('#btnChangeGame');
  if (chg) chg.onclick = () => {
    const st = $('#detectStatus');
    if (st) {
      st.textContent = 'поиск…';
      st.className = 'detect-status checking';
    }
    send({ action: 'rescan' });
  };
  const openLic = $('#btnOpenLicense');
  if (openLic) openLic.onclick = () => navigateTo('license');
  const licModal = $('#licenseModal');
  if (licModal) {
    licModal.querySelectorAll('[data-close]').forEach(el => el.onclick = () => closeLicense());
  }
  const licNext = $('#btnLicenseNext');
  if (licNext) licNext.onclick = () => {
    licenseAccepted = true;
    localStorage.setItem('bo_eula', '1');
    closeLicense();
    toast('Соглашение принято');
  };
  $('#btnModsNext').onclick = () => {
    if (!selected.size) { toast('Выберите хотя бы один мод', true); return; }
    navigateTo('settings');
  };
  const setNext = $('#btnSettingsNext');
  if (setNext) setNext.onclick = startInstall;
  document.querySelectorAll('[data-goto]').forEach(b => {
    b.onclick = () => showView(b.getAttribute('data-goto'));
  });
  const startBtn = $('#btnStartInstall');
  if (startBtn) startBtn.onclick = startInstall;
  $('#btnDoneClose').onclick = () => send({ action: 'close' });
  const doneBack = $('#btnDoneBack');
  if (doneBack) doneBack.onclick = () => navigateTo('settings');

  bindGfx();

  $('#searchInput').addEventListener('input', e => { query = e.target.value.trim(); renderMods(); updateToggleAll(); });
  $('#btnToggleAll').onclick = () => {
    const vis = manifest.mods.filter(m => !m.hidden && modMatches(m));
    const allSel = vis.length && vis.every(m => selected.has(m.id));
    vis.forEach(m => allSel ? selected.delete(m.id) : selected.add(m.id));
    renderMods(); renderSelection(); updateToggleAll(); renderOptimize(); persistSelection(); renderSummary();
  };

  $('#btnBrowse').onclick = () => send({ action: 'pick-folder' });
  const pathInput = $('#installPathInput');
  if (pathInput) {
    let pathTimer = null;
    pathInput.addEventListener('input', () => {
      clearTimeout(pathTimer);
      pathTimer = setTimeout(() => {
        const v = pathInput.value.trim();
        if (v) send({ action: 'set-path', path: v });
      }, 500);
    });
    pathInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        clearTimeout(pathTimer);
        const v = pathInput.value.trim();
        if (v) send({ action: 'set-path', path: v });
      }
    });
  }
  $('#chkSaveSel').onchange = e => { localStorage.setItem('bo_save', e.target.checked ? '1' : '0'); persistSelection(); };

  $('#btnClose').onclick = () => {
    if (installing) return;
    send({ action: 'close' });
  };
  let themeAnimT = 0;
  $('#btnTheme').onclick = () => {
    const root = document.documentElement;
    root.classList.add('theme-anim');
    const xfade = [];
    const bgGrab = function (box, sel, active) {
      if (!active || !box) return;
      const src = box.querySelector(sel);
      if (!src) return;
      const old = getComputedStyle(src).backgroundImage;
      if (!old || old === 'none') return;
      src.classList.remove('bg-x', 'x-out');
      src.style.removeProperty('--bgXo');
      void src.offsetWidth;
      src.style.setProperty('--bgXo', old);
      src.classList.add('bg-x');
      xfade.push(src);
    };
    const modsBox = document.querySelector('#modsBg');
    const setBox = document.querySelector('#setBg');
    const dlBox = document.querySelector('#dlBg');
    const bgOn = function (b) { return !!b && b.classList.contains('on'); };
    bgGrab(modsBox, '.mods-img', bgOn(modsBox));
    bgGrab(modsBox, '.mods-scrim', bgOn(modsBox));
    bgGrab(setBox, '.set-img', bgOn(setBox));
    bgGrab(dlBox, '.dl-img', bgOn(dlBox));
    const wel = document.body.classList.contains('wel-bg');
    bgGrab(document.body, '.bg-under', wel);
    bgGrab(document.body, '.bg-layer', wel);
    const light = !root.classList.toggle('theme-dark');
    try { localStorage.setItem('bo_theme_candidate', light ? 'light' : 'dark'); } catch (e) {}
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        xfade.forEach(function (s) { s.classList.add('x-out'); });
      });
    });
    setTimeout(function () {
      xfade.forEach(function (s) {
        s.classList.remove('bg-x', 'x-out');
        s.style.removeProperty('--bgXo');
      });
    }, 700);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        if (window.__autoContrast) window.__autoContrast();
      });
    });
    clearTimeout(themeAnimT);
    themeAnimT = setTimeout(function () { root.classList.remove('theme-anim'); }, 660);
  };
  $('#btnMin').onclick = () => send({ action: 'minimize' });
  $('#btnMax').onclick = () => send({ action: 'maximize' });
  $('#titlebar').addEventListener('mousedown', e => {
    if (e.button !== 0) return;
    if (e.target.closest('.titlebar-btn')) return;
    if (e.target === $('#titlebar') || e.target === $('#titlebar').querySelector('.titlebar-drag') || e.target.classList.contains('titlebar-name') || e.target.classList.contains('titlebar-sep') || e.target.classList.contains('titlebar-sub')) send({ action: 'drag' });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const lm = $('#licenseModal');
      if (lm && !lm.hidden) closeLicense();
    }
  });
}

/* fixed global tooltips (backdrop-blur works outside stacking contexts) */
(function initTooltips() {
  const tip = document.createElement('div');
  tip.className = 'gtip';
  tip.hidden = true;
  document.body.appendChild(tip);
  let cur = null;
  let hideT = 0;
  let showT = 0;
  let pend = null;
  function show(el) {
    const t = el.getAttribute('data-tip');
    if (!t) return;
    if (el.closest && el.closest('.sheet-panel')) return;
    const changed = cur !== el;
    cur = el;
    tip.textContent = t;
    clearTimeout(hideT);
    tip.hidden = false;
    if (changed) {
      tip.classList.remove('show');
      void tip.offsetWidth;
    }
    tip.classList.add('show');
    const r = el.getBoundingClientRect();
    const tw = tip.offsetWidth, th = tip.offsetHeight;
    let x, y;
    const inSide = el.classList.contains('side-logo') || el.classList.contains('side-item') || el.classList.contains('side-count');
    if (inSide) {
      x = r.right + 10;
      y = r.top + r.height / 2 - th / 2;
    } else if (el.closest('.titlebar')) {
      x = r.left + r.width / 2 - tw / 2;
      y = r.bottom + 8;
    } else {
      x = r.left + r.width / 2 - tw / 2;
      y = r.top - th - 8;
      if (y < 6) y = r.bottom + 8;
    }
    y = Math.max(6, Math.min(y, window.innerHeight - th - 6));
    let minX = 6;
    const sbEl = document.querySelector('.sidebar');
    if (sbEl) {
      const sbr = sbEl.getBoundingClientRect();
      if (sbr.right > 8) minX = sbr.right + 8;
    }
    const maxX = window.innerWidth - tw - 6;
    x = maxX > minX ? Math.max(minX, Math.min(x, maxX)) : Math.max(6, maxX);
    tip.style.left = x + 'px';
    tip.style.top = y + 'px';
  }
  function hide() {
    cur = null;
    pend = null;
    clearTimeout(showT);
    tip.classList.remove('show');
    clearTimeout(hideT);
    hideT = setTimeout(() => {
      if (!tip.classList.contains('show')) tip.hidden = true;
    }, 400);
  }
  document.addEventListener('mouseover', e => {
    const el = e.target.closest && e.target.closest('[data-tip]');
    if (el) {
      if (cur === el || pend === el) return;
      pend = el;
      clearTimeout(showT);
      showT = setTimeout(() => { pend = null; show(el); }, 90);
    } else if (cur || pend) {
      hide();
    }
  });
  document.addEventListener('mouseout', e => {
    const el = e.target.closest && e.target.closest('[data-tip]');
    if (!el) return;
    const to = e.relatedTarget;
    if (to && to.closest && to.closest('[data-tip]')) return;
    if (pend === el) { pend = null; clearTimeout(showT); }
    if (cur === el) hide();
  });
  window.addEventListener('scroll', hide, true);
})();

/* page titles get the icon from their sidebar button */
(function headIcons() {
  document.querySelectorAll('.view-head').forEach(head => {
    const view = head.closest('.view');
    const h = head.querySelector('h2');
    if (!view || !h || h.querySelector('.head-ico')) return;
    const btn = document.querySelector('.side-item[data-view="' + view.id.replace('view-', '') + '"]');
    const src = btn && btn.querySelector('svg');
    if (!src) return;
    const ic = src.cloneNode(true);
    ic.classList.add('head-ico');
    h.insertBefore(ic, h.firstChild);
  });
})();

/* auto contrast: ink sampled from the live pixels under each icon and title */
(function autoContrast() {
  if (typeof Image === 'undefined') return;
  const img = new Image();
  function paint() {
    try {
      const W = window.innerWidth || 1280;
      const H = window.innerHeight || 800;
      const cv = document.createElement && document.createElement('canvas');
      if (!cv) return null;
      cv.width = W; cv.height = H;
      const ctx = cv.getContext && cv.getContext('2d');
      if (!ctx || !img.naturalWidth || !img.naturalHeight) return null;
      const sw = img.naturalWidth, sh = img.naturalHeight;
      /* same stack the user actually sees: body paint, the blurred scaled cover layer
         (oversized box, scale 1.24), then the masked main layer (same box, scale 1.03,
         radial mask fading at the edges where the titlebar sits), then the glow ellipses */
      let bgc = '#0a0a08';
      try {
        if (typeof getComputedStyle === 'function') bgc = getComputedStyle(document.body).backgroundColor || bgc;
      } catch (e) {}
      ctx.fillStyle = bgc;
      ctx.fillRect(0, 0, W, H);
      const stack = function (c, s) {
        const bx = -70, by = -70, bw = W + 140, bh = H + 140;
        const k = Math.max(bw / sw, bh / sh);
        c.save();
        c.translate(bx + bw / 2, by + bh / 2);
        c.scale(s, s);
        c.drawImage(img, -sw * k / 2, -sh * k / 2, sw * k, sh * k);
        c.restore();
      };
      ctx.save();
      if (typeof ctx.filter === 'string') ctx.filter = 'blur(14px) saturate(1.12)';
      stack(ctx, 1.24);
      ctx.restore();
      const under = document.createElement('canvas');
      under.width = W; under.height = H;
      const uctx = under.getContext && under.getContext('2d');
      if (uctx) {
        stack(uctx, 1.03);
        uctx.globalCompositeOperation = 'destination-in';
        const rad = uctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.sqrt((W + 140) * (W + 140) + (H + 140) * (H + 140)) / 2);
        rad.addColorStop(0, 'rgba(0,0,0,1)');
        rad.addColorStop(0.7, 'rgba(0,0,0,1)');
        rad.addColorStop(1, 'rgba(0,0,0,0)');
        uctx.fillStyle = rad;
        uctx.fillRect(0, 0, W, H);
        ctx.drawImage(under, 0, 0);
      }
      if (typeof getComputedStyle === 'function') {
        document.querySelectorAll('.glow-1,.glow-2,.glow-3').forEach(el => {
          try {
            const r = el.getBoundingClientRect();
            if (!(r.width > 1) || !(r.height > 1)) return;
            const cs = getComputedStyle(el);
            ctx.save();
            const op = parseFloat(cs.opacity);
            ctx.globalAlpha = isNaN(op) ? 1 : op;
            if (typeof ctx.filter === 'string' && cs.filter) ctx.filter = cs.filter;
            ctx.fillStyle = cs.backgroundColor || 'rgba(210,34,75,0.3)';
            ctx.beginPath();
            ctx.ellipse(r.left + r.width / 2, r.top + r.height / 2, Math.max(1, r.width / 2), Math.max(1, r.height / 2), 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          } catch (e) {}
        });
      }
      return { ctx: ctx, W: W, H: H };
    } catch (e) { return null; }
  }
  function lumUnder(ctx, W, H, r) {
    try {
      let x0 = Math.round(r.left), y0 = Math.round(r.top);
      let x1 = Math.round(r.right), y1 = Math.round(r.bottom);
      if (x1 - x0 < 3) { const m = (x0 + x1) >> 1; x0 = m - 4; x1 = m + 4; }
      if (y1 - y0 < 3) { const m = (y0 + y1) >> 1; y0 = m - 4; y1 = m + 4; }
      x0 = Math.max(0, x0); y0 = Math.max(0, y0); x1 = Math.min(W, x1); y1 = Math.min(H, y1);
      if (x1 <= x0 || y1 <= y0) return -1;
      const d = ctx.getImageData(x0, y0, x1 - x0, y1 - y0).data;
      let s = 0, n = 0;
      for (let i = 0; i < d.length; i += 4) { s += 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2]; n++; }
      return n ? s / n : -1;
    } catch (e) { return -1; }
  }
  function apply(el, l) {
    if (!el || !el.style || typeof el.style.setProperty !== 'function' || l < 0) return;
    if (l < 140) {
      el.style.setProperty('--side-ink', '#fff');
      el.style.setProperty('--side-ink-hi', '#fff');
      el.style.setProperty('--logo-filter', 'brightness(0) invert(1)');
      el.style.setProperty('--tb-ink', '#fff');
      el.style.setProperty('--tb-ink-soft', 'rgba(255,255,255,0.85)');
      el.style.setProperty('--tb-ink-dim', 'rgba(255,255,255,0.32)');
    } else {
      el.style.setProperty('--side-ink', 'rgba(0,0,0,0.55)');
      el.style.setProperty('--side-ink-hi', '#000');
      el.style.setProperty('--logo-filter', 'brightness(0)');
      el.style.setProperty('--tb-ink', '#111');
      el.style.setProperty('--tb-ink-soft', 'rgba(0,0,0,0.75)');
      el.style.setProperty('--tb-ink-dim', 'rgba(0,0,0,0.4)');
    }
  }
  function sample() {
    const light = !document.documentElement.classList.contains('theme-dark');
    const id = typeof currentView === 'string' ? currentView : 'welcome';
    /* R58: gfx/opt — тёмные скриншоты, хром там всегда светлый;
       welcome — сэмпл реальных панелей под элементом (обои);
       остальные страницы — чернила строго по теме (светлая тема → тёмный текст) */
    let forced = null;
    if (id === 'graphics' || id === 'optimize') forced = 0;
    else if (id !== 'welcome') forced = light ? 999 : 0;
    const p = forced === null ? paint() : null;
    const lum = function (el) {
      if (forced !== null) return forced;
      if (p) return lumUnder(p.ctx, p.W, p.H, el.getBoundingClientRect());
      return light ? 999 : 0;
    };
    document.querySelectorAll('.side-item').forEach(el => apply(el, lum(el)));
    const logo = document.querySelector('.side-logo');
    if (logo) apply(logo, lum(logo));
    const tt = document.querySelector('.titlebar-title');
    if (tt) apply(tt, lum(tt));
    document.querySelectorAll('.titlebar-btn').forEach(el => apply(el, lum(el)));
  }
  let sampleT = 0;
  img.onload = function () {
    clearTimeout(sampleT);
    if (document.documentElement.classList.contains('theme-anim')) sampleT = setTimeout(sample, 540);
    else sample();
  };
  let rt = 0;
  window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(sample, 200); });
  function loadSrc() {
    if (!document.documentElement.classList.contains('theme-dark')) img.src = 'assets/mainbg/mainbgwhite.jpg';
    else img.src = 'assets/mainbg/mainbgblack.jpg';
  }
  function refresh() { loadSrc(); sample(); }
  loadSrc();
  window.__autoContrast = refresh;
})();

/* ---------------- backend communication ---------------- */
function requestInfo() {
  send({ action: 'info' });
}

function openUrl(u) {
  if (!u) return;
  if (web) send({ action: 'open-url', url: String(u) });
  else { try { window.open(String(u), '_blank', 'noopener'); } catch (e) { } }
}

function renderRemote(d) {
  const items = [];
  if (d.linkDiscord) items.push({ t: 'Discord', u: d.linkDiscord });
  if (d.linkTelegram) items.push({ t: 'Telegram', u: d.linkTelegram });
  if (d.linkSite) items.push({ t: 'Сайт', u: d.linkSite });
  const hasUpd = !!(d.updateAvailable && d.updateVersion);
  if (hasUpd) items.push({ t: 'v' + d.updateVersion, u: d.updateUrl || 'https://github.com/MerinHolt/BEAST/releases/latest', cls: 'upd' });
  const host = $('#tbLinks');
  if (host) {
    host.innerHTML = items.map(i => '<button class="tb-link' + (i.cls ? ' ' + i.cls : '') +
      '" data-tip="Откроется в браузере">' + i.t + '</button>').join('');
    Array.prototype.forEach.call(host.children, (b, i) => {
      b.classList.add('on');
      b.addEventListener('click', () => openUrl(items[i].u));
    });
  }
  const bu = $('#badgeUpdate');
  if (bu) {
    if (hasUpd) {
      bu.hidden = false;
      bu.textContent = 'v' + d.updateVersion + ' доступно';
      bu.onclick = () => openUrl(items[items.length - 1].u);
    } else {
      bu.hidden = true;
      bu.onclick = null;
    }
  }
}

function handleMessage(e) {
  const d = e.data || {};
  if (!d.type) return;
  if (d.type === 'info') {
    info.installPath = d.installPath || '';
    info.gamePath = d.gamePath || '';
    info.gameVersion = d.gameVersion || '';
    info.minGameVersion = d.minGameVersion || '';
    info.alreadyInstalled = !!d.alreadyInstalled;
    if (d.gameIcon) info.gameIcon = d.gameIcon;
    info.gfxLevel = d.gfxLevel || '';
    info.gfxNear = d.gfxNear || '';
    info.gfxScore = (typeof d.gfxScore === 'number') ? d.gfxScore : -1;
    info.gfxPipeline = (typeof d.gfxPipeline === 'number') ? d.gfxPipeline : -1;
    info.gfxClient = d.gfxClient || '';
    if (!advModeSaved && (info.gfxPipeline === 0 || info.gfxPipeline === 1)) {
      const newMode = info.gfxPipeline === 1 ? 'standard' : 'improved';
      if (newMode !== advData.mode) {
        advData.mode = newMode;
        const gsh = $('#gfxSheet');
        if (gsh && !gsh.hidden) { buildSheet(true); sheetLayout(); }
      }
    }
    info.received = true;
    renderRemote(d);
    renderDetect();
    renderSummary();
    applyGfx(gfxPreset, true);
    send({ action: 'info-done' });
  } else if (d.type === 'path') {
    if (d.path) {
      info.installPath = d.path;
      info.gamePath = d.path;
      if (d.gameIcon) info.gameIcon = d.gameIcon;
      const pi = $('#installPathInput');
      if (pi) pi.value = d.path;
      renderDetect();
      renderSummary();
      requestInfo();
    }
  } else if (d.type === 'path-error') {
    toast(d.error || 'Не удалось изменить путь', true);
    const ps = $('#pathStatus');
    if (ps) {
      ps.textContent = d.error || 'Некорректный путь';
      ps.className = 'path-status err';
    }
  } else if (d.type === 'progress') {
    $('#progressBar').style.width = (d.percent || 0) + '%';
    $('#progressPct').textContent = (d.percent || 0) + '%';
    if (d.status) $('#progressStatus').textContent = d.status;
    if (d.log && d.log.length && d.log[d.log.length - 1] !== lastLogLine) {
      lastLogLine = d.log[d.log.length - 1];
      addLogLine(lastLogLine);
    }
    if (d.done) finishInstall(d);
  } else if (d.type === 'log') {
    d.log.forEach(addLogLine);
  }
}
let lastLogLine = '';

function init() {
  bindEvents();
  bindOptimize();
  initMaintOpts();

  if (web) {
    web.addEventListener('message', handleMessage);
  } else {
    $('#btnClose').onclick = null;
    $('#detectTitle').textContent = 'Предпросмотр в браузере';
    $('#detectSub').textContent = 'Запустите собранный инсталлер для полного функционала';
    $('#detectStatus').textContent = 'режим превью';
    $('#detectStatus').className = 'detect-status warn';
  }

  fetch('manifest.json').then(r => r.json()).then(m => {
    manifest = m;
    loadXvmOptions();
    const pn = $('#packName');
    if (pn) pn.textContent = m.packName;
    $('#tbPackVersion').textContent = 'сборка для «Мир танков» · v' + (m.minGameVersion || m.packVersion);
    document.querySelectorAll('.version').forEach(v => v.textContent = 'v' + m.packVersion);

    const saveSel = $('#chkSaveSel');
    if (saveSel) saveSel.checked = localStorage.getItem('bo_save') !== '0';
    if (saveSel && saveSel.checked) {
      try {
        const saved = JSON.parse(localStorage.getItem('bo_sel_' + m.packVersion) || '[]');
        saved.forEach(id => { if (m.mods.find(x => x.id === id)) selected.add(id); });
      } catch {}
    }

    $('#licenseBox').innerHTML = EULA;
    const lp = $('#licenseBoxPage');
    if (lp) lp.innerHTML = EULA;
    renderStart();
    renderCats();
    renderMods();
    renderSelection();
    updateToggleAll();
    renderSummary();
    renderStepper();
    renderDlMeta();
    setDlStep(1);
    requestInfo();
    retryInfo();
    showView('welcome');
  }).catch(err => {
    const pn = $('#packName');
    if (pn) pn.textContent = 'Ошибка загрузки';
    console.error(err);
    requestInfo();
    showView('welcome');
  });
}

function retryInfo() {
  let n = 0;
  const t = setInterval(() => {
    if (info.received) { clearInterval(t); return; }
    if (n++ >= 4) { clearInterval(t); renderDetect(); return; }
    requestInfo();
  }, 700);
}

init();
requestAnimationFrame(function () {
  requestAnimationFrame(function () { document.documentElement.classList.add('k-anim'); });
});

/* фон с параллаксом и наклоном от курсора — основной фон легче, фоны пресетов как раньше, ручка по координатам окна, стек «Оптимизации» параллелится с ним */
(function () {
  const bg = document.querySelector('.bg-layer');
  const optPar = document.querySelector('.opt-par');
  const modsPar = document.querySelector('.mods-img');
  const setPar = document.querySelector('.set-img');
  const dlPar = document.querySelector('.dl-img');
  const presetImgs = Array.prototype.slice.call(document.querySelectorAll('.gfx-base img:not(.gfx-blur), .gfx-top img:not(.gfx-blur)'));
  if (!bg) return;
  let tx = 0, ty = 0, cx = 0, cy = 0;
  let rx = 0, ry = 0, crx = 0, cry = 0;
  document.addEventListener('mousemove', e => {
    const nx = e.clientX / window.innerWidth - 0.5;
    const ny = e.clientY / window.innerHeight - 0.5;
    tx = -nx * 44;
    ty = -ny * 32;
    rx = -ny * 5;
    ry = nx * 8;
  });
  (function tick() {
    cx += (tx - cx) * 0.055;
    cy += (ty - cy) * 0.055;
    crx += (rx - crx) * 0.055;
    cry += (ry - cry) * 0.055;
    const head = 'perspective(1600px) translate3d(' + cx.toFixed(2) + 'px,' + cy.toFixed(2) + 'px,0) rotateX(' + crx.toFixed(3) + 'deg) rotateY(' + cry.toFixed(3) + 'deg) ';
    const tfMain = head + 'scale(1.03)';
    const tfGfx = head + 'scale(1.03)';
    bg.style.transform = tfMain;
    if (optPar) optPar.style.transform = tfMain;
    if (modsPar) modsPar.style.transform = tfMain;
    if (setPar) setPar.style.transform = tfMain;
  if (dlPar) dlPar.style.transform = tfMain;
    for (let i = 0; i < presetImgs.length; i++) presetImgs[i].style.transform = tfGfx;
    requestAnimationFrame(tick);
  })();
})();

/* прогрев декодирования фонов: обоев главной, фото оптимизации и картинок модов
   заранее, чтобы размытие главной и смена страниц/темы не ждали загрузки файлов */
(function preloadScene() {
  const urls = ['assets/mainbg/mainbgwhite.jpg', 'assets/mainbg/mainbgblack.jpg', 'assets/OptBg/base.webp', 'assets/mods/mods bg black.png', 'assets/mods/mods bg white.png', 'assets/settings/settingsbg black.jpg', 'assets/settings/settingsbg white.jpg', 'assets/download/download bg black.jpg', 'assets/download/download bg white.jpg'];
  for (let i = 0; i < urls.length; i++) { const im = new Image(); im.src = urls[i]; }
})();

/* прогрев backdrop-blur: все скрытые страницы/шторки/модалки один раз рисуются
   при открытии окна (до переключения), чтобы размытие фона было готово сразу.
   Один раз на сессию: повторный прогрев на каждом клике ронял fps */
(function prewarmBlurs() {
  const SEL = '.view, .sheet, .modal';
  let tm = 0;
  let warmed = false;
  function run() {
    if (warmed) return;
    warmed = true;
    const root = document.documentElement;
    let els;
    try { els = document.querySelectorAll(SEL); } catch (e) { return; }
    root.classList.add('prewarm-blur');
    for (let i = 0; i < els.length; i++) els[i].getBoundingClientRect();
    clearTimeout(tm);
    tm = setTimeout(function () {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          root.classList.remove('prewarm-blur');
        });
      });
    }, 180);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { requestAnimationFrame(run); });
  else requestAnimationFrame(run);
  window.addEventListener('pointerdown', run, true);
  window.addEventListener('keydown', run, true);
  window.__prewarmBlurs = function () { warmed = false; run(); };
})();

/* ПКМ не должна кликать по интерфейсу: системное контекстное меню WebView2
   выключено в Installer.cs, здесь — страховка для любого нативного меню */
document.addEventListener('contextmenu', e => { if (e && e.preventDefault) e.preventDefault(); });