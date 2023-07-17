const imagesContainer = document.querySelector(".images_block")

const width = window.getComputedStyle(imagesContainer).width

imagesContainer.style.minHeight = width

const resizeWindow = () => {
  const width2 = window.getComputedStyle(imagesContainer).width

  imagesContainer.style.minHeight = width2
}

window.addEventListener('resize', resizeWindow)
