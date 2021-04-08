(function (){

  // Variables

  const texto1 = document.querySelector('div[name="animarAqui1"]')
  const texto2 = document.querySelector('div[name="animarAqui2"]')
  const texto3 = document.querySelector('div[name="animarAqui3"]')
  const texto4 = document.querySelector('div[name="animarAqui4"]')
  const texto5 = document.querySelector('div[name="animarAqui5"]')
  const texto6 = document.querySelector('div[name="animarAqui6"]')
  const texto7 = document.querySelector('div[name="animarAqui7"]')
  const texto8 = document.querySelector('div[name="animarAqui8"]')
  const carro = document.querySelector('img[name="carro"]')

  // Methods

  function classesObjetosAnimar1 () {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY
      if (alturaPagina < 200) texto1.classList.remove('classeAnimarEsquerda')
      else texto1.classList.add('classeAnimarEsquerda')
    })
  }

  function classesObjetosAnimar2 () {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY
      if (alturaPagina < 600) texto2.classList.remove('classeAnimarEsquerda')
      else texto2.classList.add('classeAnimarEsquerda')
    })
  }

  function classesObjetosAnimar3 () {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY
      if (alturaPagina < 1100) texto3.classList.remove('classeAnimarDireita')
      else texto3.classList.add('classeAnimarDireita')
    })
  }

  function classesObjetosAnimar4 () {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY
      if (alturaPagina < 1700) texto4.classList.remove('classeAnimarEsquerda')
      else texto4.classList.add('classeAnimarEsquerda')
    })
  }

  function classesObjetosAnimar5 () {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY
      if (alturaPagina < 2200) texto5.classList.remove('classeAnimarEsquerda')
      else texto5.classList.add('classeAnimarEsquerda')
    })
  }

  function classesObjetosAnimar6 () {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY
      if (alturaPagina < 2800) texto6.classList.remove('classeAnimarEsquerda')
      else texto6.classList.add('classeAnimarEsquerda')
    })
  }

  function classesObjetosAnimar7 () {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY
      if (alturaPagina < 3400) texto7.classList.remove('classeAnimarDireita')
      else texto7.classList.add('classeAnimarDireita')
    })
  }

  function classesObjetosAnimar8 () {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY
      if (alturaPagina < 3800) texto8.classList.remove('classeAnimarEsquerda')
      else texto8.classList.add('classeAnimarEsquerda')
    })
  }

  function classesObjetosAnimarCarro () {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY
      if (alturaPagina < 4200) carro.classList.remove('classeAnimarDireita')
      else carro.classList.add('classeAnimarDireita')
    })
  }

  // Start
  classesObjetosAnimar1()
  classesObjetosAnimar2()
  classesObjetosAnimar3()
  classesObjetosAnimar4()
  classesObjetosAnimar5()
  classesObjetosAnimar6()
  classesObjetosAnimar7()
  classesObjetosAnimar8()
  classesObjetosAnimarCarro()

}())

