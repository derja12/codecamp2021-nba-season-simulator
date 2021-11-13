import sqlite3

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

class nbaDB:
    def __init__(self):
        self.connection = sqlite3.connect("../data/nba.db")
        self.connection.row_factory = dict_factory
        self.cursor = self.connection.cursor()

    def getTeams(self):
        self.cursor.execute("SELECT * FROM teams")
        return self.cursor.fetchall()

    def getStats(self):
        self.cursor.execute("SELECT * FROM stats")
        return self.cursor.fetchall()

    def getTeam(self, id):
        self.cursor.execute("SELECT * FROM teams WHERE id = ?", [id])
        return self.cursor.fetchone()

    def getStat(self, id):
        self.cursor.execute("SELECT * FROM stats WHERE id = ?", [id])
        return self.cursor.fetchone()
