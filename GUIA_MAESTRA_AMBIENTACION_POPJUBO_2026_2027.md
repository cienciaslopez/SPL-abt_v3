# 🚀 GUÍA MAESTRA DE AMBIENTACIÓN ESCOLAR 2026-2027 (v2.0)
## Politécnico Prof. Juan Emilio Bosch Gaviño (Código 15228)
### Distrito Educativo 06-07 Gaspar Hernández | Regional 06 La Vega
**Cátedra de Ciencias de la Naturaleza — Prof. Steve Polanco López**

---

## 🎯 1. VISIÓN Y NOVEDADES DE LA VERSIÓN 2.0
- **Lema Oficial MINERD:** *“Construimos juntos un ambiente de empatía para convivir en armonía”*
- **Encabezado Compacto y Menú Hamburguesa:** Se redujo la cabecera a 55px de alto para maximizar el área de proyección. Todas las herramientas secundarias (asistencia, semblanza y ajustes) están integradas en un cajón lateral (*drawer*).
- **Semblanza Docente Formal:** Presentación profesional del Prof. Steve Polanco López con los logos oficiales del [Politécnico Prof. Juan Emilio Bosch Gaviño](https://i.postimg.cc/qqPntZPr/LOGO-del-POLITECNICO.jpg) y del [Ministerio de Educación (MINERD)](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Logo_del_Ministerio_de_Educaci%C3%B3n_%28Rep%C3%BAblica_Dominicana%29.svg/1280px-Logo_del_Ministerio_de_Educaci%C3%B3n_%28Rep%C3%BAblica_Dominicana%29.svg.png).
- **Pase de Lista Semanal Dinámico:** Registro de asistencia interactivo de lunes a viernes. La Ruleta y el Generador de Equipos filtran automáticamente a los estudiantes presentes para evitar asignar a quienes falten ese día.
- **Baraja de Cartas Flip 3D del Ecosistema:** Mecánica interactiva estilo *Rompehielos Científicos* con animación 3D (Dorso con misterio / Reverso con hecho científico y pregunta reflexiva de vida).
- **Diagnóstico Psico-Pedagógico en Cuaderno:** Ficha estandarizada para escritura a mano en el cuaderno de Ciencias, lista para ser escaneada e indexada por nombre en el sistema AulaIA.
- **Ajustes y Personalización Multi-Docente:** Panel para adaptar la herramienta a cualquier grado o sección con importación masiva de estudiantes (CSV).
- **Temas Visuales:** Selector de Modo Oscuro (predeterminado), Modo Claro y Modo Proyector de Ultra Alto Contraste.

---

## 💻 2. ARQUITECTURA MODULAR ACTUALIZADA
```
📁 ambientacion_popjubo_2026/
├── 📄 index.html                        # Shell interactivo con barra compacta y drawer
├── 📁 css/
│   └── 📄 styles.css                    # Estilos de alto contraste, cartas 3D y temas
├── 📁 data/
│   ├── 📄 teacher.js                    # Semblanza formal, logos e identidad institucional
│   ├── 📄 students.js                   # Matrícula de 3ro C y gestión de asistencia semanal
│   ├── 📄 cards.js                      # 8 Cartas 3D del Ecosistema (Colibrí, Abeja, ADN...)
│   ├── 📄 rules.js                      # Decálogo de Convivencia y Rigor Académico
│   ├── 📄 quizzes.js                    # Banco de 8 trivias científicas y curiosidades STEAM
│   └── 📄 minerd_guide.js               # Guía MINERD y cronograma adaptado de 09:00 AM a 04:00 PM
├── 📁 js/
│   ├── 📄 settings.js                   # Controlador del drawer, semblanza, asistencia y temas
│   ├── 📄 roulette.js                   # Ruleta digital con filtro de asistencia y audio sintético
│   ├── 📄 teams.js                      # Generador de equipos balanceados con roles y filtro
│   ├── 📄 quiz.js                       # Motor de trivias de aula y marcador interactivo
│   ├── 📄 activities.js                 # Renderizador de cartas 3D, cronogramas y diagnóstico
│   └── 📄 app.js                        # Controlador maestro, atajos de teclado y cronómetro
└── 📄 Ambientacion_2026_2027_POPJUBO_Proyector.html # Versión autónoma empaquetada
```

---

## 📅 3. CRONOGRAMA RECALIBRADO DEL LUNES (DÍA 1 — JORNADA COMPLETA)
*Horario ajustado al acto general de inicio de docencia del centro educativo:*

| Horario | Bloque Pedagógico | Medio de Proyección Docente | Soporte de Registro del Estudiante |
| :--- | :--- | :--- | :--- |
| **08:00 - 09:00 AM** | Acto de Apertura General del Politécnico | El equipo de gestión y docentes reciben a las familias y estudiantes en el patio. | Participación solemne en el acto protocolar e Himno Nacional. |
| **09:00 - 10:15 AM** | Bloque 1: Acogida en el Aula & Semblanza Docente | El docente proyecta la bienvenida, logos oficiales y su semblanza profesional. | Cuaderno de Ciencias (encabezado institucional, fecha e intención pedagógica). |
| **10:15 - 11:15 AM** | Bloque 2: Rompehielos, Cartas 3D & Ruleta 3ro C | El docente proyecta [Rompehielos Científicos](https://cienciaslopez.github.io/Rompehielos-cientificos/), Cartas 3D y la Ruleta (filtro de presentes). | Participación oral y revelación interactiva de cartas de ecosistema. |
| **11:15 - 12:25 PM** | Bloque 3: Decálogo & Diagnóstico en Cuaderno | El docente proyecta el Decálogo de Normas y la Plantilla Diagnóstica para AulaIA. | Cuaderno de Ciencias (redacción individual de autoconcepto, estilo de aprendizaje y metas). |
| **12:25 - 01:40 PM** | *Receso & Almuerzo Escolar (75 min)* | Pausa para nutrición y descanso armónico en el centro. | Convivencia pacífica y orden. |
| **01:40 - 02:40 PM** | Bloque 4: Actividad MINERD 1 — Mensajes que Vuelan | El docente proyecta la silueta del Colibrí de la Alegría y pautas del mural. | Ficha impresa de colibrí (cualidad personal y aporte grupal). |
| **02:40 - 03:30 PM** | Bloque 5: División de Equipos & Trivia STEAM | El docente proyecta el Generador de Equipos (solo presentes) y el Tablero de Trivias. | Trabajo en equipo cooperativo con roles asignados respondiendo al torneo. |
| **03:30 - 04:00 PM** | Bloque 6: Reporteros Escolares & Cierre del Día | El docente proyecta el formato del noticiero 'El Jardín de las Noticias' y guía familiar. | Cuaderno de Ciencias (metacognición y asignación familiar "Mi Rincón Seguro"). |

---

## 🧠 4. INSTRUMENTO DIAGNÓSTICO EN CUADERNO (AULAIA)
Estructura que los estudiantes completan a mano en su cuaderno para ser escaneada e indexada:
1. **Datos de Identidad:** Nombre, N° de lista, fecha y grado.
2. **Diagnóstico Emocional de Inicio:** Nivel del 1 al 5 y justificación breve.
3. **Estilo de Aprendizaje Predilecto:** Demostraciones visuales (A), Prácticas y modelos (B), o Debates y lógica (C).
4. **Manejo de Fricciones:** Reacción espontánea ante desacuerdos y compromiso de diálogo asertivo.
5. **Mi Meta Dorada 2026-2027:** Cualidad o logro por el que desea ser recordado al finalizar el año.
6. **Firma del Estudiante.**

---

## 👥 5. MATRÍCULA OFICIAL Y PASE DE LISTA
- **3er Grado de Secundaria — Sección C:** 23 estudiantes registrados (17 inscritos, 6 pendientes).
- **Asistencia Semanal Integrada:** Permite alternar la asistencia con un clic en el menú hamburguesa para que las dinámicas de aula trabajen con exactitud sobre los estudiantes que se encuentran en el salón.
