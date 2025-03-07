# tests/test_parser.py

from src.parser import parse_professors

def test_parse_professors():
    # Sample HTML content to test parsing
    sample_html = '''
    <html>
        <body>
            <div class="faculty-card">
                <h2>Prof. Alice</h2>
                <a href="mailto:alice@example.com">alice@example.com</a>
                <p class="faculty-details">Computer Science</p>
            </div>
            <div class="faculty-card">
                <h2>Prof. Bob</h2>
                <a href="mailto:bob@example.com">bob@example.com</a>
                <p class="faculty-details">Mathematics</p>
            </div>
        </body>
    </html>
    '''
    professors = parse_professors(sample_html)
    assert len(professors) == 2
    assert professors[0]['Name'] == 'Prof. Alice'
    assert professors[0]['Email'] == 'alice@example.com'
    assert professors[0]['Details'] == 'Computer Science'
