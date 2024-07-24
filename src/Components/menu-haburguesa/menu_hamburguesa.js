import './menu_hamburguesa.css'

export const createMenuHamburguesa = () => {
  const menuContainer = document.createElement('div')
  menuContainer.className = 'menu-container'

  const menuIcon = document.createElement('img')
  menuIcon.className = 'menu-icon'
  menuIcon.src = './src/assets/menu1.png'
  menuIcon.alt = 'Menú Hamburguesa'

  const divHambuguer = document.createElement('div')
  divHambuguer.className = 'menu-links'
  divHambuguer.innerHTML = `<a href="#sobre-mi">Sobre mi</a>
                            <a href="#habilidades">Habilidades</a>
                            <a href="#formación">Formación</a>
                            <a href="#proyectos">Proyectos</a>
                            <a href="#contacto">Contacto</a>`

  menuContainer.appendChild(menuIcon)
  menuContainer.appendChild(divHambuguer)

  menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('change')
    divHambuguer.classList.toggle('show')
  })

  const links = divHambuguer.querySelectorAll('a')
  links.forEach((link) => {
    link.addEventListener('click', function () {
      divHambuguer.classList.remove('show')
    })
  })
  return menuContainer
}
