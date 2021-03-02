(function (){

  function habilitarCliqueRolarAteSeletor () {
    window.addEventListener('click', (evento) => { 
      const seletor = evento.target.getAttribute('data-scroll-seletor')
      if (!seletor) return
  
      rolarAteSeletor(seletor)
    })
  }
  
  function rolarAteSeletor (seletor) {
    const elemento = document.querySelector(seletor)
  
    window.scrollTo({
      top: elemento.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }

  // Start
  habilitarCliqueRolarAteSeletor()

}())

