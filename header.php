<?php
/**
 * The header for the theme.
 *
 * This is the template that displays all of the <head> section and everything up until <main>.
 *
 * @package PapiNexus
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title( '|', true, 'right' ); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <header>
        <nav aria-label="Navegação Principal">
            <div class="container">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo">Papi 🐉</a>
                <button class="menu-toggle" aria-label="Abrir menu de navegação">
                    <span class="hamburger"></span>
                </button>
                <div class="nav-menu">
                    <?php
                    // Placeholder for a dynamic WordPress menu. 
                    // For now, we'll keep the static links and update them to be root-relative.
                    ?>
                    <ul>
                        <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Início</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/portfolio' ) ); ?>">Portfólio</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/course' ) ); ?>">Curso IA</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/guides' ) ); ?>">Recursos</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/contact' ) ); ?>">Contato</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main> <?php // <!-- main tag is opened here and will be closed in footer.php --> ?>
