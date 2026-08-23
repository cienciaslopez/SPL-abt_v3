/**
 * Módulo de Actividades, Cartas Flip 3D y Fichas Diagnósticas con Hoja Timbrada Oficial (v3.4)
 * Estándar Formato Polanco v3.0 | Hoja Timbrada POPJUBO (MINERD)
 * Politécnico Prof. Juan Emilio Bosch Gaviño | Prof. Steve Polanco López
 */

class ActivitiesManager {
  constructor() {
    this.completedTasks = new Set();
    this.init();
  }

  init() {
    this.renderEcosystemCards();
    this.renderLunesTimeline();
    this.renderAllDailyDiagnostics();
    this.renderOtherDays();
    this.renderRules();
    this.renderStudentRoster();
    this.bindEvents();
  }

  bindEvents() {
    document.addEventListener('change', (e) => {
      if (e.target && e.target.classList.contains('task-checkbox-custom')) {
        const taskId = e.target.dataset.taskId;
        if (e.target.checked) {
          this.completedTasks.add(taskId);
          e.target.closest('.task-item')?.classList.add('completed');
        } else {
          this.completedTasks.delete(taskId);
          e.target.closest('.task-item')?.classList.remove('completed');
        }
        this.updateGlobalProgress();
      }
    });

    const studentSearch = document.getElementById('student-search-input');
    if (studentSearch) {
      studentSearch.addEventListener('input', (e) => {
        this.filterStudentsTable(e.target.value);
      });
    }
  }

  renderEcosystemCards() {
    const container = document.getElementById('ecosystem-cards-container');
    if (!container) return;

    container.innerHTML = ECOSYSTEM_FLIP_CARDS.map(card => `
      <div class="card-flip-container" onclick="this.querySelector('.card-flip-inner').classList.toggle('is-flipped')">
        <div class="card-flip-inner">
          
          <!-- DORSO (FRENTE) -->
          <div class="card-flip-front border-3 ${card.borderColor} relative" style="padding:0;">
            <img src="${card.image}" alt="${card.name}" class="absolute inset-0 w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div style="display:none;" class="absolute inset-0 items-center justify-center text-7xl bg-slate-800">${card.symbol}</div>
            <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/90"></div>

            <div class="relative z-10 h-full flex flex-col justify-between p-4">
              <div class="flex items-center justify-between">
                <span class="badge-high-contrast px-2.5 py-0.5 ${card.badgeColor} text-white font-bold rounded-full text-[10px] uppercase tracking-wider">
                  ${card.dayName.split(' — ')[0]}
                </span>
                <span class="text-[10px] text-yellow-400 font-bold flex items-center gap-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                  <i class="fa-solid fa-hand-pointer animate-pulse"></i> Toca
                </span>
              </div>

              <div class="my-auto py-2 text-center">
                <h3 class="text-xl font-black text-white m-0 tracking-tight leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">${card.name}</h3>
                <p class="text-[11px] font-bold text-cyan-300 mt-0.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">${card.value}</p>
              </div>

              <div class="p-2 rounded-xl bg-slate-950/85 border border-slate-700 text-slate-300 text-left backdrop-blur-sm">
                <strong class="text-yellow-400 block mb-0.5 text-[10px]"><i class="fa-solid fa-leaf mr-1"></i> Metáfora:</strong>
                <span class="line-clamp-3 text-[10px] leading-snug">${card.metaphor}</span>
              </div>
            </div>
          </div>

          <!-- REVERSO (ATRÁS) -->
          <div class="card-flip-back border-3 border-yellow-400 flex flex-col justify-between p-4 bg-slate-900 text-left">
            <div>
              <div class="flex items-center justify-between pb-1 mb-2 border-b border-slate-700">
                <span class="text-[10px] font-black text-yellow-400 uppercase tracking-wider flex items-center gap-1">
                  <span>${card.symbol}</span> ${card.name}
                </span>
                <span class="text-[10px] text-cyan-300 font-bold"><i class="fa-solid fa-rotate-left"></i> Girar</span>
              </div>

              <div class="mb-2">
                <span class="text-[9px] font-bold text-cyan-400 uppercase block mb-0.5">🔬 Dato Biológico:</span>
                <p class="text-[11px] text-slate-200 leading-tight font-medium m-0">
                  ${card.scienceFact}
                </p>
              </div>

              <div class="p-2 bg-yellow-950/60 border border-yellow-500/80 rounded-xl mb-2">
                <span class="text-[9px] font-black text-yellow-300 uppercase block mb-0.5">💬 Desafío de Vida:</span>
                <p class="text-[11px] font-bold text-white m-0 leading-tight">
                  "${card.icebreakerQuestion}"
                </p>
              </div>
            </div>

            <button onclick="event.stopPropagation(); navigateToSection('${card.id}')" class="btn-primary w-full justify-center text-xs font-black py-2 rounded-xl shadow-lg">
              🚀 Abrir ${card.dayName.split(' — ')[0]}
            </button>
          </div>

        </div>
      </div>
    `).join('');
  }

  renderLunesTimeline() {
    const container = document.getElementById('lunes-timeline-container');
    if (!container) return;

    const lunesData = MINERD_GUIDE_DATA.days.find(d => d.id === 'lunes');
    if (!lunesData) return;

    const teacher = getTeacherConfig();

    container.innerHTML = `
      <div class="card-high-contrast border-3 border-cyan-500 bg-slate-900/90 p-5 md:p-7 rounded-2xl shadow-xl mb-6">
        <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-700">
          <div class="flex items-center gap-3">
            <span class="text-4xl p-3 bg-cyan-600/30 border-2 border-cyan-400 rounded-2xl">
              🕊️
            </span>
            <div>
              <span class="badge-high-contrast px-3 py-1 bg-cyan-600 text-white font-bold rounded-full text-xs uppercase tracking-wider">
                Lunes • ${lunesData.timeFrame}
              </span>
              <h2 class="text-xl md:text-2xl font-black text-white mt-1 mb-0">🕊️ ${lunesData.symbol} — ${lunesData.value}</h2>
              <p class="text-cyan-300 font-semibold text-xs md:text-sm mt-0.5 mb-0">${lunesData.motto}</p>
            </div>
          </div>
          
          <div class="flex flex-wrap items-center gap-2">
            <a href="semblanza_docente.html" target="_blank" rel="noopener noreferrer" 
               class="btn-accent text-xs font-black px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow">
              <i class="fa-solid fa-file-invoice"></i> Semblanza del Docente
            </a>
            <a href="${MINERD_GUIDE_DATA.meta.enlaceRompehielos}" target="_blank" rel="noopener noreferrer" 
               class="btn-primary text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5">
              <i class="fa-solid fa-gamepad"></i> Rompehielos
            </a>
          </div>
        </div>

        <div class="mt-4 p-3.5 rounded-xl bg-cyan-950/60 border border-cyan-700/80">
          <div class="flex items-start gap-2.5">
            <i class="fa-solid fa-bullseye text-cyan-400 text-base mt-1"></i>
            <div>
              <strong class="text-cyan-200 font-bold block mb-0.5 text-xs uppercase tracking-wider">Intención Pedagógica de la Jornada:</strong>
              <p class="text-slate-200 font-medium italic m-0 text-xs md:text-sm leading-relaxed">
                "${lunesData.intention}"
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        ${lunesData.scheduleBlocks.map((block, idx) => `
          <div class="task-item flex-col md:flex-row items-start justify-between gap-4 p-5 bg-slate-900/90 border-2 border-slate-700 rounded-2xl">
            <div class="flex items-start gap-3 w-full md:w-auto flex-1">
              <input type="checkbox" data-task-id="lunes-block-${idx}" class="task-checkbox-custom mt-1 flex-shrink-0" />
              <div class="flex-1">
                <div class="flex flex-wrap items-center gap-2 mb-2">
                  <span class="px-2 py-0.5 bg-cyan-900/90 border border-cyan-500 text-cyan-300 font-mono font-bold text-xs rounded-md">
                    ${block.time}
                  </span>
                  <h3 class="text-base md:text-lg font-black text-white m-0 flex items-center gap-1.5">
                    <i class="fa-solid ${block.icon} text-yellow-400 text-sm"></i>
                    ${block.blockTitle}
                  </h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 my-2 p-2 bg-slate-950/70 rounded-xl border border-slate-800 text-xs">
                  <div class="text-slate-300">
                    <span class="text-cyan-400 font-bold block mb-0.5"><i class="fa-solid fa-chalkboard-user mr-1"></i> Medio Docente:</span>
                    ${block.presentation}
                  </div>
                  <div class="text-slate-300">
                    <span class="text-emerald-400 font-bold block mb-0.5"><i class="fa-solid fa-pen-nib mr-1"></i> Soporte Estudiante:</span>
                    ${block.studentWork}
                  </div>
                </div>

                <div class="space-y-1.5 mt-2">
                  ${block.steps.map(step => `
                    <div class="p-2 bg-slate-950/90 rounded-lg border border-slate-800 text-slate-200 text-xs font-medium">
                      ${step}
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <button onclick="startBlockTimer('${block.time.split(' - ')[0]}', 45)" class="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-yellow-300 font-bold text-xs rounded-lg flex items-center gap-1 self-end md:self-start">
              <i class="fa-solid fa-stopwatch"></i> Timer
            </button>
          </div>
        `).join('')}
      </div>
    `;
  }

  renderAllDailyDiagnostics() {
    const days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
    const teacher = getTeacherConfig();

    days.forEach(dayKey => {
      const container = document.getElementById(`${dayKey}-diagnostic-card-container`);
      if (!container) return;

      const currentData = DAILY_DIAGNOSTIC_WORKSHEETS[dayKey];
      if (!currentData) return;

      container.innerHTML = `
        <div class="card-high-contrast border-3 border-yellow-500 bg-slate-950 p-5 md:p-6 rounded-3xl shadow-2xl mt-8">
          <div class="flex flex-wrap items-center justify-between gap-4 pb-3 mb-4 border-b border-slate-700">
            <div>
              <span class="badge-high-contrast px-2.5 py-0.5 bg-yellow-600 text-black font-black rounded-full text-[10px] uppercase">
                Ficha Diagnóstica Psico-Pedagógica • Hoja Timbrada Oficial
              </span>
              <h3 class="text-xl font-black text-white mt-1 mb-0 flex items-center gap-2">
                <span>${currentData.emoji}</span> ${currentData.dayTitle} — ${currentData.symbol}
              </h3>
              <p class="text-xs text-slate-300 mt-0.5">${currentData.psychologicalObjective}</p>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="printDayDiagnostic('${dayKey}')" class="btn-accent text-xs font-black px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-lg cursor-pointer">
                <i class="fa-solid fa-print text-sm"></i> Imprimir en Hoja Timbrada (PDF)
              </button>
            </div>
          </div>

          <!-- CONTENIDO DE LA FICHA EN PANTALLA -->
          <div id="diagnostic-sheet-${dayKey}" class="p-6 md:p-8 bg-white text-black rounded-2xl shadow-inner font-serif text-xs md:text-sm space-y-4 border border-slate-300">
            
            <!-- ENCABEZADO TIMBRADO OFICIAL CON AMBOS LOGOS Y LÍNEA AZUL -->
            <div class="flex items-center justify-between pb-3 border-b-2 border-[#1e40af]">
              <img src="${teacher.logoMinerd}" alt="Logo MINERD" class="h-14 object-contain">
              
              <div class="text-center flex-1 px-3">
                <h4 class="font-bold text-black text-xs md:text-sm uppercase tracking-wide m-0">REPÚBLICA DOMINICANA</h4>
                <h4 class="font-bold text-black text-xs md:text-sm uppercase tracking-wide m-0">MINISTERIO DE EDUCACIÓN (MINERD)</h4>
                <h5 class="font-bold text-[#1e40af] text-[11px] md:text-xs uppercase m-0">DISTRITO 06-07 DE GASPAR HERNÁNDEZ</h5>
                <h5 class="font-bold text-[#1e40af] text-[11px] md:text-xs uppercase m-0">POLITÉCNICO PROF. JUAN EMILIO BOSCH GAVIÑO</h5>
                <p class="text-[10px] text-slate-600 m-0">Calle La Escuela, Barrio Candor, Código 15228</p>
              </div>

              <img src="${teacher.logoPolitecnico}" alt="Logo Politécnico" class="h-14 object-contain rounded border border-slate-300 p-0.5">
            </div>

            <!-- TÍTULO DEL INSTRUMENTO -->
            <div class="text-center py-1">
              <div class="font-bold text-black text-sm md:text-base uppercase tracking-tight">
                DIAGNÓSTICO SOCIOEMOCIONAL & ADAPTACIÓN ESCOLAR 2026-2027
              </div>
              <div class="text-xs text-[#1e40af] font-bold">
                Cátedra de Ciencias de la Naturaleza • ${currentData.dayTitle} (${currentData.symbol} ${currentData.emoji})
              </div>
            </div>

            <!-- TABLA DE DATOS DEL ESTUDIANTE -->
            <table class="w-full border-collapse border border-black text-xs">
              <tr>
                <td class="border border-black p-1.5 w-[55%]"><strong>Estudiante:</strong> ___________________________________</td>
                <td class="border border-black p-1.5 w-[20%]"><strong>N° Lista:</strong> ______</td>
                <td class="border border-black p-1.5 w-[25%]"><strong>Grado:</strong> ${teacher.grade} (${teacher.section})</td>
              </tr>
              <tr>
                <td class="border border-black p-1.5"><strong>Docente:</strong> ${teacher.teacherName}</td>
                <td class="border border-black p-1.5"><strong>Fecha:</strong> ___/___/2026</td>
                <td class="border border-black p-1.5"><strong>Período:</strong> Ambientación</td>
              </tr>
            </table>

            <!-- LAS 4 PREGUNTAS DIAGNÓSTICAS -->
            <div class="space-y-3.5 pt-1">
              ${currentData.questions.map(q => `
                <div class="space-y-1">
                  <strong class="text-black block text-xs font-bold font-sans">${q.title}</strong>
                  <p class="text-xs text-slate-800 font-sans whitespace-pre-line m-0 leading-snug">${q.prompt}</p>
                  <div class="p-2 bg-slate-50 rounded border border-dashed border-slate-400 text-slate-700 text-xs italic font-sans min-h-[38px]">
                    ${q.placeholder}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- PIE DE FIRMAS -->
            <div class="pt-3 border-t border-black flex justify-between items-center text-xs font-sans">
              <div><strong>Firma del Estudiante:</strong> _______________________</div>
              <div class="text-[10px] text-slate-600">Registro Indexado para Ecosistema AulaIA</div>
            </div>

            <!-- PIE DE HOJA TIMBRADA OFICIAL -->
            <div class="text-center pt-2 border-t border-[#1e40af] text-[9px] text-slate-500">
              C/ La Escuela #03 Barrio Candor, Teléfono: 809-587-2850 • Correo: politecnicopjuanboschgh@gmail.com
            </div>

          </div>
        </div>
      `;
    });
  }

  renderOtherDays() {
    [
      { id: 'martes', emoji: '🐝' },
      { id: 'miercoles', emoji: '🦋' },
      { id: 'jueves', emoji: '🐢' },
      { id: 'viernes', emoji: '🐜' }
    ].forEach(dayObj => {
      const container = document.getElementById(`${dayObj.id}-content-container`);
      if (!container) return;

      const dayData = MINERD_GUIDE_DATA.days.find(d => d.id === dayObj.id);
      if (!dayData) return;

      container.innerHTML = `
        <div class="card-high-contrast border-3 ${dayData.id === 'martes' ? 'border-amber-500' : dayData.id === 'miercoles' ? 'border-purple-500' : dayData.id === 'jueves' ? 'border-emerald-500' : 'border-rose-500'} bg-slate-900/90 p-5 md:p-7 rounded-2xl shadow-xl mb-6">
          <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-700">
            <div class="flex items-center gap-3">
              <span class="text-4xl p-3 ${dayData.badgeColor}/30 border-2 rounded-2xl">
                ${dayObj.emoji}
              </span>
              <div>
                <span class="badge-high-contrast px-3 py-1 ${dayData.badgeColor} text-white font-bold rounded-full text-xs uppercase tracking-wider">
                  ${dayData.dayName} • ${dayData.timeFrame}
                </span>
                <h2 class="text-xl md:text-2xl font-black text-white mt-1 mb-0">${dayObj.emoji} ${dayData.symbol} — ${dayData.value}</h2>
                <p class="text-slate-300 font-semibold text-xs md:text-sm mt-0.5 mb-0">${dayData.motto}</p>
              </div>
            </div>
          </div>

          <div class="mt-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-700">
            <strong class="text-yellow-400 font-bold block mb-0.5 text-xs uppercase tracking-wider">Intención Pedagógica:</strong>
            <p class="text-slate-200 font-medium italic m-0 text-xs md:text-sm leading-relaxed">
              "${dayData.intention}"
            </p>
          </div>
        </div>

        <div class="space-y-4">
          ${dayData.activities.map((act, actIdx) => `
            <div class="task-item flex-col items-start gap-4 p-5 bg-slate-900/90 border-2 border-slate-700 rounded-2xl">
              <div class="flex items-start gap-3.5 w-full">
                <input type="checkbox" data-task-id="${dayObj.id}-act-${actIdx}" class="task-checkbox-custom mt-1 flex-shrink-0" />
                <div class="flex-1">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 class="text-base md:text-lg font-black text-white m-0">${act.title}</h3>
                    <span class="px-2.5 py-0.5 bg-slate-800 text-yellow-300 font-mono font-bold text-xs rounded-md border border-slate-600">
                      ${act.duration}
                    </span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-2 my-2 p-2 bg-slate-950/80 rounded-xl border border-slate-800 text-xs">
                    <div class="text-slate-300">
                      <span class="text-cyan-400 font-bold block mb-0.5"><i class="fa-solid fa-chalkboard-user mr-1"></i> Medio Docente:</span>
                      ${act.presentation}
                    </div>
                    <div class="text-slate-300">
                      <span class="text-emerald-400 font-bold block mb-0.5"><i class="fa-solid fa-pen-nib mr-1"></i> Soporte Estudiante:</span>
                      ${act.studentWork}
                    </div>
                  </div>

                  <div class="space-y-1.5 mt-2">
                    ${act.phases.map(phase => `
                      <div class="p-2.5 bg-slate-950/90 rounded-lg border border-slate-800 text-slate-200 text-xs md:text-sm font-medium">
                        ${phase}
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    });
  }

  renderRules() {
    const container = document.getElementById('rules-list-container');
    if (!container) return;

    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        ${CLASSROOM_RULES.map(rule => `
          <div class="card-high-contrast border-2 border-red-500/80 bg-slate-900/90 p-5 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-3 pb-2.5 mb-2.5 border-b border-slate-700">
                <div class="flex items-center gap-2.5">
                  <span class="w-9 h-9 flex items-center justify-center rounded-xl bg-red-600 text-white font-black text-base">
                    ${rule.number}
                  </span>
                  <h3 class="text-lg font-black text-white m-0">${rule.title}</h3>
                </div>
                <span class="badge-high-contrast px-2.5 py-0.5 bg-red-950 border border-red-500 text-red-200 text-xs font-bold rounded-full">
                  ${rule.badge}
                </span>
              </div>

              <p class="text-yellow-300 font-bold text-sm mb-1.5">
                <i class="fa-solid ${rule.icon} mr-1"></i> ${rule.summary}
              </p>
              <p class="text-slate-200 text-xs md:text-sm leading-relaxed mb-3">
                ${rule.detail}
              </p>
            </div>

            <div class="p-2.5 bg-red-950/40 rounded-xl border border-red-900/60 text-xs text-red-300 font-semibold">
              <strong class="text-red-200 block text-[11px]">Consecuencia Formativa:</strong>
              ${rule.consequence}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  renderStudentRoster() {
    const container = document.getElementById('students-table-container');
    if (!container) return;

    const students = getAllStudents();
    const enrolledCount = students.filter(s => s.enrolled).length;
    const pendingCount = students.length - enrolledCount;

    container.innerHTML = `
      <div class="card-high-contrast border-2 border-teal-500 bg-slate-900/95 p-6 rounded-2xl shadow-2xl">
        <div class="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-700">
          <div>
            <h3 class="text-xl font-black text-white m-0 flex items-center gap-2">
              <i class="fa-solid fa-clipboard-list text-teal-400"></i> Registro de Matrícula y Tutores
            </h3>
            <p class="text-xs text-slate-300 mt-0.5">Gestión interna docente (datos de contacto protegidos durante dinámicas de proyección)</p>
          </div>
          <button onclick="globalSettingsManager.exportAttendanceToExcel()" class="btn-primary text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
            <i class="fa-solid fa-file-excel text-emerald-300"></i> Exportar Asistencia (.xlsx)
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div class="p-3 bg-slate-950 border border-slate-700 rounded-xl text-center">
            <span class="text-[11px] font-bold text-slate-400 uppercase">Matrícula</span>
            <span class="block text-2xl font-black text-white font-mono mt-0.5">${students.length}</span>
          </div>
          <div class="p-3 bg-emerald-950/60 border border-emerald-600 rounded-xl text-center">
            <span class="text-[11px] font-bold text-emerald-300 uppercase">Inscritos</span>
            <span class="block text-2xl font-black text-emerald-400 font-mono mt-0.5">${enrolledCount}</span>
          </div>
          <div class="p-3 bg-amber-950/60 border border-amber-600 rounded-xl text-center">
            <span class="text-[11px] font-bold text-amber-300 uppercase">Pendientes</span>
            <span class="block text-2xl font-black text-amber-400 font-mono mt-0.5">${pendingCount}</span>
          </div>
        </div>

        <div class="mb-3">
          <input type="text" id="student-search-input" placeholder="🔍 Filtrar estudiante por nombre..." 
                 class="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs font-medium focus:border-cyan-400 focus:outline-none" />
        </div>

        <div class="overflow-x-auto max-h-[360px] overflow-y-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="border-b-2 border-slate-700 bg-slate-950/80 text-cyan-300 font-bold sticky top-0">
                <th class="p-2.5">N°</th>
                <th class="p-2.5">Estudiante</th>
                <th class="p-2.5">Estado</th>
                <th class="p-2.5">Tutor Legal</th>
                <th class="p-2.5">Teléfono</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800 text-xs">
              ${students.map(s => `
                <tr class="hover:bg-slate-800/60 transition-colors student-row" data-search="${s.id} ${s.firstName.toLowerCase()} ${s.lastName.toLowerCase()}">
                  <td class="p-2.5 font-mono font-black text-yellow-400">#${s.id}</td>
                  <td class="p-2.5 font-bold text-white">${s.firstName} ${s.lastName}</td>
                  <td class="p-2.5">
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-black ${s.enrolled ? 'bg-emerald-950 text-emerald-300 border border-emerald-500' : 'bg-amber-950 text-amber-300 border border-amber-500'}">
                      ${s.status}
                    </span>
                  </td>
                  <td class="p-2.5 text-slate-300">${s.tutor}</td>
                  <td class="p-2.5 font-mono text-cyan-300">${s.phone}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  filterStudentsTable(query) {
    const q = query.toLowerCase().trim();
    const rows = document.querySelectorAll('.student-row');
    rows.forEach(row => {
      const text = row.dataset.search || '';
      row.style.display = text.includes(q) ? '' : 'none';
    });
  }

  updateGlobalProgress() {
    const totalCheckboxes = document.querySelectorAll('.task-checkbox-custom').length;
    const checkedCheckboxes = this.completedTasks.size;
    const percentage = totalCheckboxes > 0 ? Math.round((checkedCheckboxes / totalCheckboxes) * 100) : 0;

    const barEl = document.getElementById('global-progress-bar');
    const textEl = document.getElementById('global-progress-text');

    if (barEl) barEl.style.width = `${percentage}%`;
    if (textEl) textEl.textContent = `${percentage}% (${checkedCheckboxes}/${totalCheckboxes})`;
  }
}

/**
 * Función de Impresión Aislada en Hoja Timbrada (100% Blanca y Limpia)
 */
function printDayDiagnostic(dayKey) {
  const sheet = document.getElementById(`diagnostic-sheet-${dayKey}`);
  if (!sheet) return;

  const printFrame = document.createElement('iframe');
  printFrame.style.position = 'fixed';
  printFrame.style.right = '0';
  printFrame.style.bottom = '0';
  printFrame.style.width = '0';
  printFrame.style.height = '0';
  printFrame.style.border = '0';
  document.body.appendChild(printFrame);

  const frameDoc = printFrame.contentWindow || printFrame.contentDocument.document || printFrame.contentDocument;
  frameDoc.document.open();
  frameDoc.document.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Ficha Diagnóstica — Politécnico Juan Bosch</title>
      <style>
        @page { size: letter portrait; margin: 1.2cm 1.5cm; }
        * { box-sizing: border-box; }
        body { font-family: 'Times New Roman', Times, serif; font-size: 11pt; color: #000; margin: 0; padding: 0; background: #fff; line-height: 1.35; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .text-center { text-align: center; }
        .flex-1 { flex: 1; }
        .px-3 { padding-left: 10px; padding-right: 10px; }
        .pb-3 { padding-bottom: 8px; }
        .pt-1 { padding-top: 4px; }
        .pt-2 { padding-top: 6px; }
        .pt-3 { padding-top: 10px; }
        .space-y-1 > * + * { margin-top: 3px; }
        .space-y-3\\.5 > * + * { margin-top: 10px; }
        .space-y-4 > * + * { margin-top: 12px; }
        .border-b-2 { border-bottom: 2.5px solid #1e40af; }
        .border-t { border-top: 1px solid #000; }
        .border-t-2 { border-top: 2px solid #1e40af; }
        table { width: 100%; border-collapse: collapse; margin: 8px 0; font-size: 10pt; }
        table td { border: 1px solid #000; padding: 4px 6px; vertical-align: middle; }
        img { height: 52px; object-fit: contain; }
        h4, h5, p { margin: 0; line-height: 1.2; }
        h4 { font-size: 11pt; font-weight: bold; }
        h5 { font-size: 10pt; font-weight: bold; color: #1e40af; }
        p { font-size: 8.5pt; color: #334155; }
        .font-bold { font-weight: bold; }
        .font-sans { font-family: 'Inter', system-ui, sans-serif; }
        .uppercase { text-transform: uppercase; }
        .text-xs { font-size: 9.5pt; }
        .text-sm { font-size: 11pt; }
        .text-base { font-size: 12pt; }
        .bg-slate-50 { background-color: #f8fafc; }
        .border-dashed { border: 1px dashed #64748b; padding: 6px 8px; border-radius: 4px; font-size: 9pt; font-style: italic; min-height: 36px; }
      </style>
    </head>
    <body>
      ${sheet.innerHTML}
    </body>
    </html>
  `);
  frameDoc.document.close();

  setTimeout(() => {
    printFrame.contentWindow.focus();
    printFrame.contentWindow.print();
    setTimeout(() => {
      document.body.removeChild(printFrame);
    }, 1000);
  }, 350);
}

function openRompehielosModal() {
  const modal = document.getElementById('rompehielos-modal');
  const iframe = document.getElementById('rompehielos-iframe');
  if (iframe && !iframe.src) {
    iframe.src = MINERD_GUIDE_DATA.meta.enlaceRompehielos;
  }
  if (modal) modal.classList.add('open');
}

function closeRompehielosModal() {
  const modal = document.getElementById('rompehielos-modal');
  if (modal) modal.classList.remove('open');
}

let globalActivitiesManager = null;
function initActivitiesManager() {
  globalActivitiesManager = new ActivitiesManager();
}
