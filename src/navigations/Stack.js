import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tab from './Tab';
import 수강신청공지사항 from '../screens/수강신청공지사항';
import 기숙사공지사항 from '../screens/기숙사공지사항';
import 장학금공지사항 from '../screens/장학금공지사항';
import 네이버공지사항 from '../screens/네이버공지사항';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{
        headerStyle: {
          height: 110,
          backgroundColor: '#95a5a6',
          borderBottomWidth: 5,
          borderBottomColor: '#34495e',
        },
        headerTitleStyle: { color: '#ffffff', fontSize: 24 },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Home"
        component={Tab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="수강신청공지사항"
        component={수강신청공지사항}
        options={{
          headerTitle: '수강신청공지사항리스트',
          headerBackTitleVisible: true,
          headerBackTitle: '이전',
          headerTitleStyle: { fontSize: 22 },
          headerTintColor: '#000000',
        }}
      />
      <Stack.Screen
        name="장학금공지사항"
        component={장학금공지사항}
        options={{
          headerTitle: '장학금공지사항리스트',
          headerBackTitleVisible: true,
          headerBackTitle: '이전',
          headerTitleStyle: { fontSize: 22 },
          headerTintColor: '#000000',
        }}
      />
		  <Stack.Screen
        name="기숙사공지사항"
        component={기숙사공지사항}
        options={{
          headerTitle: '기숙사공지사항리스트',
          headerBackTitleVisible: true,
          headerBackTitle: '이전',
          headerTitleStyle: { fontSize: 22 },
          headerTintColor: '#000000',
        }}
      />
      <Stack.Screen
        name="네이버공지사항"
        component={네이버공지사항}
        options={{
          headerTitle: '네이버공지사항리스트',
          headerBackTitleVisible: true,
          headerBackTitle: '이전',
          headerTitleStyle: { fontSize: 22 },
          headerTintColor: '#000000',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;