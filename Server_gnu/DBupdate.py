import time
import Pushconvert
import pyrebase

Posting_Address = 0
number = 0
Title = 0

config = {
  "apiKey": "AIzaSyAHYW60cI1kChuFx3Z__DeLvKBGyrGLkZg",
  "authDomain": "gnu6-d9c5b.firebaseapp.com",
  "databaseURL": "https://gnu6-d9c5b-default-rtdb.firebaseio.com",
  "storageBucket": "gnu6-d9c5b.appspot.com"
  }

def db_update( Homepage_name, searchValue):
  firebase = pyrebase.initialize_app(config)
  db = firebase.database()
  DB_lastest = db.child(Homepage_name + "/" + searchValue).order_by_key().limit_to_last(1).get()
  for data in DB_lastest.each():
       DB_lastest_url = data.val()['주소'] # 기존 주소 요청
  if(Posting_Address != DB_lastest_url) : # 신규 주소 비교
       input_data = {"제목": Title , "주소" : Posting_Address} # DB업데이트자료생성
       db.child( Homepage_name + "/" + searchValue).child(number).set(input_data) # DB업데이트
       time.sleep(2)
       Pushconvert.push(searchValue) # 푸시알림 전송
       

    
