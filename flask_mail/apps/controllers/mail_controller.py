from flask import Flask, render_template, url_for, request
from flask_mail import Mail, Message

def render_account_invitation(email):
    return render_template('invitation_email.html', email = email)

def generate_mail(mail, **kwargs):
    msg = Message(
        subject = kwargs["subject"],
        recipients = kwargs["recipients"],
        html = render_account_invitation(email = kwargs["recipients"]),
        sender = kwargs["sender"],
        attachments = (kwargs["attachments"] if kwargs["attachments"] is not None else None),
        cc = (kwargs["cc"] if kwargs["attachments"] is not None else None),
        bcc = (kwargs["bcc"] if kwargs["attachments"] is not None else None)
    )
    mail.send(msg)