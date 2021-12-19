import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Settings } from '../screens/Setting';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
     <Tab.Screen
        name="공지사항 리스트"
        component={Home}
        options={{
          tabBarLabel: '공지사항 리스트',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name= "search-web" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="푸시알림 수신"
        component={ Settings }
        options={{
          tabBarLabel: '푸시알림 수신',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name= "bell" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
