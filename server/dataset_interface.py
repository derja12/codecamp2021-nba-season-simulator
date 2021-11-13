import numpy as np
import pandas as pd
import sqlite3
import sys

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

def processAccumulator(games, i, accumulator, scalar, team_type):
    opponent_type = "away"
    if team_type == "away":
        opponent_type = "home"

    team = games[f"TEAM_ID_{team_type}"][i]
    ppg = scalar * games[f"PTS_{team_type}"][i]
    oppg = scalar * games[f"PTS_{opponent_type}"][i]
    fg_pct = scalar * games[f"FG_PCT_{team_type}"][i]
    ft_pct = scalar * games[f"FT_PCT_{team_type}"][i]
    fg3_pct = scalar * games[f"FG3_PCT_{team_type}"][i]
    ast = scalar * games[f"AST_{team_type}"][i]
    reb = scalar * games[f"REB_{team_type}"][i]

    if team not in accumulator:
        accumulator[team] = {
            "game_count": scalar,
            "ppg": ppg,
            "oppg": oppg,
            "fg_pct": fg_pct,
            "ft_pct": ft_pct,
            "fg3_pct": fg3_pct,
            "ast": ast,
            "reb": reb,
        }
    else:
        accumulator[team]["game_count"] += scalar
        accumulator[team]["ppg"] += ppg
        accumulator[team]["oppg"] += oppg
        accumulator[team]["fg_pct"] += fg_pct
        accumulator[team]["ft_pct"] += ft_pct
        accumulator[team]["fg3_pct"] += fg3_pct
        accumulator[team]["ast"] += ast
        accumulator[team]["reb"] += reb

def initializeGameData():
    games = pd.read_csv("../data/games.csv")
    conn = sqlite3.connect("../data/nba.db")
    cur = conn.cursor()

    cur.execute("""
            CREATE TABLE stats (
                id INTEGER PRIMARY KEY,
                ppg REAL,
                oppg REAL,
                fg_pct REAL,
                ft_pct REAL,
                fg3_pct REAL,
                ast REAL,
                reb REAL)
            """)

    accumulator = {}
    for i in range(len(games)):
        game_year = int(games["GAME_DATE_EST"][i].split("-")[0])
        if game_year < 2018:
            continue

        scalar = (game_year - 2017) / 4

        processAccumulator(games, i, accumulator, scalar, "home")
        processAccumulator(games, i, accumulator, scalar, "away")

    for id in accumulator:
        t = accumulator[id]["game_count"]
        averaged_stats = [int(id),
                         (accumulator[id]["ppg"] / t),
                         (accumulator[id]["oppg"] / t),
                         (accumulator[id]["fg_pct"] / t),
                         (accumulator[id]["ft_pct"] / t),
                         (accumulator[id]["fg3_pct"] / t),
                         (accumulator[id]["ast"] / t),
                         (accumulator[id]["reb"] / t)]

        cur.execute(
            "INSERT INTO stats (id, ppg, oppg, fg_pct, ft_pct, fg3_pct, ast, reb) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            averaged_stats)

    cur.execute("SELECT * FROM stats")
    print(cur.fetchall())

    y = input("Commit? [y/n] ")
    if y == "y" or y == "Y":
        conn.commit()

    conn.close()

# initializeTeamData()
# updateTeamDivison()
initializeGameData()