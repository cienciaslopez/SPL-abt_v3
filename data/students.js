/**
 * Matrícula y Sistema de Pase de Lista Diario / Semanal
 * Politécnico Prof. Juan Emilio Bosch Gaviño
 * Año Escolar 2026-2027
 */

const DEFAULT_STUDENTS = [
  { id: 1, firstName: "Risleiny", lastName: "Abreu De León", tutor: "Tutor de Risleiny Abreu De León", phone: "809-674-4239", status: "No inscrito", enrolled: false },
  { id: 2, firstName: "Sandhey", lastName: "Acerlin", tutor: "Tutor de Sandhey Acerlin", phone: "809-729-7410", status: "No inscrito", enrolled: false },
  { id: 3, firstName: "Dayleni", lastName: "Alcántara Zaten", tutor: "Tutor de Dayleni Alcántara Zaten", phone: "829-312-1251", status: "No inscrito", enrolled: false },
  { id: 4, firstName: "Leudy Rafael", lastName: "Arvelo Guzmán", tutor: "Tutor de Leudy Rafael Arvelo Guzmán", phone: "829-487-3542", status: "Inscrito", enrolled: true },
  { id: 5, firstName: "Elizabet", lastName: "Arvelo Tavarez", tutor: "Tutor de Elizabet Arvelo Tavarez", phone: "829-312-1251", status: "Inscrito", enrolled: true },
  { id: 6, firstName: "Heidy María", lastName: "Brito Gómez", tutor: "Tutor de Heidy María Brito Gómez", phone: "829-768-8398", status: "Inscrito", enrolled: true },
  { id: 7, firstName: "Jerison", lastName: "Brito Rodríguez", tutor: "Tutor de Jerison Brito Rodríguez", phone: "809-546-8430", status: "Inscrito", enrolled: true },
  { id: 8, firstName: "Yelianny", lastName: "Brito Valerio", tutor: "Tutor de Yelianny Brito Valerio", phone: "809-484-5403", status: "Inscrito", enrolled: true },
  { id: 9, firstName: "Alex Javier", lastName: "Cordero De León", tutor: "Tutor de Alex Javier Cordero De León", phone: "829-475-6812", status: "No inscrito", enrolled: false },
  { id: 10, firstName: "Aniel Alexander", lastName: "David", tutor: "Tutor de Aniel Alexander David", phone: "829-577-9012", status: "No inscrito", enrolled: false },
  { id: 11, firstName: "Josuanny", lastName: "De La Cruz Concepción", tutor: "Tutor de Josuanny De La Cruz Concepción", phone: "829-623-7384", status: "Inscrito", enrolled: true },
  { id: 12, firstName: "Adelfy Mishael", lastName: "Domínguez Siri", tutor: "Tutor de Adelfy Mishael Domínguez Siri", phone: "849-427-0283", status: "Inscrito", enrolled: true },
  { id: 13, firstName: "José Manuel", lastName: "Ferreiras Almonte", tutor: "Tutor de José Manuel Ferreiras Almonte", phone: "849-530-8475", status: "Inscrito", enrolled: true },
  { id: 14, firstName: "Sariely Alexandra", lastName: "García Ferreira", tutor: "Tutor de Sariely Alexandra García Ferreira", phone: "829-982-8827", status: "No inscrito", enrolled: false },
  { id: 15, firstName: "Joseph Adán", lastName: "Gómez Gil", tutor: "Tutor de Joseph Adán Gómez Gil", phone: "809-771-7017", status: "Inscrito", enrolled: true },
  { id: 16, firstName: "Smarlin", lastName: "López Moronta", tutor: "Tutor de Smarlin López Moronta", phone: "809-974-2622", status: "Inscrito", enrolled: true },
  { id: 17, firstName: "Ghilippe", lastName: "Martin Joseph", tutor: "Tutor de Ghilippe Martin Joseph", phone: "829-357-3973", status: "Inscrito", enrolled: true },
  { id: 18, firstName: "Lourdes", lastName: "Mercedes Hidalgo", tutor: "Tutor de Lourdes Mercedes Hidalgo", phone: "829-208-0687", status: "Inscrito", enrolled: true },
  { id: 19, firstName: "Ana Josleey", lastName: "Minaya Martínez", tutor: "Tutor de Ana Josleey Minaya Martínez", phone: "849-354-1107", status: "Inscrito", enrolled: true },
  { id: 20, firstName: "Reymón Ismael", lastName: "Polanco Santos", tutor: "Tutor de Reymón Ismael Polanco Santos", phone: "829-941-6672", status: "Inscrito", enrolled: true },
  { id: 21, firstName: "Jade Ginela", lastName: "Polanco Suriel", tutor: "Tutor de Jade Ginela Polanco Suriel", phone: "809-420-8694", status: "Inscrito", enrolled: true },
  { id: 22, firstName: "Jenifer", lastName: "Rodríguez Castillo", tutor: "Tutor de Jenifer Rodríguez Castillo", phone: "829-642-9885", status: "Inscrito", enrolled: true },
  { id: 23, firstName: "Luisanny", lastName: "Sánchez Pérez", tutor: "Tutor de Luisanny Sánchez Pérez", phone: "809-499-5527", status: "Inscrito", enrolled: true }
];

const STUDENTS_STORAGE_KEY = 'popjubo_custom_students_v2';
const ATTENDANCE_STORAGE_KEY = 'popjubo_weekly_attendance_v2';

function getAllStudents() {
  const saved = localStorage.getItem(STUDENTS_STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return DEFAULT_STUDENTS;
    }
  }
  return DEFAULT_STUDENTS;
}

function saveCustomStudents(studentsArray) {
  localStorage.setItem(STUDENTS_STORAGE_KEY, JSON.stringify(studentsArray));
}

function resetDefaultStudents() {
  localStorage.removeItem(STUDENTS_STORAGE_KEY);
  return DEFAULT_STUDENTS;
}

function getEnrolledStudents() {
  return getAllStudents().filter(s => s.enrolled);
}

// -------------------------------------------------------------
// GESTIÓN DE ASISTENCIA DIARIA / SEMANAL
// -------------------------------------------------------------
function getWeeklyAttendance() {
  const saved = localStorage.getItem(ATTENDANCE_STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return initDefaultAttendance();
    }
  }
  return initDefaultAttendance();
}

function initDefaultAttendance() {
  const students = getAllStudents();
  const initial = {
    lunes: {},
    martes: {},
    miercoles: {},
    jueves: {},
    viernes: {}
  };
  
  // Por defecto todos los estudiantes presentes
  ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'].forEach(day => {
    students.forEach(s => {
      initial[day][s.id] = true;
    });
  });
  
  localStorage.setItem(ATTENDANCE_STORAGE_KEY, JSON.stringify(initial));
  return initial;
}

function setStudentAttendance(day, studentId, isPresent) {
  const att = getWeeklyAttendance();
  if (!att[day]) att[day] = {};
  att[day][studentId] = isPresent;
  localStorage.setItem(ATTENDANCE_STORAGE_KEY, JSON.stringify(att));
}

function getPresentStudents(day = 'lunes', filterEnrolled = false) {
  const att = getWeeklyAttendance();
  const dayAtt = att[day] || {};
  let students = getAllStudents();
  if (filterEnrolled) {
    students = students.filter(s => s.enrolled);
  }
  return students.filter(s => dayAtt[s.id] !== false);
}
