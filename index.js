
let htmlModal = `<span class="topo-modal">
                    <h3>Adicionar item</h3>
                    <button>✕</button>
                </span>
                <form action="" class="form-adicionar">
                    <label for="nome-produto">NOME DO ITEM</label>
                    <input type="text" name="nome-produto" id="nome-produto" placeholder="Ex: Leite integral">
                    <label for="quantidade-produto">QUANTIDADE (OPCIONAL)</label>
                    <input type="text" name="quantidade-produto" id="quantidade-produto"
                        placeholder="Ex: 2 unidades, 500g…">
                    <div class="btn-modal">
                        <button>Cancelar</button>
                        <input type="submit" value="Adicionar" id="btn-adicionar-modal">
                    </div>
                </form
`;

function ativarModalAdicionar(event) {
    const listaContainer = document.querySelector('.lista');
    const conteudoLista = document.querySelector('#conteudo-lista');
    conteudoLista.classList.add('overlay');
    listaContainer.innerHTML = htmlModal;
    listaContainer.classList.add('modal-adicionar');
}
const botaoEditar = document.getElementById('btn-adicionar');
console.log(botaoEditar);
botaoEditar.addEventListener('click', ativarModalAdicionar);