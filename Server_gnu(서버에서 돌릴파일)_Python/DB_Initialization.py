from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
import time
import pyrebase

config = {
  "apiKey": "AIzaSyB0FQtNGUseSlHoFX5PZ4a91tRSXTyZp7w",
  "authDomain": "test-f972d.firebaseapp.com",
  "databaseURL": "https://test-f972d-default-rtdb.firebaseio.com",
  "storageBucket": "test-f972d.appspot.com"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()


driver = webdriver.Chrome("C:\GO\selenium\chromedriver")
department_url = "https://newgh.gnu.ac.kr/anse/na/ntt/selectNttList.do?mi=3041&bbsId=1383" #학과공지사항 주소
Dormitory_url = "https://newgh.gnu.ac.kr/dorm/na/ntt/selectNttList.do?mi=7285&bbsId=2489" #기숙사공지사항 주소

# 웹크롤링시작(학과 공지사항_수강신청)
driver.get(department_url) #학과공지사항 접속
select = Select(driver.find_element_by_name("searchType")) # 검색 목록 : 제목
select.select_by_visible_text('제목')
elem = driver.find_element_by_name("searchValue") # 검색어 : 입실
elem.send_keys("수강신청")
elem.send_keys(Keys.RETURN) # 엔터

time.sleep(2)

list = driver.find_elements_by_css_selector(".nttInfoBtn") # 반복문
length = len(list)

while length > 0 :
    number = driver.find_elements_by_css_selector("td.BD_tm_none")[length-1].text
    Title = driver.find_elements_by_css_selector(".nttInfoBtn")[length-1].text
    driver.find_elements_by_css_selector(".nttInfoBtn")[length-1].click()
    time.sleep(2)
    url_S = driver.current_url #현재 게시글 주소
    data = {"제목": Title , "주소" : url_S}
    db.child("학과공지사항/수강신청").child(number).set(data) # DB업데이트
    driver.back() #뒤로가기
    time.sleep(2)
    length -= 1

# 웹크롤링시작(학과 공지사항_장학금)
#driver.get(department_url)
driver.back()
time.sleep(2)
select = Select(driver.find_element_by_name("searchType")) # 검색 목록 : 제목
select.select_by_visible_text('제목')
elem = driver.find_element_by_name("searchValue") # 검색어 : 입실
elem.send_keys("장학금")
elem.send_keys(Keys.RETURN) # 엔터

time.sleep(2)

list = driver.find_elements_by_css_selector(".nttInfoBtn") # 반복문
length = len(list)

while length > 0 :
    number = driver.find_elements_by_css_selector("td.BD_tm_none")[length-1].text
    Title = driver.find_elements_by_css_selector(".nttInfoBtn")[length-1].text
    driver.find_elements_by_css_selector(".nttInfoBtn")[length-1].click()
    time.sleep(2)
    url_J = driver.current_url #현재 게시글 주소
    data = {"제목": Title , "주소" : url_J}
    db.child("학과공지사항/장학금").child(number).set(data) # DB업데이트
    driver.back() #뒤로가기
    time.sleep(2)
    length -= 1

# 웹크롤링시작(기숙사 공지사항_입실)
driver.get(Dormitory_url)
select = Select(driver.find_element_by_name("searchType")) # 검색 목록 : 제목
select.select_by_visible_text('제목')
elem = driver.find_element_by_name("searchValue") # 검색어 : 입실
elem.send_keys("입실")
elem.send_keys(Keys.RETURN) # 엔터

time.sleep(2)

list = driver.find_elements_by_css_selector(".nttInfoBtn") # 반복문
length = len(list)

while length > 0 :
    number = driver.find_elements_by_css_selector("td.BD_tm_none")[length-1].text
    Title = driver.find_elements_by_css_selector(".nttInfoBtn")[length-1].text
    driver.find_elements_by_css_selector(".nttInfoBtn")[length-1].click()
    time.sleep(2)
    url_G = driver.current_url #현재 게시글 주소
    data = {"제목": Title , "주소" : url_J}
    db.child("기숙사공지사항/입실").child(number).set(data) # DB업데이트
    driver.back()
    time.sleep(2)
    length -= 1
driver.close()

