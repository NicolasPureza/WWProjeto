document.addEventListener('DOMContentLoaded', () => {
    
    // 1. VERIFICAÇÃO DE LOGIN: Se não achar os dados de login, joga o usuário para a tela de login
    const usuarioLogadoRaw = localStorage.getItem('usuarioLogado');
    if (!usuarioLogadoRaw) {
        alert('Acesso negado. Por favor, faça login primeiro.');
        // CORREÇÃO AQUI: Mandando para login.html em vez de index.html
        window.location.href = "login.html"; 
        return;
    }

    const usuarioLogado = JSON.parse(usuarioLogadoRaw);
    const passwordForm = document.querySelector('.password-form');
    
    if (passwordForm) {
        passwordForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const currentPassword = document.getElementById('current-password').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            // Puxa o cadastro completo do usuário para validar a senha atual
            const chaveUsuario = `user:${usuarioLogado.email}`;
            const dadosUsuario = JSON.parse(localStorage.getItem(chaveUsuario));

            if (!currentPassword || !newPassword || !confirmPassword) {
                alert('Por favor, preencha todos os campos para alterar sua senha.');
                return;
            }
            
            // Valida se a senha atual digitada bate com a que está salva no banco simulado
            if (dadosUsuario && dadosUsuario.senha !== currentPassword) {
                alert('A senha atual inserida está incorreta.');
                return;
            }
            
            if (newPassword.length < 6) {
                alert('A nova senha deve ter pelo menos 6 caracteres.');
                return;
            }
            
            if (newPassword !== confirmPassword) {
                alert('A nova senha e a confirmação não coincidem.');
                return;
            }
            
            // Atualiza a senha no cadastro do localStorage
            dadosUsuario.senha = newPassword;
            localStorage.setItem(chaveUsuario, JSON.stringify(dadosUsuario));
            
            alert('Senha alterada com sucesso!');
            passwordForm.reset();
        });
    }
});