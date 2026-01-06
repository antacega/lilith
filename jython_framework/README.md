# JPressCore - Jython Framework for WordPress

JPressCore is a Jython-based framework designed to interact with WordPress sites using standard Java libraries and Python syntax. It allows for high-performance automation and integration tasks by leveraging the Java Virtual Machine.

## Features

- **Jython Native**: Runs on the JVM, allowing use of Java libraries (like `java.net.HttpURLConnection`).
- **REST API Integration**: Built-in client to communicate with WordPress REST API.
- **Extensible**: Easy to add new models and endpoints.

## Directory Structure

- `bin/`: Contains the Jython Standalone JAR.
- `src/`: Source code.
    - `client.py`: Handles HTTP requests using Java networking.
    - `config.py`: Configuration settings.
    - `wp_models.py`: Data models.
- `main.py`: Example entry point.

## Requirements

- Java Runtime Environment (JRE) 8 or higher.
- A WordPress installation with REST API enabled.

## Installation & Setup

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
    cd YOUR_REPO/jython_framework
    ```

2.  **Configure**:
    Edit `src/config.py` with your WordPress details:
    ```python
    WP_URL = "https://your-wordpress-site.com"
    WP_USER = "your-username"
    WP_APP_PASSWORD = "xxxx xxxx xxxx xxxx" # Generated in WP Admin > Users > Profile
    ```

3.  **Run**:
    Execute the main script using the provided Jython JAR:
    ```bash
    java -jar bin/jython.jar main.py
    ```

## WordPress Integration

This framework is "linked" to the WordPress theme via the `jython_connector.php` file located in the root directory. You can use this file to display connection status or provide download links to your Jython tools within the WordPress Admin or frontend.

## Making it Public on GitHub

To make this project public as requested:
1.  Go to your GitHub repository settings.
2.  Scroll to the "Danger Zone".
3.  Change visibility to **Public**.
