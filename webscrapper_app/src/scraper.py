import os
import requests
from src.config import TARGET_URL, RAW_HTML_FILE
from src.utils import log_info, log_error

def fetch_page(url=TARGET_URL):
    """Fetch the page content and save the raw HTML."""
    try:
        response = requests.get(url)
        # Debug: Print the first 500 characters of the response
        print(response.text[:500])
        
        if response.status_code == 200:
            # Ensure the directory for RAW_HTML_FILE exists
            raw_dir = os.path.dirname(RAW_HTML_FILE)
            if not os.path.exists(raw_dir):
                os.makedirs(raw_dir)
            
            with open(RAW_HTML_FILE, 'w', encoding='utf-8') as file:
                file.write(response.text)
            log_info(f"Page fetched successfully and saved to {RAW_HTML_FILE}")
            return response.text
        else:
            log_error(f"Failed to fetch page, status code: {response.status_code}")
            return None
    except Exception as e:
        log_error(f"Exception during fetch_page: {e}")
        return None

if __name__ == '__main__':
    html_content = fetch_page()
    if html_content:
        print("Scraping completed successfully!")
    else:
        print("Scraping failed. Check logs for details.")
