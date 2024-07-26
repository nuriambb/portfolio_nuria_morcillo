import './carta-proyectos.css'

const proyectos = [
  {
    imagen: './assets/practicaflexgandinga.png',
    titulo: 'Proyecto 1',
    descripcion:
      'Landing page de una tienda para practicar la estructura de los elementos en la aplicación y el responsive, solo con HTML y CSS',
    enlace: 'https://github.com/nuriambb/Practicaa-Flex'
  },
  {
    imagen: './assets/bikinis2.png',
    titulo: 'Proyecto 2',
    descripcion:
      'Lading page de una tienda con HTML y CSS para practicar todo lo aprendido y empezar a añadir funcionalidades sencillas',
    enlace: 'https://enlace-proyecto2.com'
  },
  {
    imagen: './assets/aventurarse2.png',
    titulo: 'Proyecto 3',
    descripcion:
      'Empezamos a poner en práctica JavaScript con funcionalidades como buscadores y filtros de productos. ',
    enlace: 'https://super-croquembouche-ea9b9e.netlify.app'
  },
  {
    imagen: './assets/pinterestasync.png',
    titulo: 'Proyecto 4',
    descripcion:
      'Funcionalidades con JavaScript junto con el uso de la API Unsplash para generar una réplica de pinterest con imágenes, autores y fechas totalmente dinámico. ',
    enlace: 'https://meek-mandazi-293aa8.netlify.app/'
  }
]
export const crearCarta = () => {
  const articleProyectos = document.getElementById('article-proyectos')
  articleProyectos.className = 'article-proyectos'
  if (!articleProyectos) {
    console.error('No se encontró el elemento "article-proyectos"')
    return
  }
  const contenedorPrincipal = document.createElement('div')
  contenedorPrincipal.className = 'contenedor-principal'

  proyectos.forEach((proyecto, index) => {
    const cartaContainer = document.createElement('div')
    cartaContainer.className = `carta-container ${
      index % 2 === 0 ? 'imagen-izquierda' : 'imagen-derecha'
    }`

    const imgContainer = document.createElement('div')
    imgContainer.id = 'img-container'
    imgContainer.className = 'img-container'
    const imgCarta = document.createElement('img')
    imgCarta.className = 'img-carta'
    imgCarta.src = proyecto.imagen
    imgContainer.appendChild(imgCarta)

    const textoCarta = document.createElement('div')
    textoCarta.className = 'texto-carta'

    const h3carta = document.createElement('h3')
    h3carta.className = 'h3-carta'
    h3carta.textContent = proyecto.titulo
    textoCarta.appendChild(h3carta)

    const pcarta = document.createElement('p')
    pcarta.className = 'p-carta'
    pcarta.textContent = proyecto.descripcion
    textoCarta.appendChild(pcarta)

    const buttoncarta = document.createElement('button')
    buttoncarta.className = 'button-carta'
    const acarta = document.createElement('a')
    acarta.className = 'a-carta'
    acarta.href = proyecto.enlace
    acarta.textContent = 'Ver más'
    acarta.target = '_blank'
    buttoncarta.appendChild(acarta)
    textoCarta.appendChild(buttoncarta)

    cartaContainer.appendChild(imgContainer)
    cartaContainer.appendChild(textoCarta)
    contenedorPrincipal.appendChild(cartaContainer)
  })
  articleProyectos.appendChild(contenedorPrincipal)
}
