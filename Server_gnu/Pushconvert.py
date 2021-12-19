from onesignal_sdk.client import Client
import DBupdate

client = Client(app_id = "11d78e2a-f43d-49f4-ae46-c11fbac37252", rest_api_key = "MTVlZGZmYzAtNGIyMC00YjQwLTkxYzktYzk3Y2I4MDMyYmRl", user_auth_key = "Y2IwYTU3NWMtOWZiMy00YWQxLWJlMzEtNmIwMjI2N2MzNzRm")

def push(searchValue):
  notification_body = {
  'contents': {'tr': '알림을 눌러 접속하세요','en': DBupdate.Title}, 
  'included_segments': [searchValue],
  'app_url' : DBupdate.Posting_Address
  }
  client.send_notification(notification_body)