"""Backend API server FreeBee game."""

# In order to avoid any dependencies, this uses only built-in Python libraries.
# This code would prob be clearer as a Flask app and using the requests library.

import json
import urllib.request
from http.server import HTTPServer, BaseHTTPRequestHandler
from random import choice, sample
from string import ascii_lowercase

CENTERS = "".join(set(ascii_lowercase) - set("q"))
LETTERS = "".join(set(ascii_lowercase) - set("kwzxjq"))

# num letters to use (in addition to center)
NUM_LETTERS = 6
# min # found words for a good game
MIN_FOUND = 30

req = urllib.request.Request('http://norvig.com/ngrams/enable1.txt')
with urllib.request.urlopen(req) as response:
    text = response.read().decode("utf8")
    words = [w for w in text.split() if len(w) >= 4 and "q" not in w]

print("Read words:", ", ".join(words[:5]), "...")


def make_game():
    """Returns dict like:

        {
          letters: "rstlna",
          center: "e",
          words: 200,   # num of words
          total: 400,   # total score of words
          wordlist: ["lane", stare", ...]
        }
    """

    while True:
        center = choice(CENTERS)
        letters = "".join(sample([c for c in LETTERS if c != center], 6))
        allowed = letters + center
        found = [
            word for word in words
            if center in word and all(ltr in allowed for ltr in word)
        ]
        if len(found) >= MIN_FOUND and any(len(set(w)) == 7 for w in found):
            return {
                "letters": letters,
                "center": center,
                "words": len(found),
                # 4-long words score 1, all others score length-of-word
                "total": sum(len(w) if len(w) > 4 else 1 for w in found),
                "wordlist": found,
            }


class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(bytes(json.dumps(make_game()), "utf-8"))


if __name__ == "__main__":
    print("Starting API server on port 8000")
    HTTPServer(('', 8000), MyServer).serve_forever()
