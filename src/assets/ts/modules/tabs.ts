export const tabs = (): void => {
  const btnList = document.querySelectorAll<HTMLButtonElement>(
    '.p-tablist__btn'
  )

  btnList.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      btnList.forEach((btn) => {
        btn.setAttribute('aria-selected', 'false')
      })
      btn.setAttribute('aria-selected', 'true')
      const target = e.currentTarget as Element
      const thisControl = target.getAttribute('aria-controls')
      const tabpanelList = document.querySelectorAll('.p-tabs__item')
      tabpanelList.forEach((tabpanel) => {
        tabpanel.setAttribute('aria-hidden', 'true')
      })
      const thisTabpanel = document.querySelector(`#${thisControl}`)
      thisTabpanel.setAttribute('aria-hidden', 'false')
    })
  })
}
