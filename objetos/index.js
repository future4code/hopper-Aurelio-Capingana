
// -----------  Interpretação de código   -----------


// a 1- console imprime Matheus Nachtergaele / 2- console imprime Virginia Cavendish / 3- console imprime o array {canal: "Globo", horario: "14h"} 








// 2a- o que será impresso no console é: Juca, Juba e Jubo trocará os nomes por esses, porem a idade e raça será os mesmos valores impressos

// 2b- a sintaxe dos três pontos antes do nome de um objeto permite copias esse objeto, assim podemos acrescentar algo nele ou trocar de valores 









// 3a- no console será impresso: false e undefined

// 3b- console vai imprmir o valor do   backender que é false, / 2- console vai imprimir undefined, isso por altura não esta difinido no objeto pessoa








// ------------------  escrita de código  ----------------

// -----------  11111111111  -----------


const eu = {
    nome : 'Aurélio',
    apelidos: ["Manguena", "Guegue", "T-beg"]
}


const pessoa = `eu sou ${eu.nome}, mas pde me chamar de: ${eu.apelidos}`
console.log(pessoa)

// b
const novoEu = {
    ...eu,
    apelidos : ["ontem", "hoje", "amanha"]
}

const novaPessoa = `eu sou ${novoEu.nome}, mas pde me chamar de: ${novoEu.apelidos}`
console.log(novaPessoa)







// ------------- 222222222222222222 -------------
const pessoa = {
    nome : 'Aurélio',
    idade : 30,
    profissao : 'estudante'
}

function descricaoPessoa(pessoa){
    console.log(`${pessoa.nome} ${pessoa.idade} ${pessoa.profissao}`)
}

descricaoPessoa(pessoa)









// -------- 3333333333333 -------------

const carrinho = []

const fruta1 = {nome:"Manga", disponibilidade: true}
const fruta2 = {nome:"Maracuja", disponibilidade: true}
const fruta3 = {nome:"Mamã", disponibilidade: true}

function sacolaoFrutas(adicionar){
    carrinho.push(adicionar)
}

sacolaoFrutas([fruta1, fruta2, fruta3])

console.log(carrinho)


//Obirgado!!!
