const Modal = document.getElementById("modal")
const foto = document.getElementById("foto")
const nome = document.getElementById("nome")
const desc = document.getElementById("desc")

const Nomes = [
"Violet",
"Xaden",
"Templo Dunne",
"Esquadrão",
"Dragões",
"Venin"
]

const Textos = [
"Violet Sorrengail é a heroína de Quarta Asa...",
"Xaden Riorson é o filho do maior traidor...",
"O Templo de Dunne é uma antiga construção...",
"Os Esquadrões são grupos táticos...",
"Os dragões são seres majestosos...",
"Os Venin são humanos corrompidos pela magia..."
]

function mostraModal(param){

Modal.style.display = "flex"

let index = param + 1

foto.src = `assets/foto${index}.jpeg`
nome.innerHTML = Nomes[param]
desc.innerHTML = Textos[param]

}

function fechaModal(){
Modal.style.display = "none"
}
