

if (!localStorage.getItem('favoritos')) {
    localStorage.setItem('favoritos', JSON.stringify(produtosIniciais));
}

if (!localStorage.getItem('carrinho')) {
    localStorage.setItem('carrinho', JSON.stringify([]));
}

/* ==========================================================================
   2. FUNÇÃO PRINCIPAL: RENDERIZAR OS FAVORITOS NA TELA
   ========================================================================== */
function carregarFavoritos() {
    const container = document.getElementById('favorites-container');
    if (!container) return; 

    const listaFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    if (listaFavoritos.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem 0;">
                <p class="section-description">Sua curadoria está vazia. Explore o site para adicionar itens aos seus desejos.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = '';

    listaFavoritos.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'favorite-card';

        card.innerHTML = `
            <div class="image-wrapper">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <button class="btn-favorite" data-id="${produto.id}" title="Remover dos favoritos">
                    <span class="material-symbols-outlined icon-heart">favorite</span>
                </button>
            </div>
            <div class="favorite-info">
                <h3>${produto.nome}</h3>
                <span class="favorite-price">$${produto.preco.toFixed(2)}</span>
                <button class="btn-outline btn-add-cart" data-id="${produto.id}">Adicionar ao Carrinho</button>
            </div>
        `;

        container.appendChild(card);
    });

    configurarCliquesDosCoracoes();
    configurarCliquesAdicionarCarrinho();
}

/* ==========================================================================
   3. LÓGICA DO CORAÇÃO: REMOVER DOS FAVORITOS
   ========================================================================== */
function configurarCliquesDosCoracoes() {
    const botoesCoracao = document.querySelectorAll('.btn-favorite');

    botoesCoracao.forEach(botao => {
        botao.addEventListener('click', function() {
            const produtoId = this.getAttribute('data-id');
            let listaFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

            listaFavoritos = listaFavoritos.filter(item => item.id !== produtoId);
            localStorage.setItem('favoritos', JSON.stringify(listaFavoritos));

            carregarFavoritos();
        });
    });
}

/* ==========================================================================
   4. LÓGICA DA SACOLA: ADICIONAR AO CARRINHO (CORRIGIDO)
   ========================================================================== */
function configurarCliquesAdicionarCarrinho() {
    const botoesAdicionar = document.querySelectorAll('.btn-add-cart');

    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', function() {
            const produtoId = this.getAttribute('data-id');
            
            const listaFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
            let listaCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

            const produtoDados = listaFavoritos.find(item => item.id === produtoId);

            if (produtoDados) {
                const itemExistenteNoCarrinho = listaCarrinho.find(item => item.id === produtoId);

                if (itemExistenteNoCarrinho) {
                    itemExistenteNoCarrinho.quantidade += 1;
                } else {
                    listaCarrinho.push({
                        id: produtoDados.id,
                        nome: produtoDados.nome,
                        preco: produtoDados.preco,
                        imagem: produtoDados.imagem,
                        quantidade: 1
                    });
                }

                localStorage.setItem('carrinho', JSON.stringify(listaCarrinho));

                // Feedback visual do botão
                const textoOriginal = this.innerText;
                this.innerText = "Adicionado! ✓";
                this.style.backgroundColor = "var(--primary)";
                this.style.color = "white";

                setTimeout(() => {
                    this.innerText = textoOriginal;
                    this.style.backgroundColor = "transparent";
                    this.style.color = "var(--on-surface)";
                }, 1500);
            }
        });
    });
}

/* ==========================================================================
   5. INICIALIZAÇÃO
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    carregarFavoritos();
});