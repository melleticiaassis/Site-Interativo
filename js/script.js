// Pegar os elementos que serão manipulados
const Modal = document.getElementById('modal')
const foto = document.getElementById('foto')
const nome = document.getElementById('nome')
const desc = document.getElementById('desc')

// Arrays de dados sobre os personagens
const Nomes = ['Violet', 'Xaden', 'Templo Dunne', 'Esquadrão', 'Dragões', 'Venin']
const Textos = [
    'Violet Sorrengail é a heroína de Quarta Asa, uma garota frágil que precisa sobreviver em uma academia de guerreiros e dragões, usando sua inteligência e coragem',
    'Xaden Riorson é o filho do maior traidor da rebelião e um dos mais temidos entre os cadetes. Inteligente, sarcástico e estrategista nato, ele esconde emoções profundas sob uma fachada fria. Apesar do passado conturbado, mostra-se leal, protetor e intensamente ligado a Violet, com quem desenvolve uma relação complexa e apaixonada.',
    'O Templo de Dunne é uma antiga construção envolta em mistério, cheia de marcas de poder e histórias esquecidas. Escondido e quase lendário, guarda segredos cruciais sobre os dragões, o passado da guerra e verdades que o governo tenta esconder. É um ponto de virada na jornada de Violet, revelando que há muito mais em jogo do que ela imaginava.',
    'Os Esquadrões são grupos táticos formados por cavaleiros e seus dragões, organizados para combate e missões militares. Cada esquadrão é uma unidade leal, forjada em treinos intensos e batalhas reais. O Esquadrão de Xaden, por exemplo, é formado por alguns dos mais habilidosos e perigosos cadetes, muitos filhos de rebeldes, unidos não só pela sobrevivência, mas por um propósito maior — proteger verdades proibidas e desafiar o sistema corrupto de Navarre.',
    'Em Quarta Asa, os dragões são seres majestosos, temidos e altamente seletivos. Eles escolhem seus cavaleiros com base em coragem e força, e um vínculo com eles concede poderes especiais. Cada dragão tem habilidades únicas, como controlar fogo ou raios, e são vitais na proteção do reino contra ameaças mágicas. Eles não toleram fraqueza nem submissão forçada — preferem matar a serem montados por quem não respeitam.',
    'Os Venin, em *Quarta Asa*, são os principais vilões sobrenaturais. São humanos corrompidos pela magia — em vez de canalizá-la de forma natural, eles a **roubam da terra**, o que os torna instáveis, poderosos e monstruosos. Eles não têm vínculo com dragões, são extremamente perigosos e causam destruição por onde passam. Sua existência é inicialmente negada pelos líderes, o que gera um clima de conspiração e ameaça crescente.'
]

// Funções
function mostraModal(param) {
    Modal.style.display = 'flex'
    let index = param + 1
    foto.src = `assets/foto${index}.jpeg`
    nome.innerHTML = Nomes[param]
    desc.innerHTML = Textos[param]
}
function fechaModal() {
    Modal.style.display = 'none'
}