import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import Dashboard from '../screens/Dashboard';
import LogInScreen from '../screens/LogInScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
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
