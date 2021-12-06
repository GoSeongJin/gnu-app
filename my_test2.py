from unittest import TestCase, main

import pyrebase

class  Mytest(TestCase):
    def test_db_update(self):
        Homepage_name = "학과공지사항"
        searchValue = "수강신청 일정"
        Title = "[수강신청] 2021. 1학기 수강신청 일정 및 수강신청 자료 공지(2/9~2/16)"
        number = 10
        firebase = pyrebase.initialize_app({
        "apiKey": "AIzaSyAHYW60cI1kChuFx3Z__DeLvKBGyrGLkZg",
        "authDomain": "gnu6-d9c5b.firebaseapp.com",
        "databaseURL": "https://gnu6-d9c5b-default-rtdb.firebaseio.com",
        "storageBucket": "gnu6-d9c5b.appspot.com"
        } )
        db = firebase.database()
        DB_lastest = db.child( Homepage_name + "/" + searchValue ).order_by_key().limit_to_last(1).get()
        for data in DB_lastest.each():
            DB_lastest_url = data.val()['주소'] # 기존 주소 요청
        if('https://www.naver.com/' != DB_lastest_url) : # 신규 주소 비교 
            input_data = {"제목": Title , "주소" : 'https://www.naver.com/'} # DB업데이트자료생성 
            db.child( Homepage_name + "/" + searchValue).child(number).set(input_data) # DB업데이트
        
        self.assertEqual( data.val()['주소'],'https://www.naver.com/')

if __name__ == '__main__':
    main()        