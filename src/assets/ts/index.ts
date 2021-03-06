import { prism, indexAutoGen, smoothScroll } from './modules/ui/'
import type { HTMLElementEvent } from './interface/'
import { pageTop } from './modules/page-top'
import { tabs } from './modules/tabs'

prism()
indexAutoGen()
document.addEventListener('click', (e: HTMLElementEvent<HTMLAnchorElement>) => {
  const target = e.target
  if (!target.classList.contains('js-smooth-scroll')) return
  e.preventDefault()
  const targetId = target.hash
  smoothScroll(targetId)
})

pageTop()
tabs()
