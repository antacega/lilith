<?php
/*
Plugin Name: JPress Connector
Description: Adds a documentation page for the JPressCore Jython framework in the WP Admin.
Version: 1.0
Author: Jules
*/

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Add menu item to WP Admin
function jpress_add_admin_menu() {
    add_menu_page(
        'JPressCore',           // Page Title
        'JPressCore',           // Menu Title
        'manage_options',       // Capability
        'jpress-connector',     // Menu Slug
        'jpress_render_page',   // Callback function
        'dashicons-rest-api',   // Icon
        100                     // Position
    );
}
add_action('admin_menu', 'jpress_add_admin_menu');

// Render the admin page
function jpress_render_page() {
    ?>
    <div class="wrap">
        <h1>JPressCore Connection Info</h1>
        <p>This site supports automation via <strong>JPressCore</strong>, a Jython-based framework.</p>

        <div class="card">
            <h2>Configuration</h2>
            <p>To connect your Jython framework, update the <code>config.py</code> file in your local <code>jython_framework/src/</code> directory with the following:</p>

            <pre style="background: #f0f0f1; padding: 10px; border: 1px solid #ccc;">
WP_URL = "<?php echo site_url(); ?>"
# Create an Application Password in Users > Profile
            </pre>
        </div>

        <div class="card" style="margin-top: 20px;">
            <h2>REST API Status</h2>
            <p>REST API should be enabled. Endpoint: <code><?php echo rest_url(); ?></code></p>
        </div>
    </div>
    <?php
}
