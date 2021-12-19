from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
import time
import DBupdate

def crawler(Homepage_name, Homepage_url ,searchValue):
  driver = webdriver.Chrome('chromedriver')
  driver.get(Homepage_url) #홈페이지 접속
  select = Select(driver.find_element_by_name("searchType"))
  if (searchValue == "수강신청 일정") :
    select.select_by_visible_text('내용')
  else :
    select.select_by_visible_text('제목')
  elem = driver.find_element_by_name("searchValue") # 검색어 : searchValue
  elem.send_keys(searchValue)
  elem.send_keys(Keys.RETURN) #엔터
  time.sleep(2)
  number = driver.find_elements_by_css_selector("td.BD_tm_none")[0].text #게시글 번호
  if (number == "공지"):
    DBupdate.number = int(driver.find_elements_by_css_selector("td.BD_tm_none")[1].text) + 1
  else :
    DBupdate.number = number
  DBupdate.Title = driver.find_elements_by_css_selector(".nttInfoBtn")[0].text #게시글 제목
  driver.find_elements_by_css_selector(".nttInfoBtn")[0].click() #접속
  time.sleep(2)
  DBupdate.Posting_Address = driver.current_url #최신 공지사항 주소 저장
  driver.quit() #크롤링 종료
  DBupdate.db_update(Homepage_name, searchValue)