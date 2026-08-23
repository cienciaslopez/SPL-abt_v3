/**
 * Banco de Preguntas Curiosas y Quizzes de Integración Científica
 * Para dinámicas de activación, diagnóstico informal y gamificación en el aula
 * Prof. Steve Polanco López | Ciencias de la Naturaleza
 */

const SCIENCE_QUIZZES = [
  {
    id: 1,
    category: "Biodiversidad Dominicana & Colibríes",
    icon: "fa-feather",
    difficulty: "Curiosidad",
    question: "¿Cuántas veces por segundo puede batir sus alas el Zumbador (el colibrí más pequeño de nuestra isla Quisqueya)?",
    options: [
      "Aproximadamente 10 a 15 veces",
      "Entre 50 y 80 veces por segundo",
      "Exactamente 200 veces por segundo",
      "Solo 5 veces, pero planea muy rápido"
    ],
    correctAnswer: 1,
    explanation: "¡Increíble pero cierto! Los colibríes mueven sus alas entre 50 y 80 veces por segundo (e incluso más de 100 en cortejo). Su corazón late a más de 1,200 pulsaciones por minuto para sostener su metabolismo acelerado.",
    pedagogicalTip: "Relacionar con el valor de la Alegría y Agilidad del Día 1 de Ambientación."
  },
  {
    id: 2,
    category: "Biología & Anatomía Humana",
    icon: "fa-dna",
    difficulty: "Sorprendente",
    question: "Si desenrolláramos y estiráramos todo el ADN presente en las células de un solo cuerpo humano, ¿qué distancia cubriría?",
    options: [
      "Desde Gaspar Hernández hasta Santo Domingo (200 km)",
      "Unos 500 metros (la longitud de varias canchas)",
      "Desde la Tierra hasta el Sol y de regreso ¡más de 30 veces!",
      "Apenas 10 centímetros dentro del núcleo"
    ],
    correctAnswer: 2,
    explanation: "Cada célula humana contiene unos 2 metros de ADN microscópicamente empaquetado. Con más de 30 billones de células, la longitud total superaría los 60,000 millones de kilómetros.",
    pedagogicalTip: "Demuestra la extraordinaria ingeniería biológica y el orden microscópico de la vida."
  },
  {
    id: 3,
    category: "Física & Óptica del Proyector",
    icon: "fa-lightbulb",
    difficulty: "Ciencia Aplicada",
    question: "¿Por qué los colores oscuros se ven desteñidos en un proyector cuando el aula tiene mucha luz ambiental?",
    options: [
      "Porque el proyector no emite luz negra; el 'negro' es la ausencia de luz sobre la pantalla blanca iluminada",
      "Porque los focos del aula absorben los fotones del proyector",
      "Porque el cable HDMI pierde voltaje cuando hay sol",
      "Porque las ondas de luz blanca viajan más rápido que las oscuras"
    ],
    correctAnswer: 0,
    explanation: "Un proyector solo añade luz, nunca proyecta oscuridad. El color negro que vemos en pantalla es el resultado del contraste con la superficie. Por eso usamos fondos oscuros de alto contraste y letras brillantes en nuestra herramienta de aula.",
    pedagogicalTip: "Excelente ejemplo para justificar el 'Modo Proyector de Alto Contraste' que usamos hoy."
  },
  {
    id: 4,
    category: "Química Curiosa & Tabla Periódica",
    icon: "fa-flask-vial",
    difficulty: "Desafío",
    question: "¿Cuál es el único metal de la tabla periódica que se mantiene en estado LÍQUIDO a temperatura ambiente?",
    options: [
      "Plomo (Pb)",
      "Mercurio (Hg)",
      "Galio (Ga)",
      "Aluminio (Al)"
    ],
    correctAnswer: 1,
    explanation: "El Mercurio (Hg) es el único metal elemental que es líquido a temperatura ambiente (25°C). El Galio se derrite a los 29.7°C con el calor de la mano humana, pero el mercurio lo es de forma natural.",
    pedagogicalTip: "Conectar con las normas de seguridad en el laboratorio de química escolar."
  },
  {
    id: 5,
    category: "Matemáticas en la Naturaleza & Abejas",
    icon: "fa-hexagon",
    difficulty: "Lógica STEAM",
    question: "¿Por qué las abejas construyen las celdas de sus panales con forma HEXAGONAL perfecta y no circular o cuadrada?",
    options: [
      "Porque sus ojos compuestos solo ven en seis direcciones",
      "Porque el hexágono es la figura geométrica que cubre el plano con el MENOR perímetro posible, ahorrando cera",
      "Por casualidad evolutiva sin ventaja matemática",
      "Porque la miel es pesada y necesita seis lados para no derramarse"
    ],
    correctAnswer: 1,
    explanation: "En matemáticas se conoce como el 'Teorema del Panal': el hexágono regular es la forma geométrica más eficiente para teselar el plano utilizando la mínima cantidad de cera para almacenar el máximo volumen de miel.",
    pedagogicalTip: "Conectar con el Día 2 (La Abeja de la Cooperación y Patrones Fibonacci)."
  },
  {
    id: 6,
    category: "Geología & Nuestra Isla",
    icon: "fa-gem",
    difficulty: "Identidad Dominicana",
    question: "¿Qué gema preciosa de color azul turquesa se encuentra EXCLUSIVAMENTE en la República Dominicana y en ningún otro lugar del planeta?",
    options: [
      "Ámbar fósil",
      "Zafiro caribeño",
      "Larimar (Pectolita azul)",
      "Esmeralda de Bahoruco"
    ],
    correctAnswer: 2,
    explanation: "El Larimar es una variedad rara de pectolita de silicato de color azul volcánico que solo se extrae en las minas de Barahona, República Dominicana. ¡Es un tesoro geológico único en el mundo!",
    pedagogicalTip: "Fomentar el orgullo y la curiosidad por el patrimonio mineral de nuestro país."
  },
  {
    id: 7,
    category: "Ecología & Efecto Mariposa",
    icon: "fa-seedling",
    difficulty: "Ecosistemas",
    question: "¿Qué ocurre en un ecosistema cuando eliminamos a un depredador tope o a un polinizador clave?",
    options: [
      "No pasa nada, la naturaleza se autorepara en 24 horas",
      "Se desencadena una cascada trófica que altera toda la red de vida y la estabilidad vegetal",
      "Las demás especies se reproducen mejor sin competencia",
      "El clima de la región se congela inmediatamente"
    ],
    correctAnswer: 1,
    explanation: "En ecología, una especie clave mantiene unida la red trófica. Al igual que en nuestra aula, cada estudiante es un integrante fundamental; si alguien se aísla o falta, la colmena entera se resiente.",
    pedagogicalTip: "Conectar con el sentido de pertenencia y el valor del trabajo en equipo del Día 1 y Día 5."
  },
  {
    id: 8,
    category: "Astronomía & Física Espacial",
    icon: "fa-planet-ringed",
    difficulty: "Universo",
    question: "Si pudieras viajar a la velocidad de la luz (300,000 km/s), ¿cuánto tiempo tardaría un rayo solar en llegar desde el Sol hasta el patio de nuestro Politécnico?",
    options: [
      "Menos de 1 segundo (es instantáneo)",
      "Aproximadamente 8 minutos y 20 segundos",
      "Exactamente 24 horas",
      "Un año terrestre"
    ],
    correctAnswer: 1,
    explanation: "La distancia promedio entre la Tierra y el Sol es de 149.6 millones de kilómetros. La luz tarda exactamente unos 8 minutos y 20 segundos en recorrer ese trayecto cósmico.",
    pedagogicalTip: "Explicar que la luz que vemos al salir al recreo salió del Sol hace más de 8 minutos."
  }
];
