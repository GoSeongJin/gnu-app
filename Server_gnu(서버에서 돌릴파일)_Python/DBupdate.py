from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from onesignal_sdk.client import Client
import time
import pyrebase

class Actor :
  def __init__(self):
    self.Homepage_url = ["https://newgh.gnu.ac.kr/anse/na/ntt/selectNttList.do?mi=3041&bbsId=1383", "https://newgh.gnu.ac.kr/dorm/na/ntt/selectNttList.do?mi=7285&bbsId=2489"] #학과공지사항, 기숙사공지사항 주소
    self.Homepage_name = ["학과공지사항", "기숙사공지사항"] 
    self.searchValue = ["수강신청 일정", "국가장학금", "년도 학생생활관 관생"]

class Crawler :
  def __init__(self):
    self.Posting_Address = 0
    self.number = 0
    self.Title = 0

  def crawler(self, Homepage_url ,searchValue):
    driver = webdriver.Chrome("C:\Server_gnu\chromedriver")
    driver.get(Homepage_url) #홈페이지 접속
    select = Select(driver.find_element_by_name("searchType")) # 검색 목록 : 제목
    select.select_by_visible_text('제목')
    elem = driver.find_element_by_name("searchValue") # 검색어 : searchValue
    elem.send_keys(searchValue)
    elem.send_keys(Keys.RETURN) #엔터
    time.sleep(2)
    self.number = driver.find_elements_by_css_selector("td.BD_tm_none")[0].text #게시글 번호
    self.Title = driver.find_elements_by_css_selector(".nttInfoBtn")[0].text #게시글 제목
    driver.find_elements_by_css_selector(".nttInfoBtn")[0].click() #접속
    time.sleep(2)
    self.Posting_Address = driver.current_url #최신 공지사항 주소 저장
    driver.close() #크롤링 종료

class DBupdater :
  def __init__(self):
    self.config = {
      "apiKey": "AIzaSyAHYW60cI1kChuFx3Z__DeLvKBGyrGLkZg",
      "authDomain": "gnu6-d9c5b.firebaseapp.com",
      "databaseURL": "https://gnu6-d9c5b-default-rtdb.firebaseio.com",
      "storageBucket": "gnu6-d9c5b.appspot.com"
    } 

  def db_update(self, Homepage_name, searchValue, Title, number, Posting_Address):
    firebase = pyrebase.initialize_app(self.config)
    db = firebase.database()
    DB_lastest = db.child( Homepage_name + "/" + searchValue ).order_by_key().limit_to_last(1).get()
    for data in DB_lastest.each():
        DB_lastest_url = data.val()['주소'] # 기존 주소 요청
    if(Posting_Address != DB_lastest_url) : # 신규 주소 비교 
      input_data = {"제목": Title , "주소" : Posting_Address} # DB업데이트자료생성 
      db.child( Homepage_name + "/" + searchValue).child(number).set(input_data) # DB업데이트
      time.sleep(2)
      push1 = Pushconvert() # 푸시알림 변환기 불러오기
      push1.push(searchValue, Title, Posting_Address) # 푸시알림 전송

class Pushconvert:
  def __init__(self):
   self.client = Client(app_id = "11d78e2a-f43d-49f4-ae46-c11fbac37252", rest_api_key = "MTVlZGZmYzAtNGIyMC00YjQwLTkxYzktYzk3Y2I4MDMyYmRl", user_auth_key = "Y2IwYTU3NWMtOWZiMy00YWQxLWJlMzEtNmIwMjI2N2MzNzRm")
  def push(self, searchValue, Title, Posting_Address):
    notification_body = {
    'contents': {'tr': '알림을 눌러 접속하세요','en': Title}, # 메세지 내용 설정
    'included_segments': [searchValue],
    'app_url' : Posting_Address
    }
    self.client.send_notification(notification_body)

while (True) :
  actor1 = Actor()
  crawler1 = Crawler()
  dbupdate1 = DBupdater()
  crawler1.crawler(actor1.Homepage_url[0],actor1.searchValue[0]) #공지사항 탐색기
  dbupdate1.db_update(actor1.Homepage_name[0], actor1.searchValue[0], crawler1.Title, crawler1.number, crawler1.Posting_Address) #DB 업데이트기
  crawler1.crawler(actor1.Homepage_url[0],actor1.searchValue[1]) #공지사항 탐색기
  dbupdate1.db_update(actor1.Homepage_name[0], actor1.searchValue[1], crawler1.Title, crawler1.number, crawler1.Posting_Address) #DB 업데이트기
  crawler1.crawler(actor1.Homepage_url[1],actor1.searchValue[2]) #공지사항 탐색기
  dbupdate1.db_update(actor1.Homepage_name[1], actor1.searchValue[2], crawler1.Title, crawler1.number, crawler1.Posting_Address) #DB 업데이트기
  time.sleep(30) #타이머 정지기
  del(actor1)
  del(crawler1)
  del(dbupdate1)
