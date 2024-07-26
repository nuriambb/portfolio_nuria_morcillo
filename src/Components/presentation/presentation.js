import './presentation.css'

export const crearPresentacion = () => {
  const main = document.querySelector('main')
  const divImages = document.createElement('div')
  divImages.className = 'div-images'
  const imageAssets = [
    './assets/aventurarse1.png',
    './assets/responsiveflex.png',
    './assets/bikinis1.png',
    './assets/pinterest1.png'
  ]

  imageAssets.forEach((src) => {
    const img = document.createElement('img')
    img.src = src
    divImages.appendChild(img)
  })

  const divContainer = document.createElement('div')
  divContainer.className = 'div-container'

  const divText = document.createElement('div')
  divText.className = 'div-text'

  const h1Presentation = document.createElement('h1')
  h1Presentation.className = 'h1-presentation'
  h1Presentation.innerHTML = '¡hola, soy <span class="nuria">Nuria</span>!'

  const ppresentation = document.createElement('p')
  ppresentation.textContent =
    'Este es mi portfolio donde te presento quién soy y mi recorrido.'
  ppresentation.className = 'p-presentation'

  divText.appendChild(h1Presentation)
  divText.appendChild(ppresentation)
  divContainer.appendChild(divImages)
  divContainer.appendChild(divText)

  main.appendChild(divContainer)

  const images = divImages.querySelectorAll('img')
  let currentIndex = 0

  const showImage = (index) => {
    images.forEach((img, i) => {
      img.style.opacity = i === index ? '1' : '0'
    })
  }

  const nextImage = () => {
    currentIndex = (currentIndex + 1) % images.length
    showImage(currentIndex)
  }

  showImage(currentIndex)
  setInterval(nextImage, 10000)
}
