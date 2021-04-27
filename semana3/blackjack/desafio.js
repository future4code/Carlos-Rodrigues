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

   console.log("Bem vindo ao jogo de Blackjack!")
   let rodada = confirm("Quer iniciar uma nova rodada?")
    
   if (rodada == true) {
      let carta1User = comprarCarta()
      let carta2User = comprarCarta()

      while (carta1User && carta2User === "A") {
         carta1User = comprarCarta()
         carta2User = comprarCarta()   
      }

      arrayCartasUsuario = [carta1User, carta2User]
      
      let carta1PC = comprarCarta()
      let carta2PC = comprarCarta()

      while (carta1PC && carta2PC ==="A") {
         carta1PC = comprarCarta()
         carta2PC = comprarCarta()   
      }

      arrayCartaPC = [carta1PC, carta2PC]
        
      let pontuacaoUser = carta1User.valor + carta2User.valor
      let pontuacaoPC = carta1PC.valor + carta2PC.valor
    
      console.log(`Usuário - Cartas: ${carta1User.texto} ${carta2User.texto}, pontuação: ${pontuacaoUser}`)
      console.log(`Computador - Carta 1: ${carta1PC.texto}, pontuação: ${carta1PC.valor}`)
      
      let comprarMais = confirm(`Suas cartas são: ${carta1User.texto} ${carta2User.texto}. A carta revelada do computador é ${carta1PC.texto}` + "\n" +`Deseja comprar mais uma carta?` )

      if (comprarMais === true) {
         arrayCartasUsuario.push(comprarCarta())
         for (const elemento of arrayCartasUsuario) {
            pontuacaoUser = elemento.valor++
            console.log(pontuacaoUser)
             
         }
         
      }
    
      // if (pontuacaoUser > pontuacaoPC) {
      //    console.log("O usuário ganhou!")  
      // }
      // else if (pontuacaoUser === pontuacaoPC) {
      //    console.log("Empate!")   
      // }
      // else if (pontuacaoUser < pontuacaoPC) {
      //    console.log("O computador ganhou!")   
      // }
   }
   else {
      console.log("O jogo acabou.")
   }
    
