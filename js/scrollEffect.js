const techBoxes = document.querySelectorAll('.tech-box')

window.addEventListener('scroll', () => {
  techBoxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (boxTop < windowHeight - 100) {
      box.classList.remove('hidden')
    }
  })
})
