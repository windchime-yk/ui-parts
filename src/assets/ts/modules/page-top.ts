import { smoothScroll } from './ui/smooth-scroll'

export const pageTop = (): void => {
  const $pageTopBtn: HTMLButtonElement = document.querySelector('#Pagetop')
  $pageTopBtn.addEventListener('click', () => {
    smoothScroll('html')
  })
}
