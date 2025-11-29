<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Soluções Avançadas de Tecnologia e Inteligência Artificial. Transforme sua realidade.">
    <title><?php wp_title( '|', true, 'right' ); ?> Jules Tech</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Fira+Code:wght@400&display=swap" rel="stylesheet">
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <header class="main-header">
        <div class="container header-container">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo">
                <i class="fa-solid fa-code-branch"></i> Jules<span class="highlight">Tech</span>
            </a>

            <nav class="main-nav">
                <ul class="nav-links">
                    <li><a href="#about" class="nav-link"><i class="fa-solid fa-user"></i> Sobre</a></li>
                    <li><a href="#services" class="nav-link"><i class="fa-solid fa-layer-group"></i> Soluções</a></li>
                    <li><a href="#vision" class="nav-link"><i class="fa-solid fa-eye"></i> Visão</a></li>
                </ul>
                <a href="mailto:gaiatoleo@gmail.com" class="btn-contact">
                    <i class="fa-solid fa-envelope"></i> Contato
                </a>
            </nav>

            <button class="mobile-menu-toggle" aria-label="Menu">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
    </header>
    <main class="site-content">
