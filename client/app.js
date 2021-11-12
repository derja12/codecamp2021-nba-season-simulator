// 
// Data
// 

redVotes = 100;
blueVotes = 100;
yellowVotes = 100;
greenVotes = 100;
totalVotes = 400;
months = {
            1: "Jan",
            2: "Feb",
            3: "Mar",
            4: "Apr",
            5: "May",
            6: "June",
            7: "July",
            8: "Aug",
            9: "Sept",
            10: "Oct",
            11: "Nov",
            12: "Dev"
        };



//
// Queries
//

redDiv = document.querySelector("#red-div");
redBox = document.querySelector("#red-box");
blueDiv = document.querySelector("#blue-div");
blueBox = document.querySelector("#blue-box");
yellowDiv = document.querySelector("#yellow-div");
yellowBox = document.querySelector("#yellow-box");
greenDiv = document.querySelector("#green-div");
greenBox = document.querySelector("#green-box");
chatInput = document.querySelector("#chat-input");
chatMessageList = document.querySelector("#chat-message-list");

loadVotes()
loadMessages()

function updateBoxes() {
    redBox.style.height = ((redVotes / totalVotes) * 100).toString() + "%";
    blueBox.style.height = ((blueVotes / totalVotes) * 100).toString() + "%";
    yellowBox.style.height = ((yellowVotes / totalVotes) * 100).toString() + "%";
    greenBox.style.height = ((greenVotes / totalVotes) * 100).toString() + "%";
}

redDiv.onclick = function () {
    sendVote("red");
}

blueDiv.onclick = function () {
    sendVote("blue");
}

yellowDiv.onclick = function () {
    sendVote("yellow");
}

greenDiv.onclick = function () {
    sendVote("green");
}

function submitMessage(event) {
    if (event.keyCode == 13) {
        var d = new Date(); // for now
        var messageText = formMessage(d, chatInput.value);
        chatInput.value = "";

        sendMessage(messageText);
    }
}

function formMessage(date, message) {
    if (date.getHours() - (date.getHours() % 12) == 0) {
        timeLetters = "am";
    } else {
        timeLetters = "pm";
    }

    if (date.getHours() > 12) {
        newHours = date.getHours() - 12;
    } else {
        newHours = date.getHours();
    }

    if (date.getMinutes() < 10) {
        newMinutes = "0" + date.getMinutes().toString();
    } else {
        newMinutes = date.getMinutes().toString();
    }

    return months[date.getMonth()] + " " + date.getDate().toString() + ", " + newHours + ":" + newMinutes + timeLetters +": " + message;
}

function loadVotes() {
    fetch("http://localhost:8080/votes").then(function (response) {
        response.json().then(function (dataFromServer) {
            redVotes = dataFromServer["red"];
            blueVotes = dataFromServer["blue"];
            yellowVotes = dataFromServer["yellow"];
            greenVotes = dataFromServer["green"];
            updateBoxes();
            setTimeout(() => {
                loadVotes();
              }, 150);
            
            // ONE WAY TO DO A FOR LOOP
            // Array.forEach(function (element) {
            //   console.log("one restaurant:", element)   
            // });
        });
    });
}

function updateMessages(messageArray) {
    chatMessageList.innerHTML = "";
    messageArray.forEach(function (message) {
        var newMessage = document.createElement("p");
        newMessage.style.marginLeft = ".3rem";
        newMessage.style.marginBottom = "0rem";
        newMessage.style.marginTop = "0rem";
        newMessage.style.marginRight = "0rem";
        newMessage.style.fontSize = ".8rem";
        formattedMessage = message["date"] + message["name"] + message["text"];
        newMessage.innerHTML = formattedMessage;
        chatMessageList.insertBefore(newMessage, chatMessageList.childNodes[0])
        if (chatMessageList.childElementCount > 10) {
            chatMessageList.removeChild(chatMessageList.childNodes[chatMessageList.childElementCount-1])
        }
    });
}

function loadMessages() {
    fetch("http://localhost:8080/messages").then(function (response) {
        response.json().then(function (dataFromServer) {
            updateMessages(dataFromServer);
            setTimeout(() => {
                loadMessages();
              }, 1000);
        });
    });
}

function sendVote(color) {
    var data = "color=" + encodeURIComponent(color);
    // var data += "&cuisine=" + encodeURIComponent(restaurantCuisine); NOT READY YET (if this were to be implemented eventually)

    fetch("http://localhost:8080/votes", { 
        // OPTIONS HERE 

        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
        

    }).then(function (response) {
        // something here? not neccessary rn I don't think
    });
}

function sendMessage(message) {
    var data = "message=" + encodeURIComponent(message);
    fetch("http://localhost:8080/messages", {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(function (response) {

    });
}