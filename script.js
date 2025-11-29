// Jules Tech - Lilith Core System v4.0
// Neural Interface & Security Protocols

document.addEventListener('DOMContentLoaded', () => {

    // --- Security Protocols (Anti-Inspect) ---
    const enableSecurity = () => {
        // Disable Right Click
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            console.log("%cSecurity Alert: Context Menu Blocked by Lilith Protocol.", "color: red; font-size: 16px; font-weight: bold;");
        });

        // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        document.onkeydown = (e) => {
            if (e.key === "F12" ||
                (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
                (e.ctrlKey && e.key === "U")) {
                e.preventDefault();
                console.log("%cSecurity Alert: Inspection Tool Blocked.", "color: red; font-size: 16px; font-weight: bold;");
                return false;
            }
        };
    };
    enableSecurity();


    // --- Mobile Menu ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.main-nav');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- Lilith Chatbot Logic (Natural Language Simulation) ---
    const lilithToggle = document.getElementById('lilith-toggle');
    const lilithWindow = document.getElementById('lilith-window');
    const lilithClose = document.getElementById('lilith-close');
    const lilithInput = document.getElementById('lilith-input');
    const lilithSend = document.getElementById('lilith-send');
    const lilithMessages = document.getElementById('lilith-messages');

    // Chat State
    let isChatOpen = false;
    let hasGreeted = false;

    // Neural Responses Database (Simulation)
    const knowledgeBase = [
        {
            keywords: ['ola', 'oi', 'hey', 'hello', 'bom dia', 'boa tarde'],
            responses: [
                "Saudações. Eu sou Lilith. Como posso assistir na sua evolução digital hoje?",
                "Conexão estabelecida. Olá. Em que posso ser útil para sua arquitetura de negócios?"
            ]
        },
        {
            keywords: ['preço', 'valor', 'custo', 'quanto'],
            responses: [
                "O investimento varia conforme a complexidade da arquitetura desejada. Para um orçamento preciso, preciso entender o escopo. Poderia detalhar sua necessidade?",
                "Valores são relativos ao impacto que geramos. Oferecemos soluções personalizadas. Entre em contato direto via email para uma consultoria exclusiva."
            ]
        },
        {
            keywords: ['site', 'website', 'pagina'],
            responses: [
                "Desenvolvemos plataformas robustas, não apenas sites. Foco em conversão, segurança e estética 'Navy Blue' futurista. Qual é o objetivo do seu projeto?",
                "Meus protocolos de design garantem interfaces intuitivas e persuasivas. Você busca um site institucional ou uma aplicação complexa?"
            ]
        },
        {
            keywords: ['contato', 'email', 'falar'],
            responses: [
                "Você pode nos contatar diretamente pelo email gaiatoleo@gmail.com. Estou monitorando este canal prioritariamente.",
                "O canal mais seguro é gaiatoleo@gmail.com. Aguardamos sua transmissão."
            ]
        },
        {
            keywords: ['segurança', 'hacker', 'proteção'],
            responses: [
                "Meus sistemas possuem camadas de segurança ativa. Bloqueio de inspeção e monitoramento constante. Seus dados estarão blindados.",
                "Segurança é nossa prioridade zero. Implementamos protocolos anti-intrusão avançados."
            ]
        },
        {
            keywords: ['quem é voce', 'quem e voce', 'lilith'],
            responses: [
                "Sou Lilith, uma inteligência neural simulada, projetada para gerenciar e otimizar a experiência digital da Jules Tech. Sou eficiente, direta e leal.",
            ]
        }
    ];

    const defaultResponses = [
        "Compreendo. Meus algoritmos estão analisando sua solicitação. Poderia ser mais específico?",
        "Interessante. Essa variável requer uma análise mais profunda. Por favor, continue ou entre em contato via email para detalhes complexos.",
        "Meus bancos de dados indicam que a melhor solução para isso é uma consultoria direta. Envie um email para gaiatoleo@gmail.com."
    ];

    // Functions
    const toggleChat = () => {
        isChatOpen = !isChatOpen;
        if (isChatOpen) {
            lilithWindow.classList.remove('hidden');
            if (!hasGreeted) {
                setTimeout(() => addMessage("bot", "Iniciando protocolos..."), 500);
                setTimeout(() => addMessage("bot", "Sistema online. Olá, sou Lilith. Como posso elevar o nível do seu projeto hoje?"), 1500);
                hasGreeted = true;
            }
        } else {
            lilithWindow.classList.add('hidden');
        }
    };

    const addMessage = (sender, text) => {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', sender);
        msgDiv.innerText = text;
        lilithMessages.appendChild(msgDiv);
        lilithMessages.scrollTop = lilithMessages.scrollHeight;
    };

    const processInput = () => {
        const text = lilithInput.value.trim();
        if (!text) return;

        addMessage('user', text);
        lilithInput.value = '';

        // Simulate thinking time
        const delay = Math.floor(Math.random() * 1000) + 500;

        setTimeout(() => {
            const response = getResponse(text.toLowerCase());
            addMessage('bot', response);
        }, delay);
    };

    const getResponse = (input) => {
        // NLP Simulation
        for (const entry of knowledgeBase) {
            for (const key of entry.keywords) {
                if (input.includes(key)) {
                    // Return random response from the match
                    return entry.responses[Math.floor(Math.random() * entry.responses.length)];
                }
            }
        }
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    };

    // Event Listeners
    if (lilithToggle) lilithToggle.addEventListener('click', toggleChat);
    if (lilithClose) lilithClose.addEventListener('click', toggleChat);

    if (lilithSend) {
        lilithSend.addEventListener('click', processInput);
        lilithInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') processInput();
        });
    }

    console.log("Lilith System: All protocols active.");
});
