import Actor
import NoticeExplorer
import TimeStop
import Test

i=True
while (i) :
  #NoticeExplorer.crawler("학과공지사항", Actor.Department_Homepage_url,"수강신청 일정")
  #NoticeExplorer.crawler("학과공지사항", Actor.Department_Homepage_url,"국가장학금")
  #NoticeExplorer.crawler("기숙사공지사항", Actor.Dormitory_Homepage_url,"년도 학생생활관 관생")
  Test.crawler("네이버공지사항", Actor.Test_Homepage_url,"테스트")
  TimeStop.stop()
  i=False