
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
    "magics": {
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

addWesternTeams()
addEasternTeams()

function addWesternTeams() {
    var westernDiv = document.querySelector("#western")
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
    PSuns.id = "suns"
    PSuns.classList.add('team-div')
    PSuns.innerHTML = "Phenoix Suns"
    UJazz.id = "jazz"
    UJazz.classList.add('team-div')
    UJazz.innerHTML = "Utah Jazz"
    DMavericks.id = "mavericks"
    DMavericks.classList.add('team-div')
    DMavericks.innerHTML = "Dallas Mavericks"
    DNuggets.id = "nuggets"
    DNuggets.classList.add('team-div')
    DNuggets.innerHTML = "Denver Nuggets"
    LAClippers.id = "clippers"
    LAClippers.classList.add('team-div')
    LAClippers.innerHTML = "Los Angeles Clippers"
    LALakers.id = "lakers"
    LALakers.classList.add('team-div')
    LALakers.innerHTML = "Los Angeles Lakers"
    MGrizzlies.id = "grizzlies"
    MGrizzlies.classList.add('team-div')
    MGrizzlies.innerHTML = "Memphis Grizzlies"
    SKings.id = "kings"
    SKings.classList.add('team-div')
    SKings.innerHTML = "Sacramento Kings"
    PTrailBlazers.id = "trailblazers"
    PTrailBlazers.classList.add('team-div')
    PTrailBlazers.innerHTML = "Portland Trail Blazers"
    OCKThunder.id = "thunder"
    OCKThunder.classList.add('team-div')
    OCKThunder.innerHTML = "Oaklahoma City Thunder"
    SASpurs.id = "spurs"
    SASpurs.classList.add('team-div')
    SASpurs.innerHTML = "San Antonio Spurs"
    MTimberwolves.id = "timberwolves"
    MTimberwolves.classList.add('team-div')
    MTimberwolves.innerHTML = "Minnesota Timberwolves"
    HRockets.id = "rockets"
    HRockets.classList.add('team-div')
    HRockets.innerHTML = "Houston Rockets"
    NOPelicans.id = "pelicans"
    NOPelicans.classList.add('team-div')
    NOPelicans.innerHTML = "New Orleans Pelicans"
    westernDiv.appendChild(DMavericks)
    westernDiv.appendChild(DNuggets)
    westernDiv.appendChild(GSWarriors)
    westernDiv.appendChild(HRockets)
    westernDiv.appendChild(LAClippers)
    westernDiv.appendChild(LALakers)
    westernDiv.appendChild(MGrizzlies)
    westernDiv.appendChild(MTimberwolves)
    westernDiv.appendChild(NOPelicans)
    westernDiv.appendChild(OCKThunder)
    westernDiv.appendChild(PSuns)
    westernDiv.appendChild(PTrailBlazers)
    westernDiv.appendChild(SKings)
    westernDiv.appendChild(SASpurs)
    westernDiv.appendChild(UJazz)
}

function addEasternTeams() {

    var easternDiv = document.querySelector("#eastern")
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
    CBulls.id = "bulls"
    CBulls.classList.add('team-div')
    CBulls.innerHTML = "Chicago Bulls"
    NJNets.id = "nets"
    NJNets.classList.add('team-div')
    NJNets.innerHTML = "New Jersey Nets"
    P76ers.id = "76ers"
    P76ers.classList.add('team-div')
    P76ers.innerHTML = "Philadelphia 76ers"
    CCavaliers.id = "cavaliers"
    CCavaliers.classList.add('team-div')
    CCavaliers.innerHTML = "Cleveland Cavaliers"
    MHeat.id = "heat"
    MHeat.classList.add('team-div')
    MHeat.innerHTML = "Miami Heat"
    TRaptors.id = "raptors"
    TRaptors.classList.add('team-div')
    TRaptors.innerHTML = "Toronto Raptors"
    MBucks.id = "bucks"
    MBucks.classList.add('team-div')
    MBucks.innerHTML = "Milwaukee Bucks"
    CHornets.id = "hornets"
    CHornets.classList.add('team-div')
    CHornets.innerHTML = "Charlotte Hornets"
    BCeltics.id = "celtics"
    BCeltics.classList.add('team-div')
    BCeltics.innerHTML = "Boston Celtics"
    IPacers.id = "pacers"
    IPacers.classList.add('team-div')
    IPacers.innerHTML = "Indiana Pacers"
    AHawks.id = "hawks"
    AHawks.classList.add('team-div')
    AHawks.innerHTML = "Atlanta Hawks"
    OMagic.id = "magics"
    OMagic.classList.add('team-div')
    OMagic.innerHTML = "Orlando Magic"
    DPistons.id = "pistons"
    DPistons.classList.add('team-div')
    DPistons.innerHTML = "Detroit Pistons"
    NYKnicks.id = "knicks"
    NYKnicks.classList.add('team-div')
    NYKnicks.innerHTML = "New York Knicks"
    easternDiv.appendChild(AHawks)
    easternDiv.appendChild(BCeltics)
    easternDiv.appendChild(CHornets)
    easternDiv.appendChild(CBulls)
    easternDiv.appendChild(CCavaliers)
    easternDiv.appendChild(DPistons)
    easternDiv.appendChild(IPacers)
    easternDiv.appendChild(MHeat)
    easternDiv.appendChild(MBucks)
    easternDiv.appendChild(NJNets)
    easternDiv.appendChild(NYKnicks)
    easternDiv.appendChild(OMagic)
    easternDiv.appendChild(P76ers)
    easternDiv.appendChild(TRaptors)
    easternDiv.appendChild(WWizards)
    
}

var simulateButton = document.querySelector("#simulate")

simulateButton.onclick = simulateSeason;
function simulateSeason() {
    console.log(calculateGame("warriors", "jazz"));
    gameTeams["warriors"]["stats"] = calculateScore(warriors_stats_temp);
    gameTeams["jazz"]["stats"] = calculateScore(jazz_stats_temp);
    console.log(calculateGame("warriors", "jazz"));
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
