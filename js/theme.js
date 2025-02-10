const darkModeIcon = document.querySelector('.dark-mode-icon');
  const body = document.body;

  // Inicializar el tema basado en el atributo data-theme
  if (!body.hasAttribute('data-theme')) {
    body.setAttribute('data-theme', 'light'); // Establecer tema claro por defecto
  }

  darkModeIcon.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
      body.setAttribute('data-theme', 'light');
      darkModeIcon.classList.remove('fa-sun'); // Cambiar a ícono de luna
      darkModeIcon.classList.add('fa-moon');
    } else {
      body.setAttribute('data-theme', 'dark');
      darkModeIcon.classList.remove('fa-moon'); // Cambiar a ícono de sol
      darkModeIcon.classList.add('fa-sun');
    }
  });