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

addWesternTeams();
addEasternTeams();
createSchedule();

function addWesternTeams() {
    var westernDiv = document.querySelector("#western")
    var pacificDiv = document.querySelector("#pacific")
    var northwestDiv = document.querySelector("#northwest")
    var southwestDiv = document.querySelector("#southwest")
    var GSWarriors = document.createElement("div")
    var PSuns = document.createElement("div")
    var UJazz = document.createElement("div")
    var DMavericks = document.createElement("div")
    var DNuggets = document.createElement("div")
    var LAClippers = document.createElement("div")
    var LALakers = document.createElement("div")
    var MGrizzlies = document.createElement("div")
    var SKings = document.createElement("div")
    var PTrailBlazers = document.createElement("div")
    var OCKThunder = document.createElement("div")
    var SASpurs = document.createElement("div")
    var MTimberwolves = document.createElement("div")
    var HRockets = document.createElement("div")
    var NOPelicans = document.createElement("div")
    GSWarriors.id = "warriors"
    GSWarriors.classList.add('team-div')
    GSWarriors.innerHTML = "Golden State Warriors"
    GSWarriors.onclick = function () {teamStats(GSWarriors)}
    PSuns.id = "suns"
    PSuns.classList.add('team-div')
    PSuns.innerHTML = "Phenoix Suns"
    PSuns.onclick = function () {teamStats(PSuns)}
    UJazz.id = "jazz"
    UJazz.classList.add('team-div')
    UJazz.innerHTML = "Utah Jazz"
    UJazz.onclick = function () {teamStats(UJazz)}
    DMavericks.id = "mavericks"
    DMavericks.classList.add('team-div')
    DMavericks.innerHTML = "Dallas Mavericks"
    DMavericks.onclick = function () {teamStats(DMavericks)}
    DNuggets.id = "nuggets"
    DNuggets.classList.add('team-div')
    DNuggets.innerHTML = "Denver Nuggets"
    DNuggets.onclick = function () {teamStats(DNuggets)}
    LAClippers.id = "clippers"
    LAClippers.classList.add('team-div')
    LAClippers.innerHTML = "Los Angeles Clippers"
    LAClippers.onclick = function () {teamStats(LAClippers)}
    LALakers.id = "lakers"
    LALakers.classList.add('team-div')
    LALakers.innerHTML = "Los Angeles Lakers"
    LALakers.onclick = function () {teamStats(LALakers)}
    MGrizzlies.id = "grizzlies"
    MGrizzlies.classList.add('team-div')
    MGrizzlies.innerHTML = "Memphis Grizzlies"
    MGrizzlies.onclick = function () {teamStats(MGrizzlies)}
    SKings.id = "kings"
    SKings.classList.add('team-div')
    SKings.innerHTML = "Sacramento Kings"
    SKings.onclick = function () {teamStats(SKings)}
    PTrailBlazers.id = "trailblazers"
    PTrailBlazers.classList.add('team-div')
    PTrailBlazers.innerHTML = "Portland Trail Blazers"
    PTrailBlazers.onclick = function () {teamStats(PTrailBlazers)}
    OCKThunder.id = "thunder"
    OCKThunder.classList.add('team-div')
    OCKThunder.innerHTML = "Oaklahoma City Thunder"
    OCKThunder.onclick = function () {teamStats(OCKThunder)}
    SASpurs.id = "spurs"
    SASpurs.classList.add('team-div')
    SASpurs.innerHTML = "San Antonio Spurs"
    SASpurs.onclick = function () {teamStats(SASpurs)}
    MTimberwolves.id = "timberwolves"
    MTimberwolves.classList.add('team-div')
    MTimberwolves.innerHTML = "Minnesota Timberwolves"
    MTimberwolves.onclick = function () {teamStats(MTimberwolves)}
    HRockets.id = "rockets"
    HRockets.classList.add('team-div')
    HRockets.innerHTML = "Houston Rockets"
    HRockets.onclick = function () {teamStats(HRockets)}
    NOPelicans.id = "pelicans"
    NOPelicans.classList.add('team-div')
    NOPelicans.innerHTML = "New Orleans Pelicans"
    NOPelicans.onclick = function () {teamStats(NOPelicans)}
    southwestDiv.appendChild(DMavericks)
    northwestDiv.appendChild(DNuggets)
    pacificDiv.appendChild(GSWarriors)
    southwestDiv.appendChild(HRockets)
    pacificDiv.appendChild(LAClippers)
    pacificDiv.appendChild(LALakers)
    southwestDiv.appendChild(MGrizzlies)
    northwestDiv.appendChild(MTimberwolves)
    southwestDiv.appendChild(NOPelicans)
    northwestDiv.appendChild(OCKThunder)
    pacificDiv.appendChild(PSuns)
    northwestDiv.appendChild(PTrailBlazers)
    pacificDiv.appendChild(SKings)
    southwestDiv.appendChild(SASpurs)
    northwestDiv.appendChild(UJazz)
}

function addEasternTeams() {

    var easternDiv = document.querySelector("#eastern")
    var atlanticDiv = document.querySelector("#atlantic")
    var centralDiv = document.querySelector("#central")
    var southeastDiv = document.querySelector("#southeast")
    var WWizards = document.createElement("div")
    var CBulls = document.createElement("div")
    var NJNets = document.createElement("div")
    var P76ers = document.createElement("div")
    var CCavaliers = document.createElement("div")
    var MHeat = document.createElement("div")
    var TRaptors = document.createElement("div")
    var MBucks = document.createElement("div")
    var CHornets = document.createElement("div")
    var BCeltics = document.createElement("div")
    var IPacers = document.createElement("div")
    var AHawks = document.createElement("div")
    var OMagic = document.createElement("div")
    var DPistons = document.createElement("div")
    var NYKnicks = document.createElement("div")
    WWizards.id = "wizards"
    WWizards.classList.add('team-div')
    WWizards.innerHTML = "Washington Wizards"
    WWizards.onclick = function () {teamStats(WWizards)}
    CBulls.id = "bulls"
    CBulls.classList.add('team-div')
    CBulls.innerHTML = "Chicago Bulls"
    CBulls.onclick = function () {teamStats(CBulls)}
    NJNets.id = "nets"
    NJNets.classList.add('team-div')
    NJNets.innerHTML = "New Jersey Nets"
    NJNets.onclick = function () {teamStats(NJNets)}
    P76ers.id = "76ers"
    P76ers.classList.add('team-div')
    P76ers.innerHTML = "Philadelphia 76ers"
    P76ers.onclick = function () {teamStats(P76ers)}
    CCavaliers.id = "cavaliers"
    CCavaliers.classList.add('team-div')
    CCavaliers.innerHTML = "Cleveland Cavaliers"
    CCavaliers.onclick = function () {teamStats(CCavaliers)}
    MHeat.id = "heat"
    MHeat.classList.add('team-div')
    MHeat.innerHTML = "Miami Heat"
    MHeat.onclick = function () {teamStats(MHeat)}
    TRaptors.id = "raptors"
    TRaptors.classList.add('team-div')
    TRaptors.innerHTML = "Toronto Raptors"
    TRaptors.onclick = function () {teamStats(TRaptors)}
    MBucks.id = "bucks"
    MBucks.classList.add('team-div')
    MBucks.innerHTML = "Milwaukee Bucks"
    MBucks.onclick = function () {teamStats(MBucks)}
    CHornets.id = "hornets"
    CHornets.classList.add('team-div')
    CHornets.innerHTML = "Charlotte Hornets"
    CHornets.onclick = function () {teamStats(CHornets)}
    BCeltics.id = "celtics"
    BCeltics.classList.add('team-div')
    BCeltics.innerHTML = "Boston Celtics"
    BCeltics.onclick = function () {teamStats(BCeltics)}
    IPacers.id = "pacers"
    IPacers.classList.add('team-div')
    IPacers.innerHTML = "Indiana Pacers"
    IPacers.onclick = function () {teamStats(IPacers)}
    AHawks.id = "hawks"
    AHawks.classList.add('team-div')
    AHawks.innerHTML = "Atlanta Hawks"
    AHawks.onclick = function () {teamStats(AHawks)}
    OMagic.id = "magic"
    OMagic.classList.add('team-div')
    OMagic.innerHTML = "Orlando Magic"
    OMagic.onclick = function () {teamStats(OMagic)}
    DPistons.id = "pistons"
    DPistons.classList.add('team-div')
    DPistons.innerHTML = "Detroit Pistons"
    DPistons.onclick = function () {teamStats(DPistons)}
    NYKnicks.id = "knicks"
    NYKnicks.classList.add('team-div')
    NYKnicks.innerHTML = "New York Knicks"
    NYKnicks.onclick = function () {teamStats(NYKnicks)}
    southeastDiv.appendChild(AHawks)
    atlanticDiv.appendChild(BCeltics)
    southeastDiv.appendChild(CHornets)
    centralDiv.appendChild(CBulls)
    centralDiv.appendChild(CCavaliers)
    centralDiv.appendChild(DPistons)
    centralDiv.appendChild(IPacers)
    southeastDiv.appendChild(MHeat)
    centralDiv.appendChild(MBucks)
    atlanticDiv.appendChild(NJNets)
    atlanticDiv.appendChild(NYKnicks)
    southeastDiv.appendChild(OMagic)
    atlanticDiv.appendChild(P76ers)
    atlanticDiv.appendChild(TRaptors)
    southeastDiv.appendChild(WWizards)
    
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