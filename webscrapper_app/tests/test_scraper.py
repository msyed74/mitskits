# tests/test_scraper.py

import os
import pytest
from src.scraper import fetch_page
from src.config import RAW_HTML_FILE

def test_fetch_page():
    # Fetch the page and check that content is returned
    html_content = fetch_page()
    assert html_content is not None
    # Check that the raw HTML file exists
    assert os.path.exists(RAW_HTML_FILE)
