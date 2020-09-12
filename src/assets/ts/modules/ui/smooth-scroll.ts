/**
 * 対象となる要素までスムーススクロールさせる
 * @param target 対象となる要素
 */
export const smoothScroll = (target: string): void => {
  const $target = document.querySelector(target)
  const rectTop = $target.getBoundingClientRect().top
  const offsetTop = window.pageYOffset
  const BUFFER = 50
  const top = rectTop + offsetTop - BUFFER
  window.scrollTo({
    top,
    behavior: 'smooth',
  })
}
