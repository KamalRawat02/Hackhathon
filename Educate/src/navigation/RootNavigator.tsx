import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import Dashboard from '../screens/Dashboard';
import LogInScreen from '../screens/LogInScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  const BottomTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name='Dashboard' component={Dashboard} />
        {/* <Tab.Screen name='Doubts' component={Doubts} />
        <Tab.Screen name='Jobs' component={Jobs} />
        <Tab.Screen name='Events' component={Events} /> */}
      </Tab.Navigator>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LogInScreen"
        component={LogInScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
