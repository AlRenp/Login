const panel = document.getElementById('container')
const btnRegister =  document.getElementById('btn-register')
const btnLogin =  document.getElementById('btn-login')


const moveCard = () => panel.classList.toggle('move-card')


btnRegister.addEventListener('click', moveCard)
btnLogin.addEventListener('click', moveCard)