import React,{useEffect}  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigations/Stack';
import OneSignal from 'react-native-onesignal';


 const App = () => {
   useEffect(()=>{
     //OneSignal Init Code
     OneSignal.setLogLevel(6, 0);
     OneSignal.setAppId("a65f8dfe-7203-465d-9ac5-8361b0c35b90");
     //END OneSignal Init Code

     //Method for handling notifications opened
     OneSignal.setNotificationOpenedHandler(notification => {
       console.log("OneSignal: notification opened:", notification);
     });

   },[])
    return (
      <NavigationContainer>
           <StackNavigation />
      </NavigationContainer> 
      );
 };
export default App;

