
const button2 = document.getElementById('button2') // button Não!
const innerContainer = document.querySelector('.inner-container')
// Function to move the "No!" button to a random position within the container
if (button2 && innerContainer) {
  function moveButton2() {
    button2.style.position = 'absolute'
    const containerRect = innerContainer.getBoundingClientRect()
    const buttonRect = button2.getBoundingClientRect()
    const maxLeft = containerRect.width - buttonRect.width
    const maxTop = containerRect.height - buttonRect.height
    const left = Math.random() * maxLeft
    const top = Math.random() * maxTop
    button2.style.left = `${left}px`
    button2.style.top = `${top}px`
  }
  button2.addEventListener('mouseenter', moveButton2)
  button2.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()
    moveButton2()
  })
}

const images = [
  './assets/image-content/ganta-0.jpg',
  './assets/image-content/ganta-1.jpg',
  './assets/image-content/ganta-2.jpg',
]

// =============================================
const imageContent = document.querySelector('.image-content')  // Image container
const mainButton = document.getElementById('button1')      // Button Sim!
const firstMessage = document.querySelector('.first-message')  // First message
const finalMessage = document.querySelector('.final-message')  // Final message

// Start with the first image (index 0)
let currentIndex = 0

// Function to change images with fade effect
function updateImage() {
  // Fade out current image
  imageContent.style.opacity = 0
  
  // Preload next image
  const img = new Image()
  img.src = images[currentIndex]
  
  // When image is loaded
  img.onload = () => {
    // Change to new image
    imageContent.style.backgroundImage = `url('${images[currentIndex]}')`
    
    // Fade in new image
    imageContent.style.opacity = 1
  }
}

updateImage()

// Change image when button is clicked
button2.addEventListener('mouseenter', moveButton2)
mainButton.addEventListener('click', () => {
  // Esconde o botão Não!
  if (button2) button2.style.display = 'none'
  mainButton.textContent = 'Tirar foto'
  firstMessage.style.display = 'block'
  // Go to next image
  currentIndex++
  // Update if not at the end
  if (currentIndex < images.length) {
    updateImage()
  }
  // Once at the last image, show the final message and hide the button 
  if (currentIndex === images.length - 1) {
    firstMessage.style.display = 'none' // remove the first message
    mainButton.style.display = 'none'   // remove the "Sim!" button
    finalMessage.style.display = 'block'
  }
})