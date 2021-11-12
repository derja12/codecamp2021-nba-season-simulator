import numpy as np
import pandas as pd
import sqlite3

def initializeTeamData():
    teams = pd.read_csv("../data/teams.csv")
    conn = sqlite3.connect("../data/nba.db")
    cur = conn.cursor()

    cur.execute("""
            CREATE TABLE teams (
                id INTEGER PRIMARY KEY,
                name TEXT,
                city TEXT,
                abbreviation TEXT,
                conference TEXT,
                division TEXT)
            """)

    for i in range(len(teams)):
        cur.execute(
            "INSERT INTO teams (id, name, city, abbreviation) VALUES (?, ?, ?, ?)",
            [int(teams["TEAM_ID"][i]), teams["NICKNAME"][i], teams["CITY"][i], teams["ABBREVIATION"][i]])
    
    cur.execute("SELECT * FROM teams")
    print(cur.fetchall())

    y = input("Commit? [y/n] ")
    if y == "y" or y == "Y":
        conn.commit()

    conn.close()

def updateTeamDivison():
    teams = pd.read_csv("../data/teams.csv")
    conn = sqlite3.connect("../data/nba.db")
    cur = conn.cursor()

    divisions = {
        "1610612737": "Southeast",
        "1610612738": "Atlantic",
        "1610612739": "Central",
        "1610612740": "Southwest",
        "1610612741": "Central",
        "1610612742": "Southwest",
        "1610612743": "Northwest",
        "1610612744": "Pacific",
        "1610612745": "Southwest",
        "1610612746": "Pacific",
        "1610612747": "Pacific",
        "1610612748": "Southeast",
        "1610612749": "Central",
        "1610612750": "Northwest",
        "1610612751": "Atlantic",
        "1610612752": "Atlantic",
        "1610612753": "Southeast",
        "1610612754": "Central",
        "1610612755": "Atlantic",
        "1610612756": "Pacific",
        "1610612757": "Northwest",
        "1610612758": "Pacific",
        "1610612759": "Southwest",
        "1610612760": "Northwest",
        "1610612761": "Atlantic",
        "1610612762": "Northwest",
        "1610612763": "Southwest",
        "1610612764": "Southeast",
        "1610612765": "Central",
        "1610612766": "Southeast", 
    }

    for id in divisions:
        division = divisions[id]
        conference = "East"
        if division == "Northwest" or division == "Pacific" or division == "Southwest":
            conference = "West"

        cur.execute(
            "UPDATE teams SET conference = ?, division = ? WHERE id = ?",
            [conference, division, id])
    
    cur.execute("SELECT * FROM teams")
    print(cur.fetchall())

    y = input("Commit? [y/n] ")
    if y == "y" or y == "Y":
        conn.commit()

    conn.close()

# initializeTeamData()
updateTeamDivison()