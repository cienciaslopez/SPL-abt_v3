/**
 * Módulo de Ajustes, Semblanza Docente, Asistencia y Exportación a Excel (v2.2)
 * Politécnico Prof. Juan Emilio Bosch Gaviño
 * Prof. Steve Polanco López
 */

class SettingsAndAttendanceManager {
  constructor() {
    this.currentAttendanceDay = 'lunes';
    this.init();
  }

  init() {
    this.renderDrawerSemblanza();
    this.renderDrawerAttendance();
    this.renderSettingsForm();
    this.bindEvents();
    this.applySavedTheme();
  }

  bindEvents() {
    const burgerBtn = document.getElementById('hamburger-menu-btn');
    const drawer = document.getElementById('hamburger-drawer');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');

    if (burgerBtn && drawer) {
      burgerBtn.addEventListener('click', () => {
        this.renderDrawerAttendance();
        drawer.classList.add('open');
      });
    }

    if (closeDrawerBtn && drawer) {
      closeDrawerBtn.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    }

    // Cerrar drawer al hacer clic en el fondo oscuro (backdrop)
    if (drawer) {
      drawer.addEventListener('click', (e) => {
        if (e.target === drawer) {
          drawer.classList.remove('open');
        }
      });
    }

    // Pestañas del Drawer (Navegación, Semblanza, Asistencia, Ajustes)
    document.querySelectorAll('.drawer-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = btn.dataset.drawerTab;
        document.querySelectorAll('.drawer-tab-btn').forEach(b => b.classList.remove('active', 'bg-blue-600', 'text-white'));
        btn.classList.add('active', 'bg-blue-600', 'text-white');

        document.querySelectorAll('.drawer-tab-pane').forEach(pane => {
          if (pane.id === target) pane.classList.remove('hidden');
          else pane.classList.add('hidden');
        });
      });
    });

    // Enlaces de Navegación dentro del Drawer
    document.querySelectorAll('.drawer-nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const target = item.dataset.target;
        if (typeof navigateToSection === 'function') {
          navigateToSection(target);
        }
        document.getElementById('hamburger-drawer')?.classList.remove('open');
      });
    });

    // Selector de día en Asistencia
    const attDaySelect = document.getElementById('attendance-day-select');
    if (attDaySelect) {
      attDaySelect.addEventListener('change', (e) => {
        this.currentAttendanceDay = e.target.value;
        this.renderDrawerAttendance();
      });
    }

    // Botones de marcar todos presentes / ausentes
    const markAllPresentBtn = document.getElementById('mark-all-present-btn');
    if (markAllPresentBtn) {
      markAllPresentBtn.addEventListener('click', () => {
        const students = getAllStudents();
        students.forEach(s => setStudentAttendance(this.currentAttendanceDay, s.id, true));
        this.renderDrawerAttendance();
        this.refreshSubmodules();
      });
    }

    const markAllAbsentBtn = document.getElementById('mark-all-absent-btn');
    if (markAllAbsentBtn) {
      markAllAbsentBtn.addEventListener('click', () => {
        const students = getAllStudents();
        students.forEach(s => setStudentAttendance(this.currentAttendanceDay, s.id, false));
        this.renderDrawerAttendance();
        this.refreshSubmodules();
      });
    }

    // Exportar Asistencia a Excel (.xlsx / CSV)
    const exportExcelBtn = document.getElementById('export-attendance-excel-btn');
    if (exportExcelBtn) {
      exportExcelBtn.addEventListener('click', () => this.exportAttendanceToExcel());
    }

    // Guardar ajustes de Docente y Estudiantes
    const saveSettingsBtn = document.getElementById('save-settings-btn');
    if (saveSettingsBtn) {
      saveSettingsBtn.addEventListener('click', () => this.saveAllSettings());
    }

    const resetSettingsBtn = document.getElementById('reset-settings-btn');
    if (resetSettingsBtn) {
      resetSettingsBtn.addEventListener('click', () => this.resetAllSettings());
    }

    // Selector de Tema
    const themeSelect = document.getElementById('theme-mode-select');
    if (themeSelect) {
      themeSelect.addEventListener('change', (e) => {
        this.setTheme(e.target.value);
      });
    }
  }

  renderDrawerSemblanza() {
    const config = getTeacherConfig();
    const container = document.getElementById('drawer-teacher-profile');
    if (!container) return;

    container.innerHTML = `
      <div class="p-5 bg-slate-900 border border-slate-700 rounded-2xl">
        <!-- Logos Institucionales Oficiales -->
        <div class="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-700">
          <img src="${config.logoMinerd}" alt="Logo MINERD" class="h-12 object-contain filter drop-shadow">
          <img src="${config.logoPolitecnico}" alt="Logo Politécnico" class="h-14 object-contain rounded-lg border border-slate-600 bg-white p-1">
        </div>

        <div class="text-center mb-3">
          <span class="badge-high-contrast px-3 py-1 bg-blue-700 text-white font-bold rounded-full text-xs uppercase">
            Cátedra de Ciencias de la Naturaleza
          </span>
          <h3 class="text-2xl font-black text-white mt-2 mb-0.5">${config.teacherName}</h3>
          <p class="text-xs text-yellow-400 font-bold">${config.institution}</p>
          <p class="text-xs text-slate-300 font-medium">${config.district} • ${config.regional}</p>
        </div>

        <!-- Biografía con scroll independiente -->
        <div class="p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-200 text-sm leading-relaxed whitespace-pre-line font-medium max-h-[320px] overflow-y-auto">
          ${config.bio}
        </div>

        <div class="mt-4 pt-3 border-t border-slate-800 flex justify-between text-xs text-slate-400 font-bold">
          <span>Código: ${config.centerCode}</span>
          <span>Grado: ${config.grade} (${config.section})</span>
        </div>
      </div>
    `;
  }

  renderDrawerAttendance() {
    const container = document.getElementById('drawer-attendance-list');
    if (!container) return;

    const students = getAllStudents();
    const attendance = getWeeklyAttendance();
    const dayAtt = attendance[this.currentAttendanceDay] || {};

    let presentCount = 0;
    students.forEach(s => {
      if (dayAtt[s.id] !== false) presentCount++;
    });

    const summaryEl = document.getElementById('attendance-summary-text');
    if (summaryEl) {
      summaryEl.textContent = `Presentes: ${presentCount} / ${students.length} estudiantes`;
    }

    container.innerHTML = students.map(s => {
      const isPresent = dayAtt[s.id] !== false;
      return `
        <div class="flex items-center justify-between p-2.5 bg-slate-900/90 rounded-xl border ${isPresent ? 'border-emerald-600/70 bg-emerald-950/20' : 'border-rose-700/60 bg-rose-950/20'} transition-all">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 flex items-center justify-center rounded bg-slate-800 text-yellow-400 font-bold text-xs font-mono">
              #${s.id}
            </span>
            <div>
              <span class="font-bold text-white text-xs block">${s.firstName} ${s.lastName}</span>
              <span class="text-[10px] text-slate-400">${s.status}</span>
            </div>
          </div>

          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" class="sr-only peer" ${isPresent ? 'checked' : ''} 
                   onchange="globalSettingsManager.toggleStudentAttendance('${this.currentAttendanceDay}', ${s.id}, this.checked)">
            <div class="w-10 h-5 bg-rose-900 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
          </label>
        </div>
      `;
    }).join('');
  }

  toggleStudentAttendance(day, studentId, isPresent) {
    setStudentAttendance(day, studentId, isPresent);
    this.renderDrawerAttendance();
    this.refreshSubmodules();
  }

  exportAttendanceToExcel() {
    const config = getTeacherConfig();
    const students = getAllStudents();
    const attendance = getWeeklyAttendance();

    const days = [
      { key: 'lunes', label: 'Lunes (🕊️ Colibrí)' },
      { key: 'martes', label: 'Martes (🐝 Abeja)' },
      { key: 'miercoles', label: 'Miércoles (🦋 Mariposa)' },
      { key: 'jueves', label: 'Jueves (🐢 Tortuga)' },
      { key: 'viernes', label: 'Viernes (🐜 Hormiga)' }
    ];

    // Construcción de tabla compatible con Excel (.xls / .csv)
    let csvContent = "\uFEFF"; // BOM UTF-8
    csvContent += `POLITÉCNICO PROF. JUAN EMILIO BOSCH GAVIÑO\n`;
    csvContent += `REGISTRO OFICIAL DE ASISTENCIA — SEMANA DE AMBIENTACIÓN 2026-2027\n`;
    csvContent += `Docente: ${config.teacherName}, Grado: ${config.grade}, Sección: ${config.section}\n\n`;
    csvContent += `N° Lista,Nombre,Apellidos,Estado Matrícula,Lunes,Martes,Miércoles,Jueves,Viernes,Total Asistencias\n`;

    students.forEach(s => {
      let totalP = 0;
      const dayMarks = days.map(d => {
        const isPresent = attendance[d.key]?.[s.id] !== false;
        if (isPresent) totalP++;
        return isPresent ? 'P' : 'A';
      });

      csvContent += `${s.id},"${s.firstName}","${s.lastName}","${s.status}",${dayMarks.join(',')},${totalP}/5\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Asistencia_Ambientacion_3roC_${config.teacherName.replace(/ /g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  renderSettingsForm() {
    const config = getTeacherConfig();
    const students = getAllStudents();

    const tName = document.getElementById('cfg-teacher-name');
    const tSubject = document.getElementById('cfg-subject');
    const tInst = document.getElementById('cfg-institution');
    const tDist = document.getElementById('cfg-district');
    const tGrade = document.getElementById('cfg-grade');
    const tSec = document.getElementById('cfg-section');
    const tBio = document.getElementById('cfg-bio');
    const tStudents = document.getElementById('cfg-students-bulk');

    if (tName) tName.value = config.teacherName;
    if (tSubject) tSubject.value = config.subject;
    if (tInst) tInst.value = config.institution;
    if (tDist) tDist.value = config.district;
    if (tGrade) tGrade.value = config.grade;
    if (tSec) tSec.value = config.section;
    if (tBio) tBio.value = config.bio;

    if (tStudents) {
      tStudents.value = students.map(s => `${s.id},${s.firstName},${s.lastName},${s.status},${s.tutor || ''},${s.phone || ''}`).join('\n');
    }
  }

  saveAllSettings() {
    const config = {
      teacherName: document.getElementById('cfg-teacher-name')?.value || DEFAULT_TEACHER_CONFIG.teacherName,
      subject: document.getElementById('cfg-subject')?.value || DEFAULT_TEACHER_CONFIG.subject,
      institution: document.getElementById('cfg-institution')?.value || DEFAULT_TEACHER_CONFIG.institution,
      district: document.getElementById('cfg-district')?.value || DEFAULT_TEACHER_CONFIG.district,
      grade: document.getElementById('cfg-grade')?.value || DEFAULT_TEACHER_CONFIG.grade,
      section: document.getElementById('cfg-section')?.value || DEFAULT_TEACHER_CONFIG.section,
      bio: document.getElementById('cfg-bio')?.value || DEFAULT_TEACHER_CONFIG.bio,
      logoMinerd: DEFAULT_TEACHER_CONFIG.logoMinerd,
      logoPolitecnico: DEFAULT_TEACHER_CONFIG.logoPolitecnico,
      centerCode: DEFAULT_TEACHER_CONFIG.centerCode,
      regional: DEFAULT_TEACHER_CONFIG.regional,
      academicYear: DEFAULT_TEACHER_CONFIG.academicYear
    };

    saveTeacherConfig(config);

    const bulkText = document.getElementById('cfg-students-bulk')?.value || '';
    const lines = bulkText.trim().split('\n');
    const newStudents = [];

    lines.forEach((line, idx) => {
      const parts = line.split(',');
      if (parts.length >= 3) {
        const id = parseInt(parts[0].trim(), 10) || (idx + 1);
        const firstName = parts[1].trim();
        const lastName = parts[2].trim();
        const status = (parts[3] || 'Inscrito').trim();
        const tutor = (parts[4] || `Tutor de ${firstName}`).trim();
        const phone = (parts[5] || '809-000-0000').trim();
        newStudents.push({
          id,
          firstName,
          lastName,
          status,
          enrolled: !status.toLowerCase().includes('no'),
          tutor,
          phone
        });
      }
    });

    if (newStudents.length > 0) {
      saveCustomStudents(newStudents);
    }

    alert('✅ ¡Ajustes guardados correctamente!');
    this.renderDrawerSemblanza();
    this.renderDrawerAttendance();
    this.refreshSubmodules();
    
    document.getElementById('hamburger-drawer')?.classList.remove('open');
  }

  resetAllSettings() {
    if (confirm('¿Deseas restaurar la configuración predeterminada de 3ro C y Prof. Steve Polanco López?')) {
      resetTeacherConfig();
      resetDefaultStudents();
      initDefaultAttendance();
      this.renderSettingsForm();
      this.renderDrawerSemblanza();
      this.renderDrawerAttendance();
      this.refreshSubmodules();
      alert('🔄 Configuración restaurada.');
    }
  }

  refreshSubmodules() {
    if (typeof globalActivitiesManager !== 'undefined' && globalActivitiesManager) {
      globalActivitiesManager.renderStudentRoster();
      globalActivitiesManager.renderDailyDiagnosticWorksheet();
      globalActivitiesManager.renderLunesTimeline();
    }
    if (typeof globalRoulette !== 'undefined' && globalRoulette) {
      globalRoulette.loadStudents();
      globalRoulette.draw();
    }
    if (typeof globalTeamGenerator !== 'undefined' && globalTeamGenerator) {
      globalTeamGenerator.generate();
    }
  }

  applySavedTheme() {
    const savedTheme = localStorage.getItem('popjubo_theme_mode') || 'dark';
    this.setTheme(savedTheme, false);
  }

  setTheme(themeName, save = true) {
    document.body.classList.remove('light-theme', 'projector-mode');
    
    if (themeName === 'light') {
      document.body.classList.add('light-theme');
    } else if (themeName === 'projector') {
      document.body.classList.add('projector-mode');
    }

    if (save) {
      localStorage.setItem('popjubo_theme_mode', themeName);
    }

    const select = document.getElementById('theme-mode-select');
    if (select) select.value = themeName;
  }
}

let globalSettingsManager = null;
function initSettingsAndAttendance() {
  globalSettingsManager = new SettingsAndAttendanceManager();
}
