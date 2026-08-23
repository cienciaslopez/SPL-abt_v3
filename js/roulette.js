/**
 * Módulo de Ruleta Digital Interactiva de Estudiantes (v2.2)
 * Con filtro de asistencia diaria y protección de datos privados en pantalla
 * Politécnico Prof. Juan Emilio Bosch Gaviño
 * Prof. Steve Polanco López
 */

class StudentRoulette {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.students = [];
    this.filterMode = 'present';
    this.currentRotation = 0;
    this.isSpinning = false;
    this.selectedHistory = [];
    this.audioCtx = null;
    
    this.colors = [
      '#0284c7', '#d97706', '#9333ea', '#059669', '#e11d48',
      '#2563eb', '#ea580c', '#7c3aed', '#16a34a', '#db2777',
      '#0891b2', '#ca8a04', '#4f46e5', '#65a30d', '#c026d3',
      '#0369a1', '#b45309', '#6d28d9', '#15803d', '#be123c',
      '#1d4ed8', '#c2410c', '#5b21b6'
    ];

    this.init();
  }

  init() {
    this.loadStudents();
    this.draw();
    this.bindEvents();
  }

  loadStudents() {
    if (this.filterMode === 'present') {
      this.students = getPresentStudents('lunes', false);
    } else if (this.filterMode === 'enrolled') {
      this.students = getEnrolledStudents();
    } else {
      this.students = getAllStudents();
    }

    if (this.students.length === 0) {
      this.students = getAllStudents();
    }

    const countBadge = document.getElementById('roulette-count-badge');
    if (countBadge) {
      countBadge.textContent = `${this.students.length} Estudiantes Presentes Cargados`;
    }
  }

  bindEvents() {
    const spinBtn = document.getElementById('roulette-spin-btn');
    if (spinBtn) {
      spinBtn.addEventListener('click', () => this.spin());
    }

    const filterSelect = document.getElementById('roulette-filter-select');
    if (filterSelect) {
      filterSelect.addEventListener('change', (e) => {
        this.filterMode = e.target.value;
        this.loadStudents();
        this.draw();
      });
    }

    const resetHistoryBtn = document.getElementById('roulette-reset-history-btn');
    if (resetHistoryBtn) {
      resetHistoryBtn.addEventListener('click', () => {
        this.selectedHistory = [];
        this.updateHistoryUI();
      });
    }
  }

  playSound(type) {
    try {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      
      if (type === 'tick') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, this.audioCtx.currentTime);
        gain.gain.setValueAtTime(0.06, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.035);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.035);
      } else if (type === 'winner') {
        osc.type = 'triangle';
        const now = this.audioCtx.currentTime;
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        osc.frequency.setValueAtTime(783.99, now + 0.2);
        osc.frequency.setValueAtTime(1046.50, now + 0.3);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
        osc.start();
        osc.stop(now + 0.9);
      }
    } catch (e) {}
  }

  draw() {
    if (!this.ctx || this.students.length === 0) return;
    const width = this.canvas.width;
    const height = this.canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = width / 2 - 12;
    const numSegments = this.students.length;
    const arcSize = (2 * Math.PI) / numSegments;

    this.ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < numSegments; i++) {
      const angle = this.currentRotation + i * arcSize;
      this.ctx.beginPath();
      this.ctx.fillStyle = this.colors[i % this.colors.length];
      this.ctx.moveTo(centerX, centerY);
      this.ctx.arc(centerX, centerY, radius, angle, angle + arcSize);
      this.ctx.lineTo(centerX, centerY);
      this.ctx.fill();

      this.ctx.lineWidth = 2;
      this.ctx.strokeStyle = '#ffffff';
      this.ctx.stroke();

      this.ctx.save();
      this.ctx.translate(centerX, centerY);
      this.ctx.rotate(angle + arcSize / 2);
      this.ctx.textAlign = 'right';
      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = 'bold 15px Poppins, sans-serif';
      this.ctx.shadowColor = 'rgba(0,0,0,0.85)';
      this.ctx.shadowBlur = 4;
      
      const student = this.students[i];
      const displayName = `${student.id}. ${student.firstName} ${student.lastName.split(' ')[0]}`;
      this.ctx.fillText(displayName, radius - 18, 5);
      this.ctx.restore();
    }

    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, 38, 0, 2 * Math.PI);
    this.ctx.fillStyle = '#0f1c3d';
    this.ctx.fill();
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = '#facc15';
    this.ctx.stroke();

    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = 'bold 13px Poppins, sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText('3ro C', centerX, centerY);
  }

  spin() {
    if (this.isSpinning || this.students.length === 0) return;
    this.isSpinning = true;

    const spinBtn = document.getElementById('roulette-spin-btn');
    if (spinBtn) spinBtn.disabled = true;

    const extraSpins = 5 + Math.random() * 5;
    const totalRotation = extraSpins * 2 * Math.PI + Math.random() * 2 * Math.PI;
    const duration = 4200;
    const startTime = performance.now();
    const startRotation = this.currentRotation;
    let lastSegment = 0;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      this.currentRotation = startRotation + totalRotation * easeOut;
      
      const currentSegment = Math.floor((this.currentRotation % (2 * Math.PI)) / ((2 * Math.PI) / this.students.length));
      if (currentSegment !== lastSegment) {
        this.playSound('tick');
        lastSegment = currentSegment;
      }

      this.draw();

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.isSpinning = false;
        if (spinBtn) spinBtn.disabled = false;
        this.determineWinner();
      }
    };

    requestAnimationFrame(animate);
  }

  determineWinner() {
    const numSegments = this.students.length;
    const arcSize = (2 * Math.PI) / numSegments;
    const pointerAngle = (3 * Math.PI) / 2;
    const normalizedRotation = (this.currentRotation % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
    
    let winnerIndex = Math.floor((pointerAngle - normalizedRotation + 4 * Math.PI) % (2 * Math.PI) / arcSize);
    winnerIndex = winnerIndex % numSegments;

    const winner = this.students[winnerIndex];
    this.playSound('winner');
    this.displayWinner(winner);
    this.selectedHistory.unshift(winner);
    this.updateHistoryUI();
  }

  displayWinner(student) {
    const modal = document.getElementById('roulette-winner-modal');
    const nameEl = document.getElementById('roulette-winner-name');
    const detailsEl = document.getElementById('roulette-winner-details');
    const teacher = getTeacherConfig();
    
    if (nameEl) nameEl.textContent = `${student.firstName} ${student.lastName}`;
    if (detailsEl) {
      // PROTECCIÓN DE PRIVACIDAD EN PANTALLA: Se omite tutor y teléfono
      detailsEl.innerHTML = `
        <div class="flex items-center justify-center gap-2 mb-2">
          <span class="badge-high-contrast px-3 py-1 bg-cyan-600 rounded-full font-bold text-sm">
            N° de Lista: ${student.id}
          </span>
          <span class="badge-high-contrast px-3 py-1 ${student.enrolled ? 'bg-green-600' : 'bg-amber-600'} rounded-full font-bold text-sm">
            ${student.status}
          </span>
        </div>
        <div class="text-xs text-yellow-300 font-bold uppercase tracking-wider mt-2">
          ${teacher.institution} • ${teacher.grade} (${teacher.section})
        </div>
      `;
    }
    
    if (modal) {
      modal.classList.add('open');
    }
  }

  updateHistoryUI() {
    const listEl = document.getElementById('roulette-history-list');
    if (!listEl) return;
    
    if (this.selectedHistory.length === 0) {
      listEl.innerHTML = '<li class="text-slate-400 italic">No hay estudiantes seleccionados aún.</li>';
      return;
    }

    listEl.innerHTML = this.selectedHistory.map((s, idx) => `
      <li class="flex items-center justify-between p-2 bg-slate-800/80 rounded-lg border border-slate-700">
        <span class="font-bold text-yellow-400">#${idx + 1} ${s.firstName} ${s.lastName}</span>
        <span class="text-xs px-2 py-0.5 rounded font-bold ${s.enrolled ? 'bg-green-900 text-green-200' : 'bg-amber-900 text-amber-200'}">N° ${s.id}</span>
      </li>
    `).join('');
  }
}

let globalRoulette = null;
function initStudentRoulette() {
  globalRoulette = new StudentRoulette('roulette-canvas');
}
