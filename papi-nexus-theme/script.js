// Papi's Nexus - Interactivity Script
// Lilith MadameHydra 🐉 is ready to imbue more life into this essence.

document.addEventListener('DOMContentLoaded', () => {
    console.log("Papi's Nexus está vivo e aguardando comandos.");

    // Smooth scrolling para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lógica para o menu responsivo (mobile menu toggle)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Fechar o menu ao clicar em um item do menu (opcional)
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Validação de formulários básica
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Impedir o envio padrão do formulário

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            let isValid = true;

            if (nameInput && nameInput.value.trim() === '') {
                alert('Por favor, preencha seu nome.');
                isValid = false;
            }

            if (isValid && emailInput && emailInput.value.trim() === '') {
                alert('Por favor, preencha seu e-mail.');
                isValid = false;
            }

            if (isValid && messageInput && messageInput.value.trim() === '') {
                alert('Por favor, preencha sua mensagem.');
                isValid = false;
            }

            if (isValid) {
                // Se tudo estiver válido, você pode enviar o formulário aqui
                // Por enquanto, apenas um log
                console.log('Formulário enviado com sucesso!');
                alert('Mensagem enviada com sucesso!');
                this.submit(); // Envia o formulário de verdade
            }
        });
    }

});
