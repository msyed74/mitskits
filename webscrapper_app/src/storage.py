# src/storage.py

import csv
from src.config import PROCESSED_CSV_FILE
from src.utils import log_info, log_error

def save_to_csv(data, filename=PROCESSED_CSV_FILE):
    """
    Save a list of dictionaries to a CSV file.
    """
    try:
        fieldnames = ['Name', 'Email', 'Details']
        with open(filename, mode='w', newline='', encoding='utf-8') as csv_file:
            writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
            writer.writeheader()
            for item in data:
                writer.writerow(item)
        log_info(f"Data saved successfully to {filename}")
    except Exception as e:
        log_error(f"Error saving data to CSV: {e}")

if __name__ == '__main__':
    # Example usage with sample data
    sample_data = [
        {'Name': 'Prof. John Doe', 'Email': 'john.doe@example.com', 'Details': 'Department of Computer Science'},
        {'Name': 'Prof. Jane Smith', 'Email': 'jane.smith@example.com', 'Details': 'Department of Mathematics'}
    ]
    save_to_csv(sample_data)
