import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";

import { StyleSheet, Switch, Text, View, SafeAreaView} from 'react-native';
import OneSignal from 'react-native-onesignal';

function On_1 ( isEnabled ) {
  if(isEnabled==true){
    OneSignal.sendTag("수강신청", "희망");
  }
  else{
    OneSignal.sendTag("수강신청", "거부");
  }
}

function On_2 ( isEnabled ) {
  if(isEnabled==true){
    OneSignal.sendTag("국가장학금", "희망");
  }
  else{
    OneSignal.sendTag("국가장학금", "거부");
  }
}

function On_3 ( isEnabled ) {

  if(isEnabled==true){
    OneSignal.sendTag("기숙사", "희망");
  }
  else{
    OneSignal.sendTag("기숙사", "거부");
  }
}
function Separator() {
  return (
    <View style={styles.separator} />
  );
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

              수강신청 공지사항 푸시알림
            </Text>
          </View>
          <Twitch_1></Twitch_1>

        </SafeAreaView>
        <Separator/>
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.title}>

              장학금 공지사항 푸시알림
            </Text>
          </View>
        <Twitch_2></Twitch_2>

        </SafeAreaView>
        <Separator/>
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.title}>

              기숙사 공지사항 푸시알림
            </Text>
          </View>
          <Twitch_3></Twitch_3>

          
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

function Twitch_1() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <><View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}

        onValue={On_1(isEnabled)}
    
        value={isEnabled} />
    </View>
    <View>
        <Text>{isEnabled ? "켜짐" : "꺼짐"} </Text>
      </View><StatusBar style="auto" /></>
      //rf//
  );
}


function Twitch_2() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <><View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        onValue={On_2(isEnabled)}
        value={isEnabled} />
    </View>
    <View>
        <Text>{isEnabled ? "켜짐" : "꺼짐"} </Text>
      </View><StatusBar style="auto" /></>
      //rf//
  );
}

function Twitch_3() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <><View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        onValue={On_3(isEnabled)}
        value={isEnabled} />
    </View>
    <View>
        <Text>{isEnabled ? "켜짐" : "꺼짐"} </Text>
      </View><StatusBar style="auto" /></>
      //rf//
  );
}

