from pydantic import BaseModel

# pydantic is used for data validation
class MessageQuery(BaseModel):
    subject: str = ''
    sender: str = ''
    recipients: list = None
    html: str = ''
    cc: list = None
    bcc: list = None
    attachments: list = None