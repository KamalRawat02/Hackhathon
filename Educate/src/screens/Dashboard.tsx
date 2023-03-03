/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import Auth from '@react-native-firebase/auth';
import {useNavigation, StackActions} from '@react-navigation/native';
import {KeyboardAvoidingView} from 'react-native';
import {Image, ScreenWidth} from '@rneui/base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Task from '../components/Task';
const Dashboard = ({navigation}) => {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask('');
    console.log(taskItems);
  };
  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
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
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image
                  source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                  style={styles.logoStyle}
                />
              </TouchableOpacity>
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
        <Text
          style={{
            color: '#343333',
            fontSize: 26,
            fontWeight: '600',
            marginStart: '5%',
          }}>
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
              backgroundColor: '#458BE7',
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
                  backgroundColor: '#458BE7',
                  borderWidth: 1,
                  width: '50%',
                  borderColor: 'black',
                  borderRadius: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white', fontWeight: '400', fontSize: 45}}>
                  A
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 10}}>Attendance</Text>
              <Text style={{color: 'white', fontSize: 45}}>82%</Text>
              <View
                style={{
                  height: 30,
                  width: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#454747',
                  borderRadius: 10,
                }}>
                <Text style={{color: 'white'}}>Score</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 0.55}}>
        <View style={{flex: 0.15}}>
          <Text
            style={{
              color: '#343333',
              fontSize: 20,
              fontWeight: '500',
              marginStart: '5%',
            }}>
            Things to do,
          </Text>
          <Text style={{color: '#343333', fontSize: 13, marginStart: '5%'}}>
            update yourself for better
          </Text>
        </View>
        <View style={{flex: 0.85}}>
          <ScrollView>
            <View style={styles.Item}>
              {taskItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => completeTask(index)}>
                    <Task text={item} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>

      <View style={{flex: 0.075, flexDirection: 'row'}}>
        <View
          style={{
            // backgroundColor: 'yellow',
            flex: 0.7,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              height: '80%',
              width: '95%',
              backgroundColor: '#a4bbda',
              borderRadius: 10,
            }}
            value={task}
            onChangeText={text => setTask(text)}
            placeholder="Write Task"
          />
        </View>
        <View
          style={{flex: 0.3, justifyContent: 'center', alignContent: 'center'}}>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View
              style={{
                height: '87%',
                width: '95%',
                borderRadius: 10,
                backgroundColor: '#4E5254',
                marginTop: '2%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: '500'}}>
                Add Task
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* <View style={{flex: 0.1, backgroundColor: 'pink'}}>
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
      </View> */}
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
  Item: {
    marginHorizontal: '5%',
  },
});
