document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. RECUPERAR VALORES DO LOCALSTORAGE E ATUALIZAR O RESUMO
       ========================================================================== */
    // Pega os valores salvos na tela de pagamento
    const subtotalSalvo = localStorage.getItem('subtotalPedido');
    const totalSalvo = localStorage.getItem('valorTotalPedido');

    // Mapeia os elementos do HTML da tela de sucesso
    const summarySubtotalElement = document.getElementById('summary-subtotal');
    const summaryTotalElement = document.getElementById('summary-total');

    // Injeta o Subtotal formatado, se existir
    if (subtotalSalvo && summarySubtotalElement) {
        const subtotalFloat = parseFloat(subtotalSalvo);
        summarySubtotalElement.innerText = `R$ ${subtotalFloat.toFixed(2).replace('.', ',')}`;
    }

    // Injeta o Total formatado, se existir
    if (totalSalvo && summaryTotalElement) {
        const totalFloat = parseFloat(totalSalvo);
        summaryTotalElement.innerText = `R$ ${totalFloat.toFixed(2).replace('.', ',')}`;
    }

    /* ==========================================================================
       2. CARREGAR ENDEREÇO SALVO
       ========================================================================== */
    const addressDetailsElement = document.getElementById('success-address-details');
    const enderecoSalvo = localStorage.getItem('enderecoEntrega');

    if (enderecoSalvo && addressDetailsElement) {
        try {
            const endereco = JSON.parse(enderecoSalvo);
            addressDetailsElement.innerHTML = `
                <p>${endereco.rua}, ${endereco.numero} ${endereco.complemento ? ' - ' + endereco.complemento : ''}</p>
                <p>Bairro ${endereco.bairro}</p>
                <p>CEP: ${endereco.cep}</p>
                <p>${endereco.cidade} - ${endereco.estado}</p>
            `;
        } catch (e) {
            addressDetailsElement.innerHTML = "<p>Avenida Paulista, 1000<br>Bela Vista - São Paulo - SP</p>";
        }
    } else if (addressDetailsElement) {
        addressDetailsElement.innerHTML = "<p>Avenida Paulista, 1000<br>Bela Vista - São Paulo - SP</p>";
    }

    /* ==========================================================================
       3. GERAR NÚMERO DO PEDIDO E DATA DE ENTREGA ALEATÓRIOS
       ========================================================================== */
    const orderNumberElement = document.getElementById('order-number');
    const deliveryDateElement = document.getElementById('delivery-date');

    if (orderNumberElement) {
        // Gera um número de pedido fictício aleatório ex: #WW-482910
        const numeroAleatorio = Math.floor(100000 + Math.random() * 900000);
        orderNumberElement.innerText = `#WW-${numeroAleatorio}`;
    }

    if (deliveryDateElement) {
        // Calcula uma data de entrega de 6 dias úteis para a frente
        const hoje = new Date();
        hoje.setDate(hoje.getDate() + 8); // Aproximadamente 6 dias úteis
        const opcoesData = { day: '2-digit', month: '2-digit', year: 'numeric' };
        deliveryDateElement.innerText = hoje.toLocaleDateString('pt-BR', opcoesData);
    }
});

/**
 * Função para o botão "CONTINUAR GARIMPANDO"
 * Limpa o carrinho e os dados do pedido antigo para uma nova compra
 */
function limparEVoltar() {
    localStorage.removeItem('carrinho');
    localStorage.removeItem('subtotalPedido');
    localStorage.removeItem('valorTotalPedido');
    
    // Redireciona de volta para a página principal
    window.location.href = '../HTML/mainpage.html';
}