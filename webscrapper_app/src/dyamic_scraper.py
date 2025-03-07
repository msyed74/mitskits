# src/dynamic_scraper.py

from selenium import webdriver
from selenium.webdriver.common.by import By
import csv
import time

# Set up the web driver (ensure chromedriver is in your PATH)
driver = webdriver.Chrome()

# Open the URL (replace with your actual college URL)
driver.get('https://web.mitsgwalior.in/faculty-profiles-cse')

# Allow time for dynamic content to load
time.sleep(3)

# Locate professor elements (adjust selectors as needed)
faculty_cards = driver.find_elements(By.CLASS_NAME, 'faculty-card')

professors = []
for card in faculty_cards:
    name = card.find_element(By.TAG_NAME, 'h2').text if card.find_elements(By.TAG_NAME, 'h2') else 'N/A'
    email_elements = card.find_elements(By.XPATH, ".//a[contains(@href, 'mailto:')]")
    email = email_elements[0].text if email_elements else 'N/A'
    details_elements = card.find_elements(By.CLASS_NAME, 'faculty-details')
    details = details_elements[0].text if details_elements else 'N/A'
    
    professors.append({
        'Name': name,
        'Email': email,
        'Details': details
    })

driver.quit()

# Save data to CSV
with open('../data/processed/professors_dynamic.csv', mode='w', newline='', encoding='utf-8') as csv_file:
    fieldnames = ['Name', 'Email', 'Details']
    writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
    writer.writeheader()
    for prof in professors:
        writer.writerow(prof)

print("Dynamic scraping complete! Data saved to professors_dynamic.csv")
