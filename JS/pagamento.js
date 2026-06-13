document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. CARREGAR DADOS DO USUÁRIO E ENDEREÇO DA ETAPA ANTERIOR
       ========================================================================== */
    const userEmailElement = document.getElementById('userEmail');
    const addressDetailsElement = document.getElementById('addressDetails');
    
    const usuarioLogadoRaw = localStorage.getItem('usuarioLogado');
    if (userEmailElement) {
        if (usuarioLogadoRaw) {
            try {
                const usuarioObj = JSON.parse(usuarioLogadoRaw);
                userEmailElement.textContent = usuarioObj.email || "visitante@walkword.com";
            } catch (e) {
                userEmailElement.textContent = usuarioLogadoRaw; // Caso seja texto puro
            }
        } else {
            userEmailElement.textContent = "visitante@walkword.com";
        }
    }

    const enderecoSalvo = localStorage.getItem('enderecoEntrega');
    if (enderecoSalvo && addressDetailsElement) {
        const endereco = JSON.parse(enderecoSalvo);
        
        addressDetailsElement.innerHTML = `
            ${endereco.rua}, ${endereco.numero} ${endereco.complemento ? ' - ' + endereco.complemento : ''}<br>
            Bairro ${endereco.bairro}<br>
            CEP: ${endereco.cep}<br>
            ${endereco.cidade} - ${endereco.estado}
        `;
    } else if (addressDetailsElement) {
        addressDetailsElement.innerHTML = "Avenida Paulista, 1000<br>Bela Vista - São Paulo - SP";
    }

    /* ==========================================================================
       2. CALCULAR TOTAIS E PREENCHER O RESUMO DA DIREITA
       ========================================================================== */
    const subtotalElement = document.getElementById('payment-subtotal');
    const freteElement = document.getElementById('payment-frete');
    const totalElement = document.getElementById('payment-total');
    
    const listaCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let subtotalGeral = 0;
    
    listaCarrinho.forEach((produto) => {
        subtotalGeral += (produto.preco * produto.quantidade);
    });

    const valorFrete = 15.00; 
    const totalGeral = subtotalGeral + valorFrete;
    localStorage.setItem('valorTotalPedido', totalGeral.toFixed(2));
    localStorage.setItem('subtotalPedido', subtotalGeral.toFixed(2));

    if (subtotalElement) subtotalElement.innerText = `R$ ${subtotalGeral.toFixed(2).replace('.', ',')}`;
    if (freteElement) freteElement.innerText = `R$ ${valorFrete.toFixed(2).replace('.', ',')}`;
    if (totalElement) totalElement.innerText = `R$ ${totalGeral.toFixed(2).replace('.', ',')}`;

    document.querySelectorAll('.parcela-total').forEach(el => el.innerText = totalGeral.toFixed(2).replace('.', ','));
    document.querySelectorAll('.parcela-meia').forEach(el => el.innerText = (totalGeral / 2).toFixed(2).replace('.', ','));

    /* ==========================================================================
       3. LÓGICA DAS ABAS (CARTÃO DE CRÉDITO X PIX)
       ========================================================================== */
    const tabs = document.querySelectorAll('.payment-tab');
    const panels = document.querySelectorAll('.payment-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetId = tab.getAttribute('data-target');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) targetPanel.classList.add('active');
        });
    });

    /* ==========================================================================
       4. MÁSCARAS E RESTRIÇÕES EM TEMPO REAL (MÁGICA DOS INPUTS)
       ========================================================================== */
    const inputCartao = document.getElementById('numero-cartao');
    const inputValidade = document.getElementById('validade-cartao');
    const inputCvv = document.getElementById('cvv-cartao');

    if (inputCartao) {
        inputCartao.addEventListener('input', (e) => {
            let valor = e.target.value.replace(/\D/g, '');
            valor = valor.replace(/(\d{4})(?=\d)/g, '$1 ');
            e.target.value = valor;
        });
    }

    if (inputValidade) {
        inputValidade.addEventListener('input', (e) => {
            let valor = e.target.value.replace(/\D/g, ''); 
            if (valor.length > 2) {
                valor = valor.substring(0, 2) + '/' + valor.substring(2, 4);
            }
            e.target.value = valor;
        });
    }

    if (inputCvv) {
        inputCvv.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
        });
    }

    /* ==========================================================================
       5. LÓGICA DE FINALIZAR O PEDIDO (SALVANDO NO HISTÓRICO)
       ========================================================================== */
    function concluirPedido(metodoEscolhido) {
        const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];
        const telaSubtotal = document.getElementById('payment-subtotal').innerText.replace('R$ ', '').replace(',', '.');
        const telaTotal = document.getElementById('payment-total').innerText.replace('R$ ', '').replace(',', '.');

        const numeroPedido = `WW-${Math.floor(100000 + Math.random() * 900000)}`;
        const dataPedido = new Date().toLocaleDateString('pt-BR');

        // Cria a estrutura do pedido para a tela de histórico ler
        const novoPedido = {
            id: numeroPedido,
            data: dataPedido,
            status: "Pagamento Aprovado",
            metodo: metodoEscolhido,
            subtotal: parseFloat(telaSubtotal),
            total: parseFloat(telaTotal),
            itens: carrinhoAtual
        };

        // Salva na lista de histórico de pedidos
        const historicoPedidos = JSON.parse(localStorage.getItem('historicoPedidos')) || [];
        historicoPedidos.unshift(novoPedido); 
        localStorage.setItem('historicoPedidos', JSON.stringify(historicoPedidos));

        // Dados temporários para a tela de sucesso imediata
        localStorage.setItem('metodoPagamento', metodoEscolhido);
        localStorage.setItem('subtotalPedido', telaSubtotal);
        localStorage.setItem('valorTotalPedido', telaTotal);
        localStorage.setItem('ultimoPedidoId', numeroPedido);

        window.location.href = 'sucesso.html'; 
    }

    // Gatilho para o formulário do Cartão de Crédito
    const formCredito = document.getElementById('form-credito');
    if (formCredito) {
        formCredito.addEventListener('submit', (e) => {
            e.preventDefault(); 

            if (inputCartao) {
                const apenasNumeros = inputCartao.value.replace(/\s/g, '');
                if (apenasNumeros.length < 16) {
                    alert('Por favor, digite um número de cartão válido (16 dígitos).');
                    inputCartao.focus();
                    return; 
                }
            }

            if (inputValidade) {
                const apenasNumerosValidade = inputValidade.value.replace(/\D/g, '');
                if (apenasNumerosValidade.length < 4) {
                    alert('Por favor, digite a validade completa (MM/AA).');
                    inputValidade.focus();
                    return;
                }
                const mes = parseInt(apenasNumerosValidade.substring(0, 2), 10);
                if (mes < 1 || mes > 12) {
                    alert('Mês inválido! Digite um mês entre 01 e 12.');
                    inputValidade.focus();
                    return;
                }
            }

            if (inputCvv) {
                if (inputCvv.value.length < 3) {
                    alert('Por favor, digite um CVV válido (3 dígitos).');
                    inputCvv.focus();
                    return;
                }
            }

            concluirPedido('cartao'); 
        });
    }

    /* ==========================================================================
       6. GATILHO E EXIBIÇÃO DO PIX DINÂMICO
       ========================================================================== */
    const btnPix = document.getElementById('btn-finalizar-pix');
    const pixInstrucoes = document.getElementById('pix-instrucoes');
    const areaQrCode = document.getElementById('area-qr-code');
    const btnCopiar = document.getElementById('btn-copiar-pix');
    const btnPixPago = document.getElementById('btn-pix-pago');

    if (btnPix && pixInstrucoes && areaQrCode) {
        btnPix.addEventListener('click', (e) => {
            e.preventDefault(); 
            pixInstrucoes.style.display = 'none';
            areaQrCode.style.display = 'block';
        });
    }

    if (btnCopiar) {
        btnCopiar.addEventListener('click', () => {
            const inputChave = document.getElementById('chave-pix-copia');
            if (inputChave) {
                inputChave.select();
                inputChave.setSelectionRange(0, 99999); 
                navigator.clipboard.writeText(inputChave.value);
                
                btnCopiar.innerText = "Copiado!";
                setTimeout(() => { btnCopiar.innerText = "Copiar"; }, 2000);
            }
        });
    }

    if (btnPixPago) {
        btnPixPago.addEventListener('click', () => {
            concluirPedido('pix');
        });
    }

});