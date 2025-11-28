# Papi's Nexus WordPress Theme

## Description
Papi's Nexus is a custom WordPress theme designed for a personal brand portfolio. It features a professional "LinkedIn-style" layout with a "Navy Blue" tech aesthetic. The theme integrates specific functionality for showcasing services such as Digital Presence, System Optimization, and Prompt Engineering.

Key features include:
- **Responsive Design**: Mobile-friendly navigation and layout.
- **Modular CSS**: Styles are organized into partials for better maintainability.
- **Interactivity**: Smooth scrolling, mobile menu toggling, and client-side form validation.
- **Lilith Integration**: The theme is designed to work alongside the "Lilith" chatbot persona.

## Installation

1.  **Download**: Download the theme folder.
2.  **Upload**: Upload the entire `papi-nexus` folder to your WordPress installation's theme directory: `/wp-content/themes/`.
3.  **Activate**: Log in to your WordPress Dashboard, navigate to **Appearance > Themes**, and activate "Papi's Nexus".

## Usage

Once activated, the theme provides the structure for your site.
- **Menus**: Use the WordPress Customizer or Menus settings to configure the navigation links.
- **Content**: The homepage content is currently hardcoded in `index.php` but can be adapted to use WordPress pages and posts.

## File Structure

-   `style.css`: Main stylesheet and Theme definition.
-   `functions.php`: Theme setup, enqueuing of scripts and styles.
-   `index.php`: Main template file.
-   `header.php` / `footer.php`: Global header and footer templates.
-   `script.js`: Handles frontend interactivity (menus, scrolling, forms).
-   `_*.css`: CSS partials for specific sections (base, components, hero, etc.).

## Development

To make changes:
1.  **CSS**: Edit the partials in the root directory. The `style.css` file imports them.
2.  **JS**: Modify `script.js` for frontend behavior.
3.  **PHP**: Update template files (`index.php`, etc.) for HTML structure changes.

## License
[Proprietary / Custom]
