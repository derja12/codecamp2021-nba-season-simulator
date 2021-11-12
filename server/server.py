from http.server import BaseHTTPRequestHandler, HTTPServer
from socketserver import ThreadingMixIn
from urllib.parse import parse_qs
from dummydb import DummyDB
import json
import database

# VOTECOUNT = {"red" : 100, "blue" : 100, "yellow" : 100, "green": 100}
# WINSTATS = {"red" : 0, "blue" : 0, "yellow" : 0, "green": 0}
# TOTALVOTECOUNT = 400


class MyRequestHandler(BaseHTTPRequestHandler):
    # your code goes here:

    # override end_headers to include an Access-Control-Allow-Origin
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        BaseHTTPRequestHandler.end_headers(self) # include self in arguments???

    def handleGetVotes(self):
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()

        db = DummyDB("voteCount.db", "")
        voteCount = db.readAllRecords()
        self.wfile.write(bytes(json.dumps(voteCount), "utf-8"))

    def handleGetMessages(self):
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()

        db = database.ColorRacerDB()
        messages = db.getAllMessages()
        self.wfile.write(bytes(json.dumps(messages), "utf-8"))

    def handlePostVote(self):
        # 1. read the incoming request body

        length = int(self.headers["Content-Length"])
        request_body = self.rfile.read(length).decode("utf-8") # opposite of bytes() function from line 21
        print("raw request body:", request_body)

        # 2. parse the request body (urlencoded data)
            
        parsed_body = parse_qs(request_body) # IMPORT
        print("parsed body:", parsed_body)

        # 3. retrieve restaurant data from the parsed body

        if "color" in parsed_body:
            votedColor = parsed_body["color"][0]
        else:
            votedColor = ""

        # 4. append the new restaurant to the array above
        db = DummyDB("voteCount.db", "")
        voteCount = db.readAllRecords()
        if votedColor in voteCount:
            self.calculateVotes(votedColor, voteCount)
        db.overwriteRecord(voteCount)

        self.send_response(201)
        self.end_headers()

    def handlePostMessage(self):
        length = int(self.headers["Content-Length"])
        request_body = self.rfile.read(length).decode("utf-8")  # opposite of bytes() function from line 21
        parsed_body = parse_qs(request_body) # IMPORT

        if "message" in parsed_body:                            # Record Message
            message = parsed_body["message"][0]
            db = DummyDB("messageLog.db", "")
            db.recordMessage(message)

        self.send_response(201)
        self.end_headers()

    def calculateVotes(self, votedColor, voteCount):
        add = 0
        for color in voteCount:
            if votedColor != color:
                if voteCount[color] > 0:
                    voteCount[color] -= 1
                    add += 1
        voteCount[votedColor] += add

    def Handle404(self):
        self.send_response(404)
        self.send_header("Content-Type", "text/plain")
        self.end_headers()
        self.wfile.write(bytes("Not found.", "utf-8"))

    def do_GET(self):
        print("This code will handle all incoming GET requests.")
        print("The request path is: ", self.path)

        if self.path == "/votes":
            self.handleGetVotes()

        elif self.path == "/messages":
            self.handleGetMessages()
            
        else:
            self.Handle404()

    def do_POST(self):
        print("This code will handle all incoming POST requests.")
        print("The request path is: ", self.path)
        if self.path == "/votes":
            self.handlePostVote()
        elif self.path == "/messages":
            self.handlePostMessage()
        else:
            self.Handle404()



class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
    pass # no implementation

def run():
    listen = ("127.0.0.1", 8080)
    server = ThreadedHTTPServer(listen, MyRequestHandler)
    db = DummyDB("voteCount.db", {"red" : 100, "blue" : 100, "yellow" : 100, "green": 100})
    print("The server is now running!")
    server.serve_forever()

run()