document.addEventListener('DOMContentLoaded', () => {
    
    // 1. VERIFICAÇÃO DE SESSÃO: Descobre quem é o usuário logado
    const usuarioLogadoRaw = localStorage.getItem('usuarioLogado');
    if (!usuarioLogadoRaw) {
        alert('Acesso negado. Por favor, faça login primeiro.');
        window.location.href = "login.html";
        return;
    }

    const usuarioLogado = JSON.parse(usuarioLogadoRaw);
    const chaveUsuarioCompleto = `user:${usuarioLogado.email}`;

    // Captura os elementos do formulário de forma direta e certeira pelos IDs
    const inputNome = document.getElementById('nome');
    const inputSobrenome = document.getElementById('sobrenome');
    const inputCpf = document.getElementById('cpf');
    const inputNascimento = document.getElementById('nascimento');
    const inputEmail = document.getElementById('email');
    const inputTelefone = document.getElementById('telefone');
    
    const formPerfil = document.querySelector('.profile-form');
    // CORREÇÃO: Capturando o botão direto pelo ID novo que colocamos no HTML
    const btnSair = document.getElementById('btn-sair'); 

    // 2. CARREGAR DADOS: Limpa o HTML estático e injeta os dados reais do usuário logado
    function carregarDadosPerfil() {
        const dadosUsuario = JSON.parse(localStorage.getItem(chaveUsuarioCompleto)) || {};

        // Força os campos a exibirem os dados do LocalStorage. Se não existirem (conta nova), ficam vazios ("")
        if (inputNome) inputNome.value = dadosUsuario.nome || "";
        if (inputSobrenome) inputSobrenome.value = dadosUsuario.sobrenome || "";
        if (inputCpf) inputCpf.value = dadosUsuario.cpf || "";
        if (inputNascimento) inputNascimento.value = dadosUsuario.nascimento || "";
        
        // Garante que o e-mail exibido seja SEMPRE o e-mail que acabou de fazer login
        if (inputEmail) {
            inputEmail.value = usuarioLogado.email;
            inputEmail.disabled = true; // Segurança: impede alterar o ID da conta
        }
        
        if (inputTelefone) inputTelefone.value = dadosUsuario.telefone || "";

        // Carrega o gênero correspondente
        if (dadosUsuario.genero) {
            const radio = document.querySelector(`input[name="genero"][value="${dadosUsuario.genero}"]`);
            if (radio) radio.checked = true;
        } else {
            // Conta nova: desmarca opções antigas do HTML
            document.querySelectorAll('input[name="genero"]').forEach(radio => radio.checked = false);
        }
    }

    // 3. SALVAR ALTERAÇÕES: Atualiza os dados cadastrais da conta logada
    if (formPerfil) {
        formPerfil.addEventListener('submit', (e) => {
            e.preventDefault();

            // Puxa o objeto existente para preservar a senha criada no cadastro
            const dadosAtuais = JSON.parse(localStorage.getItem(chaveUsuarioCompleto)) || {};

            dadosAtuais.nome = inputNome ? inputNome.value.trim() : "";
            dadosAtuais.sobrenome = inputSobrenome ? inputSobrenome.value.trim() : "";
            dadosAtuais.cpf = inputCpf ? inputCpf.value.trim() : "";
            dadosAtuais.nascimento = inputNascimento ? inputNascimento.value : "";
            dadosAtuais.email = usuarioLogado.email; 
            dadosAtuais.telefone = inputTelefone ? inputTelefone.value.trim() : "";

            const generoSelecionado = document.querySelector('input[name="genero"]:checked');
            dadosAtuais.genero = generoSelecionado ? generoSelecionado.value : "";

            localStorage.setItem(chaveUsuarioCompleto, JSON.stringify(dadosAtuais));
            alert('Alterações salvas com sucesso no seu perfil WalkWord!');
            
            // Recarrega para garantir a consistência visual
            carregarDadosPerfil();
        });
    }

    // 4. BOTÃO SAIR DA CONTA (LOGOUT)
    if (btnSair) {
        btnSair.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (confirm('Tem certeza que deseja sair da sua conta?')) {
                // Limpa o token de sessão do usuário atual
                localStorage.removeItem('usuarioLogado');
                alert('Você saiu da sua conta.');
                // Manda de volta para a tela de login
                window.location.href = "login.html";
            }
        });
    }

    // ==========================================
    // VALIDAÇÕES E MÁSCARAS EM TEMPO REAL
    // ==========================================

    // Máscara de CPF (000.000.000-00)
    if (inputCpf) {
        inputCpf.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ""); // Remove tudo o que não for número
            
            if (value.length > 11) value = value.slice(0, 11); // Garante o limite de 11 dígitos numéricos

            // Aplica a formatação dinamicamente
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            
            e.target.value = value;
        });
    }

    // Máscara de Telefone ((XX) XXXXX-XXXX)
    if (inputTelefone) {
        inputTelefone.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ""); // Remove tudo o que não for número
            
            if (value.length > 11) value = value.slice(0, 11); // Garante o limite de 11 dígitos numéricos (DDD + 9 números)

            // Aplica a formatação de telefone celular brasileiro
            value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
            value = value.replace(/(\d{5})(\d)/, "$1-$2");
            
            e.target.value = value;
        });
    }

    // Bloqueio de números nos campos de Nome e Sobrenome enquanto digita
    [inputNome, inputSobrenome].forEach(input => {
        if (input) {
            input.addEventListener('input', (e) => {
                // Remove qualquer número ou caractere especial inválido imediatamente
                e.target.value = e.target.value.replace(/[0-9!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?~`\-]/g, "");
            });
        }
    }); 

    // Inicializa a tela limpando o lixo estático e carregando o usuário da sessão
    carregarDadosPerfil();
});