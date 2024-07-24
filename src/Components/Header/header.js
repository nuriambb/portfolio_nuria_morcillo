import './header.css'
import { createMenuHamburguesa } from '../menu-haburguesa/menu_hamburguesa'
export const createHeader = () => {
  const header = document.querySelector('header')

  const divLogo = document.createElement('div')
  divLogo.className = 'div-logo'
  const a = document.createElement('a')
  a.href = '#sobre-mi'
  const logo = document.createElement('img')
  logo.className = 'letra-n'
  logo.src = './dist/assets/nuriamorcillo.png'
  logo.alt = 'letra n'

  a.appendChild(logo)
  divLogo.appendChild(a)
  header.appendChild(divLogo)

  const navBar = document.createElement('nav')
  navBar.className = 'nav-bar'
  navBar.innerHTML = ` <ul>
              <li><a class="enlace" href="#sobre-mi"> sobre mi </a></li>
              <li><a class="enlace" href="#habilidades">habilidades</a></li>
              <li><a class="enlace" href="#formación"> formación</a></li>
              <li><a class="enlace" href="#proyectos"> proyectos</a></li>
            </ul>`

  header.appendChild(navBar)
  const button = document.createElement('button')
  button.className = 'contact-button'
  button.textContent = 'contactar'
  button.addEventListener('click', () => {
    window.location.href = 'mailto:nuriamorcillo30@gmail.com'
  })
  header.appendChild(button)
  const menuHamburguesa = createMenuHamburguesa()
  header.appendChild(menuHamburguesa)
}
