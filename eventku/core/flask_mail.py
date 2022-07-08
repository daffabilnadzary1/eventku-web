import requests, uuid
import json

def generate_mail(recipients):
    endpoint = "http://127.0.0.1:5000/account_invitation"

    body = {
        "subject": "test",
        "sender": "daffabilnadzary1@gmail.com",
        "html": None,
        "recipients": [recipients],
        "attachments": None,
        "cc": None,
        "bcc": None
    }

    body_json = json.loads(json.dumps(body))

    req = requests.post(endpoint, json = body_json)
    return req
