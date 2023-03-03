/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Auth from '@react-native-firebase/auth';
import {useNavigation, StackActions} from '@react-navigation/native';
import {KeyboardAvoidingView} from 'react-native';
import {Image, ScreenWidth} from '@rneui/base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
const Dashboard = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      enabled={false}>
      <View style={{flex: 0.125, flexDirection: 'row'}}>
        <View style={{flex: 0.15}}>
          <View
            style={{
              width: 45,
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 25,
              marginStart: '15%',
            }}>
            <View
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 50,
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                style={styles.logoStyle}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0.4,
            //backgroundColor: 'blue',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'gray',
              fontSize: 30,
              fontWeight: '600',
              marginStart: '5%',
            }}>
            Hi, Kate
          </Text>
        </View>
        <View
          style={{
            flex: 0.45,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              flex: 0.3,
              // backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Feather name={'bell'} size={27} color={'black'} />
          </View>
          <View
            style={{
              flex: 0.3,
              //backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Octicons name={'three-bars'} size={27} color={'black'} />
          </View>
        </View>
      </View>
      <View style={{flex: 0.25}}>
        <Text style={{color: '#343333', fontSize: 26, fontWeight: '600',marginStart:'5%'}}>
          What's New Today,
        </Text>
        <View
          style={{
  
            flex: 0.9,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 0.9,
              backgroundColor:'#458BE7',
              width: '92%',
              borderRadius: 13,
              flexDirection: 'row',
            }}>
            <View
              style={{
               
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 0.7,
                  backgroundColor:'#458BE7',
                  borderWidth:1,
                  width: '50%',
                  borderColor:'black',
                  borderRadius: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white', fontWeight: '400', fontSize: 45}}>
                  A
                </Text>
              </View>
            </View>
            <View style={{ flex: 0.5,justifyContent:'center',alignItems:'center'}}>
              <Text style={{color: 'white', fontSize: 10}}>Attendance</Text>
              <Text style={{color: 'white', fontSize: 45}}>82%</Text>
              <View style={{height: 30, width: 60,justifyContent:'center',alignItems:'center',backgroundColor:"#454747",borderRadius:10}}>
                <Text style={{color: 'white'}}>Score</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{}}>


      </View>

      <View style={{flex: 0.1, backgroundColor: 'pink'}}>
        <Text> Dashboard </Text>
        <TouchableOpacity
          style={{
            marginVertical: 10,
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
    </KeyboardAvoidingView>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoStyle: {
    width: '95%',
    height: '95%',
    //elevation: 10,
    borderRadius: 50,
  },
});
