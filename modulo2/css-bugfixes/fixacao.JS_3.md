


'''
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  const notas =  (p1 * 2 + p2 * 3) + ex
  const mediaFinal = notas / 6
  
  if(mediaFinal >= 9){
     return "A"
  }
  else if(mediaFinal < 9 && mediaFinal >= 7.5){
    return "B"
  }
  else if(mediaFinal < 7.5 && mediaFinal >= 6){
    return "C"
  }
  else{
    return "D"
  }

}
'''