import { StatusBar } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View, SafeAreaView} from 'react-native';
import OneSignal from 'react-native-onesignal';

function Separator() {
  return (
    <View style={styles.separator} />
  );
}


const styles = StyleSheet.create({
  container_Setting: {
    flex: 1,
    paddingHorizontal: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    color: "#000000",
  },
});

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

function On_4 ( isEnabled ) {
  if(isEnabled==true){
    OneSignal.sendTag("네이버", "희망");
  }
  else{
    OneSignal.sendTag("네이버", "거부");
  }
}

export const Settings = () => {
  return(
    <><> 
        <SafeAreaView style={styles.container_Setting}>
          <View>
            <Text style={styles.title}>
              수강신청 공지사항 푸시알림
            </Text>
          </View>
          <Twitch_1></Twitch_1>
        </SafeAreaView>
        <Separator/>
        <SafeAreaView style={styles.container_Setting}>
          <View>
            <Text style={styles.title}>
              장학금 공지사항 푸시알림
            </Text>
          </View>
        <Twitch_2></Twitch_2>
        </SafeAreaView>
        <Separator/>
        <SafeAreaView style={styles.container_Setting}>
          <View>
            <Text style={styles.title}>
              기숙사 공지사항 푸시알림
            </Text>
          </View>
          <Twitch_3></Twitch_3>
        </SafeAreaView>
        <Separator/>
        <SafeAreaView style={styles.container_Setting}>
          <View>
            <Text style={styles.title}>
              네이버 공지사항 푸시알림
            </Text>
          </View>
          <Twitch_4></Twitch_4>
        </SafeAreaView>
        </></>  
    );    
}

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
        <Text style={styles.title}> {isEnabled ? "켜짐" : "꺼짐"} </Text>
      </View><StatusBar style="auto" /></>
  );
}


function Twitch_2() {
  const [isEnabled, setIsEnabled] = useState();
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
        <Text style={styles.title}>{isEnabled ? "켜짐" : "꺼짐"} </Text>
      </View><StatusBar style="auto" /></>
  );
}

function Twitch_3() {
  const [isEnabled, setIsEnabled] = useState();
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
        <Text style={styles.title}>{isEnabled ? "켜짐" : "꺼짐"} </Text>
      </View><StatusBar style="auto" /></>
  );
}

function Twitch_4() {
  const [isEnabled, setIsEnabled] = useState();
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <><View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        onValue={On_4(isEnabled)}
        value={isEnabled} />
        <Text style={styles.title}>{isEnabled ? "켜짐" : "꺼짐"} </Text>
      </View><StatusBar style="auto" /></>
  );
}