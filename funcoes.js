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

export function adicionarProduto(compras) {
    const nomeProduto = document.querySelector('#nome-produto').value;
    const quantidadeProduto = document.querySelector('#quantidade-produto').value;
    compras.push({ 'nome': nomeProduto, 'quantidade': quantidadeProduto });
    console.log(compras);
    desativarModalAdicionar();
}

function alternarClasessModal() {
    const listaContainer = document.querySelector('.lista');
    const conteudoLista = document.querySelector('#conteudo-lista');
    listaContainer.classList.toggle('modal-adicionar');
    conteudoLista.classList.toggle('overlay');
    return listaContainer;
}
