import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from 'react-native';
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

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        onValue = {On(isEnabled)}
        value={isEnabled}
      />
      <Text>{isEnabled? "On" : "OFF"} </Text>
      <StatusBar style = "auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
