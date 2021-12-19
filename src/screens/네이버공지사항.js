import { StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import {SafeAreaView, FlatList, Button, View, Linking } from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';

export default function App() {
  
  const [data, setData] = useState('');

  const renderItem = ({item}) => {
    return(
      <View style={{padding:15, borderBottomColor:'#aaa', borderBottomWidth: 3}}>
        <Button title = {item.제목} onPress={()=> Linking.openURL(item.주소)}/>
      </View>
    )
  }
  
  useEffect(()=>{
    const db = getDatabase();
    const reference = ref(db, '네이버공지사항/테스트/');
    onValue(reference, (snapshot) => {
      const tmp = []; 
      snapshot.forEach((child)=>{
        tmp.unshift({ 
          번호 : child.key, 
          제목 : child.val().제목, 
          주소 : child.val().주소, 
        });
      });
      console.log(tmp);
      setData(tmp);
    });  
  },[])

  return (
    <View  style={{backgroundColor:'#fc0', flex:1, }}>
      <StatusBar style="auto" />
      <SafeAreaView style={{flex:1, }}> 
        <View style={{backgroundColor:'#fff', flex:1, }}>
          <View>
             <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.제목}  style={{ padding:15, }}/> 
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}