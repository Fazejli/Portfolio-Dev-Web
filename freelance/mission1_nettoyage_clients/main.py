import os
import csv

data_dir = "data"
output_file = "data/clients.csv"

all_clients = []
for filename in os.listdir(data_dir):
    if filename.endswith(".txt"):
        file_path = os.path.join(data_dir, filename)
        with open(file_path, "r", encoding="utf-8") as f:
            lines = f.readlines()
        
        for line in lines:
            line = line.strip()
            if not line:
                continue

            if "," in line:
                parts = line.split(',')
            elif "\t" in line:
                parts = line.split('\t')
            else:
                continue

            if len(parts) != 2:
                continue

            name = parts[0].strip()
            email = parts[1].strip()
            all_clients.append((name, email))

with open(output_file, "w", encoding="utf-8", newline='') as f:
    writer = csv.writer(f)
    writer.writerow(["Name", "Email"])
    writer.writerows(all_clients)

print(f"{len(all_clients)} clients enregistres dans {output_file}")