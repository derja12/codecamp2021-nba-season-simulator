SCHEDULE_COUNTS = {}
SCHEDULE = []

gameTeams = {
    "warriors": {
        "stats": 550
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

function addWesternTeams() 
{
    
    var pacificDiv = document.querySelector("#pacific")
    var northwestDiv = document.querySelector("#northwest")
    var southwestDiv = document.querySelector("#southwest")

    for (i = 0; i < teams.length; i++) {
        team = teams[i]
        var teamDiv = document.createElement("div")
    
        teamDiv.id = team["name"].toLowerCase();
        teamDiv.classList.add('team-div');
        teamDiv.innerHTML = team["city"] + " " + team["name"];
        teamDiv.onclick = function () {teamStats(teamDiv)};

        if (team["division"] == "Pacific") {
            pacificDiv.appendChild(teamDiv);
        } else if (team["division"] == "Northwest") {
            northwestDiv.appendChild(teamDiv);
        } else if (team["division"] == "Southwest") {
            southwestDiv.appendChild(teamDiv);
        }
    }
}

/*
[
    {
        "id": 1632525235325,
        "name": "Hawks",
        "city": "Atlanta",
        "abbreviation":,
        "conference":,
        "division":,
    },

]
*/

function addEasternTeams(teams) {

    var atlanticDiv = document.querySelector("#atlantic")
    var centralDiv = document.querySelector("#central")
    var southeastDiv = document.querySelector("#southeast")

    for (i = 0; i < teams.length; i++) {
        team = teams[i]
        var teamDiv = document.createElement("div")
    
        teamDiv.id = team["name"].toLowerCase();
        teamDiv.classList.add('team-div');
        teamDiv.innerHTML = team["city"] + " " + team["name"];
        teamDiv.onclick = function () {teamStats(teamDiv)};

        if (team["division"] == "Southeast") {
            southeastDiv.appendChild(teamDiv);
        } else if (team["division"] == "Central") {
            centralDiv.appendChild(teamDiv);
        } else if (team["division"] == "Atlantic") {
            atlanticDiv.appendChild(teamDiv);
        }
    }
}

function teamStats(team)
{
    console.log("Team Stats clicked")
    var img = document.createElement("img")
    img.classList.add("logos")
    img.src = "../images/" + team.id + ".png"
    team.appendChild(img);
}
var simulateButton = document.querySelector("#simulate")

simulateButton.onclick = simulateSeason;

function simulateSeason() {
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

function createSchedule() {
    allTeams = [
        {"name": "jazz"},
        {"name": "suns"},
        {"name": "warriors"},
        {"name": "mavericks"},
        {"name": "nuggets"},
        {"name": "clippers"},
        {"name": "grizzlies"},
        {"name": "kings"},
        {"name": "trailblazers"},
        {"name": "thunder"},
        {"name": "spurs"},
        {"name": "timberwolves"},
        {"name": "rockets"},
        {"name": "pelicans"},
        {"name": "wizards"},
        {"name": "bulls"},
        {"name": "nets"},
        {"name": "76ers"},
        {"name": "cavaliers"},
        {"name": "heat"},
        {"name": "raptors"},
        {"name": "bucks"},
        {"name": "hornets"},
        {"name": "celtics"},
        {"name": "pacers"},
        {"name": "hawks"},
        {"name": "magic"},
        {"name": "pistons"},
        {"name": "knicks"},
        {"name": "lakers"},
    ] 
    // allTeams == [{},{},{},{}]
    for (var i = 0; i < allTeams.length; i++) {
        currentTeam = allTeams[i];

        teamName = currentTeam["name"];
        SCHEDULE_COUNTS[teamName] = 0;

        for (var j = 0; j < allTeams.length; j++) {
            possibleName1 = allTeams[j]["name"] + "-" + teamName;
            possibleName2 = teamName + "-" + allTeams[j]["name"];

            if (!gameExists(possibleName1) && !gameExists(possibleName2) && allTeams[j]["name"] != teamName) {
                SCHEDULE.push(possibleName1);
            }
            
        }
    }
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
            // [{"name"="hawks"}]
            createSchedule();
        });
    });
}