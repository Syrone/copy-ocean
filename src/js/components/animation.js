const setDualStopMask = (element, progress, type = 'enter', step = 50) => {
  const range = 100 + step
  const p = progress * range

  const stop1 = 100 - p
  const stop2 = stop1 + step

  let gradient
  if (type === 'enter') {
    gradient = `linear-gradient(-80deg, transparent ${stop1}%, black ${stop2}%)`
  } else {
    gradient = `linear-gradient(-80deg, black ${stop1}%, transparent ${stop2}%)`
  }

  element.style.maskImage = gradient
  element.style.webkitMaskImage = gradient
}

export const gradientWipeEnter = (element, duration = 1000, step = 50) => {
  const start = performance.now()

  function animate(time) {
    const progress = Math.min((time - start) / duration, 1)
    setDualStopMask(element, progress, 'enter', step)

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      element.style.maskImage = ''
      element.style.webkitMaskImage = ''
    }
  }

  requestAnimationFrame(animate)
}

export const gradientWipeLeave = (element, duration = 1000, step = 10) => {
  const start = performance.now()

  function animate(time) {
    const progress = Math.min((time - start) / duration, 1)
    setDualStopMask(element, progress, 'leave', step)

    requestAnimationFrame(animate)
  }

  requestAnimationFrame(animate)
}
