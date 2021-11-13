SCHEDULE_COUNTS = {}
SCHEDULE = []
OPENED_TEAMS = {}
TEAM_RATING = {}

getTeamInfo();
getTeamStats();

function addWesternTeams(teams) {
    var pacificDiv = document.querySelector("#pacific")
    var northwestDiv = document.querySelector("#northwest")
    var southwestDiv = document.querySelector("#southwest")

    teams.forEach(team => {
        var teamDiv = document.createElement("div")
    
        teamDiv.id = team["abbreviation"];
        teamDiv.classList.add('team-div');
        teamDiv.innerHTML = team["city"] + " " + team["name"];
        teamDiv.onclick = function () {teamStats(teamDiv)};
        OPENED_TEAMS[team["abbreviation"]] = false;
        if (team["division"] == "Pacific") {
            pacificDiv.appendChild(teamDiv);
        } else if (team["division"] == "Northwest") {
            northwestDiv.appendChild(teamDiv);
        } else if (team["division"] == "Southwest") {
            southwestDiv.appendChild(teamDiv);
        }
    });
}

function addEasternTeams(teams) {
    var atlanticDiv = document.querySelector("#atlantic")
    var centralDiv = document.querySelector("#central")
    var southeastDiv = document.querySelector("#southeast")

    teams.forEach(team => {
        var teamDiv = document.createElement("div")
    
        teamDiv.id = team["abbreviation"];
        teamDiv.classList.add('team-div');
        teamDiv.innerHTML = team["city"] + " " + team["name"];
        teamDiv.onclick = function () {teamStats(teamDiv)};
        OPENED_TEAMS[team["abbreviation"]] = false;
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
    if (!OPENED_TEAMS[team["abbreviation"]]) {
        var img = document.createElement("img");
        img.classList.add("logos");
        img.src = "../images/" + team["name"].toLowerCase() + ".png";
        var teamOverall = document.createElement('p');
        var teamFieldGoal = document.createElement('p');
        var teamFreeThrow = document.createElement('p');
        var teamPoint = document.createElement('p');
        var team3point = document.createElement('p');
        var teamAssists = document.createElement('p');
        var teamRebounds = document.createElement('p');
        teamOverall.id = "teamoverall";
        teamFieldGoal.id = "teamFieldGoal";
        teamFreeThrow.id = "teamFreeThrow";
        teamPoint.id = "teamPoints";
        team3point.id = "team3point";
        teamAssists.id = "teamAssists";
        teamRebounds.id = "teamRebound";
        teamOverall.innerHTML = "Team Rating:" ;
        teamFieldGoal.innerHTML = "FG %:";
        teamFreeThrow.innerHTML = "FT %:";
        teamPoint.innerHTML = "Points:";
        team3point.innerHTML = "3-Pt %:";
        teamAssists.innerHTML = "Assists:";
        teamRebounds.innerHTML = "Rebounds:";
        team.appendChild(img);
        team.appendChild(teamOverall);
        team.appendChild(teamFreeThrow);
        team.appendChild(teamPoint);
        team.appendChild(teamAssists);
        team.appendChild(teamRebounds);
        team.appendChild(team3point);
        team.appendChild(teamFieldGoal);
    }
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

function createTeamRatings(teams) {
    teams.forEach(team => {
        key = team["id"];
        TEAM_RATING[key] = 0;
    });
}

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
        total *= 3.333;
        console.log(total);
        TEAM_RATING[team["id"]] = total;
    });
    console.log(TEAM_RATING);
}

function calculateGame(leftTeamID, rightTeamID) {
    var total = TEAM_RATING[leftTeamID]["stats"] + TEAM_RATING[rightTeamID]["stats"];
    var onePercent = total / 100;
    var percentThresh = TEAM_RATING[rightTeamID]["stats"] / onePercent;
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
            createSchedule(team_array);
            createTeamRatings(team_array);
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