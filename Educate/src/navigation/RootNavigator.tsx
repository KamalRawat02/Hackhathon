/* eslint-disable react/no-unstable-nested-components */
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
import Feather from 'react-native-vector-icons/Feather';
import Profile from '../screens/Profile';
import VideoResources from '../screens/VideoResources';
import BookResources from '../screens/BookResources';
import Comment from '../screens/Comment';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  // const DrawerTab = () => {
  //   return (
  //     <Drawer.Navigator>
  //       <Drawer.Screen name="BottomTabs" component={BottomTabs} />
  //       {/* <Drawer.Screen name="Dashboard" component={Dashboard} /> */}
  //       <Drawer.Screen name="VideoResources" component={VideoResources} />
  //       <Drawer.Screen name="BookResources" component={BookResources} />
  //     </Drawer.Navigator>
  //   );
  // };

  const BottomTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Dashboard">
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: 'Home',
            // tabBarc
            tabBarIcon: ({}) => (
              <Feather name="home" color={'black'} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Doubts"
          component={Doubts}
          options={{
            tabBarLabel: 'Doubts',
            tabBarIcon: ({}) => (
              <Feather name="message-square" color={'black'} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Jobs"
          component={Jobs}
          options={{
            tabBarLabel: 'Jobs',
            // tabBarc
            tabBarIcon: ({}) => (
              <MaterialCommunityIcons name="laptop" color={'black'} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Events"
          component={Events}
          options={{
            tabBarLabel: 'Events',
            tabBarIcon: ({}) => (
              <Feather name="calendar" color={'black'} size={20} />
            ),
          }}
        />
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
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Comment"
        component={Comment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BookResources"
        component={BookResources}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VideoResources"
        component={VideoResources}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
