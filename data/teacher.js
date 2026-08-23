/**
 * Configuración Institucional y Semblanza Docente (v2.1)
 * Politécnico Prof. Juan Emilio Bosch Gaviño
 * Año Escolar 2026-2027
 */

const DEFAULT_TEACHER_CONFIG = {
  teacherName: "Prof. Steve Polanco López",
  subject: "Ciencias de la Naturaleza (Física, Química, Biología)",
  institution: "Politécnico Prof. Juan Emilio Bosch Gaviño",
  centerCode: "15228",
  district: "Distrito Educativo 06-07 Gaspar Hernández",
  regional: "Regional 06 La Vega",
  grade: "3er Grado de Secundaria",
  section: "Sección C",
  academicYear: "2026-2027",
  logoPolitecnico: "https://i.postimg.cc/qqPntZPr/LOGO-del-POLITECNICO.jpg",
  logoMinerd: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Logo_del_Ministerio_de_Educaci%C3%B3n_%28Rep%C3%BAblica_Dominicana%29.svg/1280px-Logo_del_Ministerio_de_Educaci%C3%B3n_%28Rep%C3%BAblica_Dominicana%29.svg.png",
  bio: `Licenciado en Educación con mención en Ciencias de la Naturaleza (Física, Química y Biología), egresado del Instituto Superior de Formación Docente Salomé Ureña (ISFODOSU) y graduado del Programa de Inmersión en Lengua Inglesa.

Especialista en Metodología STEAM, desarrollo de herramientas web interactivas para el aprendizaje y diseño de flujos pedagógicos automatizados con Inteligencia Artificial (creador del ecosistema AulaIA y el protocolo Formato Polanco v3.0). Músico y pianista, aplica los principios de armonía, precisión y constancia en la gestión de aula.

Docente titular en el Politécnico Prof. Juan Emilio Bosch Gaviño y facilitador en el programa de educación de personas jóvenes y adultas (PREPARA). Su práctica docente se fundamenta en un alto rigor académico, la investigación científica aplicada, la disciplina basada en el respeto incondicional y el fomento del pensamiento crítico en los futuros técnicos y profesionales de la República Dominicana.`
};

const TEACHER_STORAGE_KEY = 'popjubo_teacher_config_v2';

function getTeacherConfig() {
  const saved = localStorage.getItem(TEACHER_STORAGE_KEY);
  if (saved) {
    try {
      return { ...DEFAULT_TEACHER_CONFIG, ...JSON.parse(saved) };
    } catch (e) {
      return DEFAULT_TEACHER_CONFIG;
    }
  }
  return DEFAULT_TEACHER_CONFIG;
}

function saveTeacherConfig(config) {
  localStorage.setItem(TEACHER_STORAGE_KEY, JSON.stringify(config));
}

function resetTeacherConfig() {
  localStorage.removeItem(TEACHER_STORAGE_KEY);
  return DEFAULT_TEACHER_CONFIG;
}
