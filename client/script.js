SCHEDULE_COUNTS = {}
SCHEDULE = []
SCHEDULE_TEAMS = {}

OPENED_TEAMS = {}

getTeamInfo();

gameTeams = {
    "warriors": {
        "overallRating": 550
    },
    "suns": {
        "stats": 200
    },
    "jazz": {
        "stats": 700
    },
    "mavericks": {
        "stats": 300
    },
    "nuggets": {
        "stats": 475
    },
    "clippers": {
        "stats": 340
    },
    "grizzlies": {
        "stats": 180
    },
    "kings": {
        "stats": 180
    },
    "trailblazers": {
        "stats": 180
    },
    "thunder": {
        "stats": 180
    },
    "spurs": {
        "stats": 180
    },
    "timberwolves": {
        "stats": 180
    },
    "rockets": {
        "stats": 180
    },
    "pelicans": {
        "stats": 180
    },
    "wizards": {
        "stats": 180
    },
    "bulls": {
        "stats": 180
    },
    "nets": {
        "stats": 180
    },
    "76ers": {
        "stats": 180
    },
    "cavaliers": {
        "stats": 180
    },
    "heat": {
        "stats": 180
    },
    "raptors": {
        "stats": 180
    },
    "bucks": {
        "stats": 180
    },
    "hornets": {
        "stats": 180
    },
    "celtics": {
        "stats": 180
    },
    "pacers": {
        "stats": 180
    },
    "hawks": {
        "stats": 180
    },
    "magic": {
        "stats": 180
    },
    "pistons": {
        "stats": 180
    },
    "knicks": {
        "stats": 180
    },
    "lakers": {
        "stats": 180
    }
}

function addWesternTeams(teams) {
    var pacificDiv = document.querySelector("#pacific")
    var northwestDiv = document.querySelector("#northwest")
    var southwestDiv = document.querySelector("#southwest")

    teams.forEach(team => {
        var teamDiv = document.createElement("div")
    
        teamDiv.id = team["name"].toLowerCase();
        teamDiv.classList.add('team-div');
        teamDiv.innerHTML = team["city"] + " " + team["name"];
        teamDiv.onclick = function () {teamStats(teamDiv)};
        OPENED_TEAMS[team["name"]] = false;
        if (team["division"] == "Pacific") {
            pacificDiv.appendChild(teamDiv);
        } else if (team["division"] == "Northwest") {
            northwestDiv.appendChild(teamDiv);
        } else if (team["division"] == "Southwest") {
            southwestDiv.appendChild(teamDiv);
        }
    });
}

/*
[
    {
        "id": 1610612754,
        "name": "Hawks",
        "city": "Atlanta",
        "abbreviation": "ATL",
        "conference": "East",
        "division": "Southeast",
    },
    ...
]
*/

function addEasternTeams(teams) {
    var atlanticDiv = document.querySelector("#atlantic")
    var centralDiv = document.querySelector("#central")
    var southeastDiv = document.querySelector("#southeast")

    teams.forEach(team => {
        var teamDiv = document.createElement("div")
    
        teamDiv.id = team["name"].toLowerCase();
        teamDiv.classList.add('team-div');
        teamDiv.innerHTML = team["city"] + " " + team["name"];
        teamDiv.onclick = function () {teamStats(teamDiv)};
        OPENED_TEAMS[team["name"].toLowerCase()] = false;
        if (team["division"] == "Southeast") {
            southeastDiv.appendChild(teamDiv);
        } else if (team["division"] == "Central") {
            centralDiv.appendChild(teamDiv);
        } else if (team["division"] == "Atlantic") {
            atlanticDiv.appendChild(teamDiv);
        }
    });
}
    
function teamStats(team) {
    console.log("Team Stats clicked")
    
    if (OPENED_TEAMS[team.id] == false)
    {
        var img = document.createElement("img")
        img.id = "logo"
        img.classList.add("logos")
        img.src = "../images/" + team.id + ".png"
        var teamPointsGiven = document.createElement('p')
        var teamPTSGivenInput = document.createElement('input')
        teamPTSGivenInput.classList.add('statInputs')
        var teamFieldGoal = document.createElement('p')
        var teamFGInput = document.createElement('input')
        teamFGInput.classList.add('statInputs')
        var teamFreeThrow = document.createElement('p')
        var teamFTInput = document.createElement('input')
        teamFTInput.classList.add('statInputs')
        var teamPtsFor = document.createElement('p')
        var teamPtsForInput = document.createElement('input')
        teamPtsForInput.classList.add('statInputs')
        var team3point = document.createElement('p')
        var team3PTInput = document.createElement('input')
        team3PTInput.classList.add('statInputs')
        var teamAssists = document.createElement('p')
        var teamASTInput = document.createElement('input')
        teamASTInput.classList.add('statInputs')
        var teamRebounds = document.createElement('p')
        var teamRebInput = document.createElement('input')
        teamRebInput.classList.add('statInputs')
        teamPointsGiven.id = "teamPPGA"
        teamFieldGoal.id = "teamFieldGoal"
        teamFreeThrow.id = "teamFreeThrow"
        teamPtsFor.id = "teamPTSfor"
        team3point.id = "team3point"
        teamAssists.id = "teamAssists"
        teamRebounds.id = "teamRebound"
        teamPTSGivenInput.id = "PTSGinput"
        teamFGInput.id = "FGinput"
        teamFTInput.id = "FTinput"
        teamPtsForInput.id = "PTSFinput"
        team3PTInput.id = "PT3input"
        teamASTInput.id = "ASTinput"
        teamRebInput.id = "REBinput"
        teamPointsGiven.innerHTML = "Points Against:" 
        teamFieldGoal.innerHTML = "FG %:"
        teamFreeThrow.innerHTML = "FT %:"
        teamPtsFor.innerHTML = "Points For:"
        team3point.innerHTML = "3-Pt %:"
        teamAssists.innerHTML = "Assists:"
        teamRebounds.innerHTML = "Rebounds:"
        team.appendChild(img)
        team.appendChild(teamPointsGiven)
        team.appendChild(teamPTSGivenInput)
        team.appendChild(teamFreeThrow)
        team.appendChild(teamFTInput)
        team.appendChild(teamPtsFor)
        team.appendChild(teamPtsForInput)
        team.appendChild(teamAssists)
        team.appendChild(teamASTInput)
        team.appendChild(teamRebounds)
        team.appendChild(teamRebInput)
        team.appendChild(team3point)
        team.appendChild(team3PTInput)
        team.appendChild(teamFieldGoal)
        team.appendChild(teamFGInput)

        OPENED_TEAMS[team.id.toLowerCase()] = true;
    }
    else if (OPENED_TEAMS[team.id.toLowerCase()] == true)
    {
        document.querySelector("#teamPPGA").remove()
        document.querySelector("#teamFieldGoal").remove()
        document.querySelector("#teamFreeThrow").remove()
        document.querySelector("#teamPTSfor").remove()
        document.querySelector("#team3point").remove()
        document.querySelector("#teamAssists").remove()
        document.querySelector("#teamRebound").remove()
        document.querySelector("#PTSGinput").remove()
        document.querySelector("#FGinput").remove()
        document.querySelector("#FTinput").remove()
        document.querySelector("#PTSFinput").remove()
        document.querySelector("#PT3input").remove()
        document.querySelector("#ASTinput").remove()
        document.querySelector("#REBinput").remove()
        document.querySelector("#logo").remove()

        OPENED_TEAMS[team.id.toLowerCase()] = false;

    }
}

var simulateButton = document.querySelector("#simulate")
simulateButton.onclick = simulateSeason;

function simulateSeason() 
{
    var championDiv = document.createElement('div')
    var standingsDiv = document.createElement('div')
    var playoffDiv = document.createElement('div')
    championDiv.id = "champion"
    standingsDiv.id = "standings"
    playoffDiv.id = "playoffs"
    document.querySelector("body").appendChild(championDiv)
    championDiv.appendChild(standingsDiv)
    championDiv.appendChild(playoffDiv)

    var westDiv = document.createElement('div')
    var eastDiv = document.createElement('div')
    //var overallDiv = document.createElement('div')
    westDiv.id = "westStandings"
    westDiv.innerHTML = "WESTERN STANDINGS"
    eastDiv.id = "eastStandings"
    eastDiv.innerHTML = "EASTERN STANDINGS"
    //overallDiv.id = "overallStandings"
    //overallDiv.innerHTML = "LEAGUE STANDINGS"
    standingsDiv.appendChild(westDiv)
    standingsDiv.appendChild(eastDiv)
    //standingsDiv.appendChild(overallDiv)

    var east1Div = document.createElement("div")
    var west1Div = document.createElement("div")
    var east2Div = document.createElement("div")
    var west2Div = document.createElement("div")
    var east3Div = document.createElement("div")
    var west3Div = document.createElement("div")
    var champDiv = document.createElement("div")
    east1Div.id = "east1"   
    west1Div.id = "west1"
    east2Div.id = "east2"
    west2Div.id = "west2"
    east3Div.id = "east3"
    west3Div.id = "west3"
    champDiv.id = "final"
    playoffDiv.appendChild(west1Div)
    playoffDiv.appendChild(west2Div)
    playoffDiv.appendChild(west3Div)
    playoffDiv.appendChild(champDiv)
    playoffDiv.appendChild(east3Div)
    playoffDiv.appendChild(east2Div) 
    playoffDiv.appendChild(east1Div)

    var eastPos1 = document.createElement("div")
    var eastPos2 = document.createElement("div")
    var eastPos3 = document.createElement("div")
    var eastPos4 = document.createElement("div")
    var eastPos5 = document.createElement("div")
    var eastPos6 = document.createElement("div")
    var eastPos7 = document.createElement("div")
    var eastPos8 = document.createElement("div")
    var westPos1 = document.createElement("div")
    var westPos2 = document.createElement("div")
    var westPos3 = document.createElement("div")
    var westPos4 = document.createElement("div")
    var westPos5 = document.createElement("div")
    var westPos6 = document.createElement("div")
    var westPos7 = document.createElement("div")
    var westPos8 = document.createElement("div")
    eastPos1.id = "eastPos1"
    eastPos1.innerHTML = " - 1"
    eastPos2.id = "eastPos2"
    eastPos2.innerHTML = " - 2"
    eastPos3.id = "eastPos3"
    eastPos3.innerHTML = " - 3"
    eastPos4.id = "eastPos4"
    eastPos4.innerHTML = " - 4"
    eastPos5.id = "eastPos5"
    eastPos5.innerHTML = " - 5"
    eastPos6.id = "eastPos6"
    eastPos6.innerHTML = " - 6"
    eastPos7.id = "eastPos7"
    eastPos7.innerHTML = " - 7"
    eastPos8.id = "eastPos8"
    eastPos8.innerHTML = " - 8"
    westPos1.id = "westPos1"
    westPos1.innerHTML = "1 - "
    westPos2.id = "westPos2"
    westPos2.innerHTML = "2 - "
    westPos3.id = "westPos3"
    westPos3.innerHTML = "3 - "
    westPos4.id = "westPos4"
    westPos4.innerHTML = "4 - "
    westPos5.id = "westPos5"
    westPos5.innerHTML = "5 - "
    westPos6.id = "westPos6"
    westPos6.innerHTML = "6 - "
    westPos7.id = "westPos7"
    westPos7.innerHTML = "7 - "
    westPos8.id = "westPos8"
    westPos8.innerHTML = "8 - "
    east1Div.appendChild(eastPos1)
    east1Div.appendChild(eastPos8)
    east1Div.appendChild(eastPos5)
    east1Div.appendChild(eastPos6)
    east1Div.appendChild(eastPos3)
    east1Div.appendChild(eastPos4)
    east1Div.appendChild(eastPos7)
    east1Div.appendChild(eastPos2)
    west1Div.appendChild(westPos1)
    west1Div.appendChild(westPos8)
    west1Div.appendChild(westPos5)
    west1Div.appendChild(westPos6)
    west1Div.appendChild(westPos3)
    west1Div.appendChild(westPos4)
    west1Div.appendChild(westPos7)
    west1Div.appendChild(westPos2)

    var eastPos21 = document.createElement('div')
    var eastPos22 = document.createElement('div')
    var eastPos23 = document.createElement('div')
    var eastPos24 = document.createElement('div')
    var westPos21 = document.createElement('div')
    var westPos22 = document.createElement('div')
    var westPos23 = document.createElement('div')
    var westPos24 = document.createElement('div')
    eastPos21.id = "eastPost21"
    eastPos21.innerHTML = " - 1"
    eastPos22.id = "eastPost22"
    eastPos22.innerHTML = " - 2"
    eastPos23.id = "eastPost23"
    eastPos23.innerHTML = " - 3"
    eastPos24.id = "eastPost24"
    eastPos24.innerHTML = " - 4"
    westPos21.id = "westPost21"
    westPos21.innerHTML = "1 - "
    westPos22.id = "westPost22"
    westPos22.innerHTML = "2 - "
    westPos23.id = "westPost23"
    westPos23.innerHTML = "3 - "
    westPos24.id = "westPost24"
    westPos24.innerHTML = "4 - "
    east2Div.appendChild(eastPos21)
    east2Div.appendChild(eastPos24)
    east2Div.appendChild(eastPos22)
    east2Div.appendChild(eastPos23)
    west2Div.appendChild(westPos21)
    west2Div.appendChild(westPos24)
    west2Div.appendChild(westPos22)
    west2Div.appendChild(westPos23)

    var eastPos31 = document.createElement('div')
    var eastPos32 = document.createElement('div')
    var westPos31 = document.createElement('div')
    var westPos32 = document.createElement('div')
    eastPos31.id = "eastPost31"
    eastPos31.innerHTML = " - 1"
    eastPos32.id = "eastPost32"
    eastPos32.innerHTML = " - 2"
    westPos31.id = "westPost31"
    westPos31.innerHTML = "1 - "
    westPos32.id = "westPost32"
    westPos32.innerHTML = "2 - "
    east3Div.appendChild(eastPos31)
    east3Div.appendChild(eastPos32)
    west3Div.appendChild(westPos31)
    west3Div.appendChild(westPos32)

    var eastPosF1 = document.createElement('div')
    var westPosF1 = document.createElement('div')
    eastPosF1.id = "eastPostF2"
    eastPosF1.innerHTML = " - 1"
    westPosF1.id = "westPostF1"
    westPosF1.innerHTML = "1 - "
    champDiv.appendChild(eastPosF1)
    champDiv.appendChild(westPosF1)
    




    for (i = 0; i < SCHEDULE.length; i++) {
        team1 = SCHEDULE[i].split("-")[0]
        team2 = SCHEDULE[i].split("-")[1]
        console.log(team1, "vs", team2);
}


    /*
    PROCESS:
    1. create list of games to calculate

    
    */

}

// points, field-goal-percentage, free-throw-percentage, 3-point-percentage, assists, rebounds
/*

weight: 
    points: 20%
    field-goal-percentage: 20%
    free-throw-percentage: 10%
    3-point-percentage: 20%
    assists: 15%
    rebounds: 15%
*/

function calculateOverallRating(teams) {
    teams.forEach(team => {
        total = 0;
        total += team["ppg"] * Math.log(team["ppg"]);
        total -= 0.75*team["oppg"] * Math.log(team["oppg"]);
        total += 50 * team["fg_pct"];
        total += 10 * team["ft_pct"];
        total += 30 * team["fg3_pct"];
        total += 0.8125 * team["ast"];
        total += 0.35 * team["reb"];
        total *= 3.333
        console.log(total);
    });
}

// getTeamStats();

function calculateGame(leftTeamID, rightTeamID) {
    var total = gameTeams[leftTeamID]["stats"] + gameTeams[rightTeamID]["stats"];
    var onePercent = total / 100;
    var percentThresh = gameTeams[rightTeamID]["stats"] / onePercent;
    var winPercentPoint = Math.floor(Math.random() * 100);
    if (winPercentPoint < 100 - percentThresh) {
        teamWon = leftTeamID;
    } else {
        teamWon = rightTeamID;
    }
    return teamWon;
}

/*

functions:

onDropDownClicked():
    - extends a div beneath the team label
    - fills the div with the team information
    - closes an already opened div

onSimulateButtonClicked():
    - 
*/

function createSchedule(allTeams) {
    allTeams.forEach(team => {
        scheduleObject = {
            "name" : team["name"].toLowerCase(),
            "conferenceDeciders" : { },
            "conferenceGames" : { },
            "divisionGames" : { },
            "otherConferenceGames" : { },
            "conferenceCount": { },
            "division" : team["division"].toLowerCase(),
            "conference" : team["conference"].toLowerCase()
        }

        if (team["conference"] == "East") {
            if (team["division"] != "Southeast") {
                scheduleObject["conferenceCount"]["southeast"] = 0;
            }
            if (team["division"] != "Atlantic") {
                scheduleObject["conferenceCount"]["atlantic"] = 0;
            }
            if (team["division"] != "Central") {
                scheduleObject["conferenceCount"]["central"] = 0;
            }
        } else {
            if (team["division"] != "Northwest") {
                scheduleObject["conferenceCount"]["northwest"] = 0;
            }
            if (team["division"] != "Pacific") {
                scheduleObject["conferenceCount"]["pacific"] = 0;
            }
            if (team["division"] != "Southwest") {
                scheduleObject["conferenceCount"]["southwest"] = 0;
            }
        }

        for(i = 0; i < allTeams.length; i++) {
            otherTeam = allTeams[i];
            if (otherTeam["name"] == team["name"]) {
                continue;
            }
            if (otherTeam["division"] == team["division"]) {
                scheduleObject["divisionGames"][otherTeam["name"].toLowerCase()] = false;
                
            } else 
            if (otherTeam["conference"] == team["conference"]) {
                scheduleObject["conferenceDeciders"][otherTeam["name"].toLowerCase()] = 0;
            } else {
                scheduleObject["otherConferenceGames"][otherTeam["name"].toLowerCase()] = false;
            }
        }
        SCHEDULE_TEAMS[scheduleObject["name"]] = scheduleObject;
    });
    console.log(SCHEDULE_TEAMS);
    for (let teamName in SCHEDULE_TEAMS) {
        teamObject = SCHEDULE_TEAMS[teamName];
        conferenceDecidersObject = teamObject["conferenceDeciders"];
        for (let otherTeam in conferenceDecidersObject) {
            // console.log(teamName, otherTeam)
            if (!isConferenceCalculated(teamObject, SCHEDULE_TEAMS[otherTeam])) {
                if (conferenceDecidersObject[otherTeam] == 0) {
                    conferenceDecidersObject[otherTeam] = 2;
                    // TODO: ADD 4 GAMES, MARK OTHERTEAM
                    SCHEDULE.push(teamName + "-" + otherTeam);
                    SCHEDULE.push(teamName + "-" + otherTeam);
                    SCHEDULE.push(teamName + "-" + otherTeam);
                    SCHEDULE.push(teamName + "-" + otherTeam);
                    SCHEDULE_TEAMS[otherTeam]["conferenceDeciders"][teamName] = 2;
                    SCHEDULE_TEAMS[otherTeam]["conferenceCount"][teamObject["conference"]] += 1;
                    SCHEDULE_TEAMS[teamName]["conferenceCount"][SCHEDULE_TEAMS[otherTeam]["conference"]] += 1;
                }
            } else {
                if (conferenceDecidersObject[otherTeam] == 0) {
                    conferenceDecidersObject[otherTeam] = 1;
                    // TODO: ADD 3 GAMES, MARK OTHERTEAM
                    SCHEDULE.push(teamName + "-" + otherTeam);
                    SCHEDULE.push(teamName + "-" + otherTeam);
                    SCHEDULE.push(teamName + "-" + otherTeam);
                    SCHEDULE_TEAMS[otherTeam]["conferenceDeciders"][teamName] = 1;
                }
            }
        }
        otherConferenceObject = teamObject["otherConferenceGames"];
        for (let otherTeam in otherConferenceObject) {
            if (otherConferenceObject[otherTeam] == false) {
                otherConferenceObject[otherTeam] = true;
                // TODO: ADD 2 GAMES, MARK OTHERTEAM
                SCHEDULE.push(teamName + "-" + otherTeam);
                SCHEDULE.push(teamName + "-" + otherTeam);
                SCHEDULE_TEAMS[otherTeam]["otherConferenceGames"][teamName] = true;

            }
        }
        sameDivisionObject = teamObject["divisionGames"];
        for (let otherTeam in sameDivisionObject) {
            if (sameDivisionObject[otherTeam] == false) {
                sameDivisionObject[otherTeam] = true;
                // TODO: ADD 4 GAMES, MARK OTHERTEAM
                SCHEDULE.push(teamName + "-" + otherTeam);
                SCHEDULE.push(teamName + "-" + otherTeam);
                SCHEDULE.push(teamName + "-" + otherTeam);
                SCHEDULE.push(teamName + "-" + otherTeam);
                SCHEDULE_TEAMS[otherTeam]["divisionGames"][teamName] = true;
            }
        }
    }
    console.log(SCHEDULE.length);
}

function countTeamGames(teamName) {
    count = 0;
    SCHEDULE.forEach(game => {
        if (teamName == game.split("-")[0] || teamName == game.split("-")[1]) {
            count += 1;
        }
    })
    console.log(teamName, count);
}

function isConferenceCalculated(teamObject, otherObject) {
    var count = 0;
    // condition 1: no more than 6 for self
    for (let teamName in teamObject["conferenceDeciders"]) {
        if (conferenceDecidersObject[teamName] == 2) {
            count += 1;
        }
    }
    if (count < 6 && teamObject["conferenceCount"][otherObject["conference"]] < 3) {
        return false;
    }
    return true;
}

function gameExists(gameName) {
    for (var i = 0; i < SCHEDULE.length; i++) { 
        if (SCHEDULE[i] == gameName) {
            return true;
        }
    }
    return false;
}

// FETCH/GET TEAM INFORMATION
function getTeamInfo() {
    fetch("http://localhost:8080/teams", {
        method: "GET"
    }).then(function (response) {
        response.json().then(function (team_array) {
            console.log(team_array);
            addWesternTeams(team_array);
            addEasternTeams(team_array);
            createSchedule(team_array);
            team_array.forEach(teamObject => {
                countTeamGames(teamObject["name"].toLowerCase());
            });
        });
    });
}

function getTeamStats() {
    fetch("http://localhost:8080/stats", {
        method: "GET"
    }).then(function (response) {
        response.json().then(function (team_array) {
            console.log(team_array);
            calculateOverallRating(team_array)
        });
    });
}