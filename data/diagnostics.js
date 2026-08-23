/**
 * Banco de Fichas Diagnósticas Psico-Pedagógicas Diarias (Lunes a Viernes)
 * Diseñadas con preguntas en lenguaje llano para estudiantes de 13 a 15 años (3er Grado)
 * Politécnico Prof. Juan Emilio Bosch Gaviño
 * Prof. Steve Polanco López | Ecosistema AulaIA
 */

const DAILY_DIAGNOSTIC_WORKSHEETS = {
  lunes: {
    dayId: "lunes",
    dayTitle: "Lunes — Día 1",
    symbol: "El Colibrí",
    emoji: "🕊️",
    value: "Alegría y Comunicación",
    theme: "Adaptación y Pertenencia Escolar",
    psychologicalObjective: "Diagnóstico de motivación inicial, autoconcepto social, focos de ansiedad académica y metas de pertenencia.",
    questions: [
      {
        num: 1,
        title: "1. Mi medidor de energía inicial:",
        prompt: "¿Del 1 al 10, con cuánta batería o ganas comienzas este año en 3ro de secundaria, y qué es lo que más te alegra de volver a la escuela?",
        placeholder: "Mi nivel de energía es ___ porque lo que más me alegra es: __________________________________________________",
        disguisedIndicator: "Evalúa nivel de motivación intrínseca vs. extrínseca y estrés de inicio de año."
      },
      {
        num: 2,
        title: "2. Mi talento para el equipo:",
        prompt: "Si en Ciencias hiciéramos un experimento en grupo, ¿cuál es esa habilidad tuya (escuchar con atención, organizar las cosas, hacer reír, dibujar bien, pensar rápido) que mejor le sirve a tus compañeros?",
        placeholder: "Mi mayor fortaleza para el equipo es ________________________________ porque me gusta ____________________________",
        disguisedIndicator: "Evalúa autoconcepto, autoestima y rol psicosocial percibido en el aula."
      },
      {
        num: 3,
        title: "3. El reto que me da un poco de curiosidad o temor:",
        prompt: "¿Hay alguna materia, tema o situación de este nuevo curso que te preocupe un poco o sientas que te va a costar más trabajo?",
        placeholder: "Lo que siento que será más retador para mí es ____________________________________________________________________",
        disguisedIndicator: "Identifica focos de ansiedad académica, bloqueos cognitivos o miedos tempranos."
      },
      {
        num: 4,
        title: "4. Mi huella al final del año:",
        prompt: "Cuando termine este año escolar en el Politécnico Juan Bosch, ¿qué palabra o cualidad positiva te gustaría que tus profesores y amigos usen para describirte?",
        placeholder: "Me gustaría que me recuerden como una persona ____________________________________________________________________",
        disguisedIndicator: "Evalúa proyección de identidad, sentido de logro y compromiso personal."
      }
    ]
  },
  martes: {
    dayId: "martes",
    dayTitle: "Martes — Día 2",
    symbol: "La Abeja",
    emoji: "🐝",
    value: "Cooperación y Geometría",
    theme: "Normas de Convivencia y Clima Escolar",
    psychologicalObjective: "Diagnóstico de estilo de aprendizaje predilecto (VAK), hábitos de estudio en casa y tolerancia a la frustración grupal.",
    questions: [
      {
        num: 1,
        title: "1. Cómo entiende mejor mi mente:",
        prompt: "Cuando un profesor explica un tema nuevo y difícil de Ciencias, ¿qué te ayuda a entenderlo más rápido? (Marca una opción y explica brevemente):\n□ A) Que haga un dibujo, esquema o video en el proyector.\n□ B) Que nos ponga a hacer una práctica o experimento con las manos.\n□ C) Que nos lo explique hablando paso a paso y hagamos preguntas.",
        placeholder: "Elijo la opción ___ porque aprendo mejor cuando ________________________________________________________________",
        disguisedIndicator: "Diagnóstico del canal preferente de procesamiento cognitivo (Visual, Kinestésico o Auditivo)."
      },
      {
        num: 2,
        title: "2. Mi rincón de hacer tareas en el hogar:",
        prompt: "Cuando vas a estudiar para un examen o hacer tus tareas en casa, ¿prefieres silencio absoluto, escuchar música, o necesitas que alguien de tu familia esté cerca para orientarte?",
        placeholder: "En mi casa estudio mejor cuando _________________________________________________________________________________",
        disguisedIndicator: "Evalúa nivel de autonomía, distractibilidad y entorno socio-familiar de estudio."
      },
      {
        num: 3,
        title: "3. La prueba de la colmena (Trabajo en Grupo):",
        prompt: "En los trabajos grupales, ¿qué actitud de un compañero te incomoda más y qué haces tú para que el grupo no pelee y termine a tiempo?",
        placeholder: "Me molesta cuando _____________________________ y lo que hago para ayudar es _______________________________________",
        disguisedIndicator: "Evalúa tolerancia a la frustración interpersonal y locus de control interno/externo."
      },
      {
        num: 4,
        title: "4. Mi regla de oro inquebrantable:",
        prompt: "De todas las normas del aula, ¿cuál es la que tú consideras más importante que todos respetemos para sentirnos seguros en 3ro C?",
        placeholder: "La norma que nunca debemos romper es ___________________________________________________________________________",
        disguisedIndicator: "Evalúa internalización de límites morales y respeto a la autoridad pedagógica."
      }
    ]
  },
  martes: {
    dayId: "martes",
    dayTitle: "Martes — Día 2",
    symbol: "La Abeja",
    emoji: "🐝",
    value: "Cooperación y Geometría",
    theme: "Normas de Convivencia y Clima Escolar",
    psychologicalObjective: "Diagnóstico de estilo de aprendizaje predilecto (VAK), hábitos de estudio en casa y tolerancia a la frustración grupal.",
    questions: [
      {
        num: 1,
        title: "1. Cómo entiende mejor mi mente:",
        prompt: "Cuando un profesor explica un tema nuevo de Ciencias, ¿qué te ayuda a entenderlo más rápido? (Marca una opción):\n□ A) Viendo esquemas, videos y diagramas en el proyector.\n□ B) Haciendo experimentos prácticos y manipulando materiales.\n□ C) Escuchando la explicación paso a paso y debatiendo en equipo.",
        placeholder: "Elijo la opción ___ porque aprendo mejor cuando: _______________________________________________________________",
        disguisedIndicator: "Diagnóstico del canal preferente de procesamiento cognitivo (Visual, Kinestésico o Auditivo)."
      },
      {
        num: 2,
        title: "2. Mi rincón de hacer tareas en casa:",
        prompt: "Cuando vas a estudiar para un examen o hacer tareas, ¿prefieres silencio total, música suave, o que alguien de tu familia te acompañe?",
        placeholder: "En mi casa estudio mejor cuando: _________________________________________________________________________________",
        disguisedIndicator: "Evalúa nivel de autonomía, distractibilidad y entorno socio-familiar de estudio."
      },
      {
        num: 3,
        title: "3. La prueba de la colmena (Trabajo en Grupo):",
        prompt: "En los trabajos de equipo, ¿qué actitud de un compañero te incomoda más y qué haces tú para mantener la calma y cumplir la meta?",
        placeholder: "Me incomoda cuando _____________________________ y lo que hago es: ____________________________________________",
        disguisedIndicator: "Evalúa tolerancia a la frustración interpersonal y madurez emocional."
      },
      {
        num: 4,
        title: "4. Mi regla de oro inquebrantable:",
        prompt: "De todas las normas del aula, ¿cuál consideras indispensable que todos cumplamos para que el curso funcione en paz y respeto?",
        placeholder: "La norma fundamental para mí es: _______________________________________________________________________________",
        disguisedIndicator: "Evalúa internalización de límites y convivencia democrática."
      }
    ]
  },
  miercoles: {
    dayId: "miercoles",
    dayTitle: "Miércoles — Día 3",
    symbol: "La Mariposa",
    emoji: "🦋",
    value: "Transformación y Autoconcepto",
    theme: "Desarrollo Emocional y Autoconcepto",
    psychologicalObjective: "Diagnóstico de autorregulación emocional, conciencia somática del estrés, asertividad y red de apego seguro.",
    questions: [
      {
        num: 1,
        title: "1. El semáforo de mis emociones:",
        prompt: "Cuando algo no sale como esperabas o te sientes muy molesto/a, ¿qué señal notas primero en tu cuerpo (corazón acelerado, dolor de cabeza, tensión) y qué te ayuda a calmarte?",
        placeholder: "Cuando me enojo siento ___________________________ y me calma ___________________________________________________",
        disguisedIndicator: "Evalúa reconocimiento somato-emocional y mecanismos de autorregulación."
      },
      {
        num: 2,
        title: "2. Mi metamorfosis (cambio positivo):",
        prompt: "Así como la oruga se convierte en mariposa, ¿qué costumbre del año pasado (dejar tareas para tarde, usar mucho el celular, o tener pena de hablar) te gustaría cambiar este año?",
        placeholder: "Este año voy a transformar mi hábito de __________________________________________________________________________",
        disguisedIndicator: "Evalúa autocrítica constructiva, plasticidad conductual y compromiso de superación."
      },
      {
        num: 3,
        title: "3. Frente a un desacuerdo:",
        prompt: "Si alguien del curso dice algo que te hiere o no estás de acuerdo, ¿sueles quedarte callado con rabia por dentro, reclamar enojado, o prefieres hablarlo a solas con calma?",
        placeholder: "Mi reacción común es ___________________________ pero reconozco que lo más sabio es ___________________________",
        disguisedIndicator: "Evalúa estilo comunicacional: pasivo, agresivo o asertivo."
      },
      {
        num: 4,
        title: "4. Mi red de apoyo en momentos difíciles:",
        prompt: "¿A qué persona (amigo, familiar o docente) acudes cuando tienes un problema que sientes que no puedes resolver solo/a?",
        placeholder: "La persona en quien más confío es ____________________________ porque me hace sentir ____________________________",
        disguisedIndicator: "Identifica red de soporte afectivo y presencia de apego seguro."
      }
    ]
  },
  jueves: {
    dayId: "jueves",
    dayTitle: "Jueves — Día 4",
    symbol: "La Tortuga",
    emoji: "🐢",
    value: "Perseverancia y Sabiduría",
    theme: "Inclusión y Resiliencia",
    psychologicalObjective: "Diagnóstico de mentalidad de crecimiento, perseverancia ante la dificultad, empatía prosocial y respeto a la diversidad.",
    questions: [
      {
        num: 1,
        title: "1. Mi caparazón ante la dificultad:",
        prompt: "Cuando un ejercicio o proyecto se te hace muy difícil a la primera, ¿qué pensamiento viene a tu cabeza y qué haces para no rendirte?",
        placeholder: "Cuando algo es difícil yo me digo: _________________________________ y hago: _____________________________________",
        disguisedIndicator: "Evalúa mentalidad de crecimiento (Growth Mindset) vs. indefensión aprendida."
      },
      {
        num: 2,
        title: "2. Mirada solidaria:",
        prompt: "Si ves que un compañero nuevo está sentado solo en el recreo o parece desanimado, ¿qué harías tú de forma natural para que se sienta acompañado?",
        placeholder: "Para incluir a ese compañero yo haría: ___________________________________________________________________________",
        disguisedIndicator: "Evalúa empatía activa, conducta prosocial y liderazgo inclusivo."
      },
      {
        num: 3,
        title: "3. Ritmos de aprendizaje:",
        prompt: "¿Prefieres hacer las cosas rápido aunque puedan salir con errores, o prefieres tomarte tu tiempo paso a paso para asegurarte de que estén bien hechas?",
        placeholder: "Mi estilo de trabajo es ___________________________ porque _____________________________________________________",
        disguisedIndicator: "Evalúa impulsividad vs. reflexividad y respeto al ritmo cognitivo individual."
      },
      {
        num: 4,
        title: "4. Mi promesa para los días cansados:",
        prompt: "Escribe una frase de ánimo para ti mismo/a que puedas leer en tu cuaderno cuando tengas un día pesado y quieras dar lo mejor de ti.",
        placeholder: "Mi frase de fuerza es: «________________________________________________________________________________________»",
        disguisedIndicator: "Evalúa diálogo interno motivacional y resiliencia emocional."
      }
    ]
  },
  viernes: {
    dayId: "viernes",
    dayTitle: "Viernes — Día 5",
    symbol: "La Hormiga",
    emoji: "🐜",
    value: "Trabajo en Equipo y Corresponsabilidad",
    theme: "Disciplina Positiva y Comunicación Asertiva",
    psychologicalObjective: "Diagnóstico de integración grupal de fin de semana, vinculación escuela-familia, liderazgo comunitario y expectativa docente.",
    questions: [
      {
        num: 1,
        title: "1. Lo que descubrí en esta primera semana:",
        prompt: "Después de convivir estos primeros días con tu curso 3ro C, ¿qué cualidad positiva te sorprendió descubrir en tus compañeros?",
        placeholder: "Descubrí que en este curso somos _________________________________________________________________________________",
        disguisedIndicator: "Evalúa sentido de pertenencia consolidado y clima de aula percibido."
      },
      {
        num: 2,
        title: "2. El apoyo de mi familia:",
        prompt: "¿De qué manera tu familia o tutor te anima a estudiar, y qué mensaje te dieron antes de empezar las clases en el Politécnico?",
        placeholder: "En mi casa me motivan diciéndome: _______________________________________________________________________________",
        disguisedIndicator: "Evalúa apoyo parental y expectativa socioeducativa del hogar."
      },
      {
        num: 3,
        title: "3. Mi aporte a la colmena del Politécnico:",
        prompt: "¿En qué te gustaría colaborar para que nuestra sección 3ro C sea conocida como la más disciplinada, limpia y respetuosa de todo el centro?",
        placeholder: "Yo me comprometo a aportar: ____________________________________________________________________________________",
        disguisedIndicator: "Evalúa ciudadanía escolar, sentido de orgullo institucional y corresponsabilidad."
      },
      {
        num: 4,
        title: "4. Una nota para mi profesor de Ciencias:",
        prompt: "Escríbele una frase u opinión honesta al Prof. Steve Polanco López sobre qué esperas de su clase de Ciencias de la Naturaleza este año escolar.",
        placeholder: "Profesor Steve, lo que más espero de su clase este año es: _______________________________________________________",
        disguisedIndicator: "Evalúa expectativa hacia la figura docente, necesidad de acompañamiento y vínculo pedagógico."
      }
    ]
  }
};
