import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

/**
 * シンタックスハイライト
 */
Prism.highlightAll()

/**
 * Indexの自動生成
 */
const navList = document.querySelector('.l-nav__list')
const contents = document.querySelectorAll('.p-contents')

contents.forEach((content) => {
  const contentId = content.getAttribute('id')
  const contentTitle = content.querySelector('.p-contents__head').textContent
  navList.insertAdjacentHTML(
    'beforeend',
    `
      <li class="l-nav__item">
        <a href="#${contentId}" class="l-nav__item-link">${contentTitle}</a>
      </li>
    `
  )
})

/**
 * 対象となる要素までスムーススクロールさせる
 * @param target 対象となる要素
 */
const smoothScroll = (target: string) => {
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
