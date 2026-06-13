
document.addEventListener('DOMContentLoaded', () => {
    
/* ==========================================================================
       1. CARREGAR DADOS DO USUÁRIO LOGADO
       ========================================================================== */
    const userEmailElement = document.getElementById('userEmail');
    const usuarioLogadoRaw = localStorage.getItem('usuarioLogado');

    if (userEmailElement) {
        if (usuarioLogadoRaw) {
            // Converte a string do localStorage de volta para um objeto real
            const usuarioObj = JSON.parse(usuarioLogadoRaw);
            userEmailElement.textContent = usuarioObj.email || "visitante@walkword.com";
        } else {
            userEmailElement.textContent = "visitante@walkword.com";
        }
    }
    /* ==========================================================================
       2. LIGAR COM O CARRINHO E CALCULAR RESUMO
       ========================================================================== */
    const subtotalElement = document.getElementById('checkout-subtotal');
    const totalElement = document.getElementById('checkout-total');
    
    const listaCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    if (listaCarrinho.length === 0) {
        alert("Seu carrinho está vazio! Voltando para a loja.");
        window.location.href = 'carrinho.html';
        return;
    }

    let subtotalGeral = 0;
    listaCarrinho.forEach((produto) => {
        subtotalGeral += (produto.preco * produto.quantidade);
    });

    if (subtotalElement) subtotalElement.innerText = `R$ ${subtotalGeral.toFixed(2).replace('.', ',')}`;
    if (totalElement) totalElement.innerText = `R$ ${subtotalGeral.toFixed(2).replace('.', ',')}`;
    /* ==========================================================================
       3. VALIDAÇÃO DO FORMULÁRIO, SALVAMENTO E REDIRECIONAMENTO
       ========================================================================== */
    const checkoutForm = document.getElementById('checkoutForm');
    
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Captura os valores digitados
            const cep = document.getElementById('cep').value;
            const endereco = document.getElementById('endereco').value;
            const numero = document.getElementById('numero').value;
            const complemento = document.getElementById('complemento').value;
            const bairro = document.getElementById('bairro').value;
            const cidade = document.getElementById('cidade').value;
            const estado = document.getElementById('estado').value;

            // Cria o objeto estruturado com o endereço completo
            const enderecoEntrega = {
                cep: cep,
                rua: endereco,
                numero: numero,
                complemento: complemento,
                bairro: bairro,
                cidade: cidade,
                estado: estado
            };

            // Salva o endereço no localStorage
            localStorage.setItem('enderecoEntrega', JSON.stringify(enderecoEntrega));

            alert("Endereço cadastrado! Redirecionando para a etapa de pagamento.");

            // Redireciona para a página de pagamento
            window.location.href = 'pagamento.html';
        });
    }
});
