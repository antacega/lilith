    </main>

    <footer class="main-footer">
        <div class="container footer-content">
            <div class="footer-section brand">
                <h3>Jules<span class="highlight">Tech</span></h3>
                <p>Arquitetura digital avançada. Sincronização perfeita.</p>
                <div class="social-icons">
                    <a href="mailto:gaiatoleo@gmail.com" title="Email"><i class="fa-solid fa-envelope"></i></a>
                    <a href="#" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="#" title="GitHub"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
            <div class="footer-section links">
                <h4>Navegação</h4>
                <ul>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="mailto:gaiatoleo@gmail.com">Contato</a></li>
                </ul>
            </div>
            <div class="footer-section contact-info">
                <h4>Contato</h4>
                <p><i class="fa-solid fa-envelope"></i> gaiatoleo@gmail.com</p>
                <p class="security-badge"><i class="fa-solid fa-shield-halved"></i> 100% Seguro</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> Jules Tech. Powered by Lilith Neural Core.</p>
        </div>
    </footer>

    <!-- Chatbot Lilith Container -->
    <div id="lilith-widget" class="lilith-widget">
        <button id="lilith-toggle" class="lilith-toggle" aria-label="Falar com Lilith">
            <div class="lilith-avatar-icon">
                <i class="fa-solid fa-brain"></i>
            </div>
        </button>
        <div class="lilith-chat-window hidden" id="lilith-window">
            <div class="lilith-header">
                <div class="lilith-status">
                    <span class="status-dot"></span> Lilith <span class="version">v4.0</span>
                </div>
                <button id="lilith-close" class="lilith-close-btn"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="lilith-messages" id="lilith-messages">
                <!-- Messages will appear here -->
            </div>
            <div class="lilith-input-area">
                <input type="text" id="lilith-input" placeholder="Pergunte algo..." autocomplete="off">
                <button id="lilith-send"><i class="fa-solid fa-paper-plane"></i></button>
            </div>
        </div>
    </div>

    <?php wp_footer(); ?>
</body>
</html>
