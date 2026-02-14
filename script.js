/* ==========================================================================
   // 1) Configuración
   - Frases, constantes de UI y parámetros de animación.
   - Evitamos "magical numbers" usando constantes con nombre.
   ========================================================================== */

const PHRASES = [
    "Tu crush es el bug… pero tú eres el fix. 💖",
    "Hoy compilas a la primera (si no, reinicia y finge seguridad). 😌",
    "El amor es como Git: sin commit… no hay futuro. 🧠",
    "Te mereces alguien que te haga merge sin conflictos. 🫶",
    "Tu energía hoy: README bien documentado. ✨",
    "Si te ghostean, tú haz deploy en otra nube. ☁️",
    "Eres el main character… y también el main branch. 👑",
    "Que tus errores sean 404 y no de amor. 😭",
    "Te deseo un amor estable… tipo versión LTS. 🧷",
    "0 warnings, 0 toxicidad. 🌿",
    "Eres el CSS de mi HTML; sin ti, mi estructura es un desastre. 🎨",
    "<div>Lo nuestro</div> no necesita float, se posiciona solo. 🧘‍♂️",
    "Contigo tengo un z-index: 9999; nada se pone por encima de ti. 🔝",
    "Eres responsive: te adaptas perfectamente a mi vida. 📱",
    "Tu sonrisa tiene un border-radius: 50% perfecto. ⭕",
    "Quiero ser el padding que protege tu contenido. 🛡️",
    "display: flex; justify-content: center; align-items: you; 🧩",
    "Ni con !important alguien podría tener más prioridad que tú. ⚠️",
    "Eres mi Framework favorito: me facilitas la vida. 🏗️",
    "SELECT * FROM mi_corazon WHERE estado = 'enamorado' AND persona = 'Tú'; 💾",
    "Haces un INNER JOIN perfecto con mi alma. 🔗",
    "Eres mi Primary Key, única e irrepetible. 🔑",
    "Mi amor por ti no tiene límite de caracteres (VARCHAR(∞)). 📜",
    "Prometo hacer COMMIT a nuestra relación todos los días. 💍",
    "Jamás te haré un ROLLBACK. 🔙",
    "Eres la API que siempre responde 200 OK. ✅",
    "Nuestro amor tiene redundancia geográfica y alta disponibilidad. 🌍",
    "No necesito caché, siempre te tengo en memoria. 🧠",
    "Tú eres el microservicio que le faltaba a mi arquitectura monolítica. 🧱",
    "while(alive) { love(you); } 🔄",
    "if (tu == null) { throw new HeartBrokenException(); } 💔",
    "Eres el 'Hello World' de mi nueva vida. 👋",
    "Contigo no necesito hacer Debugging, todo funciona a la primera. 🐞",
    "Eres la única excepción que no quiero atrapar. 🎣",
    "Git push origin master? No, git push origin TU_CORAZON. 🚀",
    "Mi amor por ti compila sin warnings ni errores. 🟢",
    "Eres como un código bien documentado: clara, útil y necesaria. 📝",
    "Bucle infinito de ganas de verte. ♾️",
    "sudo apt-get install tus-besos 🐧",
    "import love as you 🐍",
    "Eres la clase Padre de la que heredo mis mejores atributos. 👪",
    "System.out.println('Te quiero'); // Y lo grito en consola 📢",
    "En un mundo de variables, tú eres mi constante. 💎",
    "Tú parseas mis días grises a Strings de colores. 🌈",
    "No eres un Bug, eres una Feature no documentada de mi felicidad. ✨",
    "Eres mi IDE favorito: completas mis frases. 💻",
    "Contigo mi latencia es de 0ms. ⚡",
    "¿Eres Google? Porque tienes todo lo que busco. 🔍",
    "Eres el ; que le faltaba a mi vida. 🦀",
    "Hagamos pair programming... en mi cama. 🛌",
    "Me pones el CPU al 100%. 🔥",
    "Eres la única cookie que no quiero borrar de mi navegador. 🍪",
    "Eres el refactor que mi corazón necesitaba. 💗",
    "Hoy haces deploy de tus sueños sin rollback. 🚀",
    "Tu sonrisa tiene más brillo que un monitor 4K. ✨",
    "Que tu semana tenga cero bugs y mil abrazos. 🐞🤍",
    "Tu energía es más estable que una versión LTS. 💎",
    "Eres mi variable favorita en este código llamado vida. 💕",
    "Si la vida lanza errores, tú compilas esperanza. 🌈",
    "Tu presencia es como un console.log de felicidad. 😌",
    "Que tu corazón siempre tenga conexión estable. 📡💖",
    "Hoy tu aura está en modo production. 🔥",
    "Eres el commit que sí vale la pena. 💌",
    "Tu risa tiene mejor performance que cualquier optimización. 😂",
    "Que el único crash hoy sea de carcajadas. 💥🤣",
    "Tu vibra es open source: compartes luz con todos. 🌟",
    "Eres el push que me motiva a seguir. 🚀",
    "Que tus metas siempre encuentren la ruta correcta. 🧭",
    "Tu talento tiene más impacto que un update global. 🌍",
    "Eres el main branch de este team increíble. 👑",
    "Que tu vida tenga más merges felices que conflictos. 🤝",
    "Tu energía es más fuerte que cualquier firewall. 🔥🛡️",
    "Que cada día sea un nuevo feature desbloqueado. 🎁",
    "Eres el código limpio en medio del caos. 🧼💻",
    "Tu amistad es el mejor framework de apoyo. 🏗️",
    "Que hoy tu corazón corra sin latencia. 💓",
    "Eres la actualización que mejora todo el sistema. 🔄✨",
    "Que tus sueños tengan prioridad alta. ⏫",
    "Tu actitud tiene más estilo que un UI perfecto. 🎨",
    "Hoy estás en modo unstoppable. 💪",
    "Tu creatividad tiene más colores que un tema dark-mode. 🌈🌙",
    "Que la vida te haga merge con cosas bonitas. 🌸",
    "Eres el test que siempre pasa con éxito. ✅",
    "Tu sonrisa es más rápida que un algoritmo eficiente. ⚡",
    "Que tus metas siempre hagan build correctamente. 🏗️",
    "Eres el patch que arregla cualquier error. 🩹",
    "Tu luz es más brillante que cualquier pantalla OLED. 🌟",
    "Que hoy todo te responda 200 OK. 🟢",
    "Eres el stack completo de cosas buenas. 📚",
    "Que tu corazón tenga uptime infinito. ♾️",
    "Tu presencia es el mejor upgrade del día. ⬆️",
    "Hoy tu felicidad corre en segundo plano constante. 🎶",
    "Eres el código elegante que todos admiran. 💫",
    "Que tus ideas tengan ancho de banda ilimitado. 📶",
    "Tu risa es el mejor sound effect del universo. 🎧",
    "Eres la línea de código que hace que todo funcione. 🔧",
    "Que tu vida tenga menos warnings y más celebraciones. 🎉",
    "Tu esencia tiene más magia que cualquier script secreto. 🪄",
    "Eres el debug que transforma dudas en claridad. 💡",
    "Que tu camino esté lleno de features increíbles. 🌟",
    "Tu amistad es el mejor backup emocional. 💾💖",
    "Hoy el universo te da permiso para brillar sin límites. 🌠"
];

const TOAST_HIDE_DELAY_MS = 1400;

// Typing effect
const TYPING_DELAY_MIN_MS = 18;
const TYPING_DELAY_MAX_MS = 45;
const EXTRA_DELAY_COMMA_MS = 120;
const EXTRA_DELAY_END_PUNCT_MS = 220;

// Confetti
const MAX_CONFETTI_PARTICLES = 500;
const CONFETTI_TRIM_TO = 250;
const CONFETTI_BURST_COUNT = 110;
const CONFETTI_DT_CLAMP_MS = 32;
const CONFETTI_DPR_CAP = 2;

const CONFETTI_COLORS = [
  "rgba(255,79,166,.95)",
  "rgba(255,134,200,.95)",
  "rgba(34,197,94,.9)",
  "rgba(255,255,255,.9)",
];

/* ==========================================================================
   // 2) Selectores del DOM + validaciones
   - Centralizamos query/selectors.
   - Validamos elementos críticos: si faltan, damos error útil y evitamos crashes.
   ========================================================================== */

function getRequiredElementById(id) {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(
      `[script.js] No se encontró el elemento requerido con id="#${id}". Revisa tu index.html.`
    );
  }
  return element;
}

function getOptionalElementById(id) {
  return document.getElementById(id);
}

const ui = {
  lollipopButton: getRequiredElementById("lollipop"),
  openButton: getRequiredElementById("btnOpen"),
  newButton: getRequiredElementById("btnNew"),
  shareButton: getRequiredElementById("btnShare"),
  copyButton: getRequiredElementById("btnCopy"),

  fortuneText: getRequiredElementById("fortuneText"),
  fortuneMeta: getRequiredElementById("fortuneMeta"),

  toast: getRequiredElementById("toast"),

  // Opcional
  shareLink: getOptionalElementById("shareLink"),

  dogeImage: document.querySelector(".doge"),
  imageFallback: getOptionalElementById("imgFallback"),

  confettiCanvas: getRequiredElementById("confetti"),
};

const shareUrl = window.location.href;

/* ==========================================================================
   // 3) Inicialización de UI
   - Set de link compartible (si existe el elemento).
   - Fallback de imagen (si existen elementos).
   - Inicialización del canvas de confetti.
   ========================================================================== */

initShareLink();
initImageFallback();
const confettiEngine = createConfettiEngine(ui.confettiCanvas, ui.lollipopButton);

function initShareLink() {
  if (!ui.shareLink) return;
  ui.shareLink.textContent = shareUrl;
}

function initImageFallback() {
  // Si el HTML cambia y la imagen/fallback no existen, no truena.
  if (!ui.dogeImage || !ui.imageFallback) return;

  ui.dogeImage.addEventListener("error", () => {
    ui.imageFallback.hidden = false;
  });
}

/* ==========================================================================
   // 4) Lógica principal (frases + typing + acciones)
   - pickPhrase: evita repetir la última frase.
   - revealPhrase: maneja el estado para que no se spamee.
   - share/copy: Web Share API o fallback a copiar.
   ========================================================================== */

let lastPhraseIndex = -1;
let isRevealingPhrase = false;

// Control de typing actual (para poder cancelarlo si el usuario pica 10 veces)
let typingController = null;

/**
 * Elige una frase al azar evitando repetir la anterior.
 * @returns {string} frase seleccionada
 */
function pickPhraseAvoidRepeat() {
  if (PHRASES.length === 0) return "";
  if (PHRASES.length === 1) return PHRASES[0];

  let candidateIndex = -1;
  do {
    candidateIndex = Math.floor(Math.random() * PHRASES.length);
  } while (candidateIndex === lastPhraseIndex);

  lastPhraseIndex = candidateIndex;
  return PHRASES[candidateIndex];
}

/**
 * Revela la frase en la UI con efecto "typing".
 * Edge cases:
 * - Si ya está revelando, ignora (early return).
 * - Si la lista de frases está vacía, muestra mensaje útil.
 */
async function revealPhrase() {
  if (isRevealingPhrase) return;
  isRevealingPhrase = true;

  const phrase = pickPhraseAvoidRepeat();

  ui.fortuneMeta.textContent = "Revelando tu fortuna… ✨";

  if (!phrase) {
    ui.fortuneText.textContent = "No hay frases disponibles 😅";
    ui.fortuneMeta.textContent = "Agrega frases a PHRASES y vuelve a intentar";
    isRevealingPhrase = false;
    return;
  }

  await typeText(ui.fortuneText, phrase, {
    minDelayMs: TYPING_DELAY_MIN_MS,
    maxDelayMs: TYPING_DELAY_MAX_MS,
  });

  ui.fortuneMeta.textContent = "Paleta abierta 🍭 • Ábrela otra vez";

  confettiEngine.burst();
  isRevealingPhrase = false;
}

/**
 * Comparte la tarjeta usando Web Share API si está disponible.
 * Si no existe, copia el link al portapapeles.
 */
async function shareCard() {
  const shareData = {
    title: document.title,
    text: "💖 Tarjeta 14 de Febrero (Bootcamp Edition): abre la paleta de la fortuna 🍭",
    url: shareUrl,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      // Usuario canceló / error de share: no hacemos ruido.
      return;
    }
  }

  await copyLinkToClipboard();
  showToast("Link copiado ✅");
}

/**
 * Copia el link al clipboard con fallback si navigator.clipboard falla.
 */
async function copyLinkToClipboard() {
  try {
    await navigator.clipboard.writeText(shareUrl);
    showToast("Link copiado ✅");
    return;
  } catch (error) {
    // Fallback: textarea temporal
  }

  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = shareUrl;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();

  // Nota: document.execCommand está deprecado, pero funciona como fallback clásico.
  document.execCommand("copy");
  tempTextArea.remove();

  showToast("Link copiado ✅");
}

/* ==========================================================================
   // 5) Helpers (typing + delays + toast)
   - typeText cancela el typing anterior para no "mezclar" textos.
   ========================================================================== */

/**
 * Duerme X ms. Helper para animaciones.
 * @param {number} milliseconds
 * @returns {Promise<void>}
 */
function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/**
 * Escribe texto letra por letra con velocidad variable.
 * Importante:
 * - Cancela el typing anterior si el usuario volvió a activar revealPhrase rápido.
 *
 * @param {HTMLElement} element Elemento donde se escribirá el texto
 * @param {string} text Texto a escribir
 * @param {{minDelayMs?: number, maxDelayMs?: number}} options
 */
async function typeText(element, text, options = {}) {
  const minDelayMs = Number.isFinite(options.minDelayMs) ? options.minDelayMs : TYPING_DELAY_MIN_MS;
  const maxDelayMs = Number.isFinite(options.maxDelayMs) ? options.maxDelayMs : TYPING_DELAY_MAX_MS;

  if (!element) return;

  // Cancelar typing anterior
  if (typingController) {
    typingController.cancelled = true;
  }
  typingController = { cancelled: false };

  element.classList.remove("done");
  element.classList.add("typing");
  element.textContent = "";

  for (let index = 0; index < text.length; index++) {
    if (typingController.cancelled) return;

    const char = text[index];
    element.textContent += char;

    let delay = getRandomInt(minDelayMs, maxDelayMs);

    // Pausas extra para que se sienta más humano
    if (char === "," || char === "—") delay += EXTRA_DELAY_COMMA_MS;
    if (char === "." || char === "!" || char === "?") delay += EXTRA_DELAY_END_PUNCT_MS;

    await sleep(delay);
  }

  element.classList.remove("typing");
  element.classList.add("done");
}

function getRandomInt(min, max) {
  const safeMin = Math.ceil(min);
  const safeMax = Math.floor(max);
  return Math.floor(Math.random() * (safeMax - safeMin + 1)) + safeMin;
}

let toastTimerId = null;

function showToast(message) {
  if (!ui.toast) return;

  ui.toast.textContent = message;
  ui.toast.classList.add("show");

  clearTimeout(toastTimerId);
  toastTimerId = setTimeout(() => ui.toast.classList.remove("show"), TOAST_HIDE_DELAY_MS);
}

/* ==========================================================================
   // 6) Eventos
   - Mapeo explícito de listeners para que sea fácil de extender.
   ========================================================================== */

ui.lollipopButton.addEventListener("click", revealPhrase);
ui.openButton.addEventListener("click", revealPhrase);
ui.newButton.addEventListener("click", revealPhrase);
ui.shareButton.addEventListener("click", shareCard);
ui.copyButton.addEventListener("click", copyLinkToClipboard);

/* ==========================================================================
   // 7) Confetti Engine (canvas)
   - Encapsulamos estado/animación para que no ensucie el scope global.
   - Mantiene exactamente el comportamiento: burst desde el centro del botón.
   ========================================================================== */

/**
 * Crea un motor de confetti basado en Canvas.
 * @param {HTMLCanvasElement} canvas
 * @param {HTMLElement} originElement Elemento desde donde "sale" el confetti (paleta)
 * @returns {{ burst: () => void }}
 */
function createConfettiEngine(canvas, originElement) {
  const context = canvas.getContext("2d", { alpha: true });
  if (!context) {
    throw new Error("[script.js] No se pudo obtener el contexto 2D del canvas de confetti.");
  }

  let particles = [];
  let rafId = null;
  let lastTimestamp = 0;

  // 7.1) Configuración / resize
  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, CONFETTI_DPR_CAP);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    // Escalamos el contexto para dibujar en "pixeles CSS"
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // 7.2) API pública
  function burst() {
    if (!originElement) return;

    if (particles.length > MAX_CONFETTI_PARTICLES) {
      particles = particles.slice(0, CONFETTI_TRIM_TO);
    }

    const origin = getElementCenter(originElement);

    for (let i = 0; i < CONFETTI_BURST_COUNT; i++) {
      particles.push(createParticle(origin.x, origin.y));
    }

    if (!rafId) {
      lastTimestamp = 0;
      rafId = requestAnimationFrame(tick);
    }
  }

  // 7.3) Loop de animación
  function tick(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;

    const dt = Math.min(timestamp - lastTimestamp, CONFETTI_DT_CLAMP_MS);
    lastTimestamp = timestamp;

    // Limpieza
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Update + draw
    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];

      particle.lifeMs -= dt;
      if (particle.lifeMs <= 0) {
        particles.splice(i, 1);
        continue;
      }

      // Física simple
      const frameScale = dt / 16;
      particle.vy += particle.gravity * frameScale;
      particle.x += particle.vx * frameScale;
      particle.y += particle.vy * frameScale;
      particle.rotation += particle.rotationVelocity * frameScale;

      drawParticle(context, particle);
    }

    if (particles.length > 0) {
      rafId = requestAnimationFrame(tick);
      return;
    }

    cancelAnimationFrame(rafId);
    rafId = null;
  }

  // 7.4) Helpers internos del engine
  function getElementCenter(element) {
    const rect = element.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
  }

  function createParticle(originX, originY) {
    return {
      x: originX + (Math.random() * 40 - 20),
      y: originY + (Math.random() * 20 - 10),

      vx: Math.random() * 6 - 3,
      vy: Math.random() * -9 - 2,
      gravity: 0.28 + Math.random() * 0.10,

      size: 2 + Math.random() * 4,
      rotation: Math.random() * Math.PI,
      rotationVelocity: Math.random() * 0.18 - 0.09,

      lifeMs: 900 + Math.random() * 450,

      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      shape: Math.random() < 0.25 ? "circle" : "rect",
    };
  }

  function drawParticle(ctx, particle) {
    ctx.save();
    ctx.translate(particle.x, particle.y);
    ctx.rotate(particle.rotation);

    ctx.fillStyle = particle.color;

    if (particle.shape === "circle") {
      ctx.beginPath();
      ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      return;
    }

    ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 1.4);
    ctx.restore();
  }

  return { burst };
}

// =========================
// Doge follows cursor + shake
// =========================
const imgBox = document.querySelector(".imgBox");
const doge = document.querySelector(".doge");

if (imgBox && doge) {
  let targetX = 0, targetY = 0; // hacia dónde quiere ir
  let currentX = 0, currentY = 0; // dónde está (suave)
  let raf = null;

  // límites para que no se mueva demasiado (ajústalo a tu gusto)
  const MAX_MOVE_X = 22; // px
  const MAX_MOVE_Y = 16; // px
  const SMOOTH = 0.12;   // 0..1 (más alto = más rápido)

  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function animate() {
    // interpolación suave
    currentX += (targetX - currentX) * SMOOTH;
    currentY += (targetY - currentY) * SMOOTH;

    // guardamos en variables CSS para que el shake no “resetee”
    doge.style.setProperty("--dx", `${currentX}px`);
    doge.style.setProperty("--dy", `${currentY}px`);

    doge.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    raf = requestAnimationFrame(animate);
  }

  function start() {
    if (!raf) raf = requestAnimationFrame(animate);
  }

  function stop() {
    if (raf) {
      cancelAnimationFrame(raf);
      raf = null;
    }
  }

  // inicia animación
  start();

  imgBox.addEventListener("mousemove", (e) => {
    const rect = imgBox.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    // distancia del cursor al centro (normalizada)
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);

    targetX = clamp(dx * MAX_MOVE_X, -MAX_MOVE_X, MAX_MOVE_X);
    targetY = clamp(dy * MAX_MOVE_Y, -MAX_MOVE_Y, MAX_MOVE_Y);
  });

  // cuando sale el cursor, vuelve al centro
  imgBox.addEventListener("mouseleave", () => {
    targetX = 0;
    targetY = 0;
  });

  // temblor al click
  doge.addEventListener("click", () => {
    doge.classList.remove("shake");
    // reflow para reiniciar animación
    void doge.offsetWidth;
    doge.classList.add("shake");
  });

  // si quieres: temblor también al tocar en móvil
  doge.addEventListener("touchstart", () => {
    doge.classList.remove("shake");
    void doge.offsetWidth;
    doge.classList.add("shake");
  }, { passive: true });
}
