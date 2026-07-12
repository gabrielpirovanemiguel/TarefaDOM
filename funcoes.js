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
    mostrarItens(compras);
}

export function mostrarItens(compras) {
    const listaContainer = document.querySelector('.lista');
    listaContainer.classList.add('lista-itens');
    compras.forEach(item => {
        const htmlItem = `                    
        <div class="produto-container">
            <div class="produto">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                <path d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z" fill="#FFD426" />
                </g>
                </svg>
                <span>${item.nome}</span>
                <span class="quantidade-span">${item.quantidade}</span>
            </div>
        </div>`;
        listaContainer.insertAdjacentHTML('beforeend', htmlItem);
    });
}

function alternarClasessModal() {
    const listaContainer = document.querySelector('.lista');
    const conteudoLista = document.querySelector('#conteudo-lista');
    listaContainer.classList.toggle('modal-adicionar');
    conteudoLista.classList.toggle('overlay');
    return listaContainer;
}
