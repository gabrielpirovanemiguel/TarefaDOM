import  {ativarModalAdicionar,
        desativarModalAdicionar,
        adicionarProduto,
        mostrarItens
} from "./funcoes.js";

let botoesCancelar;
let compras = [];
const botaoEditar = document.getElementById('btn-adicionar');
const conteudoLista = document.querySelector('#conteudo-lista');

window.addEventListener('load', () => {
    mostrarItens(compras);
});

botaoEditar.addEventListener('click', ativarModalAdicionar);
conteudoLista.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-cancelar-modal')) desativarModalAdicionar(compras);
})

conteudoLista.addEventListener('submit', (event) => {
    if (event.target.classList.contains('form-adicionar')) {
        event.preventDefault();
        adicionarProduto(compras);
    }
})
