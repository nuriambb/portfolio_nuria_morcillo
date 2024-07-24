import './style.css'
import { createHeader } from './src/Components/Header/header'
import { crearPresentacion } from './src/Components/presentation/presentation'
import { crearCarta } from './src/Components/carta-proyectos/carta-proyectos'
import { crearFooter } from './src/Components/footer/footer'
createHeader()
crearPresentacion()
const main = document.querySelector('main')
const containerInfo = document.createElement('article')
containerInfo.id = 'container-info'
main.appendChild(containerInfo)
const crearSobremi = () => {
  const main = document.querySelector('main')
  const containerInfo = document.querySelector('article')
  containerInfo.className = 'container-info'
  const sobreMi = document.createElement('section')
  sobreMi.id = 'sobre-mi'
  sobreMi.className = 'sobre-mi'
  const h2Sobremi = document.createElement('h2')
  h2Sobremi.textContent = 'Sobre mi'
  h2Sobremi.className = 'h2-sobremi'
  const divparrafos = document.createElement('div')
  divparrafos.className = 'div-parrafos'
  const pSobremi1 = document.createElement('p')
  pSobremi1.className = 'p-sobremi1'
  pSobremi1.textContent =
    'Como desarrolladora full-stack, me inclino más hacia el frontend. Me encanta trabajar en la interfaz y la experiencia del usuario, asegurándome de que cada interacción sea intuitiva y agradable.'
  const pSobremi2 = document.createElement('p')
  pSobremi2.className = 'p-sobremi2'
  pSobremi2.textContent =
    'Mi visión única surge de mi experiencia en diversas áreas creativas. Formación en cine que me ha enseñado a contar historias visuales de manera efectiva y a comprender la importancia del trabajo en equipo en los rodajes. Además, tengo conocimientos como diseñadora gráfica y una marca personal de pendientes artesanales, integrando así narrativa y estética'

  sobreMi.appendChild(h2Sobremi)
  divparrafos.appendChild(pSobremi1)
  divparrafos.appendChild(pSobremi2)
  sobreMi.appendChild(divparrafos)
  containerInfo.appendChild(sobreMi)
  main.appendChild(containerInfo)
}
crearSobremi()
const crearHabilidades = () => {
  const containerInfo = document.querySelector('article')
  const habilidadesContainer = document.createElement('section')
  habilidadesContainer.id = 'habilidades'
  habilidadesContainer.className = 'habilidades-container'
  const iconosContainer = document.createElement('div')
  iconosContainer.className = 'iconos-container'

  const iconos = [
    { src: './dist/assets/javascript.png', titulo: 'Java-script' },
    { src: './dist/assets/css.png', titulo: 'CSS' },
    { src: './dist/assets/visual-studio.png', titulo: 'Visual-Studio' },
    { src: './dist/assets/github.png', titulo: 'GitHub' },
    { src: './dist/assets/photoshop.png', titulo: 'PhotoShop' },
    { src: './dist/assets/davinci.png', titulo: 'DaVinci' }
  ]

  iconos.forEach((icono) => {
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('image-container')

    const img = document.createElement('img')
    img.src = icono.src
    img.alt = icono.titulo

    const titulo = document.createElement('p')
    titulo.classList.add('image-title')
    titulo.textContent = icono.titulo

    imgContainer.appendChild(img)
    imgContainer.appendChild(titulo)
    iconosContainer.appendChild(imgContainer)
  })

  habilidadesContainer.appendChild(iconosContainer)
  const h2div = document.createElement('div')
  h2div.className = 'h2-container'
  const h2Habilidades = document.createElement('h2')
  h2Habilidades.textContent = 'Habilidades'
  h2Habilidades.className = 'h2-habilidades'
  h2div.appendChild(h2Habilidades)
  habilidadesContainer.appendChild(h2div)
  containerInfo.appendChild(habilidadesContainer)
}
crearHabilidades()

const crearExperienciayEstudios = () => {
  const containerInfo = document.querySelector('article')
  const containerDinamico = document.createElement('section')
  containerDinamico.id = 'formación'
  containerDinamico.className = 'container-dinamico'

  const botones = document.createElement('div')
  botones.className = 'botones'

  const experiencia = document.createElement('button')
  experiencia.id = 'experienciaBtn'
  experiencia.textContent = 'Experiencia'

  const estudios = document.createElement('button')
  estudios.id = 'estudiosBtn'
  estudios.textContent = 'Estudios'

  botones.appendChild(experiencia)
  botones.appendChild(estudios)
  containerDinamico.appendChild(botones)

  const contenido = document.createElement('div')
  contenido.className = 'contenido'

  const contenidoExperiencia = document.createElement('div')
  contenidoExperiencia.className = 'contenido-experiencia'
  const h3experiencia = document.createElement('h3')
  h3experiencia.className = 'h3-experiencia'
  h3experiencia.textContent = 'Proyecto Personal'
  const pexperiencia = document.createElement('p')
  pexperiencia.className = 'p-experiencia'
  pexperiencia.textContent =
    'Desarrollo de la página web de mi marca personal de joyería artesanal.'
  const enlacegandinga = document.createElement('a')
  enlacegandinga.className = 'enlace-gandinga'
  enlacegandinga.textContent = 'gandinga.es'
  enlacegandinga.href = 'https://gandinga.es/'
  enlacegandinga.target = '_blank'
  enlacegandinga.rel = 'noopener noreferrer'

  contenidoExperiencia.appendChild(h3experiencia)
  contenidoExperiencia.appendChild(pexperiencia)
  contenidoExperiencia.appendChild(enlacegandinga)
  contenido.appendChild(contenidoExperiencia)

  const contenidoEstudios = document.createElement('div')
  contenidoEstudios.className = 'contenido-estudios'
  const h3cursando = document.createElement('h3')
  h3cursando.className = 'h3-cursando'
  h3cursando.textContent = 'Cursando Actualmente'
  const pestudios1 = document.createElement('p')
  pestudios1.className = 'p-estudios1'
  pestudios1.textContent = 'Bootcamp Desarrollo Web Full-Stack (The Power MBA)'
  const pestudios2 = document.createElement('p')
  pestudios2.className = 'p-estudios2'
  pestudios2.textContent =
    'Curso de desarrollo de Apps Móviles (Grow with Google)'
  const h3fundamentos = document.createElement('h3')
  h3fundamentos.className = 'h3-fundamentos'
  h3fundamentos.textContent = 'Fundamentos de Marketing Digital'
  const pestudios3 = document.createElement('p')
  pestudios3.className = 'p-estudios3'
  pestudios3.textContent = 'Grow with Google'
  const h3cursos = document.createElement('h3')
  h3cursos.className = 'h3-cursos'
  h3cursos.textContent = 'Cursos Google Analytics y Google Ads'
  const pestudios4 = document.createElement('p')
  pestudios4.className = 'p-estudios4'
  pestudios4.textContent = 'Grow with Google'

  contenidoEstudios.appendChild(h3cursando)
  contenidoEstudios.appendChild(pestudios1)
  contenidoEstudios.appendChild(pestudios2)
  contenidoEstudios.appendChild(h3fundamentos)
  contenidoEstudios.appendChild(pestudios3)
  contenidoEstudios.appendChild(h3cursos)
  contenidoEstudios.appendChild(pestudios4)
  contenido.appendChild(contenidoEstudios)

  containerDinamico.appendChild(contenido)
  containerInfo.appendChild(containerDinamico)

  contenidoExperiencia.className += ' active'

  document
    .getElementById('experienciaBtn')
    .addEventListener('click', function () {
      contenidoExperiencia.className = 'contenido-experiencia active'
      contenidoEstudios.className = 'contenido-estudios'
      experiencia.classList.add('boton-seleccionado')
      experiencia.classList.remove('boton-no-seleccionado')
      estudios.classList.add('boton-no-seleccionado')
      estudios.classList.remove('boton-seleccionado')
    })

  document.getElementById('estudiosBtn').addEventListener('click', function () {
    contenidoEstudios.className = 'contenido-estudios active'
    contenidoExperiencia.className = 'contenido-experiencia'
    estudios.classList.add('boton-seleccionado')
    estudios.classList.remove('boton-no-seleccionado')
    experiencia.classList.add('boton-no-seleccionado')
    experiencia.classList.remove('boton-seleccionado')
  })
}
crearExperienciayEstudios()

const articleProyectos = document.createElement('article')
articleProyectos.id = 'article-proyectos'
main.appendChild(articleProyectos)
const crearMisProyectos = () => {
  const articleProyectos = document.getElementById('article-proyectos')
  const proyectosContainer = document.createElement('section')
  proyectosContainer.id = 'proyectos'
  proyectosContainer.className = 'proyectos-container'
  const textoContainer = document.createElement('div')
  textoContainer.className = 'texto-container'
  const h2Proyectos = document.createElement('h2')
  h2Proyectos.className = 'h2-proyectos'
  h2Proyectos.textContent = 'Mis proyectos'
  textoContainer.appendChild(h2Proyectos)
  proyectosContainer.appendChild(textoContainer)
  articleProyectos.appendChild(proyectosContainer)
}
crearMisProyectos()
crearCarta()

const crearContacto = () => {
  const main = document.querySelector('main')
  const contactoContainer = document.createElement('div')
  contactoContainer.id = 'contacto'
  contactoContainer.className = 'contacto-container'
  const textoContacto = document.createElement('div')
  textoContacto.className = 'texto-contacto'
  const h3contacto = document.createElement('h3')
  h3contacto.className = 'h3-contacto'
  h3contacto.textContent = '¡trabajemos juntos!'
  const h2contacto = document.createElement('h2')
  h2contacto.className = 'h2-contacto'
  h2contacto.textContent = 'nuriamorcillo30@gmail.com'

  const containerTelefono = document.createElement('div')
  containerTelefono.className = 'container-telefono'
  const imgtelefono = document.createElement('img')
  imgtelefono.className = 'img-telefono'
  imgtelefono.src = './dist/assets/movil.png'

  textoContacto.appendChild(h3contacto)
  textoContacto.appendChild(h2contacto)
  contactoContainer.appendChild(textoContacto)
  containerTelefono.appendChild(imgtelefono)
  contactoContainer.appendChild(containerTelefono)
  main.appendChild(contactoContainer)
}
crearContacto()
crearFooter()
function addScrollAnimations(leftElement, rightElement) {
  function handleScroll() {
    const leftRect = leftElement.getBoundingClientRect()
    const rightRect = rightElement.getBoundingClientRect()
    const windowHeight = window.innerHeight

    if (leftRect.top <= windowHeight && leftRect.bottom >= 0) {
      leftElement.classList.add('animate-slide-in-left')
    }

    if (rightRect.top <= windowHeight && rightRect.bottom >= 0) {
      rightElement.classList.add('animate-slide-in-right')
    }
  }

  window.addEventListener('scroll', handleScroll)

  handleScroll()
}

document.addEventListener('DOMContentLoaded', function () {
  const h2Sobremi = document.querySelector('.h2-sobremi')
  const divParrafos = document.querySelector('.div-parrafos')

  h2Sobremi.classList.add('animate-hidden-left')
  divParrafos.classList.add('animate-hidden-right')

  addScrollAnimations(h2Sobremi, divParrafos)

  const iconosContainer = document.querySelector('.iconos-container')
  const h2Habilidades = document.querySelector('.h2-habilidades')

  iconosContainer.classList.add('animate-hidden-left')
  h2Habilidades.classList.add('animate-hidden-right')

  addScrollAnimations(iconosContainer, h2Habilidades)

  const botones = document.querySelector('.botones')
  const contenido = document.querySelector('.contenido')

  botones.classList.add('animate-hidden-left')
  contenido.classList.add('animate-hidden-right')

  addScrollAnimations(botones, contenido)

  const textoContainer = document.querySelector('.texto-container')
  const contenedorPrincipal = document.querySelector('.contenedor-principal')

  textoContainer.classList.add('animate-hidden-left')
  contenedorPrincipal.classList.add('animate-hidden-right')

  addScrollAnimations(textoContainer, contenedorPrincipal)

  const imgContainer = document.getElementsById('#imagen-izquierda')
  const textoCarta = document.getElementsByClassName('.imagen-derecha')

  imgContainer.classList.add('animate-hidden-left')
  textoCarta.classList.add('animate-hidden-right')

  addScrollAnimations(imgContainer, textoCarta)

  const textoContacto = document.getElementsByClassName('.texto-contacto')
  const containerTelefono = document.getElementsByClassName(
    '.container-telefono'
  )

  textoContacto.classList.add('animate-hidden-left')
  containerTelefono.classList.add('animate-hidden-right')

  addScrollAnimations(textoContacto, containerTelefono)
})
