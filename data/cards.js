/**
 * Baraja del Ecosistema Escolar (5 Días Oficiales MINERD)
 * Politécnico Prof. Juan Emilio Bosch Gaviño
 * Prof. Steve Polanco López
 */

const ECOSYSTEM_FLIP_CARDS = [
  {
    id: "lunes",
    dayName: "Lunes — Día 1",
    name: "El Colibrí",
    value: "Alegría, Agilidad y Adaptabilidad",
    symbol: "🕊️",
    image: "assets/cartas/colibri.jpg",
    icon: "fa-feather",
    badgeColor: "bg-cyan-600",
    borderColor: "border-cyan-400",
    glowColor: "rgba(6, 182, 212, 0.4)",
    scienceFact: "Mueve sus alas entre 50 y 80 veces por segundo y vuela en todas las direcciones. Su metabolismo requiere alimentarse constantemente de néctar floral.",
    icebreakerQuestion: "¿Qué cualidad o talento personal aportarás este año para llenar de entusiasmo y alegría a nuestro salón de clases?",
    metaphor: "Capacidad de encontrar dulzura incluso en situaciones difíciles y de movernos en todas las direcciones sin chocar con los demás."
  },
  {
    id: "martes",
    dayName: "Martes — Día 2",
    name: "La Abeja",
    value: "Cooperación, Constancia y Orden",
    symbol: "🐝",
    image: "assets/cartas/abeja.jpg",
    icon: "fa-certificate",
    badgeColor: "bg-amber-600",
    borderColor: "border-amber-400",
    glowColor: "rgba(245, 158, 11, 0.4)",
    scienceFact: "Construye panales con hexágonos perfectos (Teorema del Panal) porque optimiza el espacio usando la mínima cera. Se comunican mediante la danza de las abejas.",
    icebreakerQuestion: "¿Cómo puede tu esfuerzo individual hacer que el equipo entero funcione en armonía como una colmena perfecta?",
    metaphor: "Su colaboración genera eficiencia. Una sola abeja no hace la colmena, necesitan orden, dulzura y trabajo constante."
  },
  {
    id: "miercoles",
    dayName: "Miércoles — Día 3",
    name: "La Mariposa",
    value: "Transformación y Autoconcepto",
    symbol: "🦋",
    image: "assets/cartas/mariposa.jpg",
    icon: "fa-wand-magic-sparkles",
    badgeColor: "bg-purple-600",
    borderColor: "border-purple-400",
    glowColor: "rgba(168, 85, 247, 0.4)",
    scienceFact: "Experimenta una metamorfosis completa (huevo, oruga, crisálida, adulto), transformando totalmente su estructura celular para desplegar sus alas.",
    icebreakerQuestion: "¿Qué actitud o mal hábito estás dispuesto a transformar este año para alcanzar tu máximo potencial académico?",
    metaphor: "Su metamorfosis nos recuerda que todos tenemos el potencial de transformarnos, mejorar y dejar atrás aquello que nos limita."
  },
  {
    id: "jueves",
    dayName: "Jueves — Día 4",
    name: "La Tortuga",
    value: "Perseverancia, Sabiduría y Calma",
    symbol: "🐢",
    image: "assets/cartas/tortuga.jpg",
    icon: "fa-shield-halved",
    badgeColor: "bg-emerald-600",
    borderColor: "border-emerald-400",
    glowColor: "rgba(16, 185, 129, 0.4)",
    scienceFact: "Navega miles de kilómetros oceánicos guiándose por el campo magnético de la Tierra. Su caparazón óseo fusionado la protege en su largo viaje.",
    icebreakerQuestion: "¿Cuál es tu escudo protector o estrategia cuando una materia se torna difícil o sientes frustración?",
    metaphor: "No importa la velocidad, sino la constancia y el apoyo mutuo. Llegar primero no es tan importante como saber llegar."
  },
  {
    id: "viernes",
    dayName: "Viernes — Día 5",
    name: "La Hormiga",
    value: "Trabajo en Equipo y Organización",
    symbol: "🐜",
    image: "assets/cartas/hormiga.jpg",
    icon: "fa-people-group",
    badgeColor: "bg-rose-600",
    borderColor: "border-rose-400",
    glowColor: "rgba(244, 63, 94, 0.4)",
    scienceFact: "Levanta hasta 50 veces su propio peso corporal y entrelaza su cuerpo con otras obreras para formar puentes vivos y balsas de rescate.",
    icebreakerQuestion: "¿Qué rol te gusta asumir en las actividades grupales para asegurar que nadie se quede atrás?",
    metaphor: "En los grandes logros nunca hay una sola persona, hay un equipo coordinado. La disciplina no es castigo, es organización para el bien común."
  }
];