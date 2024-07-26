import './footer.css'
export const crearFooter = () => {
  const footer = document.querySelector('footer')

  const footerContainer = document.createElement('div')
  footerContainer.className = 'footer-container'
  const h3Footer = document.createElement('h3')
  h3Footer.className = 'h3-footer'
  h3Footer.textContent = 'Diseñado por Nuria Morcillo'

  const footerIconos = document.createElement('div')
  footerIconos.className = 'footer-iconos'
  const iconoCorreo = document.createElement('img')
  iconoCorreo.className = 'icono-correo'
  iconoCorreo.src = './assets/email.png'
  iconoCorreo.alt = 'Correo'
  iconoCorreo.addEventListener('click', () => {
    window.location.href = 'mailto:nuriamorcillo30@gmail.com'
  })

  const iconoLinkedin = document.createElement('img')
  iconoLinkedin.className = 'icono.linkedin'
  iconoLinkedin.src = './assets/linkedin.png'
  iconoLinkedin.alt = 'LinkedIn'
  iconoLinkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/nuriamorcillobonillo/', '_blank')
  })

  const iconoGitHub = document.createElement('img')
  iconoGitHub.className = 'icono-github'
  iconoGitHub.src = './assets/github.png'
  iconoGitHub.alt = 'GitHub'
  iconoGitHub.addEventListener('click', () => {
    window.open('https://github.com/nuriambb', '_blank')
  })

  footerContainer.appendChild(h3Footer)
  footerIconos.appendChild(iconoCorreo)
  footerIconos.appendChild(iconoLinkedin)
  footerIconos.appendChild(iconoGitHub)
  footerContainer.appendChild(footerIconos)

  footer.appendChild(footerContainer)
}
