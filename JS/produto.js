document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. BANCO DE DADOS UNIFICADO (PRODUTOS ANTIGOS + NOVOS)
       ========================================================================== */
    const produtosDB = {
        // PRODUTOS ORIGINAIS
        "coturno-heritage": {
            id: "coturno-heritage",
            tituloPagina: "WalkWord — Coturno Heritage em Couro com Cadarço",
            categoria: "Calçados",
            nome: "Coturno Anacapri com Detalhes em Metal",
            badge: "Peça do Arquivo",
            archivalNo: "Peça Archival Nº 351",
            preco: 245.00,
            precoAntigo: "R$ 320,00",
            descricao: "Confeccionado em couro curtido de alta qualidade, este coturno une robustez e elegância artesanal. Pensado para o uso diário e feito para envelhecer com beleza — ganhando, com o tempo, uma personalidade única para cada jornada.",
            imagemPrincipal: "../assets/botaperto.png",
            thumbnails: ["../assets/botalonge.png", "../assets/botatextura.png"],
            material: "Couro curtido integral",
            origem: "Artesanato Heritage"
        },
        "camisa-oxford": {
            id: "camisa-oxford",
            tituloPagina: "WalkWord — Camisa de Algodão Oxford",
            categoria: "Vestuário",
            nome: "Camisa de Algodão Oxford",
            badge: "Garimpado",
            archivalNo: "Peça Archival Nº 218",
            preco: 120.00,
            precoAntigo: "R$ 165,00",
            descricao: "Um item essencial e refinado para o guarda-roupa. Confeccionada em algodão estruturado com colarinho de botões e silhueta sob medida. Desenvolvida para versatilidade diária, equilibrando conforto, estrutura e apelo atemporal.",
            imagemPrincipal: "../assets/camisaperto.png",
            thumbnails: ["../assets/camisalonge.png", "../assets/camisatecido.png"],
            material: "Algodão Oxford Premium",
            origem: "Alfaiataria Estruturada"
        },
        "cardigan-heritage": {
            id: "cardigan-heritage",
            tituloPagina: "WalkWord — Cardigan Heritage em Lã Natural",
            categoria: "Malharia",
            nome: "Cardigan Heritage em Lã Natural",
            badge: "Garimpado",
            archivalNo: "Peça Archival Nº 429",
            preco: 345.00,
            precoAntigo: "R$ 520,00",
            descricao: "Um verdadeiro estudo sobre a longevidade têxtil. Esta peça tecida à mão apresenta lã de merino de alta gramatura, originária de fazendas regenerativas nas Terras Altas da Escócia. Desenvolvida para respirar e envelhecer com perfeição.",
            imagemPrincipal: "../assets/camisa verde.png",
            thumbnails: ["../assets/camisa verde.png", "../assets/camisa verde.png"],
            material: "100% Lã Merino Rastreada",
            origem: "Tricotado à mão na Escócia"
        },
        "bracelete-ouro": {     
            id: "bracelete-ouro",
            tituloPagina: "WalkWord — Bracelete Escultural em Ouro Escovado",
            categoria: "Acessórios",
            nome: "Bracelete Escultural em Ouro Escovado",
            badge: "Edição do Ateliê",
            archivalNo: "Peça Ateliê Nº 127",
            preco: 145.00,
            precoAntigo: "R$ 195,00",
            descricao: "Definido por linhas limpas e acabamento fosco, este bracelete de aro aberto equilibra uma elegância sutil com o minimalismo contemporâneo. Desenhado para um encaixe anatômico e versatilidade sem esforço.",
            imagemPrincipal: "../assets/braceleteperto.png",
            thumbnails: ["../assets/braceletelonge.png", "../assets/braceletetextura.png"],
            material: "Ouro Escovado Maciço",
            origem: "Construção de Aro Aberto"
        },

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
            imagemPrincipal: "imagens/cardiganfrente.png",
            thumbnails: ["imagens/cardiganatras.PNG", "imagens/cardigantecido.png"],
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
            imagemPrincipal: "imagens/pufferfrente.png",
            thumbnails: ["imagens/pufferatras.png", "imagens/puffertecido.png"],
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
            imagemPrincipal: "imagens/calcamarromfrente.png",
            thumbnails: ["imagens/calcamarromatras.png", "imagens/calcamarromtecido.png"],
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
            imagemPrincipal: "imagens/sueterfrente.png",
            thumbnails: ["imagens/sueteratras.png", "imagens/suetertecido.png"],
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
            imagemPrincipal: "imagens/sobretudofrente.png",
            thumbnails: ["imagens/sobretudoatras.png", "imagens/sobretudotecido.png"],
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
            imagemPrincipal: "imagens/sueterxadrezfrente.webp",
            thumbnails: ["imagens/sueterxadrezcosta.png", "imagens/sueterxadreztecido.png"],
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
            imagemPrincipal: "imagens/trenchfrente.png",
            thumbnails: ["imagens/trenchcostas.png", "imagens/trenchtextura.png"],
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
            imagemPrincipal: "imagens/jaquetafrente.png",
            thumbnails: ["imagens/jaquetacostas.png", "imagens/jaquetatextura.png"],
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
            imagemPrincipal: "imagens/botinalonge.avif",
            thumbnails: ["imagens/botinaperto.png", "imagens/botinatextura.png"],
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
            imagemPrincipal: "imagens/braceletelonge.png",
            thumbnails: ["imagens/braceleteperto.png", "imagens/braceletetextura.png"],
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
            imagemPrincipal: "imagens/calcalonge.png",
            thumbnails: ["imagens/calcaperto.png", "imagens/calcatecido.png"],
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
            imagemPrincipal: "imagens/camisalonge.png",
            thumbnails: ["imagens/camisaperto.png", "imagens/camisatecido.png"],
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
            imagemPrincipal: "imagens/verdelonge.png",
            thumbnails: ["imagens/verdeperto.png", "imagens/verdetecido.png"],
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
            imagemPrincipal: "imagens/botalonge.png",
            thumbnails: ["imagens/botaperto.png", "imagens/botatextura.png"],
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
        const todasImagens = [produto.imagemPrincipal, ...produto.thumbnails];
        
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