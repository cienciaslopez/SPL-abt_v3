# 🌿 Semana de Ambientación 2026-2027 — Politécnico Prof. Juan Emilio Bosch Gaviño
### Cátedra de Ciencias de la Naturaleza • Prof. Steve Polanco López (Distrito 06-07 Gaspar Hernández)

Aplicación web interactiva optimizada para proyectores de baja luminosidad y gestión ágil del aula durante la **Semana de Ambientación Escolar 2026-2027** bajo los lineamientos oficiales del **Ministerio de Educación de la República Dominicana (MINERD)**.

---

## 🚀 Despliegue Inmediato en GitHub Pages
1. Sube los archivos de este repositorio a tu cuenta de GitHub (ej. `tu-usuario/ambientacion-2026`).
2. Ve a **Settings** > **Pages** en tu repositorio de GitHub.
3. En **Branch**, selecciona `main` (o `master`) y carpeta `/ (root)`. Guarda los cambios.
4. Tu herramienta estará disponible públicamente en `https://tu-usuario.github.io/ambientacion-2026/`.

---

## 📂 Arquitectura Modular del Proyecto
```text
ambientacion_popjubo_2026/
├── index.html                        # Interfaz principal SPA (Pantallas separadas)
├── semblanza_docente.html            # Infografía artística y formal del Prof. Steve Polanco
├── README.md                         # Guía de despliegue y documentación técnica
├── .nojekyll                         # Compatibilidad nativa con GitHub Pages
├── css/
│   └── styles.css                    # Paleta de alto contraste, modo proyector y animaciones
├── data/
│   ├── teacher.js                    # Semblanza y configuración institucional
│   ├── students.js                   # Matrícula oficial de 3ro C y gestión de asistencia
│   ├── cards.js                      # 5 Cartas 3D del Ecosistema MINERD
│   ├── diagnostics.js                # 5 Fichas Diagnósticas Diarias (Lenguaje llano para 13-15 años)
│   ├── rules.js                      # Decálogo de Convivencia y Rigor Académico
│   ├── quizzes.js                    # Banco de 8 trivias científicas STEAM animadas
│   └── minerd_guide.js               # Guía MINERD (Lunes 9am-4pm / Martes a Viernes 8am-9:30am)
└── js/
    ├── app.js                        # Controlador SPA, navegación y atajos de teclado
    ├── settings.js                   # Menú lateral, pase de lista y exportación a Excel (.xlsx)
    ├── roulette.js                   # Ruleta digital canvas (Solo Presentes + Protección privacidad)
    ├── teams.js                      # Generador de equipos dinámicos con roles (Solo Presentes)
    ├── quiz.js                       # Motor interactivo de trivias con animaciones de aula
    └── activities.js                 # Renderizador de cronogramas, cartas 3D y fichas de impresión
```

---

## ✨ Características Principales
1. **Modo Proyector de Ultra Alto Contraste:** Optimizado para proyectores con baja luminosidad o luz ambiental en aulas dominicanas.
2. **Dock Flotante Permanente:** Ruleta digital, Generador de equipos y Trivias STEAM siempre accesibles en la esquina inferior derecha.
3. **Pase de Lista Semanal & Excel:** Control diario de asistencia que alimenta automáticamente a la ruleta y a los equipos, con descarga de reporte en `.xlsx`.
4. **Fichas Diagnósticas Psico-Pedagógicas Diarias:** 4 preguntas diarias camufladas para evaluar motivación, estilos de aprendizaje VAK, autorregulación y clima escolar en adolescentes de 13 a 15 años, con botón directo de impresión en 1 página para cuaderno o indexación en **AulaIA**.
5. **Infografía Semblanza Docente:** Documento visual con la trayectoria del Prof. Steve Polanco López (ISFODOSU, STEAM, IA y pianista).
