document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. BANCO DE DADOS UNIFICADO (PRODUTOS ANTIGOS + NOVOS)
       ========================================================================== */
    const produtosDB = {

        // NOVOS PRODUTOS INTEGRADOS (COLEÇÃO INVERNO / OUTONO / NOVOS)
        "cardigan-cinza": {
            id: "cardigan-cinza",
            tituloPagina: "WalkWord — Cardigan de Lã Cinza",
            categoria: "Inverno",
            nome: "Cardigan de Lã Cinza",
            badge: "Coleção de Inverno",
            archivalNo: "Peça Archival Nº 512",
            preco: 179.90,
            precoAntigo: "R$ 229,00",
            descricao: "Cardigan em lã com acabamento sofisticado e toque macio para os dias frios.",
            imagemPrincipal: " ../assets/cardiganfrente.png",
            thumbnails: ["../assets/cardiganatras.PNG", "../assets/cardigantecido.png"],
            material: "Mescla de Lã Macia",
            origem: "Malharia Local"
        },
        "jaqueta-puffer": {
            id: "jaqueta-puffer",
            tituloPagina: "WalkWord — Jaqueta Puffer Marrom",
            categoria: "Inverno",
            nome: "Jaqueta Puffer Marrom",
            badge: "Destaque de Inverno",
            archivalNo: "Peça Archival Nº 513",
            preco: 299.90,
            precoAntigo: "R$ 380,00",
            descricao: "Jaqueta puffer marrom com excelente isolamento térmico e visual moderno.",
            imagemPrincipal: "../assets/pufferfrente.png",
            thumbnails: ["../assets/pufferatras.png", "../assets/puffertecido.png"],
            material: "Poliamida com Isolamento Térmico",
            origem: "Ateliê Técnico"
        },
        "calca-marrom": {
            id: "calca-marrom",
            tituloPagina: "WalkWord — Calça Marrom Casual",
            categoria: "Inverno",
            nome: "Calça Marrom",
            badge: "Essencial",
            archivalNo: "Peça Archival Nº 514",
            preco: 149.90,
            precoAntigo: "R$ 199,00",
            descricao: "Calça marrom versátil para composições elegantes e casuais.",
            imagemPrincipal: "../assets/calcamarromfrente.png",
            thumbnails: ["../assets/calcamarromatras.png", "../assets/calcamarromtecido.png"],
            material: "Sarja de Algodão Estruturada",
            origem: "Corte Reto Clássico"
        },
        "sueter-bege": {
            id: "sueter-bege",
            tituloPagina: "WalkWord — Suéter de Lã Bege",
            categoria: "Inverno",
            nome: "Suéter de Lã Bege",
            badge: "Conforto Clássico",
            archivalNo: "Peça Archival Nº 515",
            preco: 159.90,
            precoAntigo: "R$ 210,00",
            descricao: "Suéter em lã bege com caimento confortável e estilo clássico.",
            imagemPrincipal: "../assets/sueterfrente.png",
            thumbnails: ["../assets/sueteratras.png", "../assets/suetertecido.png"],
            material: "Fio de Lã Acrílica Premium",
            origem: "Tricô Industrial Fino"
        },
        "sobretudo-bege": {
            id: "sobretudo-bege",
            tituloPagina: "WalkWord — Sobretudo Bege Elegante",
            categoria: "Inverno",
            nome: "Sobretudo Bege",
            badge: "Peça de Destaque",
            archivalNo: "Peça Archival Nº 516",
            preco: 349.90,
            precoAntigo: "R$ 450,00",
            descricao: "Sobretudo bege elegante para os dias mais frios.",
            imagemPrincipal: "../assets/sobretudofrente.png",
            thumbnails: ["../assets/sobretudoatras.png", "../assets/sobretudotecido.png"],
            material: "Lã Batida Estruturada",
            origem: "Alfaiataria de Inverno"
        },
        "sueter-xadrez": {
            id: "sueter-xadrez",
            tituloPagina: "WalkWord — Suéter Xadrez Preto e Branco",
            categoria: "Outono",
            nome: "Suéter Xadrez Preto e Branco",
            badge: "Coleção de Outono",
            archivalNo: "Peça Archival Nº 610",
            preco: 169.90,
            precoAntigo: "R$ 220,00",
            descricao: "Suéter xadrez com design moderno e acabamento premium.",
            imagemPrincipal: "../assets/sueterxadrezfrente.webp",
            thumbnails: ["../assets/sueterxadrezcosta.png", "../assets/sueterxadreztecido.png"],
            material: "Algodão Trama Grossa",
            origem: "Tricô Urbano"
        },
        "trench-coat": {
            id: "trench-coat",
            tituloPagina: "WalkWord — Trench Coat Bege Atemporal",
            categoria: "Outono",
            nome: "Trench Coat Bege",
            badge: "Atemporal",
            archivalNo: "Peça Archival Nº 611",
            preco: 379.90,
            precoAntigo: "R$ 499,00",
            descricao: "Trench coat bege inspirado na moda atemporal.",
            imagemPrincipal: "../assets/trenchfrente.png",
            thumbnails: ["../assets/trenchcostas.png", "../assets/trenchtextura.png"],
            material: "Gabarine Impermeável",
            origem: "Corte Heritage"
        },
        "jaqueta-couro-sintetico": {
            id: "jaqueta-couro-sintetico",
            tituloPagina: "WalkWord — Jaqueta Marrom em Couro Sintético",
            categoria: "Outono",
            nome: "Jaqueta Marrom em Couro Sintético",
            badge: "Estilo Urbano",
            archivalNo: "Peça Archival Nº 612",
            preco: 319.90,
            precoAntigo: "R$ 420,00",
            descricao: "Jaqueta em couro sintético com visual sofisticado.",
            imagemPrincipal: "../assets/jaquetafrente.png",
            thumbnails: ["../assets/jaquetacostas.png", "../assets/jaquetatextura.png"],
            material: "P.U. Premium Flexível",
            origem: "Ateliê de Costura"
        },
        "bota-preta": {
            id: "bota-preta",
            tituloPagina: "WalkWord — Bota Preta de Couro",
            categoria: "Outono",
            nome: "Bota Preta de Couro",
            badge: "Calçados Extra",
            archivalNo: "Peça Archival Nº 613",
            preco: 259.90,
            precoAntigo: "R$ 340,00",
            descricao: "Bota preta elegante com acabamento refinado.",
            imagemPrincipal: "../assets/botinalonge.avif",
            thumbnails: ["../assets/botinaperto.png", "../assets/botinatextura.png"],
            material: "Couro Legítimo Nobre",
            origem: "Linha Industrial Heritage"
        },
        "bracelete-dourado": {
            id: "bracelete-dourado",
            tituloPagina: "WalkWord — Bracelete Dourado Delicado",
            categoria: "Acessórios",
            nome: "Bracelete Dourado",
            badge: "Novo",
            archivalNo: "Peça Ateliê Nº 144",
            preco: 59.90,
            precoAntigo: "R$ 89,00",
            descricao: "Bracelete dourado delicado para complementar qualquer visual.",
            imagemPrincipal: "../assets/braceletelonge.png",
            thumbnails: ["../assets/braceleteperto.png", "../assets/braceletetextura.png"],
            material: "Banho de Ouro 18k",
            origem: "Ourivesaria Leve"
        },
        "calca-social": {
            id: "calca-social",
            tituloPagina: "WalkWord — Calça Social Azul-Marinho",
            categoria: "Vestuário",
            nome: "Calça Social Azul-Marinho",
            badge: "Novo",
            archivalNo: "Peça Archival Nº 711",
            preco: 169.90,
            precoAntigo: "R$ 229,00",
            descricao: "Calça social azul-marinho com modelagem elegante.",
            imagemPrincipal: "../assets/calcalonge.png",
            thumbnails: ["../assets/calcaperto.png", "../assets/calcatecido.png"],
            material: "Alfaiataria Crepe Premium",
            origem: "Modelagem Slim"
        },
        "camisa-branca": {
            id: "camisa-branca",
            tituloPagina: "WalkWord — Camisa Branca Clássica",
            categoria: "Vestuário",
            nome: "Camisa Branca",
            badge: "Novo",
            archivalNo: "Peça Archival Nº 712",
            preco: 129.90,
            precoAntigo: "R$ 175,00",
            descricao: "Camisa branca clássica indispensável para o guarda-roupa.",
            imagemPrincipal: "../assets/camisalonge.png",
            thumbnails: ["../assets/camisaperto.png", "../assets/camisatecido.png"],
            material: "100% Algodão Egípcio",
            origem: "Linha Essentials"
        },
        "cardigan-verde": {
            id: "cardigan-verde",
            tituloPagina: "WalkWord — Cardigan Verde de Tricô",
            categoria: "Malharia",
            nome: "Cardigan Verde de Tricô",
            badge: "Novo",
            archivalNo: "Peça Archival Nº 713",
            preco: 189.90,
            precoAntigo: "R$ 240,00",
            descricao: "Cardigan verde em tricô com estilo aconchegante e moderno.",
            imagemPrincipal: "../assets/verdelonge.png",
            thumbnails: ["../assets/verdeperto.png", "../assets/verdetecido.png"],
            material: "Tricô Canelado Macio",
            origem: "Design Casual Autoral"
        },
        "bota-marrom": {
            id: "bota-marrom",
            tituloPagina: "WalkWord — Bota Marrom de Couro Atemporal",
            categoria: "Calçados",
            nome: "Bota Marrom de Couro",
            badge: "Novo",
            archivalNo: "Peça Archival Nº 714",
            preco: 249.90,
            precoAntigo: "R$ 320,00",
            descricao: "Bota marrom de couro com acabamento sofisticado e estilo atemporal.",
            imagemPrincipal: "../assets/botalonge.png",
            thumbnails: ["../assets/botaperto.png", "../assets/botatextura.png"],
            material: "Couro Legítimo Amaciado",
            origem: "Artesanal Urbana"
        }
    };

    /* ==========================================================================
       2. CAPTURA PARÂMETRO DA URL E RENDERIZAÇÃO NA TELA
       ========================================================================== */
    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = urlParams.get('id');
    const produto = produtosDB[produtoId];

    // Fallback caso o produto não exista no banco de dados
    if (!produto) {
        alert("Produto não encontrado ou indisponível.");
        window.location.href = 'catalogo.html'; // Atualizado para ir ao catálogo padrão
        return;
    }

    // Preenche todos os nós HTML de forma segura com os dados do produto encontrado
    if(document.getElementById('page-title')) document.getElementById('page-title').innerText = produto.tituloPagina;
    if(document.getElementById('breadcrumb-category')) document.getElementById('breadcrumb-category').innerText = produto.categoria;
    if(document.getElementById('breadcrumb-name')) document.getElementById('breadcrumb-name').innerText = produto.nome;
    if(document.getElementById('product-badge')) document.getElementById('product-badge').innerText = produto.badge;
    if(document.getElementById('product-archival-no')) document.getElementById('product-archival-no').innerText = produto.archivalNo;
    if(document.getElementById('product-name')) document.getElementById('product-name').innerText = produto.nome;
    if(document.getElementById('product-price-current')) document.getElementById('product-price-current').innerText = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;
    if(document.getElementById('product-price-old')) document.getElementById('product-price-old').innerText = produto.precoAntigo;
    if(document.getElementById('product-desc')) document.getElementById('product-desc').innerText = produto.descricao;
    if(document.getElementById('product-mat-desc')) document.getElementById('product-mat-desc').innerText = produto.material;
    if(document.getElementById('product-origin-desc')) document.getElementById('product-origin-desc').innerText = produto.origem;
    document.title = `WalkWord - ${produto.nome}`;

    // Montagem da Galeria de Imagens Principal + Miniaturas
    const mainImgElement = document.getElementById('product-main-img');
    if (mainImgElement) {
        mainImgElement.src = produto.imagemPrincipal;
        mainImgElement.alt = produto.nome;
    }

    const thumbContainer = document.getElementById('product-thumbnails');
    if (thumbContainer) {
        thumbContainer.innerHTML = '';
        
        // Insere a imagem principal na galeria de miniaturas também
        const todasImagens = produto.thumbnails;
        
        todasImagens.forEach((thumbUrl, index) => {
            if (thumbUrl) {
                const imgTag = document.createElement('img');
                imgTag.src = thumbUrl;
                imgTag.alt = `Visualização ${index + 1} de ${produto.nome}`;
                imgTag.id = `thumb${index}`;
                imgTag.addEventListener('click', () => { 
                    if(mainImgElement) mainImgElement.src = thumbUrl; 
                });
                thumbContainer.appendChild(imgTag);
            }
        });
    }

    /* ==========================================================================
       3. LÓGICA DE SELEÇÃO DOS BOTÕES DE TAMANHO
       ========================================================================== */
    const sizeButtons = document.querySelectorAll(".size-buttons button");

    sizeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.disabled) return;

            sizeButtons.forEach((btn) => {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");
        });
    });

    /* ==========================================================================
       4. SISTEMA DE FAVORITOS (BOTÃO DE CORAÇÃO)
       ========================================================================== */
    const btnFavorite = document.getElementById('btn-favorite-toggle');
    const heartIcon = document.getElementById('heart-icon');

    function atualizarStatusCoracao() {
        if (!heartIcon) return;
        let listaFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        const jahFavoritado = listaFavoritos.some(item => item.id === produto.id);
        
        if (jahFavoritado) {
            heartIcon.style.color = "#e63946"; // Vermelho ativo
            heartIcon.style.fontVariationSettings = "'FILL' 1"; 
        } else {
            heartIcon.style.color = "#a4a4a4"; // Cinza inativo
            heartIcon.style.fontVariationSettings = "'FILL' 0";
        }
    }
    atualizarStatusCoracao();

    if (btnFavorite) {
        btnFavorite.addEventListener('click', () => {
            let listaFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
            const index = listaFavoritos.findIndex(item => item.id === produto.id);

            if (index > -1) {
                listaFavoritos.splice(index, 1); // Desfavorita
            } else {
                listaFavoritos.push({
                    id: produto.id,
                    nome: produto.nome,
                    preco: produto.preco,
                    imagem: produto.imagemPrincipal
                });
            }

            localStorage.setItem('favoritos', JSON.stringify(listaFavoritos));
            atualizarStatusCoracao();
        });
    }

    /* ==========================================================================
       5. ADICIONAR AO GUARDA-ROUPA (CARRINHO DE COMPRAS)
       ========================================================================== */
    const btnAddCart = document.getElementById('btn-add-to-cart');

    if (btnAddCart) {
        btnAddCart.addEventListener('click', () => {
            // Verifica se o usuário escolheu o tamanho (caso os botões existam na tela)
            const tamanhoSelecionado = document.querySelector(".size-buttons button.selected");
            if (sizeButtons.length > 0 && !tamanhoSelecionado) {
                alert("Por favor, selecione um tamanho antes de adicionar ao guarda-roupa.");
                return;
            }

            let listaCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
            
            // Cria um identificador único unindo o ID do produto ao tamanho escolhido
            const tamanhoTexto = tamanhoSelecionado ? tamanhoSelecionado.innerText : 'U';
            const itemChaveUnica = `${produto.id}-${tamanhoTexto}`;

            const itemExistente = listaCarrinho.find(item => item.cartId === itemChaveUnica);

            if (itemExistente) {
                itemExistente.quantidade += 1;
            } else {
                listaCarrinho.push({
                    cartId: itemChaveUnica,
                    id: produto.id,
                    nome: produto.nome,
                    tamanho: tamanhoTexto,
                    preco: produto.preco,
                    imagem: produto.imagemPrincipal,
                    quantidade: 1
                });
            }

            localStorage.setItem('carrinho', JSON.stringify(listaCarrinho));

            // Efeito visual temporário do botão de confirmação
            const textoOriginal = btnAddCart.innerHTML;
            btnAddCart.innerHTML = `<span>Adicionado ao Guarda-Roupa! ✓</span>`;
            btnAddCart.style.backgroundColor = "#2a4d38"; 

            setTimeout(() => {
                btnAddCart.innerHTML = textoOriginal;
                btnAddCart.style.backgroundColor = ""; 
            }, 2000);
        });
    }
});