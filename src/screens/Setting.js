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

function On ( isEnabled, tag ) {
  if(isEnabled==true){
    OneSignal.sendTag(tag, "희망");
  }
  else{
    OneSignal.sendTag(tag, "거부");
  }
}

function Twitch_1() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <><View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        onValue={On(isEnabled,"수강신청")}
        value={isEnabled} />
        <Text style={styles.title}> {isEnabled ? "켜짐" : "꺼짐"} </Text>
      </View><StatusBar style="auto" /></>
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
        onValueChange={toggleSwitch}
        onValue={On(isEnabled,"국가장학금")}
        value={isEnabled} />
        <Text style={styles.title}>{isEnabled ? "켜짐" : "꺼짐"} </Text>
      </View><StatusBar style="auto" /></>
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
        onValueChange={toggleSwitch}
        onValue={On(isEnabled,"기숙사")}
        value={isEnabled} />
        <Text style={styles.title}>{isEnabled ? "켜짐" : "꺼짐"} </Text>
      </View><StatusBar style="auto" /></>
  );
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
        </></>  
    );    
}
