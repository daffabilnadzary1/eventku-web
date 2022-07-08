from flask import Flask, render_template, url_for, request
from flask_mail import Mail, Message
from flask_cors import CORS
#from core.mailapp.local import getPassword

import json


app = Flask(__name__, template_folder = 'mailapp/templates')
CORS(app)

app.config['DEBUG'] = True
app.config['TESTING'] = False
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'daffabilnadzary1@gmail.com'
app.config['MAIL_PASSWORD'] = 'wtluxltmnxplxxpw'
app.config['MAIL_DEFAULT_SENDER'] = None
app.config['MAIL_MAX_EMAILS'] = None
app.config['MAIL_ASCII_ATTACHMENTS'] = False

mail = Mail(app)

def send_group_invitation():
    msg = Message(
            subject = "Event Group Invitation",
            recipients = ["jesajox471@lankew.com"],
            body = "testing",
        )
    mail.send(msg)

send_group_invitation()