# src/parser.py

from bs4 import BeautifulSoup

def parse_professors(html_content):
    """
    Parse HTML content and extract professor details.
    Returns a list of dictionaries with keys: Name, Email, Details.
    """
    professors = []
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Example: each professor is inside a div with class 'faculty-card'
    cards = soup.find_all('div', class_='faculty-card')
    for card in cards:
        name_tag = card.find('h2')
        email_tag = card.find('a', href=lambda href: href and 'mailto:' in href)
        details_tag = card.find('p', class_='faculty-details')
        
        name = name_tag.get_text(strip=True) if name_tag else 'N/A'
        email = email_tag.get_text(strip=True) if email_tag else 'N/A'
        details = details_tag.get_text(strip=True) if details_tag else 'N/A'
        
        professors.append({
            'Name': name,
            'Email': email,
            'Details': details
        })
    
    return professors

if __name__ == '__main__':
    # For testing: load the raw HTML from file and parse it.
    try:
        with open('../data/raw/page.html', 'r', encoding='utf-8') as file:
            html_content = file.read()
        professors = parse_professors(html_content)
        for prof in professors:
            print(prof)
    except Exception as e:
        print(f"Error during parsing: {e}")
