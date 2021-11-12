import numpy as np
import psycopg
import pandas as pd

def initializeTeamData():
    df = pd.read_csv("../data/teams.csv")
    conn = psycopg.connect("dbname=test user=postgres")
    cur = conn.cursor()

    cur.execute("""
            CREATE TABLE teams (
                id serial PRIMARY KEY,
                name TEXT,
                city TEXT,
                abbr TEXT)
            """)

    cur.execute(
        "INSERT INTO teams (id, name, city, data) VALUES (%i, %s, %s, %s)",
        (df["TEAM_ID"][i], df["NICKNAME"][i], df["CITY"][i], df["ABBREVIATION"][i]))

    teams = {}
    print(len(df))
    for i in range(len(df)):
        teams[df["TEAM_ID"][i]] = {
            "city": df["CITY"][i],
            "name": df["NICKNAME"][i],
            "abbr": df["ABBREVIATION"][i],
        }
    
    return teams 
        

initializeTeamData()