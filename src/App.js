import React,{useEffect}  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OneSignal from 'react-native-onesignal';
import { initializeApp } from "firebase/app";
import StackNavigation from './navigations/Stack';

 const App = () => {
   useEffect(()=>{
     OneSignal.setLogLevel(6, 0);
     OneSignal.setAppId("11d78e2a-f43d-49f4-ae46-c11fbac37252");
     OneSignal.setNotificationOpenedHandler(notification => {
       console.log("OneSignal: notification opened:", notification);
     });
     const firebaseConfig = {
      apiKey: "AIzaSyAHYW60cI1kChuFx3Z__DeLvKBGyrGLkZg",
      authDomain: "gnu6-d9c5b.firebaseapp.com",
      databaseURL: "https://gnu6-d9c5b-default-rtdb.firebaseio.com",
      projectId: "gnu6-d9c5b",
      storageBucket: "gnu6-d9c5b.appspot.com",
      messagingSenderId: "869224764382",
      appId: "1:869224764382:web:7fbf1ea1dcf195b921034f"
    };
    const app = initializeApp(firebaseConfig);
   },[])
    return (
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer> 
      );
 };
export default App;
