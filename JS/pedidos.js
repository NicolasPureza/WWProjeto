document.addEventListener('DOMContentLoaded', () => {
    const ordersContainer = document.getElementById('orders-container');
    
    // Recupera a lista de pedidos salvos no localStorage
    const historicoPedidos = JSON.parse(localStorage.getItem('historicoPedidos')) || [];

    // Se a lista estiver vazia, exibe um feedback visual elegante
    if (historicoPedidos.length === 0) {
        ordersContainer.innerHTML = `
            <div class="empty-orders" style="text-align: center; padding: 40px; border: 1px dashed #cccccc; background: #ffffff;">
                <span class="material-symbols-outlined" style="font-size: 48px; color: #777777; margin-bottom: 15px;">inventory_2</span>
                <h3 style="font-family: 'Jost', sans-serif; font-size: 18px; margin-bottom: 10px;">Você ainda não fez nenhum pedido</h3>
                <p style="color: #777777; font-size: 14px; margin-bottom: 20px;">Suas próximas peças com intenção aparecerão aqui.</p>
                <a href="catalogo.html" style="display: inline-block; padding: 12px 24px; background: #546652; color: white; text-decoration: none; font-weight: 500; font-size: 14px; transition: background 0.3s;">EXPLORAR CATÁLOGO</a>
            </div>
        `;
        return;
    }

    // Renderiza dinamicamente os cards de pedido encontrados
    let htmlPedidos = '';

    historicoPedidos.forEach(pedido => {
        const totalFormatado = pedido.total.toFixed(2).replace('.', ',');

        // Monta os itens comprados dentro desse bloco de pedido
        let htmlItens = '';
        if (pedido.itens && pedido.itens.length > 0) {
            pedido.itens.forEach(item => {
                // Se o seu item possuir caminho de imagem usa ele, caso contrário um placeholder neutro
                const imagemProduto = item.imagem || '../assets/shopping-cart.png'; 
                const precoItemFormatado = (item.preco * item.quantidade).toFixed(2).replace('.', ',');

                htmlItens += `
                    <div class="order-item" style="display: flex; gap: 15px; padding: 15px 0; border-bottom: 1px solid #eeeeee; align-items: center;">
                        <img src="${imagemProduto}" alt="${item.nome}" style="width: 60px; height: 80px; object-fit: cover; border: 1px solid #e5e5e5;">
                        <div class="item-details" style="flex: 1;">
                            <h4 style="font-size: 14px; font-weight: 500; margin-bottom: 4px; font-family: 'Jost', sans-serif;">${item.nome}</h4>
                            <p style="font-size: 12px; color: #777777;">Quantidade: ${item.quantidade}</p>
                        </div>
                        <div class="item-price" style="font-size: 14px; font-weight: 600; font-family: 'Jost', sans-serif;">
                            R$ ${precoItemFormatado}
                        </div>
                    </div>
                `;
            });
        }

        // Constrói o card estruturado completo
        htmlPedidos += `
            <div class="order-card" style="background: #ffffff; border: 1px solid #E5E5E5; margin-bottom: 25px; padding: 20px;">
                <div class="order-card-header" style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 15px; padding-bottom: 15px; border-bottom: 1px solid #E5E5E5; margin-bottom: 15px; font-family: 'Jost', sans-serif;">
                    <div>
                        <span style="font-size: 11px; text-transform: uppercase; color: #777777; display: block; letter-spacing: 0.5px;">Número do Pedido</span>
                        <strong style="font-size: 15px; color: #546652;">${pedido.id}</strong>
                    </div>
                    <div>
                        <span style="font-size: 11px; text-transform: uppercase; color: #777777; display: block; letter-spacing: 0.5px;">Data</span>
                        <span style="font-size: 14px; font-weight: 500;">${pedido.data}</span>
                    </div>
                    <div>
                        <span style="font-size: 11px; text-transform: uppercase; color: #777777; display: block; letter-spacing: 0.5px;">Status</span>
                        <span class="status-badge" style="display: inline-block; padding: 4px 10px; background: #eef3ee; color: #546652; font-size: 12px; font-weight: 600; border-radius: 4px;">
                            ${pedido.status}
                        </span>
                    </div>
                    <div>
                        <span style="font-size: 11px; text-transform: uppercase; color: #777777; display: block; letter-spacing: 0.5px;">Total Pago</span>
                        <strong style="font-size: 15px;">R$ ${totalFormatado}</strong>
                    </div>
                </div>
                <div class="order-card-body">
                    ${htmlItens}
                </div>
            </div>
        `;
    });

    ordersContainer.innerHTML = htmlPedidos;
});