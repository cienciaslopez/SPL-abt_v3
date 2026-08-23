/**
 * Módulo de Quizzes y Trivias Científicas con Animaciones de Aula (v2.2)
 * Politécnico Prof. Juan Emilio Bosch Gaviño
 * Prof. Steve Polanco López
 */

class ScienceQuizEngine {
  constructor() {
    this.quizzes = SCIENCE_QUIZZES;
    this.currentIndex = 0;
    this.answered = false;
    this.audioCtx = null;
    this.scores = {
      "Colibríes": 0,
      "Abejas": 0,
      "Mariposas": 0,
      "Tortugas": 0,
      "Hormigas": 0,
      "Átomos": 0
    };
    this.bindEvents();
  }

  bindEvents() {
    const nextBtn = document.getElementById('quiz-next-btn');
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextQuestion());

    const prevBtn = document.getElementById('quiz-prev-btn');
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevQuestion());

    const resetBtn = document.getElementById('quiz-reset-scores-btn');
    if (resetBtn) resetBtn.addEventListener('click', () => this.resetScores());
  }

  playSound(type) {
    try {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
      
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      
      if (type === 'correct') {
        const now = this.audioCtx.currentTime;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.setValueAtTime(880, now + 0.1); // A5
        osc.frequency.setValueAtTime(1174.66, now + 0.2); // D6
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.start();
        osc.stop(now + 0.6);
      } else if (type === 'wrong') {
        const now = this.audioCtx.currentTime;
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.setValueAtTime(130, now + 0.15);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.start();
        osc.stop(now + 0.4);
      }
    } catch (e) {}
  }

  render() {
    const container = document.getElementById('quiz-card-container');
    if (!container || this.quizzes.length === 0) return;

    const currentQ = this.quizzes[this.currentIndex];
    this.answered = false;

    container.innerHTML = `
      <div class="card-high-contrast border-3 border-blue-500 bg-slate-900/95 p-6 md:p-8 rounded-2xl shadow-2xl trivia-animated-card">
        <!-- Encabezado de Pregunta -->
        <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-700">
          <div class="flex items-center gap-3">
            <span class="p-3 bg-blue-600/30 border border-blue-400 rounded-xl text-yellow-400 text-2xl">
              <i class="fa-solid ${currentQ.icon}"></i>
            </span>
            <div>
              <span class="text-xs font-black uppercase tracking-wider text-cyan-400">${currentQ.category}</span>
              <h3 class="text-xl md:text-2xl font-black text-white m-0">Desafío ${this.currentIndex + 1} de ${this.quizzes.length}</h3>
            </div>
          </div>
          <span class="badge-high-contrast px-3 py-1.5 bg-indigo-600 text-white font-bold rounded-full text-sm">
            ${currentQ.difficulty}
          </span>
        </div>

        <!-- Pregunta -->
        <div class="py-6">
          <p class="text-2xl md:text-3xl font-black text-yellow-300 leading-snug">
            "${currentQ.question}"
          </p>
        </div>

        <!-- Opciones A, B, C, D -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4" id="quiz-options-grid">
          ${currentQ.options.map((opt, optIdx) => `
            <button class="quiz-option-btn" onclick="globalQuizEngine.checkAnswer(${optIdx})">
              <span class="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-900/80 border-2 border-blue-400 text-white font-black text-lg flex-shrink-0">
                ${String.fromCharCode(65 + optIdx)}
              </span>
              <span class="text-lg md:text-xl text-left">${opt}</span>
            </button>
          `).join('')}
        </div>

        <!-- Explicación Científica -->
        <div id="quiz-explanation-box" class="hidden mt-6 p-6 rounded-2xl border-2 border-emerald-500 bg-emerald-950/85 transition-all trivia-animated-card">
          <div class="flex items-center gap-3 text-emerald-400 font-black text-xl mb-2">
            <i class="fa-solid fa-circle-check text-2xl"></i>
            <span>¡Explicación Científica!</span>
          </div>
          <p class="text-lg text-slate-100 font-medium leading-relaxed" id="quiz-explanation-text">
            ${currentQ.explanation}
          </p>
          <div class="mt-4 pt-3 border-t border-emerald-700/60 text-sm text-emerald-300 font-semibold flex items-center gap-2">
            <i class="fa-solid fa-lightbulb text-yellow-400"></i>
            <span>Tip Pedagógico: ${currentQ.pedagogicalTip}</span>
          </div>
        </div>
      </div>
    `;

    this.renderScoreboard();
  }

  checkAnswer(selectedIndex) {
    if (this.answered) return;
    this.answered = true;

    const currentQ = this.quizzes[this.currentIndex];
    const optionButtons = document.querySelectorAll('.quiz-option-btn');

    const isCorrect = (selectedIndex === currentQ.correctAnswer);
    this.playSound(isCorrect ? 'correct' : 'wrong');

    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === currentQ.correctAnswer) {
        btn.classList.add('correct');
      } else if (idx === selectedIndex) {
        btn.classList.add('incorrect');
      }
    });

    const expBox = document.getElementById('quiz-explanation-box');
    if (expBox) {
      expBox.classList.remove('hidden');
    }
  }

  nextQuestion() {
    this.currentIndex = (this.currentIndex + 1) % this.quizzes.length;
    this.render();
  }

  prevQuestion() {
    this.currentIndex = (this.currentIndex - 1 + this.quizzes.length) % this.quizzes.length;
    this.render();
  }

  addPointToTeam(teamName) {
    if (this.scores[teamName] !== undefined) {
      this.scores[teamName] += 1;
      this.renderScoreboard();
    }
  }

  subtractPointFromTeam(teamName) {
    if (this.scores[teamName] !== undefined && this.scores[teamName] > 0) {
      this.scores[teamName] -= 1;
      this.renderScoreboard();
    }
  }

  resetScores() {
    Object.keys(this.scores).forEach(k => this.scores[k] = 0);
    this.renderScoreboard();
  }

  renderScoreboard() {
    const scoreboard = document.getElementById('quiz-scoreboard-container');
    if (!scoreboard) return;

    scoreboard.innerHTML = `
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        ${Object.entries(this.scores).map(([team, score]) => `
          <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl flex flex-col items-center justify-between shadow-lg">
            <span class="text-xs font-bold text-slate-300 uppercase">${team}</span>
            <span class="text-3xl font-black text-yellow-400 my-1 font-mono">${score}</span>
            <div class="flex items-center gap-2">
              <button onclick="globalQuizEngine.subtractPointFromTeam('${team}')" class="px-2 py-0.5 bg-rose-900 hover:bg-rose-700 text-white rounded text-xs font-bold">-1</button>
              <button onclick="globalQuizEngine.addPointToTeam('${team}')" class="px-2 py-0.5 bg-emerald-900 hover:bg-emerald-700 text-white rounded text-xs font-bold">+1</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

let globalQuizEngine = null;
function initScienceQuiz() {
  globalQuizEngine = new ScienceQuizEngine();
  globalQuizEngine.render();
}
