from selenium import webdriver
import time
import DBupdate

def crawler(Homepage_name, Homepage_url ,searchValue):
  driver = webdriver.Chrome("./chromedriver")
  driver.get(Homepage_url)
  time.sleep(2)
  driver.switch_to.frame("cafe_main")
  time.sleep(2)
  DBupdate.number = driver.find_elements_by_css_selector("div.inner_number")[0].text
  DBupdate.Title = driver.find_elements_by_css_selector("a.article")[0].text 
  DBupdate.Posting_Address = driver.find_elements_by_css_selector("a.article")[0].get_attribute('href')
  driver.quit() #크롤링 종료
  DBupdate.db_update(Homepage_name, searchValue)
  
