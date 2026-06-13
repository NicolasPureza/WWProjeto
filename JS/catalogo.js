document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================================================
     1. ARQUIVO BASE DE DADOS COMPLETO DO CATÁLOGO
     ========================================================================== */
  const catalogDB = {

    "cardigan-cinza": {
      id: "cardigan-cinza",
      nome: "Cardigan de Lã Cinza",
      preco: 179.90,
      material: "Mescla de Lã Macia",
      imagem: "../assets/cardiganfrente.png",
      badge: "Chegou agora",
      ecoScore: "🌿 90/100",
      condition: "novo",
      sizes: ["S", "M", "L"],
      colors: ["#6b5a4e"]
    },
    "jaqueta-puffer": {
      id: "jaqueta-puffer",
      nome: "Jaqueta Puffer Marrom",
      preco: 299.90,
      material: "Poliamida Isolamento Térmico",
      imagem: "../assets/pufferfrente.png",
      badge: "Chegou agora",
      ecoScore: "🌿 85/100",
      condition: "novo",
      sizes: ["S", "M", "L", "XL"],
      colors: ["#7a3c30"]
    },
    "calca-marrom": {
      id: "calca-marrom",
      nome: "Calça Marrom",
      preco: 149.90,
      material: "Sarja de Algodão Estruturada",
      imagem: "../assets/calcamarromfrente.png",
      badge: "Garimpado",
      ecoScore: "🌿 94/100",
      condition: "seminovo",
      sizes: ["M", "L"],
      colors: ["#7a3c30", "#6b5a4e"]
    },
    "sueter-bege": {
      id: "sueter-bege",
      nome: "Suéter de Lã Bege",
      preco: 159.90,
      material: "Fio de Lã Acrílica Premium",
      imagem: "../assets/sueterfrente.png",
      badge: "Chegou agora",
      ecoScore: "🌿 88/100",
      condition: "novo",
      sizes: ["XS", "S", "M"],
      colors: ["#e8e5de"]
    },
    "sobretudo-bege": {
      id: "sobretudo-bege",
      nome: "Sobretudo Bege",
      preco: 349.90,
      material: "Lã Batida Estruturada",
      imagem: "../assets/sobretudofrente.png",
      badge: "Chegou agora",
      ecoScore: "🌿 91/100",
      condition: "novo",
      sizes: ["M", "L", "XL"],
      colors: ["#e8e5de"]
    },
    "sueter-xadrez": {
      id: "sueter-xadrez",
      nome: "Suéter Xadrez Preto e Branco",
      preco: 169.90,
      material: "Algodão Trama Grossa",
      imagem: "../assets/sueterxadrezfrente.webp",
      badge: "Garimpado",
      ecoScore: "🌿 82/100",
      condition: "seminovo",
      sizes: ["S", "M", "L"],
      colors: ["#2c2c2a"]
    },
    "trench-coat": {
      id: "trench-coat",
      nome: "Trench Coat Bege",
      preco: 379.90,
      material: "Gabarine Impermeável",
      imagem: "../assets/trenchfrente.png",
      badge: "Garimpado",
      ecoScore: "🌿 96/100",
      condition: "seminovo",
      sizes: ["S", "M", "L"],
      colors: ["#e8e5de"]
    },
    "jaqueta-couro-sintetico": {
      id: "jaqueta-couro-sintetico",
      nome: "Jaqueta Marrom em Couro Sintético",
      preco: 319.90,
      material: "P.U. Premium Flexível",
      imagem: "../assets/jaquetafrente.png",
      badge: "Garimpado",
      ecoScore: "🌿 78/100",
      condition: "seminovo",
      sizes: ["M", "L", "XL"],
      colors: ["#7a3c30", "#6b5a4e"]
    },
    "bota-preta": {
      id: "bota-preta",
      nome: "Bota Preta de Couro",
      preco: 259.90,
      material: "Couro Legítimo Nobre",
      imagem: "../assets/botinalonge.avif",
      badge: "Garimpado",
      ecoScore: "🌿 87/100",
      condition: "seminovo",
      sizes: ["S", "M", "L"],
      colors: ["#2c2c2a"]
    },
    "bracelete-dourado": {
      id: "bracelete-dourado",
      nome: "Bracelete Dourado",
      preco: 59.90,
      material: "Banho de Ouro 18k",
      imagem: "../assets/braceletelonge.png",
      badge: "Chegou agora",
      ecoScore: "🌿 93/100",
      condition: "novo",
      sizes: ["XS", "S"],
      colors: ["#e8e5de"]
    },
    "calca-social": {
      id: "calca-social",
      nome: "Calça Social Azul-Marinho",
      preco: 169.90,
      material: "Alfaiataria Crepe Premium",
      imagem: "../assets/calcalonge.png",
      badge: "Chegou agora",
      ecoScore: "🌿 90/100",
      condition: "novo",
      sizes: ["S", "M", "L"],
      colors: ["#2c2c2a"]
    },
    "camisa-branca": {
      id: "camisa-branca",
      nome: "Camisa Branca",
      preco: 129.90,
      material: "100% Algodão Egípcio",
      imagem: "../assets/camisalonge.png",
      badge: "Chegou agora",
      ecoScore: "🌿 99/100",
      condition: "novo",
      sizes: ["XS", "S", "M", "L"],
      colors: ["#e8e5de"]
    },
    "cardigan-verde": {
      id: "cardigan-verde",
      nome: "Cardigan Verde de Tricô",
      preco: 189.90,
      material: "Tricô Canelado Macio",
      imagem: "../assets/verdelonge.png",
      badge: "Chegou agora",
      ecoScore: "🌿 92/100",
      condition: "novo",
      sizes: ["S", "M", "L"],
      colors: ["#4a5e45"]
    },
    "bota-marrom": {
      id: "bota-marrom",
      nome: "Bota Marrom de Couro",
      preco: 249.90,
      material: "Couro Legítimo Amaciado",
      imagem: "../assets/botalonge.png",
      badge: "Chegou agora",
      ecoScore: "🌿 89/100",
      condition: "novo",
      sizes: ["M", "L"],
      colors: ["#6b5a4e"]
    }
  };

  /* ==========================================================================
     2. CONFIGURAÇÃO DA PAGINAÇÃO
     ========================================================================== */
  const itensPorPagina = 6;
  let paginaAtual = 1;
  let produtosFiltrados = Object.values(catalogDB); // Começa com todos

  const gridContainer = document.getElementById("grid-produtos-dinamico");

  function renderizarProdutos() {
    if (!gridContainer) return;
    gridContainer.innerHTML = "";

    // Calcula os índices do corte (ex: Página 1 corta de 0 a 6, Página 2 de 6 a 12...)
    const indiceInicial = (paginaAtual - 1) * itensPorPagina;
    const indiceFinal = indiceInicial + itensPorPagina;
    const produtosDaPagina = produtosFiltrados.slice(indiceInicial, indiceFinal);

    if (produtosDaPagina.length === 0) {
      gridContainer.innerHTML = `<p class="sem-produtos">Nenhum produto encontrado para os filtros selecionados.</p>`;
      return;
    }

    produtosDaPagina.forEach((prod) => {
      const precoFormatado = prod.preco.toFixed(2).replace('.', ',');
      const cardHTML = `
        <div class="card-produto" data-id="${prod.id}">
          <div class="imagem-produto" style="cursor: pointer;">
            <img src="${prod.imagem}" alt="${prod.nome}" />
            <span class="badge-condicao">${prod.badge}</span>
            <span class="badge-eco">${prod.ecoScore}</span>
          </div>
          <div class="info-produto">
            <div class="linha-principal">
              <span class="nome" style="cursor: pointer;">${prod.nome}</span>
              <span class="preco">R$ ${precoFormatado}</span>
            </div>
            <span class="material">${prod.material}</span>
          </div>
        </div>
      `;
      gridContainer.insertAdjacentHTML("beforeend", cardHTML);
    });

    // Eventos de clique para abrir os detalhes
    document.querySelectorAll(".card-produto").forEach((card) => {
      const idProd = card.getAttribute("data-id");
      card.querySelector(".imagem-produto").addEventListener("click", () => irParaDetalhes(idProd));
      card.querySelector(".nome").addEventListener("click", () => irParaDetalhes(idProd));
    });
  }

  function irParaDetalhes(id) {
    window.location.href = `../HTML/produto.html?id=${id}`;
  }

  /* ==========================================================================
     3. CONTROLE DOS BOTÕES DE PAGINAÇÃO DO HTML
     ========================================================================== */
  function atualizarBotoesPaginacao() {
    const totalPaginas = Math.ceil(produtosFiltrados.length / itensPorPagina) || 1;
    
    // Ajusta a página atual se os filtros reduzirem drasticamente a lista
    if (paginaAtual > totalPaginas) paginaAtual = totalPaginas;

    const botoes = document.querySelectorAll("#paginacao a");
    
    botoes.forEach((botao) => {
      const texto = botao.textContent.trim().toLowerCase();

      // Remove a classe ativa antiga
      botao.classList.remove("ativo");

      if (texto === "anterior") {
        botao.style.opacity = paginaAtual === 1 ? "0.4" : "1";
        botao.style.pointerEvents = paginaAtual === 1 ? "none" : "auto";
      } else if (texto === "próxima") {
        botao.style.opacity = paginaAtual === totalPaginas ? "0.4" : "1";
        botao.style.pointerEvents = paginaAtual === totalPaginas ? "none" : "auto";
      } else {
        // Se for um número (01, 02, 03)
        const numeroBotao = parseInt(texto, 10);
        
        // Esconde o botão se o número de páginas filtradas for menor (ex: filtrou e só deu 1 página)
        if (numeroBotao > totalPaginas) {
          botao.style.display = "none";
        } else {
          botao.style.display = "inline-block";
        }

        if (numeroBotao === paginaAtual) {
          botao.classList.add("ativo");
        }
      }
    });
  }

  function configurarEventosPaginacao() {
    const botoes = document.querySelectorAll("#paginacao a");
    
    botoes.forEach((botao) => {
      botao.addEventListener("click", (e) => {
        const texto = botao.textContent.trim().toLowerCase();
        const totalPaginas = Math.ceil(produtosFiltrados.length / itensPorPagina) || 1;

        if (texto === "anterior") {
          if (paginaAtual > 1) paginaAtual--;
        } else if (texto === "próxima") {
          if (paginaAtual < totalPaginas) paginaAtual++;
        } else {
          paginaAtual = parseInt(texto, 10);
        }

        renderizarProdutos();
        atualizarBotoesPaginacao();
        
        // Suave rolagem de volta para a seção da loja ao mudar de página
        document.getElementById("loja")?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  /* ==========================================================================
     4. SISTEMA RESTRUTURADO DE FILTROS COM SUPORTE À PAGINAÇÃO
     ========================================================================== */
  const state = {
    conditions: new Set(),
    sizes: new Set(),
    colors: new Set(),
  };

  function normalize(hex) {
    return (hex || "").trim().toLowerCase();
  }

  function applyFilters() {
    // Em vez de ocultar com display:none, nós filtramos a lista de dados bruta
    produtosFiltrados = Object.values(catalogDB).filter((data) => {
      const condOk  = state.conditions.size === 0 || state.conditions.has(data.condition);
      const sizeOk  = state.sizes.size === 0      || data.sizes.some((s) => state.sizes.has(s));
      const colorOk = state.colors.size === 0     || data.colors.some((c) => state.colors.has(normalize(c)));
      return condOk && sizeOk && colorOk;
    });

    // Sempre que filtrar, resetamos para a página 1
    paginaAtual = 1; 

    renderizarProdutos();
    atualizarBotoesPaginacao();
  }

  function syncConditions() {
    state.conditions.clear();
    document.querySelectorAll(".grupo-filtro input[type=checkbox]").forEach((cb) => {
      if (!cb.checked) return;
      const label = cb.parentElement.textContent.trim().toLowerCase();
      if (label.includes("garimpado"))      state.conditions.add("seminovo");
      else if (label.includes("chegou agora")) state.conditions.add("novo");
    });
  }

  function syncSizes() {
    state.sizes.clear();
    const seen = new Set();
    document.querySelectorAll(".btn-tamanho.ativo").forEach((btn) => {
      const s = btn.textContent.trim();
      if (!seen.has(s)) { state.sizes.add(s); seen.add(s); }
    });
  }

  function syncColors() {
    state.colors.clear();
    const seen = new Set();
    document.querySelectorAll(".bolinha.ativo").forEach((dot) => {
      const c = normalize(dot.style.background || dot.style.backgroundColor);
      if (c && !seen.has(c)) { state.colors.add(c); seen.add(c); }
    });
  }

  function mirrorSizeButtons(clickedBtn) {
    const size = clickedBtn.textContent.trim();
    const isActive = clickedBtn.classList.contains("ativo");
    document.querySelectorAll(".btn-tamanho").forEach((btn) => {
      if (btn.textContent.trim() === size) btn.classList.toggle("ativo", isActive);
    });
  }

  function mirrorColorDots(clickedDot) {
    const color = normalize(clickedDot.style.background || clickedDot.style.backgroundColor);
    const isActive = clickedDot.classList.contains("ativo");
    document.querySelectorAll(".bolinha").forEach((dot) => {
      const c = normalize(dot.style.background || dot.style.backgroundColor);
      if (c === color) dot.classList.toggle("ativo", isActive);
    });
  }

  function mirrorCheckboxes(changedCb) {
    const label = changedCb.parentElement.textContent.trim().toLowerCase();
    const isGarimpado = label.includes("garimpado");
    document.querySelectorAll(".grupo-filtro input[type=checkbox]").forEach((cb) => {
      const l = cb.parentElement.textContent.trim().toLowerCase();
      const match = isGarimpado ? l.includes("garimpado") : l.includes("chegou agora");
      if (match) cb.checked = changedCb.checked;
    });
  }

  function clearAll() {
    document.querySelectorAll(".grupo-filtro input[type=checkbox]").forEach((cb) => cb.checked = false);
    document.querySelectorAll(".btn-tamanho").forEach((b) => b.classList.remove("ativo"));
    document.querySelectorAll(".bolinha").forEach((d) => d.classList.remove("ativo"));
    state.conditions.clear();
    state.sizes.clear();
    state.colors.clear();
    applyFilters();
  }

  // Ouvintes dos filtros
  document.querySelectorAll(".grupo-filtro input[type=checkbox]").forEach((cb) => {
    cb.addEventListener("change", () => { mirrorCheckboxes(cb); syncConditions(); applyFilters(); });
  });

  document.querySelectorAll(".btn-tamanho").forEach((btn) => {
    btn.addEventListener("click", () => { btn.classList.toggle("ativo"); mirrorSizeButtons(btn); syncSizes(); applyFilters(); });
  });

  document.querySelectorAll(".bolinha").forEach((dot) => {
    dot.addEventListener("click", () => { dot.classList.toggle("ativo"); mirrorColorDots(dot); syncColors(); applyFilters(); });
  });

  document.querySelectorAll(".btn-limpar").forEach((btn) => {
    btn.addEventListener("click", clearAll);
  });

  // Gaveta Mobile Drawer
  const filterToggle  = document.getElementById("filterToggle");
  const filterDrawer  = document.getElementById("filterDrawer");
  const filterClose   = document.getElementById("filterClose");
  const filterOverlay = document.getElementById("filterOverlay");

  filterToggle ?.addEventListener("click", () => filterDrawer.classList.add("open"));
  filterClose  ?.addEventListener("click", () => filterDrawer.classList.remove("open"));
  filterOverlay?.addEventListener("click", () => filterDrawer.classList.remove("open"));

  // Inicialização do Catálogo
  configurarEventosPaginacao();
  syncConditions();
  syncSizes();
  syncColors();
  applyFilters(); // Roda a primeira renderização e monta a paginação
});