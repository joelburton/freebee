"""Backend API server FreeBee game."""

# In order to avoid any dependencies, this uses only built-in Python libraries.
# This code would prob be clearer as a Flask app and using the requests library.

from words import words as words
import json
from http.server import HTTPServer, BaseHTTPRequestHandler
from random import choice, sample
from string import ascii_lowercase

# don't allow uncommon letters, since they make the game less fun
LETTERS = "".join(set(ascii_lowercase) - set("wzxjq"))

# min # found words for a good game
MIN_FOUND = 40

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

    print("Handling request")
    while True:
        center = choice(LETTERS)
        letters = "".join(sample([c for c in LETTERS if c != center], 6))
        allowed = letters + center
        found = [
            word for word in words
            if center in word and all(ltr in allowed for ltr in word)
        ]

        # only use this game if it's "good" (a good game has plenty of found
        # words and has at least one "bingo" [uses all letters at least once])
        if len(found) >= MIN_FOUND and any(len(set(w)) == 7 for w in found):
            print("Found good game")
            return {
                "letters": letters,
                "center": center,
                "words": len(found),
                # 4-long words score 1, all others score length-of-word
                "total": sum(len(w) if len(w) > 4 else 1 for w in found),
                "wordlist": found,
            }


class FreeBeeAPIServer(BaseHTTPRequestHandler):
    def do_GET(self):
        """Single route: it doesn't care what resource you ask for."""

        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header('Access-Control-Allow-Origin', '*')  # allow CORS
        self.end_headers()
        self.wfile.write(bytes(json.dumps(make_game()), "utf-8"))


if __name__ == "__main__":
    print("Starting API server on port 8000")
    HTTPServer(('', 8000), FreeBeeAPIServer).serve_forever()
