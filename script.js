const actos = [
    {
        id: 1,
        badge: "ACTO 1",
        titulo: "EL DESAFÍO DEL CÓDICE",
        historia: "Iniciando Protocolo Alfa-Niner...<br><br>Bienvenidos, Cadetes. Han sido seleccionados entre millones. Mi nombre es A.R.I.A. Están presenciando la entrada a la Academia Hyperion. Ante ustedes flota el Códice de Hyperion, un objeto de cristal que brilla con patrones de energía cambiantes. Contiene el conocimiento de civilizaciones extintas. Muchos han intentado mirarlo, pero sus mentes se quedan en blanco al no saber procesar la información. Creen que leer es solo dejar que los ojos recorran el cristal.",
        pregunta: "Cadetes, para ustedes, ¿por qué 'mirar los patrones' no es suficiente? ¿Qué significa realmente COMPRENDER este Códice en lugar de solo ver sus palabras o símbolos?",
        teoria: "<b>1. Definición de Comprensión Lectora:</b><br>• Trasciende la simple decodificación (recorrer palabras). Es un proceso activo y dinámico donde el lector interpreta, infiere y construye significado.<br>• Según la teoría cognitiva, es una actividad mental compleja (activa conocimientos previos e integra información nueva).<br>• La UNESCO la destaca como competencia clave para el desarrollo e inclusión."
    },
    {
        id: 2,
        badge: "ACTO 2",
        titulo: "LA INFILTRACIÓN Y EL OBJETIVO",
        historia: "Respuestas registradas. Su primera misión real es crítica: la facción enemiga 'Los Olvidados' ha lanzado un 'Bloqueo de Información' en el Sector 7. Una mancha oscura consume el mapa neuronal de la Academia. Si no logran entender el propósito de su misión y cómo procesar la información, el bloqueo absorberá sus mentes antes de que puedan actuar.",
        pregunta: "Para que su escudo mental resista, definan su motivación: ¿Cuál es el beneficio más importante de aprender a analizar y comprender este tipo de información? ¿Para qué les servirá en su vida académica y personal?",
        teoria: "<b>2. Importancia y Beneficios:</b><br>• Permite el <i>aprendizaje autónomo</i> y el <i>desarrollo del pensamiento crítico</i>.<br>• Mejora el rendimiento académico en todas las asignaturas y facilita la resolución de problemas.<br>• Prepara para la vida cotidiana y profesional, promoviendo la inclusión y la autorregulación del aprendizaje."
    },
    {
        id: 3,
        badge: "ACTO 3",
        titulo: "LA SALA DE LOS ESPEJOS",
        historia: "Han ingresado al Sector 7. Se encuentran en un pasillo infinito lleno de puertas. Cada una tiene un símbolo galáctico y un título. A.R.I.A. les advierte: 'Para no entrar a ciegas, deben prepararse antes de cruzar. Y mientras caminen por el pasillo lleno de distracciones, deben mantener el control de la información'.",
        pregunta: "1) ¿Qué harían ustedes JUSTO AHORA (Antes de abrir la puerta) al ver el título y la imagen para anticipar lo que hay dentro?<br>2) ¿Qué técnicas usarían MIENTRAS cruzan el pasillo (Durante) para no perder la información importante?",
        teoria: "<b>Estrategias de Lectura:</b><br>• <b>ANTES:</b> Activar conocimientos previos, observar títulos/imágenes, predecir el contenido y fijar un propósito.<br>• <b>DURANTE:</b> Subrayar ideas principales, identificar palabras clave, formularse preguntas y usar el contexto o diccionario para palabras desconocidas."
    },
    {
        id: 4,
        badge: "ACTO 4",
        titulo: "LOS TRES NIVELES DE LA PUERTA FINAL",
        historia: "Frente a la puerta del núcleo, una voz oscura (el Bloqueo) retumba: 'Para pasar, deben demostrar el dominio de los 3 niveles de la mente sobre este registro: <br><br><i>En el año 3045, el Comandante Zarek usó el Pulso Electromagnético (EMP) para desactivar la flota enemiga en la Nebulosa de Orión, salvando el planeta Xylos</i>'.",
        pregunta: "Analicen cómo responderían estas 3 preguntas del enemigo:<br>1. ¿En qué año y lugar ocurrió la batalla?<br>2. ¿Por qué el Comandante Zarek tomó esa decisión si el texto no lo dice directamente?<br>3. ¿Fue correcta su decisión considerando los daños colaterales?",
        teoria: "<b>Niveles de Comprensión Lectora:</b><br>• <b>Nivel Literal:</b> Identifica datos explícitos (quién, cuándo, dónde).<br>• <b>Nivel Inferencial:</b> Lee 'entre líneas', deduce causas, efectos y conclusiones usando la intuición.<br>• <b>Nivel Crítico o Valorativo:</b> Emite juicios respaldados, cuestiona el texto y evalúa argumentos."
    },
    {
        id: 5,
        badge: "ACTO 5",
        titulo: "LA CONSOLIDACIÓN DEL PODER",
        historia: "¡La puerta del núcleo ha sido destruida! La luz azul regresa al Códice. A.R.I.A. aparece en pantalla: 'Misión cumplida, Agentes. Sin embargo, el conocimiento que han obtenido en esta batalla es inestable. Si no hacen algo para consolidarlo AHORA MISMO, se desvanecerá de sus mentes en pocas horas'.",
        pregunta: "¿Qué acción o herramienta concreta realizarían ustedes ahora mismo para organizar lo que aprendieron, asegurarse de que no se les olvide y explicárselo a otros?",
        teoria: "<b>Estrategias DESPUÉS de la Lectura:</b><br>• <b>Parafraseo:</b> Expresar las ideas con palabras propias.<br>• <b>Elaboración de Resúmenes:</b> Sintetizar lo esencial.<br>• <b>Organizadores Visuales:</b> Mapas mentales, conceptuales, cuadros sinópticos, líneas de tiempo.<br>• <b>Reflexión sobre el contenido:</b> Consolidar el aprendizaje duradero."
    }
];

let actoActual = 0;

const startScreen = document.getElementById("start-screen");
const btnStart = document.getElementById("btn-start");
const phaseBadge = document.getElementById("phase-badge");
const actTitle = document.getElementById("act-title");
const storyText = document.getElementById("story-text");
const questionText = document.getElementById("question-text");
const studentAnswer = document.getElementById("student-answer");
const btnSubmitAnswer = document.getElementById("btn-submit-answer");
const theoryPanel = document.getElementById("theory-panel");
const theoryContent = document.getElementById("theory-content");
const btnNextAct = document.getElementById("btn-next-act");

btnStart.addEventListener("click", () => {
    startScreen.style.display = "none";
    cargarActo(0);
});

function cargarActo(index) {
    const data = actos[index];
    phaseBadge.textContent = data.badge;
    actTitle.textContent = data.titulo;
    storyText.innerHTML = data.historia;
    questionText.innerHTML = data.pregunta;
    theoryContent.innerHTML = data.teoria;
    
    studentAnswer.value = "";
    theoryPanel.classList.add("hidden");
    btnSubmitAnswer.style.display = "block";
}

btnSubmitAnswer.addEventListener("click", () => {
    if (studentAnswer.value.trim() === "") {
        alert("Ingresa una respuesta breve de los estudiantes antes de continuar.");
        return;
    }
    theoryPanel.classList.remove("hidden");
    btnSubmitAnswer.style.display = "none";
});

btnNextAct.addEventListener("click", () => {
    actoActual++;
    if (actoActual < actos.length) {
        cargarActo(actoActual);
    } else {
        phaseBadge.textContent = "FIN";
        actTitle.textContent = "MISIÓN CUMPLIDA";
        storyText.innerHTML = "<b>¡FELICITACIONES AGENTES!</b><br>Han completado con éxito la simulación de Comprensión Absoluta. Todos los conceptos teóricos han sido dominados e integrados en el sistema.";
        questionText.textContent = "🎓 Fin de la sesión interactiva.";
        theoryPanel.classList.add("hidden");
        studentAnswer.style.display = "none";
        btnSubmitAnswer.style.display = "none";
    }
});
