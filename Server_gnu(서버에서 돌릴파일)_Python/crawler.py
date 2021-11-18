from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
import time

driver = webdriver.Chrome("C:\GO\selenium\chromedriver")

# 웹크롤링시작(학과 공지사항_수강신청)
department_url = "https://newgh.gnu.ac.kr/anse/na/ntt/selectNttList.do?mi=3041&bbsId=1383"
driver.get(department_url)
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
    url_S = driver.current_url

    print (number)
    print (Title)
    print (url_S)
    length -= 1
    print (length)
    driver.back()
    time.sleep(2)

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
    url_J = driver.current_url

    print (number)
    print (Title)
    print (url_J)
    length -= 1
    print (length)
    driver.back()
    time.sleep(2)

# 웹크롤링시작(기숙사 공지사항_입실)
Dormitory_url = "https://newgh.gnu.ac.kr/dorm/na/ntt/selectNttList.do?mi=7285&bbsId=2489"
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
    url_G = driver.current_url

    print (number)
    print (Title)
    print (url_G)
    length -= 1
    print (length)
    driver.back()
    time.sleep(2)
driver.close()

