(function (){

  function paraPaginaExterna (url) {
    if (!url) return

    const a = document.createElement('a')
    a.rel = 'noopener noreferrer nofollow'
    a.target = '_blank'
    a.href = url
    a.click()
  }

  function paraPaginaInterna (url) {
    if (!url) return

    const a = document.createElement('a')
    a.rel = 'noopener noreferrer nofollow'
    a.target = '_self'
    a.href = url
    a.click()
  }

  function cliqueBotaoExterno () {
    window.addEventListener('click', (evento) => {
      if (evento.target.nodeName !== 'BUTTON') return

      const url = evento.target.getAttribute('data-url-externa')
      if (!url) return

      paraPaginaExterna(url)
    })
  }

  function cliqueBotaoInterno () {
    window.addEventListener('click', (evento) => {
      if (evento.target.nodeName !== 'BUTTON') return

      const url = evento.target.getAttribute('data-url-interna')
      if (!url) return

      paraPaginaInterna(url)
    })
  }

  // Start
  cliqueBotaoExterno()
  cliqueBotaoInterno()

}())

