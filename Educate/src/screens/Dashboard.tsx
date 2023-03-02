import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Auth from '@react-native-firebase/auth';
import {useNavigation, StackActions} from '@react-navigation/native';
const Dashboard = ({navigation}) => {
  return (
    <View>
      <Text> Dashboard </Text>
      <TouchableOpacity
        style={{
          marginVertical: 20,
          width: '80%',
          backgroundColor: 'red',
          alignItems: 'center',
          padding: 10,
          borderRadius: 20,
        }}
        onPress={async () => {
          await Auth().signOut();
          navigation.dispatch(StackActions.replace('SignUpScreen'));
          // navigation.navigate('Login');
        }}>
        <Text style={{color: '#fff'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
