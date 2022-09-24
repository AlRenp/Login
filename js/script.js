const panel = document.getElementById('container')
const btnRegister =  document.getElementById('btn-register')
const btnLogin =  document.getElementById('btn-login')
const loginMobile = document.getElementById('login-mobile')
const registerMobile = document.getElementById('register-mobile')

const moveCard = () => panel.classList.toggle('move-card')

loginMobile.addEventListener('click', moveCard)
registerMobile.addEventListener('click', moveCard)

btnRegister.addEventListener('click', moveCard)
btnLogin.addEventListener('click', moveCard)

