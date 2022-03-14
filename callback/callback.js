
// Interpretação de código


// ----------  11111111 -------------------


  /* O codigo vai imprimir no console o array, isso é o nome, apelido e a posicão 
  */


// ------------------ 222222222 ------------------



  // O código mapeou o array, e simplesmente  vai retornar ou imprimir os item, isso é os nomes do array 




  // --------------- 33333333333 ---------------------


  // O código filtou o array e excluiu chijo no seu retorno, imprimindo somente os dois primeiros itens do array 





  // -------------- Escrita de código ----------------


 /* const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 */

 /* ------------  AAAAA --------------


 const nomesDosDogs = pets.map((dogs, index, array) =>{
     return dogs.nome
 })

 console.log(`Os nomes dos doginhos são \n ${nomesDosDogs }`)

 */



 /* ------------  BBBBBBB ---------

 const salsicha = pets.filter((dogs, index, array) =>{
     return dogs.raca === "Salsicha"
 })

 console.log("Os Dogs salsicha são" , salsicha)

 */


/* ----------- CCCCCC -------------
 const descontoPoodles = pets.filter((dogs, index, array) =>{
    return dogs.raca === "Poodle"
}).map((dogs) =>{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${dogs.nome}`
})

console.log(descontoPoodles)
*/


const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomesDosProdutos = produtos.map((itens, index, array) =>{
    return itens.nome
})

console.log(nomesDosProdutos )

