/**
 * Módulo de Generación y Gestión de Equipos Dinámicos (v2.0)
 * Con integración de asistencia diaria (Solo Presentes)
 * Politécnico Prof. Juan Emilio Bosch Gaviño | 3ro C
 * Prof. Steve Polanco López
 */

const TEAM_THEMES = [
  { name: "Equipo Colibríes de la Alegría", symbol: "El Colibrí", icon: "fa-feather", color: "border-cyan-500", bg: "bg-cyan-950/70", badge: "bg-cyan-600" },
  { name: "Equipo Abejas de la Cooperación", symbol: "La Abeja", icon: "fa-certificate", color: "border-amber-500", bg: "bg-amber-950/70", badge: "bg-amber-600" },
  { name: "Equipo Mariposas de la Transformación", symbol: "La Mariposa", icon: "fa-wand-magic-sparkles", color: "border-purple-500", bg: "bg-purple-950/70", badge: "bg-purple-600" },
  { name: "Equipo Tortugas de la Sabiduría", symbol: "La Tortuga", icon: "fa-shield-halved", color: "border-emerald-500", bg: "bg-emerald-950/70", badge: "bg-emerald-600" },
  { name: "Equipo Hormigas del Trabajo en Equipo", symbol: "La Hormiga", icon: "fa-people-group", color: "border-rose-500", bg: "bg-rose-950/70", badge: "bg-rose-600" },
  { name: "Equipo Átomos de Bosch (STEAM)", symbol: "El Átomo", icon: "fa-atom", color: "border-indigo-500", bg: "bg-indigo-950/70", badge: "bg-indigo-600" }
];

const STUDENT_ROLES = [
  { role: "Coordinador/a", desc: "Lidera la discusión y vela por el cumplimiento de la meta" },
  { role: "Relator/a", desc: "Registra las conclusiones y síntesis en el cuaderno/ficha" },
  { role: "Gestor/a de Tiempo", desc: "Monitorea el cronómetro y asegura el ritmo de trabajo" },
  { role: "Portavoz", desc: "Presenta las ideas del equipo frente al curso en plenaria" },
  { role: "Logístico/a", desc: "Organiza los materiales y vela por el orden del área" }
];

class TeamGenerator {
  constructor() {
    this.numTeams = 4;
    this.filterMode = 'present'; // 'present', 'enrolled', 'all'
    this.currentTeams = [];
    this.bindEvents();
  }

  bindEvents() {
    const generateBtn = document.getElementById('generate-teams-btn');
    if (generateBtn) {
      generateBtn.addEventListener('click', () => this.generate());
    }

    const teamCountSelect = document.getElementById('team-count-select');
    if (teamCountSelect) {
      teamCountSelect.addEventListener('change', (e) => {
        this.numTeams = parseInt(e.target.value, 10);
      });
    }

    const filterSelect = document.getElementById('teams-filter-select');
    if (filterSelect) {
      filterSelect.addEventListener('change', (e) => {
        this.filterMode = e.target.value;
      });
    }

    const copyBtn = document.getElementById('copy-teams-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => this.copyTeamsToClipboard());
    }
  }

  generate() {
    let sourceStudents = [];
    if (this.filterMode === 'present') {
      sourceStudents = getPresentStudents('lunes', false);
    } else if (this.filterMode === 'enrolled') {
      sourceStudents = getEnrolledStudents();
    } else {
      sourceStudents = getAllStudents();
    }

    if (sourceStudents.length === 0) {
      sourceStudents = getAllStudents();
    }
    
    // Algoritmo Fisher-Yates
    const shuffled = [...sourceStudents];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const teams = Array.from({ length: this.numTeams }, (_, index) => ({
      ...TEAM_THEMES[index % TEAM_THEMES.length],
      members: []
    }));

    shuffled.forEach((student, index) => {
      const teamIndex = index % this.numTeams;
      const role = STUDENT_ROLES[teams[teamIndex].members.length % STUDENT_ROLES.length];
      teams[teamIndex].members.push({
        ...student,
        role: role.role,
        roleDesc: role.desc
      });
    });

    this.currentTeams = teams;
    this.render();
  }

  render() {
    const container = document.getElementById('teams-result-container');
    if (!container) return;

    if (this.currentTeams.length === 0) {
      container.innerHTML = '<p class="text-slate-400 italic text-center py-8">Presiona "Generar Equipos" para organizar a los estudiantes presentes.</p>';
      return;
    }

    const totalStudentsInTeams = this.currentTeams.reduce((acc, t) => acc + t.members.length, 0);

    container.innerHTML = `
      <div class="mb-4 p-3 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-between text-xs text-slate-300 font-bold">
        <span>Filtro activo: ${this.filterMode === 'present' ? 'Solo Presentes' : this.filterMode === 'enrolled' ? 'Solo Inscritos' : 'Todos'}</span>
        <span class="text-yellow-400 font-mono text-sm">${totalStudentsInTeams} Estudiantes Asignados</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${this.currentTeams.map((team, idx) => `
          <div class="team-card ${team.bg} border-2 ${team.color} rounded-2xl p-5 shadow-xl transition-all">
            <div class="team-card-header flex items-center justify-between pb-3 mb-4 border-b border-slate-700">
              <div class="flex items-center gap-3">
                <i class="fa-solid ${team.icon} text-2xl text-yellow-400"></i>
                <h3 class="text-xl font-black text-white m-0">${team.name}</h3>
              </div>
              <span class="badge-high-contrast px-2.5 py-1 ${team.badge} text-white text-xs font-bold rounded-full">
                ${team.members.length} Estudiantes
              </span>
            </div>
            
            <ul class="space-y-2.5">
              ${team.members.map(member => `
                <li class="p-2.5 bg-slate-900/95 rounded-xl border border-slate-700 flex flex-col gap-1">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-white text-sm">
                      <span class="text-yellow-400 font-mono font-bold">#${member.id}</span> ${member.firstName} ${member.lastName}
                    </span>
                    <span class="text-[10px] px-2 py-0.5 rounded font-bold ${member.enrolled ? 'bg-emerald-900 text-emerald-300' : 'bg-amber-900 text-amber-300'}">
                      ${member.status}
                    </span>
                  </div>
                  <div class="flex items-center gap-2 mt-0.5">
                    <span class="text-[11px] font-bold px-2 py-0.5 bg-blue-900 text-blue-200 rounded border border-blue-600">
                      ${member.role}
                    </span>
                    <span class="text-[11px] text-slate-400 truncate">${member.roleDesc}</span>
                  </div>
                </li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    `;
  }

  copyTeamsToClipboard() {
    if (this.currentTeams.length === 0) return;
    
    let text = `EQUIPOS DE AMBIENTACIÓN 2026-2027 — 3RO C\nPOLITÉCNICO PROF. JUAN EMILIO BOSCH GAVIÑO\nDocente: Prof. Steve Polanco López\n\n`;
    
    this.currentTeams.forEach((team) => {
      text += `====================================\n${team.name} (${team.members.length} estudiantes)\n====================================\n`;
      team.members.forEach((m, mIdx) => {
        text += `${mIdx + 1}. [#${m.id}] ${m.firstName} ${m.lastName} — Rol: ${m.role} (${m.status})\n`;
      });
      text += `\n`;
    });

    navigator.clipboard.writeText(text).then(() => {
      alert('📋 ¡Equipos copiados al portapapeles exitosamente!');
    }).catch(err => {
      console.error('Error:', err);
    });
  }
}

let globalTeamGenerator = null;
function initTeamGenerator() {
  globalTeamGenerator = new TeamGenerator();
}
