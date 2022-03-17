/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


const inicio = confirm("Quer iniciar uma nova roda?")
alert("Boas - Vindas ao jogo!!!")

    if ( inicio === false){
       alert("O jogo acabou...")
    }

    else if ( inicio == true){
       alert("O jogo vai comecar... ")

      const usuario = "Aurélio" 
      const adversaio = "Labenu"
      let cartasAurelio = []
      let nomesAurelio
      let nomesLabenu
      let cartasLabenu = []
      let usuarioAurelio = 0
      let adiversarioLabenu = 0
      let jogar
      let numeroDeCartas = 0
  
      function cartas(params) {
          nomesAurelio = Array.from(cartasAurelio, ({ texto }) => texto)
          nomesLabenu = Array.from(cartasLabenu, ({ texto }) => texto)
      }
  
      //Cartas usuário
      while (numeroDeCartas <= 2) {
          cartasAurelio.push(comprarCarta())
          numeroDeCartas++
      }
  
      //Cartas Labenu
      numeroDeCartas = 0
      while (numeroDeCartas <= 2) {
          cartasLabenu.push(comprarCarta())
          numeroDeCartas++
      }
      
      // Aurélio - Soma valor das cartas
      function somarAurelio() {
          for (let i = 0; i < cartasAurelio.length; i++) {
              usuarioAurelio += cartasAurelio[i].valor
              cartas()
            }
        }
        somarAurelio()
        
        // Labenu - Soma valor das cartas
        function somarLabenu() {
            for (let i = 0; i < cartasLabenu.length; i++) {
                adiversarioLabenu += cartasLabenu[i].valor
                cartas()
            }
        }
        somarLabenu()
        
      //Comprar cartas Aurélio
      function comprarCartasAurelio() {
          cartasAurelio.push(comprarCarta())
          cartas()
          usuarioAurelio = 0
          somarAurelio()
      }
      //omprar cartas Labenu
      function comprarCartasLabenu() {
          cartasLabenu.push(comprarCarta())
          cartas()
          adiversarioLabenu = 0
          somarLabenu()
      }

      do {
          if (confirm(` ${usuario} : ${nomesAurelio} \n x \n ${adversaio} : ${nomesLabenu}
      \nDeseja comprar mais uma carta?`)) {
            
              comprarCartasLabenu()
              jogar = true
          } 
      }

      while (jogar === true && usuarioAurelio < 21 || adiversarioLabenu < 21){

    
      }
    
     if (adiversarioLabenu > usuarioAurelio || adiversarioLabenu <= 21) {
          alert(`${usuario} = ${usuarioAurelio} \n ${adversaio} = ${adiversarioLabenu} \n  Parabéns ${adversaio} ganhou!`)
      } 
      else if (usuarioAurelio > adiversarioLabenu || usuarioAurelio <= 21) {
          alert(`${usuario} = ${usuarioAurelio} \n ${adversaio} = ${adiversarioLabenu} \n Parabéns ${usuario} ganhou!  `)
      }
      else {
        alert(`${usuario} » ${usuarioAurelio} :\n ${adversaio} » ${adiversarioLabenu} : \n EMPATE! entre ${usuario} e ${adversaio} `)
      }
    
  }
  
    


