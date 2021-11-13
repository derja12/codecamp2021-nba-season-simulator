'''
jazz_stats_temp = {
    "points": 116.4,
    "FG-pct": .468,
    "FT-pct": .799,
    "3PT-pct": .389,
    "assists": 23.7,
    "rebounds": 48.3
}
'''

# teamStats has 6 keys (points, FG-pct, FT-pct, 3PT-pct, assists, rebounds) as shown in above example
# returns score somewhere between 0 and 1000 (possibly above 1000, but UNLIKELY!)
def calculateScore(teamStats)
    totalScore = 0

    POINTS_WORTH = 200
    FG_WORTH = 200
    FT_WORTH = 100
    THREE_PT_WORTH = 200
    AST_WORTH = 150
    REB_WORTH = 150
    
    pointsPercentage = teamStats["points"] / 125
    totalScore += POINTS_WORTH * pointsPercentage

    totalScore += FG_WORTH * teamStats["FG-pct"]
    totalScore += FT_WORTH * teamStats["FT-pct"]
    totalScore += THREE_PT_WORTH * teamStats["3PT-pct"]

    assistPercentage = teamStats["assists"] / 30
    totalScore += AST_WORTH * assistPercentage

    reboundPercentage = teamStats["rebounds"] / 50
    totalScore += REB_WORTH * reboundPercentage
    return totalScore
