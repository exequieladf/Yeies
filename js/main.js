const d = document
const btnMoon = d.getElementById('btn-moon');
const btnSun = d.getElementById('btn-sun');
const formContact = d.getElementById('contact-form');
const body = d.body;

//**********/
// load
//**********/

if (!localStorage.getItem('mode')) {
  body.setAttribute('data-theme', 'light'); // Establece tema claro por defecto
} else {
  body.setAttribute('data-theme', localStorage.getItem('mode')); // Establece tema 
}

setMode()


//**********/
//events
//**********/
btnMoon.addEventListener('click', setDark);
btnSun.addEventListener('click', setLight);
formContact.addEventListener('submit', sendEmail);

//**********/
//functions
//**********/

//enviar correo
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

//dark mode
function setMode() {
  let mode = localStorage.getItem('mode')
  if (mode === 'light') setLight()
  if (mode === 'dark') setDark()
}

function setLight() {
  body.setAttribute('data-theme', 'light');
  localStorage.setItem('mode', 'light')
  // Cambiar a ícono de luna
  btnMoon.style.display = 'initial';
  btnSun.style.display = 'none';
}

function setDark() {
  body.setAttribute('data-theme', 'dark');
  localStorage.setItem('mode', 'dark')
  // Cambiar a ícono de sol
  btnMoon.style.display = 'none';
  btnSun.style.display = 'initial';
}
