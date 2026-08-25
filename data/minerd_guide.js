/**
 * Guía Pedagógica Oficial de la Semana de Ambientación 2026-2027 (MINERD)
 * Integrando el Paso a Paso Exacto de la Versión Vanilla y Carga Horaria Oficial:
 * - Lunes: Jornada Completa (09:00 AM a 04:00 PM, Receso 12:25 a 01:40 PM)
 * - Martes a Viernes: 2 horas pedagógicas de 45 min (08:00 AM a 09:30 AM)
 * Politécnico Prof. Juan Emilio Bosch Gaviño | Prof. Steve Polanco López
 */

const MINERD_GUIDE_DATA = {
  meta: {
    lema: "Construimos juntos un ambiente de empatía para convivir en armonía",
    year: "Año Escolar 2026-2027",
    institucion: "Politécnico Prof. Juan Emilio Bosch Gaviño (Código 15228)",
    distrito: "Distrito Educativo 06-07 Gaspar Hernández",
    regional: "Regional 06 La Vega",
    enlaceRompehielos: "https://cienciaslopez.github.io/Rompehielos-cientificos/"
  },
  days: [
    {
      id: "lunes",
      dayName: "Lunes — Día 1",
      symbol: "El Colibrí",
      emoji: "🕊️",
      value: "Alegría, Agilidad y Adaptabilidad",
      theme: "Adaptación y Pertenencia Escolar",
      badgeColor: "bg-cyan-500",
      accentColor: "#0284c7",
      fullDay: true,
      timeFrame: "09:00 AM a 04:00 PM (Jornada Completa • Receso: 12:25 - 01:40 PM)",
      motto: "«Capacidad de encontrar dulzura incluso en situaciones difíciles y de movernos en todas las direcciones sin chocar con los demás.»",
      intention: " Fomentar acciones que ayuden a establecer espacios armoniosos, seguros y reflexivos que promuevan relaciones saludables basadas en el respeto mutuo, motivando la integración activa de cada estudiante.",
      scheduleBlocks: [
        {
          time: "08:00 - 09:00 AM",
          blockTitle: "Acto de Apertura General del Politécnico",
          icon: "fa-school-flag",
          presentation: "El equipo de gestión y docentes reciben a las familias y estudiantes en el patio central del centro.",
          studentWork: "Participación solemne en el acto protocolar, entonación del Himno Nacional y bienvenida institucional.",
          steps: [
            "Acto protocolar con la comunidad educativa de Gaspar Hernández.",
            "Palabras de apertura a cargo de la Dirección del Centro.",
            "Organización de filas y traslado ordenado al aula de Ciencias de la Naturaleza."
          ]
        },
        {
          time: "09:00 - 10:15 AM",
          blockTitle: "Bloque 1: Acogida en el Aula & Semblanza Docente",
          icon: "fa-door-open",
          presentation: "El docente proyecta en pantalla la bienvenida oficial, los logos institucionales y su semblanza profesional.",
          studentWork: "Los estudiantes registran en su cuaderno el encabezado institucional, la fecha y la intención pedagógica del día.",
          steps: [
            "Recibimiento cálido, organización de bancas y palabras de bienvenida del Prof. Steve Polanco López.",
            "Presentación de la semblanza profesional (ISFODOSU, ciencias, metodología STEAM, IA y música/piano).",
            "Presentación del lema del año: 'Construimos juntos un ambiente de empatía para convivir en armonía'."
          ]
        },
        {
          time: "10:15 - 11:15 AM",
          blockTitle: "Bloque 2: Rompehielos Científicos & Baraja Flip 3D",
          icon: "fa-gamepad",
          presentation: "El docente proyecta la plataforma Rompehielos Científicos, las Cartas Flip 3D y la Ruleta de turnos (solo presentes).",
          studentWork: "Los estudiantes eligen cartas interactivas, giran la ruleta y responden oralmente a los desafíos de integración.",
          steps: [
            "Apertura interactiva en https://cienciaslopez.github.io/Rompehielos-cientificos/.",
            "Revelación de las Cartas 3D del Ecosistema (Dorso con misterio / Reverso con ciencia y pregunta de vida).",
            "Giro de la Ruleta de Estudiantes 3ro C para conocer fortalezas, pasatiempos y expectativas del grupo."
          ]
        },
        {
          time: "11:15 - 12:25 PM",
          blockTitle: "Bloque 3: Decálogo de Normas & Ficha Diagnóstica en Cuaderno",
          icon: "fa-book-open-reader",
          presentation: "El docente proyecta el Decálogo de Normas Inquebrantables y la Ficha Diagnóstica Psico-Pedagógica del Día 1.",
          studentWork: "Los estudiantes copian y responden a mano en su cuaderno las 4 preguntas de diagnóstico emocional para AulaIA.",
          steps: [
            "Socialización de las 10 normas de aula (respeto incondicional, puntualidad, zona cero celulares, evidencias de calidad).",
            "Redacción individual en el cuaderno de la Ficha Diagnóstica Día 1 (medidor de energía, talento para el equipo, reto personal y meta anual).",
            "Firma del compromiso ético y pedagógico por parte de cada estudiante."
          ]
        },
        {
          time: "12:25 - 01:40 PM",
          blockTitle: "Receso & Almuerzo Escolar (75 min)",
          icon: "fa-utensils",
          presentation: "Pausa para la nutrición escolar y socialización armónica en las áreas comunes.",
          studentWork: "Convivencia pacífica, orden en el comedor y cuidado del entorno escolar.",
          steps: ["Almuerzo, hidratación y descanso."]
        },
        {
          time: "01:40 - 02:40 PM",
          blockTitle: "Bloque 4: Actividad MINERD 1 — Mensajes que Vuelan (Paso a Paso)",
          icon: "fa-paper-plane",
          presentation: "El docente proyecta las pautas oficiales de la dinámica del Colibrí y su rol en el mural del aula.",
          studentWork: "Los estudiantes completan la silueta de colibrí en cartulina reciclada y la colocan en el mural.",
          steps: [
            "Paso 1: Recibe tu silueta de colibrí elaborada con cartulina reciclada.",
            "Paso 2: En un ala, escribe una cualidad personal tuya (ej. 'Soy creativo') y algo positivo que deseas aportar al grupo este año.",
            "Paso 3: Intercambia tu colibrí con un compañero/a. Esa persona escribirá en la otra ala un mensaje positivo o un valor (ej. 'Respeto', 'Compañerismo').",
            "Paso 4: Devuelve el colibrí a su dueño y juntos, peguemos a estos primeros habitantes en nuestro Mural del Ecosistema.",
            "🎙️ Debate de Cierre: ¿Cómo influyen las palabras positivas en la convivencia del aula?"
          ]
        },
        {
          time: "02:40 - 03:30 PM",
          blockTitle: "Bloque 5: División de Equipos Dinámicos & Torneo de Trivias STEAM",
          icon: "fa-users-gear",
          presentation: "El docente proyecta el Generador de Equipos (filtrando presentes) y el Tablero de Trivias Curiosas.",
          studentWork: "Los equipos asignados trabajan cooperativamente con roles (Coordinador, Relator, Gestor de tiempo, Portavoz, Logístico).",
          steps: [
            "Generación aleatoria de equipos con temática de seres del ecosistema (Colibríes, Abejas, Mariposas, Tortugas, Hormigas, Átomos).",
            "Competencia de 8 trivias científicas animadas (ADN, óptica del proyector, Larimar, Fibonacci) para observar dinámicas grupales.",
            "Registro de puntajes en el marcador digital interactivo."
          ]
        },
        {
          time: "03:30 - 04:00 PM",
          blockTitle: "Bloque 6: El Manifiesto del Colibrí & Asignación 'Mi Rincón Seguro'",
          icon: "fa-microphone-lines",
          presentation: "El docente proyecta el Manifiesto del Colibrí ('Pequeños en tamaño, pero gigantes en voluntad') y la guía familiar.",
          studentWork: "Lectura comunitaria, firma del código del aula y anotación de la tarea para el hogar en el cuaderno.",
          steps: [
            "Lectura coral del Manifiesto del Colibrí y firma colectiva como primer pacto de convivencia.",
            "Preguntas de síntesis: ¿Qué descubrimos hoy sobre nuestro grupo? ¿Por qué la disciplina nos da libertad para aprender?",
            "Asignación de la actividad familiar: 'Mi Rincón Seguro' para dialogar con padres y tutores en casa.",
            "Cierre formal, verificación de orden y limpieza del salón."
          ]
        }
      ]
    },
    {
      id: "martes",
      dayName: "Martes — Día 2",
      symbol: "La Abeja",
      emoji: "",
      value: "Cooperación, Constancia y Orden",
      theme: "Normas de Convivencia y Clima Escolar",
      badgeColor: "bg-amber-500",
      accentColor: "#d97706",
      fullDay: false,
      timeFrame: "08:00 AM a 09:30 AM (2 Horas Pedagógicas de 45 min)",
      motto: "«Su colaboración genera eficiencia. Una sola abeja no hace la colmena, necesitan orden, dulzura y trabajo constante.»",
      intention: " Desarrollar el trabajo colaborativo y reconocer la importancia del esfuerzo individual para el bienestar colectivo a través de la metáfora de la colmena.",
      activities: [
        {
          title: "Actividad 1: La Colmena de Respeto (Construcción del Panal)",
          duration: "45 min (1ra Hora: 08:00 - 08:45 AM)",
          presentation: "El docente proyecta en pantalla la estructura del panal colaborativo y los ejes de convivencia escolar.",
          studentWork: "Los estudiantes debaten en grupos de 4-5, escriben normas en hexágonos de papel y arman La Gran Colmena en la pared.",
          phases: [
            "Paso 1: Fórmense en grupos de 4 o 5 integrantes.",
            "Paso 2: Reciban los hexágonos de papel reciclado que formarán nuestro panal.",
            "Paso 3: Debatan y escriban en el hexágono una norma de convivencia esencial (ej: 'Pedir la palabra', 'Respetar las diferencias', 'No usar celulares en clase').",
            "Paso 4: Pasen al frente, expliquen su norma y unan su hexágono a los de los demás grupos en la pared para armar 'La Gran Colmena'.",
            "🎙️ Pregunta generadora: ¿Qué ocurriría si una abeja decide no cumplir su función o no colaborar con la colmena?"
          ]
        },
        {
          title: "Actividad 2: El Baile de la Comunicación (Danza de las Abejas)",
          duration: "30 min (2da Hora: 08:45 - 09:15 AM)",
          presentation: "El docente proyecta las instrucciones del reto de comunicación no verbal inspirado en el baile de las abejas.",
          studentWork: "Los equipos diseñan códigos sonoros/gestuales y guían a un compañero con ojos vendados hasta el objetivo sin hablar.",
          phases: [
            "Instrucción 1: En sus equipos, inventen un código secreto de sonidos o señas (ej. 1 aplauso = avanzar, 2 toques en la mesa = girar a la izquierda).",
            "Instrucción 2: Elegiremos a un voluntario por equipo y le vendaremos los ojos.",
            "Instrucción 3: Colocaremos un 'objetivo' (una flor o libro) en un punto del aula.",
            "Instrucción 4: El equipo debe guiar a su compañero vendado hasta el objetivo usando ÚNICAMENTE los códigos creados. 🚫 ¡Prohibido usar palabras!",
            "🎙️ Debate de cierre: ¿Qué tan importante fue la claridad de los mensajes para llegar al propósito? ¿Cómo se sintió la persona vendada al confiar en su equipo?"
          ]
        },
        {
          title: "Actividad 3: Ficha Diagnóstica Psico-Pedagógica Día 2 & Cierre",
          duration: "15 min (09:15 - 09:30 AM)",
          presentation: "El docente proyecta la Ficha Diagnóstica N° 2 (Canal de Aprendizaje VAK y Hábitos de Estudio en Casa).",
          studentWork: "Los estudiantes completan a mano en su cuaderno las 4 preguntas diagnósticas para indexación en AulaIA.",
          phases: [
            "Registro en cuaderno de las 4 preguntas: Canal de aprendizaje predilecto, entorno de tareas en casa, manejo de fricciones en grupo y regla de oro.",
            "Cierre y entrega de la sesión a las 09:30 AM."
          ]
        }
      ]
    },
    {
      id: "miercoles",
      dayName: "Miércoles — Día 3",
      symbol: "La Mariposa",
      emoji: "🦋",
      value: "Transformación y Libertad Responsable",
      theme: "Desarrollo Emocional y Autoconcepto",
      badgeColor: "bg-purple-500",
      accentColor: "#9333ea",
      fullDay: false,
      timeFrame: "08:00 AM a 09:30 AM (2 Horas Pedagógicas de 45 min)",
      motto: "«Su metamorfosis nos recuerda que todos tenemos el potencial de transformarnos, mejorar y dejar atrás aquello que nos limita.»",
      intention: " Motivar la autorregulación emocional, el autoconcepto saludable y la capacidad de transformar los conflictos en oportunidades de aprendizaje.",
      activities: [
        {
          title: "Actividad 1: Alas que Sanan (Metamorfosis Personal)",
          duration: "45 min (1ra Hora: 08:00 - 08:45 AM)",
          presentation: "El docente proyecta en pantalla la silueta de la mariposa con la división de 'Lo que soltamos' y 'Lo que abrazamos'.",
          studentWork: "Los estudiantes escriben en cada ala de su mariposa y las pegan en la Pared de Transformación del mural.",
          phases: [
            "Ala Izquierda (Lo que soltamos): Toma tu silueta de mariposa. En un ala, escribe un prejuicio, un miedo o un mal hábito (ej. la indisciplina, hablar mal de otros, llegar tarde) que deseas dejar atrás en tu 'etapa de oruga'.",
            "Ala Derecha (Lo que abrazamos): En la otra ala, escribe una actitud positiva o una libertad que ejercerás con responsabilidad (ej. estudiar con enfoque, ser más empático, elegir buenas amistades).",
            "📌 Socialización voluntaria y fijación de las mariposas en la 'Pared de Transformación' del ecosistema escolar."
          ]
        },
        {
          title: "Actividad 2: El Efecto Mariposa (Aleteos Positivos)",
          duration: "30 min (2da Hora: 08:45 - 09:15 AM)",
          presentation: "El docente proyecta la ley del Efecto Mariposa aplicada a las micro-decisiones de convivencia en el salón de clases.",
          studentWork: "Diálogo en parejas sobre decisiones positivas recientes y reflexión colectiva sobre libertad y respeto.",
          phases: [
            "Paso 1: Piensa en una pequeña decisión positiva que tomaste recientemente (ej. pedir perdón, sonreírle a alguien triste, recoger una basura que no era tuya).",
            "Paso 2: Comparte con tu compañero de al lado: ¿Qué efecto en cadena generó esa pequeña acción en tu entorno?",
            "🎙️ Reflexión Final: 'Ser libre no es hacer lo que uno quiera, sino elegir con responsabilidad acciones que construyan para que nadie sufra discriminación ni maltrato.'"
          ]
        },
        {
          title: "Actividad 3: Ficha Diagnóstica Psico-Pedagógica Día 3 & Cierre",
          duration: "15 min (09:15 - 09:30 AM)",
          presentation: "El docente proyecta la Ficha Diagnóstica N° 3 (Semáforo Emocional, Apego Seguro y Estilo Asertivo).",
          studentWork: "Los estudiantes completan a mano en su cuaderno las 4 preguntas diagnósticas para indexación en AulaIA.",
          phases: [
            "Registro en cuaderno: Identificación de señales somáticas del enojo, hábito a transformar, reacción ante desacuerdos y persona de confianza.",
            "Cierre y entrega de la sesión a las 09:30 AM."
          ]
        }
      ]
    },
    {
      id: "jueves",
      dayName: "Jueves — Día 4",
      symbol: "La Tortuga",
      emoji: "🐢",
      value: "Perseverancia, Sabiduría, Calma y Protección",
      theme: "Inclusión y Resiliencia",
      badgeColor: "bg-emerald-500",
      accentColor: "#059669",
      fullDay: false,
      timeFrame: "08:00 AM a 09:30 AM (2 Horas Pedagógicas de 45 min)",
      motto: "«No importa la velocidad, sino la constancia y el apoyo mutuo. Llegar primero no es tan importante como saber llegar.»",
      intention: " Fomentar la paciencia, el respeto a la diversidad y la resiliencia ante los desafíos académicos y personales.",
      activities: [
        {
          title: "Actividad 1: El Camino de la Tortuga (Mapa de Metas & Caparazón)",
          duration: "45 min (1ra Hora: 08:00 - 08:45 AM)",
          presentation: "El docente proyecta la plantilla del camino con obstáculos, metas y el Caparazón Colectivo del Grado.",
          studentWork: "Los estudiantes dibujan su mapa personal con metas, aprendizajes de errores pasados y acciones de inclusión.",
          phases: [
            "Tu Mapa Personal: Dibuja un camino desde 'Hoy' hasta una meta académica o personal que tengas para este año escolar. Dibuja obstáculos en la ruta (piedras, ríos que cruzar).",
            "Frases de Sabiduría: En cada obstáculo que dibujaste, escribe un aprendizaje sacado de un error pasado que te ayudará a superarlo (ej. 'Debo preguntar al docente si no entiendo').",
            "Inclusión Activa: ¿Qué harás si un 'compañero de ruta' camina más lento o tropieza? Escribe en el mapa cómo le ayudarías.",
            "📦 Al finalizar, depositaremos los mapas en la caja que será el 'Caparazón Colectivo del Grado'."
          ]
        },
        {
          title: "Actividad 2: Ruta de la Tortuga Sabia (Creación de Rimas)",
          duration: "30 min (2da Hora: 08:45 - 09:15 AM)",
          presentation: "El docente proyecta el reto creativo de versos y décimas sobre esfuerzo honesto y perseverancia.",
          studentWork: "En equipos, componen estrofas rimadas sobre el rechazo al plagio y el valor del trabajo propio, leyéndolas al curso.",
          phases: [
            "🏆 Reto Creativo en Equipos: Escriban sus propios versos, rimas o décimas sobre el mensaje de la tortuga: la perseverancia, evitar el fraude/plagio y el esfuerzo honesto.",
            "Socialización: Cada equipo recita su rima frente a la clase con aplausos de apoyo.",
            "Incorporación de la Tortuga de la Sabiduría al mural colectivo del aula."
          ]
        },
        {
          title: "Actividad 3: Ficha Diagnóstica Psico-Pedagógica Día 4 & Cierre",
          duration: "15 min (09:15 - 09:30 AM)",
          presentation: "El docente proyecta la Ficha Diagnóstica N° 4 (Mentalidad de Crecimiento y Diálogo Interno Resiliente).",
          studentWork: "Los estudiantes completan a mano en su cuaderno las 4 preguntas diagnósticas para indexación en AulaIA.",
          phases: [
            "Registro en cuaderno: Qué me digo ante tareas difíciles, acción prosocial con compañeros solos, ritmo reflexivo y frase de fuerza personal.",
            "Cierre y entrega de la sesión a las 09:30 AM."
          ]
        }
      ]
    },
    {
      id: "viernes",
      dayName: "Viernes — Día 5",
      symbol: "La Hormiga",
      emoji: "🐜",
      value: "Trabajo en Equipo, Organización y Apoyo Mutuo",
      theme: "Disciplina Positiva y Comunicación Asertiva",
      badgeColor: "bg-rose-500",
      accentColor: "#e11d48",
      fullDay: false,
      timeFrame: "08:00 AM a 09:30 AM (2 Horas Pedagógicas de 45 min)",
      motto: "«En los grandes logros nunca hay una sola persona, hay un equipo coordinado. La disciplina no es castigo, es organización para el bien común.»",
      intention: " Consolidar la red de apoyo escolar y familiar mediante la corresponsabilidad y el trabajo coordinado.",
      activities: [
        {
          title: "Actividad 1: La Red de Apoyo (Dinámica con Lana & Familias)",
          duration: "45 min (1ra Hora: 08:00 - 08:45 AM)",
          presentation: "El docente reúne a los estudiantes (y familias presentes) en un gran círculo central con un ovillo de lana.",
          studentWork: "Cada participante sostiene un punto del hilo tras expresar su nombre y un compromiso concreto de convivencia.",
          phases: [
            "Paso 1: Formemos todos un gran círculo en el aula (o en el patio). Si hay familias presentes, se integran.",
            "Paso 2: El profesor toma la punta de un ovillo de lana (cuerda o hilo) y dice su nombre y un compromiso concreto para la buena convivencia (ej. 'Soy Steve, y me comprometo a escuchar con paciencia').",
            "Paso 3: Sosteniendo la punta, lanza el ovillo a otro participante cruzando el círculo.",
            "Paso 4: El receptor hace lo mismo: nombre, compromiso y lanza el ovillo a otro, hasta que todos participen.",
            "🕸️ Reflexión Visual: Observen la red formada. Representa cómo cada acción individual sostiene a todo el curso. ¡Nadie queda solo, todos somos el soporte del ecosistema! Si uno suelta el hilo, la red entera pierde fuerza."
          ]
        },
        {
          title: "Actividad 2: Misión Hormiga (Torre de Comunicación)",
          duration: "30 min (2da Hora: 08:45 - 09:15 AM)",
          presentation: "El docente proyecta las bases del reto de ingeniería bioinspirada y la regla de oro de comunicación asertiva.",
          studentWork: "Equipos de 4-5 construyen una torre autosostenible en 10 minutos usando únicamente palabras amables y de apoyo.",
          phases: [
            "🏗️ El Reto de Ingeniería: En equipos de 4 o 5 personas, usando únicamente sorbetes/pajillas, papel y cinta adhesiva, deben construir la torre más alta que se sostenga por sí sola en 10 minutos.",
            "⚠️ LA REGLA DE ORO DE LAS HORMIGAS: Durante la construcción, está ESTRICTAMENTE PROHIBIDO usar quejas, gritos, órdenes autoritarias o palabras negativas. Solo pueden usar Comunicación Asertiva y Positiva (ej. 'Por favor, sostén esto', 'Sugiero que lo pongamos así', '¡Buen trabajo!').",
            "🎉 ¡Al terminar, coloquemos la Hormiga en el mural y DEMOS POR COMPLETADO NUESTRO ECOSISTEMA DE EMPATÍA 2026-2027!"
          ]
        },
        {
          title: "Actividad 3: Ficha Diagnóstica Psico-Pedagógica Día 5 & Cierre Oficial",
          duration: "15 min (09:15 - 09:30 AM)",
          presentation: "El docente proyecta la Ficha Diagnóstica N° 5 (Integración Grupal, Apoyo Familiar y Mensaje al Docente).",
          studentWork: "Los estudiantes completan a mano en su cuaderno las 4 preguntas finales para indexación en AulaIA.",
          phases: [
            "Registro en cuaderno: Qué descubrí de 3ro C esta semana, mensaje motivacional del hogar, aporte de liderazgo al Politécnico y nota honesta para el Prof. Steve Polanco.",
            "Cierre formal de la Semana de Ambientación a las 09:30 AM."
          ]
        }
      ]
    }
  ]
};
