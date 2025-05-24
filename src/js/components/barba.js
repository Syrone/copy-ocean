import barba from '@barba/core'
import { gradientWipeEnter, gradientWipeLeave } from './animation.js'
import { initHeader, destroyHeader } from './header.js'
import { initStretchText } from './stretch-text.js'

const ANIMATION_DURATION = 400

barba.init({
  prevent: ({ event, href }) => {
    if (event.type === 'click' && href === window.location.href) {
      event.preventDefault()
      event.stopPropagation()
      return true
    }
  },
  transitions: [{
    name: 'gradient-wipe',
    sync: true,
    once() {
      initHeader()
      initStretchText()
    },
    leave(data) {
      const done = this.async()
      const container = data.current.container

      destroyHeader()
      container.classList.add('is-animate')
      gradientWipeLeave(container, ANIMATION_DURATION)

      setTimeout(() => {
        done()
        container.classList.remove('is-animate')
      }, ANIMATION_DURATION)
    },
    enter(data) {
      const container = data.next.container

      container.classList.add('is-animate')
      gradientWipeEnter(container, ANIMATION_DURATION)
      window.scrollTo(0, 0)

      setTimeout(() => {
        initHeader()
        initStretchText()
        container.classList.remove('is-animate')
      }, ANIMATION_DURATION)
    }
  }]
})
