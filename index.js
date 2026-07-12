import  {ativarModalAdicionar,
        desativarModalAdicionar
} from "./funcoes.js";

let botoesCancelar;
let compras = [];
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
