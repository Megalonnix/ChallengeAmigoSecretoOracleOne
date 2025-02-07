//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

const inputNmsDigit = document.getElementsByClassName('input-name')[0]
const btnAdcAmigo = document.getElementsByClassName('button-add')[0]
const btnSortAmigo = document.getElementsByClassName('button-draw')[0]
const arrayAmigos = []

const reloadListAmigosHtml = () => {
    const listaAmigos = document.getElementById('listaAmigos')
    listaAmigos.innerHTML = ''
    
    arrayAmigos.forEach(amigoRegistrado => {
        const newIdxLista = document.createElement('li')
        newIdxLista.innerText = amigoRegistrado
        listaAmigos.appendChild(newIdxLista)
    })
}

const adicionarAmigo = () => {
    let nmDigit = inputNmsDigit.value
    const nmNaoEAlgoVazio = nmDigit != null && nmDigit != undefined && nmDigit != ''
    
    nmNaoEAlgoVazio ?
        arrayAmigos.push(nmDigit) :
        window.alert('Digite algum nome por favor!')

    inputNmsDigit.value = ''
    reloadListAmigosHtml()
}

const sortearAmigo = () => {
    return 0
}