import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Settings } from '../screens/Setting';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
     <Tab.Screen
        name="공지사항 목록"
        component={Home}
        options={{
          tabBarLabel: '공지사항 목록',
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'text-box-search' : 'text-box-search-outline',
            }),
        }}
      />
      <Tab.Screen
        name="푸시알림 수신"
        component={ Settings }
        options={{
          tabBarLabel: '알림 수신 설정',
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'account-cog' : 'account-cog-outline',
            }),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;