import {
    htmlModalAdicao,
    htmlListaVazia,
    htmlModalEdicao
} from "./elementos_html.js";

export function ativarModalAdicionar(event) {
    const listaContainer = document.querySelector('.lista');
    alternarClassesModalAdicionar(listaContainer);
    listaContainer.classList.remove('lista-itens');
    listaContainer.innerHTML = htmlModalAdicao;
}

export function desativarModalAdicionar(compras) {
    const listaContainer = document.querySelector('.lista');
    alternarClassesModalAdicionar(listaContainer);
    mostrarItens(compras);
}

export function ativarModalEditar(compras) {
    const listaContainer = document.querySelector('.lista');
    alternarClassesModalEditar(listaContainer);
    listaContainer.classList.remove('lista-itens');
    listaContainer.innerHTML = htmlModalEdicao;
    mostrarListaEdicao(compras);
}

export function desativarModalEditar(compras) {
    const listaContainer = document.querySelector('.lista');
    alternarClassesModalEditar(listaContainer);
    mostrarItens(compras);
}

export function adicionarProduto(compras) {
    const nomeProduto = document.querySelector('#nome-produto').value;
    const quantidadeProduto = document.querySelector('#quantidade-produto').value;
    compras.push({ 'nome': nomeProduto, 'quantidade': quantidadeProduto });
    desativarModalAdicionar(compras);
    mostrarContador(compras);
}

export function removerProduto(posicao_produto, compras) {
    compras.splice(posicao_produto, 1);
    mostrarListaEdicao(compras);
}

export function mostrarItens(compras) {
    const listaContainer = document.querySelector('.lista');
    const botaoEditar = document.querySelector('#btn-editar');
    console.log(botaoEditar)
    if (compras.length === 0) {
        listaContainer.classList.remove('lista-itens');
        botaoEditar.disabled = true;
        listaContainer.innerHTML = htmlListaVazia;
        return;
    }
    if (botaoEditar.disabled) botaoEditar.disabled = false;
    listaContainer.innerHTML = '';
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
                ${item.quantidade.length !== 0 ? `<span class="quantidade-span">${item.quantidade}</span>` : ''}
            </div>
        </div>`;
        listaContainer.insertAdjacentHTML('beforeend', htmlItem);
    });

}

export function mostrarContador(compras) {
    const spanQuantidadeItens = document.querySelector('#quantidade-itens');
    spanQuantidadeItens.textContent = `${compras.length === 1 ? '1 item' : `${compras.length} itens`}`;
}

export function mostrarListaEdicao(compras) {
    const produtosEdicao = document.querySelector('.produtos-edicao');
    console.log(produtosEdicao);
    if (compras.length === 0) {
        produtosEdicao.innerHTML = '<span id="sem-produtos">Não há produtos no carrinho.</span>';
        return;
    };
    produtosEdicao.innerHTML = '';
    compras.forEach((item, pos) => {
        const htmlItemEdicao = `
                    <div class="produto-edicao">
                            <span class="nome-edicao">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.4">
                                        <path
                                            d="M0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4Z"
                                            fill="#1741C4" />
                                    </g>
                                </svg>
                                ${item.nome}
                            </span>
                            <span class="btn-deletar">
                                ${item.quantidade.length !== 0 ? `<span>${item.quantidade}</span>` : ''}
                                <button value="${pos}" id="btn-deletar">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                                            fill="#E03336" />
                                        <g clip-path="url(#clip0_24_595)">
                                            <path
                                                d="M21.25 10.6667L20.5492 21.3448C20.4879 22.28 20.4572 22.7476 20.2584 23.1022C20.0833 23.4144 19.8192 23.6653 19.501 23.822C19.1395 24 18.6781 24 17.7554 24H14.2445C13.3219 24 12.8605 24 12.499 23.822C12.1808 23.6653 11.9167 23.4144 11.7417 23.1022C11.5428 22.7476 11.5121 22.28 11.4508 21.3448L10.75 10.6667M9 10.6667H23M19.5 10.6667L19.2632 9.94495C19.0337 9.24556 18.9189 8.89586 18.7061 8.63732C18.5182 8.409 18.2768 8.23228 18.0042 8.12336C17.6954 8 17.3326 8 16.6069 8H15.3931C14.6674 8 14.3046 8 13.9958 8.12336C13.7232 8.23228 13.4818 8.409 13.2939 8.63732C13.081 8.89586 12.9663 9.24556 12.7368 9.94495L12.5 10.6667M17.75 14.2222V20.4444M14.25 14.2222V20.4444"
                                                stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_24_595">
                                                <rect width="16" height="18" fill="white" transform="translate(8 7)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </span>
                        </div>
        `;
        produtosEdicao.insertAdjacentHTML('beforeend', htmlItemEdicao);
    })
}

function alternarClassesModalAdicionar(listaContainer) {
    const conteudoLista = document.querySelector('#conteudo-lista');
    listaContainer.classList.toggle('modal-adicionar');
    conteudoLista.classList.toggle('overlay');
    alternarPaddingHeader();
}

function alternarClassesModalEditar(listaContainer) {
    const conteudoLista = document.querySelector('#conteudo-lista');
    listaContainer.classList.toggle('modal-edicao');
    conteudoLista.classList.toggle('overlay');
    alternarPaddingHeader();
}

function alternarPaddingHeader() {
    const header = document.querySelector('.header');
    header.classList.toggle('header-modal-ativo');
}


