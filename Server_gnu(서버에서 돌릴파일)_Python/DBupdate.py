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

driver = webdriver.Chrome("C:\GO\selenium\chromedriver")
department_url = "https://newgh.gnu.ac.kr/anse/na/ntt/selectNttList.do?mi=3041&bbsId=1383" #학과공지사항 주소
Dormitory_url = "https://newgh.gnu.ac.kr/dorm/na/ntt/selectNttList.do?mi=7285&bbsId=2489" #기숙사공지사항 주소

class Crawler :

  def __init__(self):
    self.Posting_Address = 0
    
  def crawler(self, Homepage_name, Homepage_url ,searchValue):
    driver.get(Homepage_url) #학과공지사항 또는 기숙사 공지사항 접속
    select = Select(driver.find_element_by_name("searchType")) # 검색 목록 : 제목
    select.select_by_visible_text('제목')
    elem = driver.find_element_by_name("searchValue") # 검색어 : searchValue
    elem.send_keys(searchValue)
    elem.send_keys(Keys.RETURN) # 엔터
    time.sleep(2)
    number = driver.find_elements_by_css_selector("td.BD_tm_none")[0].text #게시글 번호
    Title = driver.find_elements_by_css_selector(".nttInfoBtn")[0].text #게시글 제목
    driver.find_elements_by_css_selector(".nttInfoBtn")[0].click() #접속
    time.sleep(2)
    self.Posting_Address = driver.current_url #현재 게시글 주소
    db = firebase.database()
    DB_lastest = db.child( Homepage_name + "/" + searchValue ).order_by_key().limit_to_last(1).get()

    for data in DB_lastest.each():
        DB_lastest_url = data.val()['주소'] #DB 게시글 주소

    if(self.Posting_Address != DB_lastest_url) :
      input_data = {"제목": Title , "주소" : self.Posting_Address}
      db.child( Homepage_name + "/" + searchValue).child(number).set(input_data)
      driver.back() #뒤로가기
      time.sleep(2)
      print("업데이트가 되었습니다")
    return 0
cal1 = Crawler()
cal1.crawler("학과공지사항", department_url, "수강신청")
cal1.crawler("학과공지사항", department_url, "장학금")
cal1.crawler("기숙사공지사항", Dormitory_url, "입실")

driver.close()


