import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          headerTitle: '푸시알림 설정',
          headerBackTitleVisible: true,
          headerBackTitle: 'Prev',
          headerTitleStyle: { fontSize: 24 },
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