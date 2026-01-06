import sys
import os

# Add src to path
sys.path.append(os.path.join(os.path.dirname(__file__), 'src'))

import config
from client import WPClient
from wp_models import parse_posts

def main():
    print("========================================")
    print("      JPressCore - Jython Framework     ")
    print("========================================")

    # Initialize Client
    print("\n[+] Initializing WordPress Client...")
    client = WPClient(config.WP_URL, config.WP_USER, config.WP_APP_PASSWORD)

    # Example: Fetch Posts
    print("[+] Fetching latest posts from %s..." % config.WP_URL)

    try:
        posts_data = client.get_posts()
        if posts_data:
            posts = parse_posts(posts_data)
            print("[+] Found %d posts:" % len(posts))
            for p in posts:
                print("    - [%s] %s" % (p.id, p.title))
        else:
            print("[-] No posts found or connection failed.")
            print("    (Note: If connection failed, check src/config.py and ensure WP is running)")

    except Exception as e:
        print("[-] An error occurred: " + str(e))
        print("    (This is expected if there is no real WP site at localhost:8000)")

if __name__ == "__main__":
    main()
