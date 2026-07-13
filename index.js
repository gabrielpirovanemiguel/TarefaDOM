import  {ativarModalAdicionar,
        desativarModalAdicionar,
        ativarModalEditar,
        desativarModalEditar,
        adicionarProduto,
        mostrarItens,
        mostrarContador
} from "./funcoes.js";

let botoesCancelar;
let compras = [];
const botaoAdicionar = document.getElementById('btn-adicionar');
const botaoEditar = document.getElementById('btn-editar');
const conteudoLista = document.querySelector('#conteudo-lista');

window.addEventListener('load', () => {
    mostrarItens(compras);
    mostrarContador(compras);
});

botaoAdicionar.addEventListener('click', ativarModalAdicionar);
botaoEditar.addEventListener('click', ativarModalEditar);
conteudoLista.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-cancelar-modal')) {
        desativarModalAdicionar(compras);
    } else if(event.target.classList.contains('btn-fechar-modal-editar')) {
        desativarModalEditar(compras);
    }
})

conteudoLista.addEventListener('submit', (event) => {
    if (event.target.classList.contains('form-adicionar')) {
        event.preventDefault();
        adicionarProduto(compras);
    }
})
