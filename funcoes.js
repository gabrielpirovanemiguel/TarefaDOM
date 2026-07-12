import {htmlModal,
        htmlListaVazia
} from "./elementos_html.js";

export function ativarModalAdicionar(event) {
    const listaContainer = document.querySelector('.lista');
    const conteudoLista = document.querySelector('#conteudo-lista');
    conteudoLista.classList.add('overlay');
    listaContainer.innerHTML = htmlModal;
    listaContainer.classList.add('modal-adicionar');
}

export function desativarModalAdicionar(event) {
    const listaContainer = document.querySelector('.lista');
    const conteudoLista = document.querySelector('#conteudo-lista');
    listaContainer.innerHTML = htmlListaVazia;
    listaContainer.classList.remove('modal-adicionar');
    conteudoLista.classList.remove('overlay');
}