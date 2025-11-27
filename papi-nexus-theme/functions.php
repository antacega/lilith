<?php

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
