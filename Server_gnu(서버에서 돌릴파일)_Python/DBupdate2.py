from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from onesignal_sdk.client import Client
import time
import pyrebase

config = {
  "apiKey": "AIzaSyB0FQtNGUseSlHoFX5PZ4a91tRSXTyZp7w",
  "authDomain": "test-f972d.firebaseapp.com",
  "databaseURL": "https://test-f972d-default-rtdb.firebaseio.com",
  "storageBucket": "test-f972d.appspot.com"
}

firebase = pyrebase.initialize_app(config)
client = Client(app_id = "11d78e2a-f43d-49f4-ae46-c11fbac37252", rest_api_key = "MTVlZGZmYzAtNGIyMC00YjQwLTkxYzktYzk3Y2I4MDMyYmRl", user_auth_key = "Y2IwYTU3NWMtOWZiMy00YWQxLWJlMzEtNmIwMjI2N2MzNzRm") #원시그널 id


driver = webdriver.Chrome("C:\GO\selenium\chromedriver")
department_url = "https://newgh.gnu.ac.kr/anse/na/ntt/selectNttList.do?mi=3041&bbsId=1383" #학과공지사항 주소
Dormitory_url = "https://newgh.gnu.ac.kr/dorm/na/ntt/selectNttList.do?mi=7285&bbsId=2489" #기숙사공지사항 주소

# 웹크롤링시작(학과 공지사항_수강신청)
driver.get(department_url) #학과공지사항 접속
select = Select(driver.find_element_by_name("searchType")) # 검색 목록 : 제목
select.select_by_visible_text('제목')
elem = driver.find_element_by_name("searchValue") # 검색어 : 수강신청
elem.send_keys("수강신청")
elem.send_keys(Keys.RETURN) # 엔터

time.sleep(2)
number = driver.find_elements_by_css_selector("td.BD_tm_none")[0].text #게시글 번호
Title = driver.find_elements_by_css_selector(".nttInfoBtn")[0].text #게시글 제목
driver.find_elements_by_css_selector(".nttInfoBtn")[0].click() #접속
time.sleep(2)
url_S = driver.current_url #현재 게시글 주소

notification_body = {
    'contents': {'tr': '알림을 눌러 접속하세요','en': '수강신청 공지사항이 업데이트 되었습니다.'}, # 메세지 내용 설정
    'included_segments': ['수강신청_수신자희망자'],
    'app_url' : url_S
}

db = firebase.database()
DB_lastest = db.child("학과공지사항/수강신청").order_by_key().limit_to_last(1).get()
for data in DB_lastest.each():
    DB_lastest_key = data.key()
    DB_lastest_url = data.val()['주소'] #DB 게시글 주소

if(url_S != DB_lastest_url) :
  client.send_notification(notification_body)  # 원시그널의 client id에 해당하는 사용자에게 메세지 전송
  input_data = {"제목": Title , "주소" : url_S}
  db.child("학과공지사항/수강신청").child(number).set(input_data)
  driver.back() #뒤로가기
  time.sleep(2)
  print("업데이트가 되었습니다")

# 웹크롤링시작(학과 공지사항_장학금)
driver.get(department_url) #학과공지사항 접속
select = Select(driver.find_element_by_name("searchType")) # 검색 목록 : 제목
select.select_by_visible_text('제목')
elem = driver.find_element_by_name("searchValue") # 검색어 : 장학금
elem.send_keys("장학금")
elem.send_keys(Keys.RETURN) # 엔터

time.sleep(2)
number = driver.find_elements_by_css_selector("td.BD_tm_none")[0].text #게시글 번호
Title = driver.find_elements_by_css_selector(".nttInfoBtn")[0].text #게시글 제목
driver.find_elements_by_css_selector(".nttInfoBtn")[0].click() #접속
time.sleep(2)
url_S = driver.current_url #현재 게시글 주소

notification_body = {
    'contents': {'tr': '알림을 눌러 접속하세요','en': '장학금 공지사항이 업데이트 되었습니다.'},
    'included_segments': ['국가장학금_수신자희망자'],
    'app_url' : url_S
}


db = firebase.database()
DB_lastest = db.child("학과공지사항/장학금").order_by_key().limit_to_last(1).get()
for data in DB_lastest.each():
    DB_lastest_key = data.key()
    DB_lastest_url = data.val()['주소'] #DB 게시글 주소

if(url_S != DB_lastest_url) :
  client.send_notification(notification_body)
  input_data = {"제목": Title , "주소" : url_S}
  db.child("학과공지사항/장학금").child(number).set(input_data)
  driver.back() #뒤로가기
  time.sleep(2)
  print("업데이트가 되었습니다")

# 웹크롤링시작(기숙사 공지사항_입실)
driver.get(Dormitory_url) #기숙사공지사항 접속
select = Select(driver.find_element_by_name("searchType")) # 검색 목록 : 제목
select.select_by_visible_text('제목')
elem = driver.find_element_by_name("searchValue") # 검색어 : 입실
elem.send_keys("입실")
elem.send_keys(Keys.RETURN) # 엔터

time.sleep(2)
number = driver.find_elements_by_css_selector("td.BD_tm_none")[0].text #게시글 번호
Title = driver.find_elements_by_css_selector(".nttInfoBtn")[0].text #게시글 제목
driver.find_elements_by_css_selector(".nttInfoBtn")[0].click() #접속
time.sleep(2)
url_S = driver.current_url #현재 게시글 주소

notification_body = {
    'contents': {'tr': '알림을 눌러 접속하세요','en': '기숙사 공지사항이 업데이트 되었습니다.'},
    'included_segments': ['기숙사_수신자희망자'],
    'app_url' : url_S
}


db = firebase.database()
DB_lastest = db.child("기숙사공지사항/입실").order_by_key().limit_to_last(1).get()
for data in DB_lastest.each():
    DB_lastest_key = data.key()
    DB_lastest_url = data.val()['주소'] #DB 게시글 주소

if(url_S != DB_lastest_url) : 
  client.send_notification(notification_body)
  input_data = {"제목": Title , "주소" : url_S}
  db.child("기숙사공지사항/입실").child(number).set(input_data)
  driver.back() #뒤로가기
  time.sleep(2)
  print("업데이트가 되었습니다")
driver.close()

