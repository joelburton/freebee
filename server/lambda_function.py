import json
from server import make_game
from words import words

def lambda_handler(event, context):
    return {
        "statusCode": 200,
        "body": json.dumps(make_game())
    }
