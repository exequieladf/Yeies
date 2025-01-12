
const detailsElement = document.getElementById("details");
const endpointWidth = 800;
const skillMobile = document.getElementById('skills-mobile');
const skillDesktop = document.getElementById('skills-desktop');


if (window.innerWidth > endpointWidth) {
    skillMobile.style.display = 'none';
    skillDesktop.style.display = 'flex';
} else {
    skillMobile.style.display = 'initial';
    skillDesktop.style.display = 'none';
}



window.addEventListener('resize', () => {
    if (window.innerWidth > endpointWidth) {
        skillMobile.style.display = 'none';
        skillDesktop.style.display = 'flex';
    } else {
        skillMobile.style.display = 'initial';
        skillDesktop.style.display = 'none';
    }
});



// Información de los temas
const detailsData = {
    beginner: 'Aprende JavaScript desde cero, comenzando con los conceptos fundamentales y avanzando hasta técnicas y patrones de programación de nivel experto.<br><br>Este curso incluye más de 100 ejercicios prácticos y desafíos que te ayudarán a reforzar cada concepto, asegurando que avances con confianza construyendo una sólida base para proyectos reales.',
    programming: 'Explora la esencia de la programación, comprendiendo los principios fundamentales que van más allá de cualquier lenguaje, como la lógica, la estructura y el diseño de soluciones eficientes.<br><br>Este curso está diseñado para que domines los conceptos esenciales que te permitirán enfrentarte a cualquier tecnología de manera efectiva.',
    beyondBrowser: "Aprende a usar JavaScript no solo en el navegador, sino también en entornos como Node.js para crear aplicaciones backend, herramientas y scripts avanzados.",
    data: 'Aprende a manejar datos de forma eficiente, utilizando técnicas avanzadas de manipulación, filtrado, transformación y almacenamiento, con ejemplos en diferentes contextos y necesidades de rendimiento.<br><br>Profundiza en estructuras como arrays, objetos, maps, sets, symbols, clases, entre otras.',
    advanced: "Domina temas complejos como closures, manejo de asincronía con promesas y async/await, programación funcional, patrones de diseño y mucho más.",
    html: 'Aunque el curso se enfoca en JavaScript, aprenderás a integrar tu código con otras tecnologías esenciales para construir aplicaciones dinámicas. Usaremos HTML, librerías de JS, WebSockets, TypeScript, Node e incluso diferentes motores de Bases de Datos.',
    api: 'Aprende a consumir servicios externos y a trabajar con APIs REST, utilizando técnicas de fetching para enviar y recibir datos de manera eficiente.<br><br>Explorarás cómo integrar datos en tiempo real, manejar respuestas asíncronas y optimizar la comunicación entre tu aplicación y el servidor. Realizaremos múltiples proyectos prácticos que te guiarán en este camino.',
    modernJS: "Mantente actualizado con las últimas características de ECMAScript, explorando módulos, clases, operadores avanzados y métodos modernos de trabajo.",
    projects: "Consolida tu aprendizaje construyendo proyectos prácticos que reflejan problemas del mundo real, desde pequeños scripts hasta sistemas completos. <br>En este curso encontrarás múltiples desafíos acórdes al nivel de cada etapa.",
    future: "Termina el curso listo para enfrentar cualquier desafío, desde crear aplicaciones modernas hasta aprender nuevos lenguajes y tecnologías con una base sólida en programación."
};

showDetails('beginner');


// Mostrar detalles con efecto de desvanecimiento
function showDetails(topic) {

    detailsElement.classList.remove("show"); // Oculta el texto anterior

    setTimeout(() => {
        detailsElement.innerHTML = detailsData[topic] || "Tema no encontrado.";
        detailsElement.classList.add("show"); // Muestra el nuevo texto con efecto
    }, 300); // Retardo para sincronizar con el efecto
}