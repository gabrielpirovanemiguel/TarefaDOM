
const htmlModal = `<span class="topo-modal">
                    <h3>Adicionar item</h3>
                    <button class="btn-cancelar-modal">✕</button>
                </span>
                <form action="" class="form-adicionar">
                    <label for="nome-produto">NOME DO ITEM</label>
                    <input type="text" name="nome-produto" id="nome-produto" placeholder="Ex: Leite integral" required>
                    <label for="quantidade-produto">QUANTIDADE (OPCIONAL)</label>
                    <input type="text" name="quantidade-produto" id="quantidade-produto"
                        placeholder="Ex: 2 unidades, 500g…">
                    <div class="btn-modal">
                        <button class="btn-cancelar-modal" type="button">Cancelar</button>
                        <input type="submit" value="Adicionar" id="btn-adicionar-modal">
                    </div>
                </form>
`;

const htmlListaVazia = `                    
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M2.5 0C1.1193 0 0 1.1193 0 2.5C0 3.8807 1.1193 5 2.5 5H5.54805L14.4586 40.6423C11.8319 41.809 10 44.4405 10 47.5C10 51.6423 13.3579 55 17.5 55C21.6421 55 25 51.6423 25 47.5C25 46.6235 24.8495 45.782 24.5732 45H35.4268C35.1505 45.782 35 46.6235 35 47.5C35 51.6423 38.3577 55 42.5 55C46.6423 55 50 51.6423 50 47.5C50 43.3577 46.6423 40 42.5 40H19.452L18.202 35H42.5C47.6605 35 50.7548 31.7398 52.4718 28.1398C54.1498 24.6218 54.7337 20.4173 54.9375 17.3592C55.221 13.1003 51.7007 10 47.8027 10H11.952L10.3988 3.78732C9.8423 1.56148 7.8424 0 5.54805 0H2.5ZM42.5 30H16.952L13.202 15H47.8027C49.1855 15 50.0158 16.0169 49.9485 17.027C49.7585 19.8805 49.2265 23.3295 47.959 25.9873C46.7305 28.5628 45.0503 30 42.5 30ZM42.5 49.9845C41.1278 49.9845 40.0155 48.8722 40.0155 47.5C40.0155 46.1278 41.1278 45.0155 42.5 45.0155C43.8722 45.0155 44.9845 46.1278 44.9845 47.5C44.9845 48.8722 43.8722 49.9845 42.5 49.9845ZM15.0154 47.5C15.0154 48.8722 16.1278 49.9845 17.5 49.9845C18.8722 49.9845 19.9846 48.8722 19.9846 47.5C19.9846 46.1278 18.8722 45.0155 17.5 45.0155C16.1278 45.0155 15.0154 46.1278 15.0154 47.5Z"
                            fill="white" />
                    </svg>
                    <h2>Nenhum item na lista ainda</h2>
                    <h3>Toque em "+ Adicionar item" para começar</h3>
`;

let botoesCancelar;
let compras = [];

function ativarModalAdicionar(event) {
    const listaContainer = document.querySelector('.lista');
    const conteudoLista = document.querySelector('#conteudo-lista');
    conteudoLista.classList.add('overlay');
    listaContainer.innerHTML = htmlModal;
    listaContainer.classList.add('modal-adicionar');
}

function desativarModalAdicionar(event) {
    const listaContainer = document.querySelector('.lista');
    const conteudoLista = document.querySelector('#conteudo-lista');
    listaContainer.innerHTML = htmlListaVazia;
    listaContainer.classList.remove('modal-adicionar');
    conteudoLista.classList.remove('overlay');
}

const botaoEditar = document.getElementById('btn-adicionar');
const conteudoLista = document.querySelector('#conteudo-lista');

botaoEditar.addEventListener('click', ativarModalAdicionar);
conteudoLista.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-cancelar-modal')) desativarModalAdicionar();
})

conteudoLista.addEventListener('submit', (event) => {
    if (event.target.classList.contains('form-adicionar')) {
        event.preventDefault();
        let quantidadeProduto;
        const nomeProduto = document.querySelector('#nome-produto').value;
        const isQuantidade = document.querySelector('#quantidade-produto');
        isQuantidade.value ? quantidadeProduto = isQuantidade.value : quantidadeProduto = 1;
        compras.push({ 'nome': nomeProduto, 'quantidade': quantidadeProduto });
        console.log(compras);
        desativarModalAdicionar();
    }

})
