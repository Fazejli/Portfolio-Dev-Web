# 🧹 Nettoyage de fichiers clients

Ce script lit plusieurs fichiers texte `.txt` heterogenes, les nettoie et en extrait les contacts clients pour les regrouper dans un fichier CSV exploitable.

## 📁 Structure et Arborescence

- `data/` : dossier contenant les fichiers `.txt` source
- `main.py` : script Python principal
- `clients.csv` : fichier généré automatiquement

data/
├── clients1.txt
├── clients2.txt
├── ...
├── clients.csv
├── main.py
├── README.md

## Exemple de lignes valides:
Harmony Pierce, harmony@exemple.com
Abdoulaye Leclerc   Lec.abdoul@exemple.fr

## ▶️ Utilisation
1. Place tes fichiers `.txt` dans le dossier `data/`
2. Lance le script : "python main.py"
3. Le fichier clients.csv sera créé dans data/

## 🛠️ Technologies
- 'python' : Langage principal
- 'os' : Acces aux fichiers
- 'csv' : Ecriture du fichier final

### 📦 Prérequis
Aucun package externe necessaire, fonctionne avec Python standard.