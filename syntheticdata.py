import random
import csv
import os
from datetime import datetime, timedelta

# Function to generate synthetic data for the smart bin with gradually increasing waste level
def generate_synthetic_data(num_samples, start_date):
    data = []
    current_date = start_date
    waste_level = 0  # Start with an empty bin
    max_waste_level = 100  # Maximum waste level (bin full)
    
    for i in range(num_samples):
        # Simulate gradual increase in waste level
        waste_level += random.uniform(0.1, 1.5)  # Increase the waste level by a small random amount
        if waste_level > max_waste_level:
            waste_level = 0  # Reset waste level once the bin is full
        
        # Calculate Time to Full based on current waste level
        time_to_full = (max_waste_level - waste_level) * 1.2  # Linear relationship (scale factor of 1.2)
        
        # Format the date for each data point (adding time increments)
        timestamp = current_date.strftime('%Y-%m-%d %H:%M:%S')
        
        # Simulate 1 data point per hour, increment the time by 1 hour for each data point
        current_date += timedelta(hours=1)
        
        data.append([timestamp, waste_level, time_to_full])
    
    return data

# Save synthetic data to a CSV file
def save_to_csv(data, filename):
    with open(filename, 'w', newline='') as csvfile:
        csvwriter = csv.writer(csvfile)
        csvwriter.writerow(['Timestamp', 'Waste Level (%)', 'Time to Full (minutes)'])  # Header
        csvwriter.writerows(data)

# Number of synthetic samples to generate
num_samples = 1000

# Start date for the data (e.g., January 1, 2025)
start_date = datetime(2025, 1, 1, 0, 0, 0)  # Starting at midnight

# Generate synthetic data
synthetic_data = generate_synthetic_data(num_samples, start_date)

# Save synthetic data to a CSV file
csv_filename = 'synthetic_bin_data_gradual_waste_increase.csv'
save_to_csv(synthetic_data, csv_filename)

# Print current working directory and list files
print("Current working directory:", os.getcwd())
print("Files in the current directory:", os.listdir())

# Optionally, download the CSV file to your local machine
from google.colab import files
files.download(csv_filename)

