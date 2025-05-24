let btnMenu = null
let headerNav = null
let onClickHandler = null

export const initHeader = () => {
  btnMenu = document.querySelector('.btn-menu')
  headerNav = document.querySelector('.header-nav')

  if (btnMenu && headerNav) {
    onClickHandler = () => {
      btnMenu.classList.toggle('is-active')
      headerNav.classList.toggle('is-show')
    }
    btnMenu.addEventListener('click', onClickHandler)
  }
}

export const destroyHeader = () => {
  if (btnMenu && onClickHandler) {
    btnMenu.removeEventListener('click', onClickHandler)
  }
}
