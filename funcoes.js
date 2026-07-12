import {
    htmlModal,
    htmlListaVazia
} from "./elementos_html.js";

export function ativarModalAdicionar(event) {
    alternarClasessModal().innerHTML = htmlModal;
}

export function desativarModalAdicionar(event) {
    alternarClasessModal().innerHTML = htmlListaVazia;
}

function alternarClasessModal() {
    const listaContainer = document.querySelector('.lista');
    const conteudoLista = document.querySelector('#conteudo-lista');
    listaContainer.classList.toggle('modal-adicionar');
    conteudoLista.classList.toggle('overlay');
    return listaContainer;
}