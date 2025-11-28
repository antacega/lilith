<?php
/**
 * Papi's Nexus Theme Functions
 *
 * This file handles the enqueueing of scripts and styles for the theme.
 *
 * @package PapiNexus
 */

/**
 * Enqueues the main stylesheet and all modular CSS partials.
 *
 * This function registers the primary 'style.css' and iterates through
 * a predefined list of CSS partials (e.g., base, components, hero) to
 * load them as individual stylesheets. This maintains the modular structure
 * on the frontend.
 *
 * @return void
 */
function papi_nexus_enqueue_styles() {

    // Register and Enqueue Main Stylesheet
    wp_enqueue_style( 'papi-nexus-style', get_stylesheet_uri() );

    // Enqueue all other stylesheets from the original project
    $stylesheets = [
        'base' => '_base.css',
        'components' => '_components.css',
        'footer' => '_footer.css',
        'forms' => '_forms.css',
        'header' => '_header.css',
        'hero' => '_hero.css',
        'responsive' => '_responsive.css',
        'sections' => '_sections.css',
        'variables' => '_variables.css'
    ];

    foreach ($stylesheets as $handle => $file) {
        wp_enqueue_style(
            'papi-nexus-' . $handle,
            get_template_directory_uri() . '/' . $file,
            ['papi-nexus-style'], // Dependent on the main stylesheet
            '1.0'
        );
    }
}
add_action( 'wp_enqueue_scripts', 'papi_nexus_enqueue_styles' );

/**
 * Enqueues the main JavaScript file for theme interactivity.
 *
 * Loads 'script.js' in the footer to ensure the DOM is fully loaded before execution.
 * Handles functionality such as smooth scrolling, mobile menu toggling, and form validation.
 *
 * @return void
 */
function papi_nexus_enqueue_scripts() {
    // Enqueue the main javascript file
    wp_enqueue_script(
        'papi-nexus-script',
        get_template_directory_uri() . '/script.js',
        [], // No dependencies
        '1.0',
        true // Load in the footer
    );
}
add_action( 'wp_enqueue_scripts', 'papi_nexus_enqueue_scripts' );

?>
