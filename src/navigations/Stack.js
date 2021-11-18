import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tab from './Tab';
import 수강신청공지사항 from '../screens/수강신청공지사항';
import 기숙사공지사항 from '../screens/기숙사공지사항';
import 장학금공지사항 from '../screens/장학금공지사항';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{
        cardStyle: { backgroundColor: '#ffffff' },
        headerStyle: {
          height: 110,
          backgroundColor: '#95a5a6',
          borderBottomWidth: 5,
          borderBottomColor: '#34495e',
        },
        headerTitleStyle: { color: '#ffffff', fontSize: 24 },
        headerTitleAlign: 'center',
        headerTitle: ({ style }) => (
          <MaterialCommunityIcons name="react" style={style} />
        ),
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
          headerBackImage: ({ tintColor }) => {
            const style = {
              marginRight: 5,
              marginLeft: Platform.OS === 'ios' ? 11 : 0,
            };
            return (
              <MaterialCommunityIcons
                name="keyboard-backspace"
                size={30}
                color={tintColor}
                style={style}
              />
            );
          },
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
          headerBackImage: ({ tintColor }) => {
            const style = {
              marginRight: 5,
              marginLeft: Platform.OS === 'ios' ? 11 : 0,
            };
            return (
              <MaterialCommunityIcons
                name="keyboard-backspace"
                size={30}
                color={tintColor}
                style={style}
              />
            );
          },
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
          headerBackImage: ({ tintColor }) => {
            const style = {
              marginRight: 5,
              marginLeft: Platform.OS === 'ios' ? 11 : 0,
            };
            return (
              <MaterialCommunityIcons
                name="keyboard-backspace"
                size={30}
                color={tintColor}
                style={style}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;