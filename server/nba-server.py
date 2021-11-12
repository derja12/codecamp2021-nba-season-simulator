from http.server import BaseHTTPRequestHandler, HTTPServer
from socketserver import ThreadingMixIn
from urllib.parse import parse_qs
import json
import database

class MyRequestHandler(BaseHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        BaseHTTPRequestHandler.end_headers(self)

    def Handle404(self):
        self.send_response(404)
        self.send_header("Content-Type", "text/plain")
        self.end_headers()
        self.wfile.write(bytes("Not found.", "utf-8"))

    def do_GET(self):
        print("This code will handle all incoming GET requests.")
        print("The request path is: ", self.path)

        if self.path == "/stats":
            self.handleGetVotes()

        elif self.path == "/messages":
            self.handleGetMessages()
            
        else:
            self.Handle404()


class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
    pass

def run():
    listen = ("127.0.0.1", 8080)
    server = ThreadedHTTPServer(listen, MyRequestHandler)
    print("Online!")
    server.serve_forever()

run()