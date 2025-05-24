const stretchText = () => {
  const elements = document.querySelectorAll('[data-stretch-text]')

  elements.forEach(el => {
    const text = el.dataset.stretchText.trim()
    if (!text) return

    const width = el.clientWidth
    const length = text.length || 1
    const fontSize = width / (length * .435)

    el.style.fontSize = `${fontSize}px`
    el.textContent = text
  })
}

export const initStretchText = () => {
  stretchText()
  window.addEventListener('resize', stretchText)
}

export const destroyStretchText = () => {
  window.removeEventListener('resize', stretchText)
}
