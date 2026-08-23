/**
 * Controlador Principal de la Aplicación de Ambientación 2026-2027 (v2.3)
 * Politécnico Prof. Juan Emilio Bosch Gaviño
 * Prof. Steve Polanco López
 */

const SECTIONS = ['intro', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'normas', 'quizzes', 'estudiantes'];
let currentSectionIndex = 0;

let timerInterval = null;
let timerSecondsRemaining = 0;
let isTimerRunning = false;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar ajustes y asistencia
  if (typeof initSettingsAndAttendance === 'function') initSettingsAndAttendance();

  // 2. Inicializar submódulos
  if (typeof initActivitiesManager === 'function') initActivitiesManager();
  if (typeof initStudentRoulette === 'function') initStudentRoulette();
  if (typeof initTeamGenerator === 'function') initTeamGenerator();
  if (typeof initScienceQuiz === 'function') initScienceQuiz();

  // 3. Configuración de interfaz
  setupNavigation();
  setupTimer();
  setupProjectorMode();
  setupKeyboardShortcuts();
  setupModals();
});

/* ==========================================================================
   NAVEGACIÓN POR SECCIONES (SPA - UNA SOLA PANTALLA VISIBLE)
   ========================================================================== */
function setupNavigation() {
  document.querySelectorAll('.drawer-nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      navigateToSection(target);
      document.getElementById('hamburger-drawer')?.classList.remove('open');
    });
  });
}

function navigateToSection(sectionId) {
  const index = SECTIONS.indexOf(sectionId);
  if (index === -1) return;
  currentSectionIndex = index;

  // Actualizar clases de botones en el drawer
  document.querySelectorAll('.drawer-nav-item').forEach(btn => {
    if (btn.dataset.target === sectionId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Mostrar únicamente la sección solicitada
  document.querySelectorAll('.slide-section').forEach(sec => {
    if (sec.id === sectionId) {
      sec.classList.add('active');
      sec.style.display = 'block';
    } else {
      sec.classList.remove('active');
      sec.style.display = 'none';
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================================================
   MODO PROYECTOR DE ALTO CONTRASTE (100% FUNCIONAL)
   ========================================================================== */
function setupProjectorMode() {
  const toggleBtn = document.getElementById('toggle-projector-btn');
  const isProjectorSaved = localStorage.getItem('popjubo_theme_mode') === 'projector';

  if (isProjectorSaved) {
    document.body.classList.add('projector-mode');
    updateProjectorBtnUI(true);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isNowProjector = document.body.classList.toggle('projector-mode');
      localStorage.setItem('popjubo_theme_mode', isNowProjector ? 'projector' : 'dark');
      updateProjectorBtnUI(isNowProjector);
      
      const themeSelect = document.getElementById('theme-mode-select');
      if (themeSelect) themeSelect.value = isNowProjector ? 'projector' : 'dark';
    });
  }
}

function updateProjectorBtnUI(isProjector) {
  const btn = document.getElementById('toggle-projector-btn');
  if (!btn) return;
  if (isProjector) {
    btn.innerHTML = '<i class="fa-solid fa-video text-yellow-400"></i> Proyector: ON';
    btn.classList.add('border-yellow-400', 'bg-yellow-950/80');
  } else {
    btn.innerHTML = '<i class="fa-solid fa-video text-yellow-400"></i> Modo Proyector';
    btn.classList.remove('border-yellow-400', 'bg-yellow-950/80');
  }
}

function collapseSpeedDial() {
  document.querySelector('.speed-dial-container')?.classList.remove('is-open');
}

function toggleSpeedDial(event) {
  event.stopPropagation();
  document.querySelector('.speed-dial-container')?.classList.toggle('is-open');
}

document.addEventListener('click', (e) => {
  const container = document.querySelector('.speed-dial-container');
  if (container && !container.contains(e.target)) {
    container.classList.remove('is-open');
  }
});

function openRouletteModal() {
  const modal = document.getElementById('roulette-modal');
  if (modal) {
    modal.classList.add('open');
    if (globalRoulette) {
      globalRoulette.loadStudents();
      globalRoulette.draw();
    }
  }
}

function closeRouletteModal() {
  const modal = document.getElementById('roulette-modal');
  if (modal) modal.classList.remove('open');
}

function openTeamsModal() {
  const modal = document.getElementById('teams-modal');
  if (modal) {
    modal.classList.add('open');
    if (globalTeamGenerator) {
      globalTeamGenerator.generate();
    }
  }
}

function closeTeamsModal() {
  const modal = document.getElementById('teams-modal');
  if (modal) modal.classList.remove('open');
}

/* ==========================================================================
   TEMPORIZADOR FLOTANTE DE AULA
   ========================================================================== */
function setupTimer() {
  const startBtn = document.getElementById('timer-start-btn');
  const pauseBtn = document.getElementById('timer-pause-btn');
  const resetBtn = document.getElementById('timer-reset-btn');

  if (startBtn) startBtn.addEventListener('click', startTimer);
  if (pauseBtn) pauseBtn.addEventListener('click', pauseTimer);
  if (resetBtn) resetBtn.addEventListener('click', resetTimer);

  document.querySelectorAll('.timer-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mins = parseInt(btn.dataset.minutes, 10);
      setTimerMinutes(mins);
    });
  });
}

function setTimerMinutes(minutes) {
  pauseTimer();
  timerSecondsRemaining = minutes * 60;
  updateTimerDisplay();
}

function startBlockTimer(blockName, minutes) {
  setTimerMinutes(minutes);
  startTimer();
  const timerModal = document.getElementById('timer-modal');
  if (timerModal) timerModal.classList.add('open');
}

function startTimer() {
  if (isTimerRunning || timerSecondsRemaining <= 0) return;
  isTimerRunning = true;
  timerInterval = setInterval(() => {
    if (timerSecondsRemaining > 0) {
      timerSecondsRemaining--;
      updateTimerDisplay();
    } else {
      pauseTimer();
      playTimerChime();
      alert('⏰ ¡Tiempo de actividad cumplido!');
    }
  }, 1000);
}

function pauseTimer() {
  isTimerRunning = false;
  clearInterval(timerInterval);
}

function resetTimer() {
  pauseTimer();
  timerSecondsRemaining = 0;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const mins = Math.floor(timerSecondsRemaining / 60);
  const secs = timerSecondsRemaining % 60;
  const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  
  const displays = document.querySelectorAll('.timer-display-text');
  displays.forEach(d => d.textContent = formatted);
}

function playTimerChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.setValueAtTime(1760, ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
    osc.start();
    osc.stop(ctx.currentTime + 1.2);
  } catch (e) {}
}

/* ==========================================================================
   MODALES Y ATAJOS DE TECLADO
   ========================================================================== */
function setupModals() {
  document.querySelectorAll('.close-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-backdrop');
      if (modal) modal.classList.remove('open');
    });
  });
}

function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(m => m.classList.remove('open'));
      document.getElementById('hamburger-drawer')?.classList.remove('open');
      return;
    }

    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      if (currentSectionIndex < SECTIONS.length - 1) {
        navigateToSection(SECTIONS[currentSectionIndex + 1]);
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      if (currentSectionIndex > 0) {
        navigateToSection(SECTIONS[currentSectionIndex - 1]);
      }
    } else if (e.key.toLowerCase() === 'p') {
      const toggleBtn = document.getElementById('toggle-projector-btn');
      if (toggleBtn) toggleBtn.click();
    } else if (e.key.toLowerCase() === 'f') {
      toggleFullScreen();
    }
  });
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.log('Fullscreen error:', err);
    });
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}
