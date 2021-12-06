from unittest import TestCase, main
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
import time



class Crawler(TestCase) :
  def test__init__(self):
    self.Posting_Address = 0
    self.number = 0
    self.Title = 0
  def test_crawler(self):
    driver = webdriver.Chrome("chromedriver")
    driver.get("https://newgh.gnu.ac.kr/anse/na/ntt/selectNttList.do?mi=3041&bbsId=1383") #홈페이지 접속
    select = Select(driver.find_element_by_name("searchType")) # 검색 목록 : 제목
    select.select_by_visible_text('제목')
    elem = driver.find_element_by_name("searchValue") # 검색어 : searchValue
    elem.send_keys("수강신청 일정")
    elem.send_keys(Keys.RETURN) #엔터
    time.sleep(2)
    self.number = driver.find_elements_by_css_selector("td.BD_tm_none")[0].text #게시글 번호
    self.Title = driver.find_elements_by_css_selector(".nttInfoBtn")[0].text #게시글 제목
    driver.find_elements_by_css_selector(".nttInfoBtn")[0].click() #접속
    time.sleep(2)
    self.Posting_Address = driver.current_url #최신 공지사항 주소 저장
    self.assertEqual(self.Posting_Address,'https://newgh.gnu.ac.kr/anse/na/ntt/selectNttInfo.do?mi=3041&bbsId=1383&nttSn=96516')

if __name__ == '__main__':
    main()        