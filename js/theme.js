const d = document
const darkModeIcon = d.querySelector('.dark-mode-icon');
const formContact = d.getElementById('contact-form');
const body = d.body;

// load
if (!body.hasAttribute('data-theme')) {
  body.setAttribute('data-theme', localStorage.getItem('mode')); // Establecer tema claro por defecto
}

//events
darkModeIcon.addEventListener('click', setMode);
formContact.addEventListener('submit', sendEmail);


//functions
async function sendEmail(e) {
  e.preventDefault();

  dataResquest = {
    name: formContact.name.value,
    email: formContact.email.value,
    message: formContact.message.value

  }

  headers = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(dataResquest)
  }


  req = await fetch("https://formsubmit.co/ajax/matias.iac2021@gmail.com", headers)
  data = await req.json()

  if (data.success == 'true') {
    emailSuccess()
    formContact.reset()
  } else {
    alert('Error al enviar')
  }

}

function emailSuccess() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Tu mensaje fué enviado",
    showConfirmButton: false,
    timer: 2000
  });
}

function setMode() {
  if (body.getAttribute('data-theme') === 'dark') {
    setLight()
    localStorage.setItem('mode', 'light')
  } else {
    setDark()
    localStorage.setItem('mode', 'dark')
  }
}

function setLight() {
  body.setAttribute('data-theme', 'light');
  darkModeIcon.classList.remove('fa-sun'); // Cambiar a ícono de luna
  darkModeIcon.classList.add('fa-moon');
}

function setDark() {
  body.setAttribute('data-theme', 'dark');
  darkModeIcon.classList.remove('fa-moon'); // Cambiar a ícono de sol
  darkModeIcon.classList.add('fa-sun');
}


