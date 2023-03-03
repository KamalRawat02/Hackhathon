import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import Dashboard from '../screens/Dashboard';
import LogInScreen from '../screens/LogInScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GetStarted from '../screens/GetStarted';
import Doubts from '../screens/Doubts';
import Jobs from '../screens/Jobs';
import Events from '../screens/Events';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const RootNavigator = () => {
  const BottomTabs = () => {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: 'Home',
            // tabBarc
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={'black'} size={20} />
            ),
          }}
        />
        <Tab.Screen name="Doubts" component={Doubts} />
        <Tab.Screen name="Jobs" component={Jobs} />
        <Tab.Screen name="Events" component={Events} />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Getstarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
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
