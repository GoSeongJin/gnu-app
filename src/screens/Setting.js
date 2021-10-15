import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet,  Switch, Text, View,SafeAreaView,ImageBackground } from 'react-native';
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyBYAwCmt_0r_ezQqsw-wYr07Lkzx0jZSmM",
  authDomain: "push-da883.firebaseapp.com",
  databaseURL: "https://push-da883-default-rtdb.firebaseio.com",
  projectId: "push-da883",
  storageBucket: "push-da883.appspot.com",
  messagingSenderId: "815988509488",
  appId: "1:815988509488:web:83e6b30d55f61bce3a56f5"
};


const app = initializeApp(firebaseConfig);

function On ( isEnabled ) {
  if(isEnabled==true){
    const db = getDatabase();
    const reference = ref(db, 'users/');
    set(ref(db, 'users/'), {
      푸시알림설정 : isEnabled,
    });
  }
  else{
    const db = getDatabase();
    const reference = ref(db, 'users/');
    set(ref(db, 'users/'), {
     푸시알림설정 : isEnabled,
    });
  }
}
function Separator() {
  return (
    <View style={styles.separator} />
  );
}

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const image = { uri: "https://reactjs.org/logo-og.png" };  
    return(
    <><> 
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.title}>
              수강신청 날짜 푸시알림
            </Text>
          </View>
          <Twitch></Twitch>
        </SafeAreaView>
        <Separator/>
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.title}>
              장학금 정보 푸시알림
            </Text>
          </View>
        <Twitch></Twitch>
        </SafeAreaView>
        <Separator/>
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.title}>
              기숙사 정보 푸시알림
            </Text>
          </View>
          <Twitch></Twitch>
          
        </SafeAreaView>
        <Separator/></><View>
          </View></>  
    );    
}

const styles = StyleSheet.create({
  titlecontainer: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    height : 3,
    paddingHorizontal: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    
  },
  title : {
    textAlign: 'center',
    marginVertical: 20,
  },
   separator: {
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },   
  }

);


const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  
  },
}
);
function Twitch() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <><View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        onValue={On(isEnabled)}
        value={isEnabled} />
    </View>
    <View>
        <Text>{isEnabled ? "켜짐" : "꺼짐"} </Text>
      </View><StatusBar style="auto" /></>
      //rf//
  );
}
