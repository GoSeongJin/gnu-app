import React,{useEffect}  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OneSignal from 'react-native-onesignal';
import { initializeApp } from "firebase/app";
// import TabNavigation from './navigations/Tab';
import StackNavigation from './navigations/Stack';

 const App = () => {
   useEffect(()=>{
     OneSignal.setLogLevel(6, 0);
     OneSignal.setAppId("a65f8dfe-7203-465d-9ac5-8361b0c35b90");
     OneSignal.setNotificationOpenedHandler(notification => {
       console.log("OneSignal: notification opened:", notification);
     });
     const firebaseConfig = {
      apiKey: "AIzaSyB0FQtNGUseSlHoFX5PZ4a91tRSXTyZp7w",
      authDomain: "test-f972d.firebaseapp.com",
      databaseURL: "https://test-f972d-default-rtdb.firebaseio.com",
      projectId: "test-f972d",
      storageBucket: "test-f972d.appspot.com",
      messagingSenderId: "478142633493",
      appId: "1:478142633493:web:3e3fcb9e7ca703b0ade01c"
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