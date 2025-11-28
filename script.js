/**
 * Papi's Nexus - Interactivity Script
 *
 * This script handles the client-side behavior of the Papi's Nexus theme.
 * It is responsible for smooth scrolling, mobile menu toggling, and
 * basic form validation. It initializes when the DOM is fully loaded.
 *
 * @file script.js
 * @author Papi / Lilith MadameHydra
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Papi's Nexus está vivo e aguardando comandos.");

    /**
     * Smooth Scrolling Logic.
     *
     * Intercepts clicks on anchor links starting with '#'.
     * Prevents default jump behavior and smoothly scrolls to the target element.
     */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    /**
     * Mobile Menu Toggle Logic.
     *
     * Toggles the 'active' class on the menu button and navigation menu
     * when the toggle button is clicked. Also closes the menu when a link is clicked.
     */
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    /**
     * Basic Form Validation Logic.
     *
     * Validates the contact form fields (name, email, message) on submit.
     * Prevents submission if fields are empty and alerts the user.
     * If valid, allows the form to submit.
     */
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission

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
                // If everything is valid, submit the form
                console.log('Formulário enviado com sucesso!');
                alert('Mensagem enviada com sucesso!');
                this.submit(); // Actually submit the form
            }
        });
    }

});
